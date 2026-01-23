import { Megaphone, Bot, CalendarCheck, TrendingUp, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    icon: Megaphone,
    title: "AI-Optimized Advertising",
    subtitle: "Top Funnel",
    description: "We run Meta (Facebook & Instagram) ads with interactive questionnaires and quizzes to pre-qualify leads.",
    bullets: [
      "Automatically qualify / disqualify prospects",
      "Filter out low-intent traffic",
      "Collect key intent data before contact",
    ],
    metrics: [
      { value: "3.1×", label: "higher click-through rate" },
      { value: "42%", label: "lower cost per qualified lead" },
      { value: "60-70%", label: "of low-intent leads filtered out" },
    ],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    number: "02",
    icon: Bot,
    title: "Human-Like AI Agents Qualify Leads",
    subtitle: "Lead Qualification",
    description: "AI agents instantly call, text, or chat with every new lead.",
    bullets: [
      "Ask qualification questions",
      "Verify intent, urgency, and budget",
      "Perform multi-step follow-ups",
    ],
    metrics: [
      { value: "<30s", label: "first response time" },
      { value: "2.4×", label: "higher lead-to-appointment conversion" },
    ],
    color: "text-lavender",
    bgColor: "bg-lavender/10",
  },
  {
    number: "03",
    icon: CalendarCheck,
    title: "Automatic Booking",
    subtitle: "Conversion",
    description: "Qualified leads are booked directly into your calendar.",
    bullets: [
      "Real-time scheduling",
      "No double bookings",
      "Automated rescheduling",
    ],
    metrics: [
      { value: "65-80%", label: "booking rate from qualified leads" },
    ],
    color: "text-mint",
    bgColor: "bg-mint/10",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Higher Show-Up Rate & Revenue",
    subtitle: "Results",
    description: "AI manages confirmations and reminders.",
    bullets: [
      "Smart SMS & email reminders",
      "Pre-visit instructions",
    ],
    metrics: [
      { value: "30-60%", label: "fewer no-shows" },
      { value: "20-35%", label: "increase in monthly revenue" },
    ],
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-6">
            <span className="text-sm font-medium text-muted-foreground">
              How It Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            From Ad Click to <span className="text-gradient">Confirmed Appointment</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A Proven 4-Step Growth System
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            {steps.map((step, index) => (
              <Card
                key={step.number}
                className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card overflow-hidden"
              >
                <CardContent className="p-0">
                  <div className="flex flex-col lg:flex-row">
                    {/* Left side - Step info */}
                    <div className="lg:w-2/3 p-6 lg:p-8">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-14 h-14 rounded-2xl ${step.bgColor} flex items-center justify-center flex-shrink-0`}>
                          <step.icon className={`w-7 h-7 ${step.color}`} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className={`text-sm font-bold ${step.color}`}>{step.number}</span>
                            <span className="text-xs text-muted-foreground">{step.subtitle}</span>
                          </div>
                          <h3 className="text-xl font-bold text-card-foreground">
                            {step.title}
                          </h3>
                        </div>
                      </div>
                      
                      <p className="text-muted-foreground mb-4">
                        {step.description}
                      </p>
                      
                      <ul className="space-y-2">
                        {step.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className={step.color}>•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Right side - Metrics */}
                    <div className={`lg:w-1/3 ${step.bgColor} p-6 lg:p-8 flex flex-col justify-center`}>
                      <p className="text-xs font-semibold text-muted-foreground mb-4 uppercase tracking-wide">Results:</p>
                      <div className="space-y-4">
                        {step.metrics.map((metric, i) => (
                          <div key={i}>
                            <span className={`text-2xl font-bold ${step.color}`}>{metric.value}</span>
                            <p className="text-sm text-muted-foreground">{metric.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
