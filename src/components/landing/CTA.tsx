import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { CheckCircle, Search, Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CTA = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    email: "",
    message: "",
    transactionalConsent: false,
    marketingConsent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.firstName.trim() || !formData.email.trim() || !formData.phone.trim()) {
      toast({
        title: "Please fill in required fields",
        description: "First name, email, and phone number are required.",
        variant: "destructive",
      });
      return;
    }

    // Send form data via email (temporary testing)
    try {
      const mailtoLink = `mailto:david.golub@thrivemedia.marketing?subject=AI Readiness Consultation Request&body=First Name: ${formData.firstName}%0D%0ALast Name: ${formData.lastName}%0D%0ACompany: ${formData.companyName}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}%0D%0ATransactional Consent: ${formData.transactionalConsent ? 'Yes' : 'No'}%0D%0AMarketing Consent: ${formData.marketingConsent ? 'Yes' : 'No'}`;
      window.location.href = mailtoLink;
      
      setIsSubmitted(true);
      toast({
        title: "Consultation Request Received!",
        description: "We'll be in touch within 24 hours.",
      });
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again or call us directly.",
        variant: "destructive",
      });
    }
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
          <div className="text-center mb-12">
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center mx-auto mb-8 shadow-glow">
              <Search className="w-8 h-8 text-primary-foreground" />
            </div>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Book AI Readiness Consultation
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
          </div>

          {/* A2P Contact Form */}
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8 p-8 bg-card rounded-2xl border border-border shadow-soft">
              <div className="flex items-center justify-center gap-2 mb-6">
                <Phone className="w-5 h-5 text-primary" />
                <span className="text-lg font-semibold text-foreground">(888) 487-2171</span>
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="firstName" className="text-sm font-medium text-foreground">First Name *</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName" className="text-sm font-medium text-foreground">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="mt-1"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label htmlFor="companyName" className="text-sm font-medium text-foreground">Company Name</Label>
                <Input
                  id="companyName"
                  name="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="mt-1"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number *</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-1"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <Label htmlFor="message" className="text-sm font-medium text-foreground">Write your message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="mt-1"
                  rows={4}
                />
              </div>

              {/* Consent checkboxes */}
              <div className="space-y-4 mb-6">
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="transactionalConsent"
                    checked={formData.transactionalConsent}
                    onCheckedChange={(checked) => handleCheckboxChange("transactionalConsent", checked as boolean)}
                  />
                  <Label htmlFor="transactionalConsent" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                    By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </Label>
                </div>

                <div className="flex items-start gap-3">
                  <Checkbox
                    id="marketingConsent"
                    checked={formData.marketingConsent}
                    onCheckedChange={(checked) => handleCheckboxChange("marketingConsent", checked as boolean)}
                  />
                  <Label htmlFor="marketingConsent" className="text-xs text-muted-foreground leading-tight cursor-pointer">
                    By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, new product updates among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.
                  </Label>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full gradient-primary text-primary-foreground h-12 shadow-soft hover:opacity-90 transition-opacity text-lg"
              >
                Book Now
              </Button>
            </form>
          ) : (
            <div className="max-w-2xl mx-auto mb-8 p-8 rounded-2xl bg-mint-light/30 border border-mint/30 animate-scale-in text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <CheckCircle className="w-8 h-8 text-mint" />
                <span className="text-xl font-semibold text-foreground">Consultation Request Submitted!</span>
              </div>
              <p className="text-muted-foreground">
                We'll be in touch within 24 hours with your personalized consultation.
              </p>
            </div>
          )}

          <p className="text-sm text-muted-foreground text-center mb-8">
            No obligation. No pressure. Keep the plan.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground mb-16">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-primary" />
                <span>{badge}</span>
              </div>
            ))}
          </div>

          {/* Secondary CTA */}
          <div className="text-center pt-12 border-t border-border">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Grow Your Medical, Dental or Law Practice?
            </h3>
            <p className="text-muted-foreground mb-8">
              Every day without AI is another day patients and clients book with a faster competitor.
            </p>

            <Button
              onClick={() => {
                const ctaForm = document.querySelector('#cta form');
                if (ctaForm) {
                  ctaForm.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="gradient-primary text-primary-foreground shadow-soft hover:opacity-90 transition-opacity h-12 px-8"
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;