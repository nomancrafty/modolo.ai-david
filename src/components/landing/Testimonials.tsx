import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from "react";
import { useReveal, prefersReducedMotion } from "@/hooks/useMotion";

/* ============================================================
   Testimonials — a 2-up (1-up on mobile) carousel of practice results.

   Four testimonials, four positions. Desktop shows two cards and advances one
   at a time — James+Sarah → Sarah+Michael → Michael+Emily → Emily+James — then
   wraps continuously. Mobile shows one card. Four indicators track position;
   autoplay pauses on hover/focus and is off under reduced motion. Card heights
   are equalised (the track is a single stretched flex row) so the carousel
   height never shifts, and each metric table is aligned to the card's bottom.
   All content is the client's, verbatim. Avatars are initials placeholders
   until real assets are supplied.
   ============================================================ */

type Metric = { label: string; before: string; after: string };
type Testimonial = {
  name: string;
  practice: string;
  quote: string;
  initials: string;
  metrics: Metric[];
};

const TESTIMONIALS: Testimonial[] = [
  {
    name: "Dr. James R.",
    practice: "Smile Dental Clinic - Implant & Cosmetic Dentistry",
    initials: "JR",
    quote:
      "We were spending $2,000 a month on ads and barely booking 15 patients from it. After switching to this system, we're now booking 32 patients from the same budget. The response speed alone changed everything.",
    metrics: [
      { label: "Booked Patients", before: "15", after: "32" },
      { label: "Cost Per Patient", before: "$220", after: "$170" },
      { label: "Response Time", before: "4–6 hrs", after: "<1 min" },
    ],
  },
  {
    name: "Dr. Sarah K.",
    practice: "BrightSmile Family Dentistry - General & Pediatric",
    initials: "SK",
    quote:
      "We tried two different agencies before this. They all gave us leads, but nobody was actually converting them. This system followed up automatically, booked patients into our calendar, and reduced our no-shows.",
    metrics: [
      { label: "Booking Rate", before: "18%", after: "42%" },
      { label: "No-Show Rate", before: "28%", after: "11%" },
      { label: "Cost Per Patient", before: "$250", after: "$125" },
    ],
  },
  {
    name: "Dr. Michael T.",
    practice: "Pearl Dental Studio - Orthodontics & Cosmetic",
    initials: "MT",
    quote:
      "I was skeptical about AI handling patient conversations. I thought it would sound robotic. I was completely wrong. Patients respond naturally, and leads I would've written off are now sitting in my chair.",
    metrics: [
      { label: "Booking Rate", before: "19%", after: "38%" },
      { label: "Dead Leads Recovered", before: "0", after: "11/mo" },
      { label: "Cost Per Patient", before: "$190", after: "$150" },
    ],
  },
  {
    name: "Dr. Emily H.",
    practice: "CareFirst Dental - Multi-Location General Dentistry",
    initials: "EH",
    quote:
      "The biggest surprise was what happened after hours. More than half our bookings now come from leads that inquired between 7 PM and 8 AM. Before this system, every single one of those would've been lost.",
    metrics: [
      { label: "After-Hours Converted", before: "0%", after: "55%" },
      { label: "Staff Follow-Up Time", before: "3 hrs/day", after: "25 min" },
    ],
  },
];

const N = TESTIMONIALS.length; // 4
// Track = the four cards plus clones of the first two, so a 2-up view can slide
// one step past the end and reset seamlessly.
const TRACK = [0, 1, 2, 3, 0, 1];
const TRANSITION_MS = 500;
const AUTOPLAY_MS = 6500;

