import { Button } from "@/components/ui/button";
import { ArrowRight, Building2, Users, Clock, Star } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero pt-20">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-coral-light/30 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-lavender-light/30 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-peach-light/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border shadow-sm mb-8 animate-fade-in">
            <span className="text-sm font-medium text-muted-foreground">Medical, Dental & Law Office AI Solutions</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.1s" }}
          >
            Get More Patients & Clients <span className="text-gradient">Without More Staff</span>
          </h1>

          {/* Subheading */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            AI that answers calls, books appointments, follows up with patients & clients, and supports your marketing & advertising — 24/7.
          </p>

          <p
            className="text-md text-muted-foreground max-w-xl mx-auto mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.25s" }}
          >
            Built for medical clinics, dental practices, and law firms that want predictable growth without front-desk burnout.
          </p>

          <p
            className="text-md text-foreground font-medium max-w-xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Never miss a call. Never forget a follow-up. Never lose a patient or client to a faster competitor.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.35s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("cta")}
              className="gradient-primary text-primary-foreground shadow-soft hover:opacity-90 transition-all text-lg px-8 py-6 h-auto"
            >
              Get My Free AI Practice Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          {/* Stats */}
          <div className="text-center mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-sm font-medium text-muted-foreground mb-6">Trusted by Modern Medical, Dental & Law Offices</p>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">150+</span>
              </div>
              <span className="text-xs text-muted-foreground">Medical, Dental & Law Offices</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Users className="w-5 h-5 text-accent" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">1.8M+</span>
              </div>
              <span className="text-xs text-muted-foreground">Patient Interactions</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-lavender" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">22+</span>
              </div>
              <span className="text-xs text-muted-foreground">Years Healthcare Tech</span>
            </div>
            <div className="text-center p-4 rounded-xl bg-card/50 border border-border">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Star className="w-5 h-5 text-coral" />
                <span className="text-2xl md:text-3xl font-bold text-foreground">4.9★</span>
              </div>
              <span className="text-xs text-muted-foreground">Average Client Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
