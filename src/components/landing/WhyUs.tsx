import { Check } from "lucide-react";

const reasons = [
  "Built specifically for medical clinics, dental practices & law offices",
  "Compliance-ready for regulated industries (healthcare & legal workflows)",
  "No long-term contracts",
  "Results typically in 2–4 weeks",
  "Human-like AI conversations for patients & clients",
  "Works for appointments, consultations & case inquiries",
];

const WhyUs = () => {
  return (
    <section id="why-us" className="py-24 gradient-soft">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12">
            Why Medical, Dental & Law Offices Choose{" "}
            <span className="text-gradient">MODOLO AI Technology</span>
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors"
              >
                <div className="w-6 h-6 rounded-full bg-mint-light/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-mint" />
                </div>
                <span className="text-foreground font-medium">{reason}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