function Card({ t }: { t: Testimonial }) {
  return (
    <article className="panel h-full flex flex-col p-[clamp(1.5rem,3vw,2.25rem)]">
      <div className="flex-1">
        <div className="flex items-center gap-4">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--coral)/0.1)] text-coral-ink figure text-[0.9375rem]"
          >
            {t.initials}
          </span>
          <div className="min-w-0">
            <p className="display-sm !text-[1.0625rem] text-ink leading-tight">
              {t.name}
            </p>
            <p className="text-[0.8125rem] text-stone-mid leading-snug mt-0.5">
              {t.practice}
            </p>
          </div>
        </div>

        <blockquote className="voice text-ink text-[clamp(1.125rem,1.6vw,1.375rem)] mt-6">
          <span aria-hidden="true" className="text-stone-mid">
            &ldquo;
          </span>
          {t.quote}
          <span aria-hidden="true" className="text-stone-mid">
            &rdquo;
          </span>
        </blockquote>
      </div>

      {/* Before / After — After column stronger, table aligned to the bottom */}
      <table className="w-full mt-7 border-t border-[hsl(var(--ink)/0.1)] text-left">
        <thead>
          <tr className="label text-stone-mid">
            <th scope="col" className="font-normal pt-4 pb-1">
              Metric
            </th>
            <th scope="col" className="font-normal pt-4 pb-1 text-right">
              Before
            </th>
            <th scope="col" className="font-normal pt-4 pb-1 text-right text-coral-ink">
              After
            </th>
          </tr>
        </thead>
        <tbody>
          {t.metrics.map((m) => (
            <tr key={m.label} className="border-t border-[hsl(var(--ink)/0.06)]">
              <th
                scope="row"
                className="py-2.5 pr-3 text-[0.8125rem] md:text-[0.875rem] font-normal text-ink"
              >
                {m.label}
              </th>
              <td className="py-2.5 text-right figure text-[0.8125rem] md:text-[0.875rem] text-stone-mid">
                {m.before}
              </td>
              <td className="py-2.5 pl-3 text-right figure text-[0.875rem] md:text-[0.9375rem] font-medium text-coral-ink">
                {m.after}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </article>
  );
}

const Testimonials = () => {
  const head = useReveal<HTMLDivElement>({ threshold: 0.2, stagger: 70 });
  const reduce =
    typeof window !== "undefined" ? prefersReducedMotion() : false;

  const [perView, setPerView] = useState(2);
  const [pos, setPos] = useState(0); // 0..4 (4 = transient clone, resets to 0)
  const [noAnim, setNoAnim] = useState(false);
  const paused = useRef(false);

  // Responsive: 2-up on md+, 1-up below.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const apply = () => setPerView(mq.matches ? 2 : 1);
    apply();
    mq.addEventListener("change", apply);
    return () => mq.removeEventListener("change", apply);
  }, []);

  const active = pos % N; // 0..3 — drives the indicators

  // Autoplay (motion only), paused on hover/focus.
  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      if (!paused.current) setPos((p) => p + 1);
    }, AUTOPLAY_MS);
    return () => window.clearInterval(id);
  }, [reduce]);

  // After sliding onto the clone (pos === N), snap back to 0 with no transition.
  useEffect(() => {
    if (pos !== N) return;
    const t = window.setTimeout(() => {
      setNoAnim(true);
      setPos(0);
    }, TRANSITION_MS + 20);
    return () => window.clearTimeout(t);
  }, [pos]);

  useEffect(() => {
    if (!noAnim) return;
    const id = requestAnimationFrame(() =>
      requestAnimationFrame(() => setNoAnim(false))
    );
    return () => cancelAnimationFrame(id);
  }, [noAnim]);

  const goTo = useCallback((i: number) => setPos(i), []); // indicator jump (0..3)

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      setPos((active + 1) % N);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      setPos((active + N - 1) % N);
    }
  };

  const pausePlay = () => {
    paused.current = true;
  };
  const resumePlay = () => {
    paused.current = false;
  };

  return (
    <section id="testimonials" className="relative bg-paper py-[var(--chapter-y)]">
      {/* One faint ambient wash, fading into the shared ground. */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
        <span
          className="glow glow-a"
          style={{
            width: "min(46vw, 560px)",
            height: "min(30vw, 380px)",
            top: "4%",
            right: "-6%",
            background: "radial-gradient(circle, hsl(var(--peach) / 0.34), transparent 72%)",
          }}
        />
      </div>

      <div className="relative shell">
        <div ref={head} className="mb-[clamp(2.5rem,6vw,4rem)] max-w-3xl">
          <p className="rv eyebrow label text-stone-mid mb-8">Real Results</p>
          <h2 className="rv-wipe display-lg text-ink">Hear From Practices Like Yours</h2>
          <p className="rv prose-body mt-6">
            Real business outcomes from faster response, better follow-up, and
            fewer missed opportunities.
          </p>
        </div>

        {/* Carousel */}
        <div
          className="rv"
          role="region"
          aria-roledescription="carousel"
          aria-label="Practice testimonials"
          onMouseEnter={pausePlay}
          onMouseLeave={resumePlay}
          onFocusCapture={pausePlay}
          onBlurCapture={resumePlay}
          onKeyDown={onKeyDown}
        >
          <div className="overflow-hidden">
            <div
              className="flex items-stretch"
              style={{
                width: `${(TRACK.length / perView) * 100}%`,
                transform: `translateX(-${(pos / TRACK.length) * 100}%)`,
                transition:
                  noAnim || reduce
                    ? "none"
                    : `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`,
              }}
            >
              {TRACK.map((ti, k) => (
                <div
                  key={k}
                  className="shrink-0 px-3 first:pl-0 last:pr-0"
                  style={{ width: `${100 / TRACK.length}%` }}
                  aria-hidden={k < pos || k >= pos + perView ? true : undefined}
                >
                  <Card t={TESTIMONIALS[ti]} />
                </div>
              ))}
            </div>
          </div>

          {/* Indicators */}
          <div className="mt-10 flex items-center justify-center gap-2.5">
            {TESTIMONIALS.map((_, i) => {
              const isActive = i === active;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={
                    perView === 2
                      ? `Show testimonials ${i + 1} and ${((i + 1) % N) + 1}`
                      : `Show testimonial ${i + 1} of ${N}`
                  }
                  aria-current={isActive ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? "w-6 bg-ink"
                      : "w-2 bg-[hsl(var(--ink)/0.22)] hover:bg-[hsl(var(--ink)/0.4)]"
                  }`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
