import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { prefersReducedMotion } from "@/hooks/useMotion";

/* ============================================================
   EmployeeJourney — the seven-stage system line.

   A compact rail (sticky on md+) over the seven exits. There is NO autoplay
   and NO decorative sequence: a single `active` index, derived purely from the
   reading position just below the sticky header + rail, is the one source of
   truth for the active/completed/upcoming nodes, the orange progress width and
   the breadcrumb. It is computed on mount (so a refresh mid-page is correct),
   after fonts settle, and on scroll/resize (rAF-throttled). Clicking a node
   smooth-scrolls to its section; the same scroll-derived state then keeps the
   node and breadcrumb in sync. Reduced motion keeps every state, drops motion.
   ============================================================ */

export type JourneyStage = { n: string; name: string };

/** Fixed header height; the sticky rail sits directly beneath it on md+. */
const HEADER_H = 88;

export default function EmployeeJourney({
  stages,
}: {
  stages: JourneyStage[];
}) {
  const count = stages.length;
  const [active, setActive] = useState(0);

  const barRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const reduce =
    typeof window !== "undefined" ? prefersReducedMotion() : false;

  // --- Single source of truth: active exit derived from the reading position ---
  useEffect(() => {
    const sectionFor = (i: number) =>
      document.getElementById(`exit-${stages[i]?.n}`);

    let raf = 0;
    const compute = () => {
      raf = 0;
      // Reading line sits just below the sticky header + rail. When the rail is
      // pinned its bottom is ~header+railHeight; when it is not yet pinned (or
      // has scrolled away) fall back to the header height.
      const rect = barRef.current?.getBoundingClientRect();
      const navBottom = rect ? rect.bottom : HEADER_H;
      // Reading line sits a little below the rail — enough that a section counts
      // as active the moment its heading tucks under the rail, rather than only
      // once its top has scrolled well past it (which left the previous exit
      // marked active while the next one filled the screen).
      const readingY = Math.max(navBottom, HEADER_H) + 96;

      let idx = 0;
      for (let i = 0; i < count; i++) {
        const el = sectionFor(i);
        if (el && el.getBoundingClientRect().top <= readingY) idx = i;
      }
      setActive((prev) => (prev === idx ? prev : idx));
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };

    compute(); // on mount — correct after a mid-page refresh
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    // Recompute once layout/fonts have settled (heights can shift the reading line).
    const settle = window.setTimeout(compute, 350);
    let cancelled = false;
    if (typeof document !== "undefined" && document.fonts?.ready) {
      document.fonts.ready.then(() => {
        if (!cancelled) compute();
      });
    }

    return () => {
      cancelled = true;
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.clearTimeout(settle);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [stages, count]);

  // Keep the active node scrolled into view within the horizontal track
  // (mobile), without moving the page itself.
  useEffect(() => {
    const track = trackRef.current;
    const btn = btnRefs.current[active];
    if (!track || !btn) return;
    if (track.scrollWidth > track.clientWidth + 4) {
      const target = btn.offsetLeft - track.clientWidth / 2 + btn.clientWidth / 2;
      track.scrollTo({
        left: Math.max(0, target),
        behavior: reduce ? "auto" : "smooth",
      });
    }
  }, [active, reduce]);

  // Click: scroll to the section; scroll-margin-top clears the header + rail,
  // and the scroll-derived state above keeps `active` in sync afterwards.
  const goTo = (i: number) => {
    setActive(i);
    const el = document.getElementById(`exit-${stages[i]?.n}`);
    el?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  };

  // One continuous base track (node-1 centre → node-7 centre). The orange
  // overlay's right edge lands exactly on the active node's centre:
  // progress along the track = activeIndex / (count - 1) → 0 / 16.6 / … / 100%.
  const railInsetPct = count > 1 ? 50 / count : 0;
  const progressPct = count > 1 ? (active / count) * 100 : 0;

  return (
    <div className="md:sticky md:top-[88px] z-40">
      <div
        ref={barRef}
        className="border-y border-[hsl(var(--ink)/0.08)] bg-[hsl(var(--surface)/0.82)] backdrop-blur-md shadow-[0_12px_32px_-28px_hsl(var(--ink)/0.35)]"
      >
        <div className="shell py-4 md:py-5">
          <div
            ref={trackRef}
            className="relative overflow-x-auto overflow-y-hidden [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {/* Base + progress line, aligned to the badge centres (top: 22px) */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[22px] -translate-y-1/2 h-0.5 bg-rule"
              style={{ left: `${railInsetPct}%`, right: `${railInsetPct}%` }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute top-[22px] -translate-y-1/2 h-0.5 bg-coral"
              style={{
                left: `${railInsetPct}%`,
                width: `${progressPct}%`,
                transition: reduce
                  ? "none"
                  : "width 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
              }}
            />

            {/* Stages */}
            <ol className="relative flex min-w-max md:min-w-0">
              {stages.map((s, i) => {
                const state =
                  i < active ? "done" : i === active ? "active" : "upcoming";
                const short = s.name.replace(/^The\s+/, "");
                return (
                  <li
                    key={s.n}
                    className="flex-1 flex justify-center min-w-[72px] md:min-w-0"
                  >
                    <button
                      ref={(el) => {
                        btnRefs.current[i] = el;
                      }}
                      type="button"
                      onClick={() => goTo(i)}
                      aria-label={`Go to Exit ${s.n} — ${s.name}`}
                      aria-current={state === "active" ? "step" : undefined}
                      className="group/stage flex flex-col items-center gap-2.5 px-2 min-h-[44px]"
                    >
                      <span
                        className={[
                          "flex items-center justify-center h-11 w-11 rounded-full border transition-all duration-300 figure text-[0.8125rem]",
                          state === "active"
                            ? "node-active-ring border-coral text-coral-ink bg-paper scale-[1.04] shadow-[0_0_0_4px_hsl(var(--coral)/0.16)]"
                            : state === "done"
                            ? "border-coral bg-coral text-white"
                            : "border-rule text-stone-mid bg-paper",
                        ].join(" ")}
                      >
                        {state === "done" ? (
                          <Check className="w-4 h-4" strokeWidth={2.5} aria-hidden="true" />
                        ) : (
                          s.n
                        )}
                      </span>
                      <span
                        className={[
                          "label text-[0.5625rem] md:text-[0.625rem] text-center leading-tight whitespace-normal transition-colors duration-300",
                          state === "upcoming" ? "text-stone-mid" : "text-ink",
                        ].join(" ")}
                      >
                        {short}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          {/* Breadcrumb — same `active` source, so it can never disagree with
              the nodes. */}
          <p className="label text-stone-mid mt-4 text-center md:text-left">
            <span className="text-coral-ink">Exit {stages[active]?.n}</span>
            <span className="mx-2 text-stone-soft" aria-hidden="true">
              ·
            </span>
            {stages[active]?.name}
          </p>
        </div>
      </div>
    </div>
  );
}
