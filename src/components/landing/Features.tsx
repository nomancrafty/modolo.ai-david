import { 
  Phone, 
  ClipboardList, 
  Megaphone,
  Star, 
  Search, 
  TrendingUp,
  Tv,
  MessageSquare,
  Instagram,
  MapPin,
  Share2,
  Bot,
  UserCheck
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const marketingServices = [
  {
    icon: MapPin,
    title: "Google Profile Management",
    description: "Optimize your Google Business Profile to improve map rankings, increase call volume, and convert searches into booked appointments.",
    bullets: ["Profile optimization", "Weekly updates", "Review monitoring", "AI-assisted follow-ups"],
  },
  {
    icon: Share2,
    title: "Social Media Posting",
    description: "Consistent posting on Facebook and Instagram with AI-generated content to keep your practice visible and trusted.",
    bullets: ["Scheduled content", "Practice updates & offers", "AI-generated captions", "Engagement tracking"],
  },
  {
    icon: Star,
    title: "Review Prompting",
    description: "Automatically request reviews after visits using SMS and email flows to increase 5-star ratings.",
    bullets: ["Automated post-visit requests", "Smart timing", "Review filtering & alerts"],
  },
  {
    icon: Search,
    title: "SEO / GEO / AEO",
    description: "Local SEO, Google Maps optimization, and voice-search readiness to ensure patients and clients find you first.",
    bullets: ["Local SEO optimization", "Google Maps ranking", "Voice search optimization", "AI-driven content creation"],
  },
];

const advertisingServices = [
  {
    icon: Tv,
    title: "TV Advertising",
    description: "Local TV campaigns with AI call tracking and automated appointment booking.",
    bullets: ["Local TV campaign setup", "Call tracking & AI handling", "Appointment booking from ads"],
  },
  {
    icon: TrendingUp,
    title: "Google Ads",
    description: "High-intent search campaigns connected directly to AI receptionists for instant response.",
    bullets: ["High-intent keyword targeting", "Landing page optimization", "AI answering & booking"],
  },
  {
    icon: Megaphone,
    title: "Facebook Ads",
    description: "Lead campaigns with built-in AI qualification and follow-ups.",
    bullets: ["Local patient targeting", "Offer campaigns", "Automated lead follow-ups"],
  },
  {
    icon: Instagram,
    title: "Instagram Ads",
    description: "Story and feed ads to capture younger demographics and mobile users, with AI chat handling.",
    bullets: ["Story & feed ads", "Younger patient acquisition", "AI message handling"],
  },
];

const aiStaff = [
  {
    icon: Phone,
    title: "AI Receptionist",
    subtitle: "Handles the full front-desk communication layer",
    actions: ["Answers Questions", "Provides Information", "Collects Patient & Client Information"],
    bullets: ["24/7 call answering", "Insurance & service questions", "New patient & client qualification", "Appointment booking", "After-hours coverage"],
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ClipboardList,
    title: "AI Executive Assistant",
    subtitle: "Automates administrative work and follow-ups",
    actions: ["Fills Out Forms", "Books Appointments", "Performs Follow-Ups"],
    bullets: ["Intake form completion", "Appointment confirmations", "Reschedules & cancellations", "SMS & email reminders", "Recall & reactivation campaigns"],
    color: "text-accent",
    bgColor: "bg-accent/10",
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
            Services <span className="text-gradient">Overview</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            MODOLO AI provides specialized AI systems for medical clinics, dental practices, and law offices. Our services are designed to increase lead volume, improve qualification, automate follow-ups, boost appointment bookings, and reduce operational workload — while staying compliant with regulated industries.
          </p>
        </div>

        {/* Marketing Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Marketing Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We strengthen your existing marketing using AI follow-ups and automation — not replace it.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {marketingServices.map((service) => (
              <Card key={service.title} className="border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h4>
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

        {/* Advertising Services */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Advertising Services
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We manage and optimize your paid advertising while AI handles patient and client responses and follow-ups.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advertisingServices.map((service) => (
              <Card key={service.title} className="border-border hover:border-accent/30 transition-all duration-300 hover:shadow-soft bg-card">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h4 className="text-lg font-bold mb-2 text-card-foreground">{service.title}</h4>
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

        {/* AI Staff */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Office Operations — <span className="text-gradient">AI Staff</span>
            </h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {aiStaff.map((staff) => (
              <Card key={staff.title} className={`border-border hover:border-primary/30 transition-all duration-300 hover:shadow-soft bg-card`}>
                <CardContent className="p-8">
                  <div className={`w-16 h-16 rounded-2xl ${staff.bgColor} flex items-center justify-center mb-6`}>
                    <staff.icon className={`w-8 h-8 ${staff.color}`} />
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-card-foreground">{staff.title}</h4>
                  <p className="text-sm text-muted-foreground mb-4">{staff.subtitle}</p>
                  
                  {/* Actions */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {staff.actions.map((action, i) => (
                      <span key={i} className={`text-xs font-medium px-3 py-1 rounded-full ${staff.bgColor} ${staff.color}`}>
                        {action}
                      </span>
                    ))}
                  </div>
                  
                  {/* Capabilities */}
                  <p className="text-sm font-semibold text-card-foreground mb-3">Capabilities:</p>
                  <ul className="space-y-2">
                    {staff.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className={staff.color}>•</span>
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
    </section>
  );
};

export default Features;
