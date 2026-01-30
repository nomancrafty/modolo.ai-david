import { 
  Phone, 
  ClipboardList, 
  Megaphone,
  Star, 
  Search, 
  TrendingUp,
  Tv,
  Instagram,
  Share2,
  Award,
  FileText,
  Calendar,
  MessageSquare,
  Info,
  HelpCircle,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const advertisingServices = [
  {
    icon: Tv,
    title: "TV Advertising",
    description: "Local TV campaigns connected to AI call handling and booking.",
    bullets: ["Local TV campaign setup", "Appointment booking from ads"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "High-intent search traffic with instant AI response.",
    bullets: ["High-intent keyword targeting", "Landing page optimization", "Call answering and appointment booking"],
  },
  {
    icon: Instagram,
    title: "Facebook / Instagram Ads",
    description: "Automated lead qualification and follow-ups.",
    bullets: ["Local audience targeting", "Offer & lead campaigns", "Automated follow-up & message handling"],
  },
];

const marketingServices = [
  {
    icon: Award,
    title: "Creative Assets Production",
    description: "Build authority and trust in your local market.",
    bullets: ["Brand positioning", "Reputation monitoring"],
  },
  {
    icon: Share2,
    title: "Social Media Exposure",
    description: "Consistent visibility on Facebook & Instagram.",
    bullets: ["Scheduled content", "AI-generated captions", "Engagement tracking"],
  },
  {
    icon: Search,
    title: "Search Optimization (SEO / AEO / GEO)",
    description: "Get found first on Google, Maps, and web search.",
    bullets: ["Local SEO optimization", "Google Maps ranking", "Web search readiness"],
  },
];

const receptionistServices = [
  {
    icon: Info,
    title: "Provides Information",
    bullets: ["Services & pricing details", "Insurance & coverage guidance", "Office hours & locations", "Treatment / case process explanation"],
  },
  {
    icon: Users,
    title: "Collects Information",
    bullets: ["New patient & client details", "Contact information", "Insurance data", "Case / visit reason"],
  },
  {
    icon: HelpCircle,
    title: "Answers Questions",
    bullets: ["Common patient & client inquiries", "Appointment availability", "Preparation instructions", "Follow-up questions"],
  },
];

const assistantServices = [
  {
    icon: FileText,
    title: "Fills Out Forms",
    bullets: ["Intake forms", "Patient & client profiles", "CRM updates", "Case documentation"],
  },
  {
    icon: Calendar,
    title: "Books Appointment",
    bullets: ["Real-time scheduling", "Calendar syncing", "Reschedules & cancellations", "Confirmation messages"],
  },
  {
    icon: MessageSquare,
    title: "Conducts Follow-Ups",
    bullets: ["SMS & email reminders", "No-show recovery", "Lead nurturing", "Post-visit check-ins"],
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary mb-6">
            <span className="text-sm font-medium text-secondary-foreground">
              MODOLO AI Technology Solutions
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            MODOLO AI — <span className="text-gradient">Demand Generation & AI Office Operations</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Specialized AI systems for medical clinics, dental practices, and law offices. We increase lead volume, qualify prospects, automate follow-ups, boost bookings, and reduce staff workload — fully compliant with regulated industries.
          </p>
        </div>

        {/* DEMAND GENERATION */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient">DEMAND GENERATION</span>
            </h3>
          </div>

          {/* Advertising */}
          <div className="mb-12">
            <h4 className="text-xl font-bold text-center mb-8 text-muted-foreground">Advertising</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {advertisingServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h5>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-accent mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Marketing */}
          <div>
            <h4 className="text-xl font-bold text-center mb-8 text-muted-foreground">Marketing</h4>
            <div className="grid md:grid-cols-3 gap-6">
              {marketingServices.map((service) => (
                <Card key={service.title} className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h5 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h5>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <ul className="space-y-1">
                      {service.bullets.map((bullet, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* OFFICE AUTOMATION */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-2">
              <span className="text-gradient">OFFICE AUTOMATION</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Receptionist */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="text-xl font-bold text-card-foreground">Receptionist</h4>
              </div>
              <div className="space-y-6">
                {receptionistServices.map((service) => (
                  <Card key={service.title} className="border-border bg-card">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <service.icon className="w-5 h-5 text-primary" />
                        <h5 className="font-semibold text-card-foreground">{service.title}</h5>
                      </div>
                      <ul className="space-y-1 pl-8">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Executive Assistant */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <ClipboardList className="w-6 h-6 text-accent" />
                </div>
                <h4 className="text-xl font-bold text-card-foreground">Executive Assistant</h4>
              </div>
              <div className="space-y-6">
                {assistantServices.map((service) => (
                  <Card key={service.title} className="border-border bg-card">
                    <CardContent className="p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <service.icon className="w-5 h-5 text-accent" />
                        <h5 className="font-semibold text-card-foreground">{service.title}</h5>
                      </div>
                      <ul className="space-y-1 pl-8">
                        {service.bullets.map((bullet, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            {bullet}
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
