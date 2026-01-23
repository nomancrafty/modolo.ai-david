import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, CheckCircle, Search, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Please enter your email",
        variant: "destructive",
      });
      return;
    }

    // Simulate submission
    setIsSubmitted(true);
    toast({
      title: "Audit Request Received!",
      description: "We'll be in touch within 24 hours.",
    });
  };

  const auditFeatures = [
    "Front-desk performance audit",
    "Google & online visibility analysis",
    "Appointment conversion review",
    "Custom AI growth plan",
  ];

  const trustBadges = [
    "No credit card required",
    "Live in days, not months",
    "No long-term contracts",
  ];

  return (
    <section id="cta" className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-coral-light/20 via-transparent to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main CTA */}
          <div className="text-center mb-16">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
              <Search className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Free AI Practice Audit
            </h2>
            
            <p className="text-xl font-medium text-primary mb-6">
              Discover How Many Patients & Clients You're Losing Right Now
            </p>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              In 3 minutes, see exactly where calls, bookings, and follow-ups are slipping through the cracks.
            </p>

            {/* Audit Features */}
            <div className="grid sm:grid-cols-2 gap-3 max-w-lg mx-auto mb-8">
              {auditFeatures.map((feature, index) => (
                <div key={index} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Email Form */}
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-6">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-12 px-4 flex-1"
                  />
                  <Button
                    type="submit"
                    className="gradient-primary text-primary-foreground h-12 px-6 shadow-soft hover:opacity-90 transition-opacity"
                  >
                    Get My Free AI Audit
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </form>
            ) : (
              <div className="max-w-md mx-auto mb-6 p-6 rounded-xl bg-mint-light/30 border border-mint/30 animate-scale-in">
                <div className="flex items-center justify-center gap-3">
                  <CheckCircle className="w-6 h-6 text-mint" />
                  <span className="font-semibold text-foreground">Audit Request Submitted!</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  We'll be in touch within 24 hours with your personalized audit.
                </p>
              </div>
            )}

            <p className="text-sm text-muted-foreground mb-8">
              No obligation. No pressure. Keep the plan.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              {trustBadges.map((badge, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span>{badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Secondary CTA */}
          <div className="text-center pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Grow Your Medical, Dental or Law Practice?
            </h3>
            <p className="text-muted-foreground mb-8">
              Every day without AI is another day patients and clients book with a faster competitor.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                onClick={() => {
                  const ctaForm = document.querySelector('#cta input');
                  if (ctaForm) {
                    (ctaForm as HTMLInputElement).focus();
                  }
                }}
                className="gradient-primary text-primary-foreground shadow-soft hover:opacity-90 transition-opacity h-12 px-8"
              >
                Get My Free Audit
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>

            {/* Phone CTA */}
            <div className="mt-12 p-6 rounded-xl bg-card border border-border max-w-md mx-auto">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Phone className="w-5 h-5 text-primary" />
                <span className="font-semibold text-foreground">Prefer to Talk?</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Test Our AI Voice Agent — Available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
