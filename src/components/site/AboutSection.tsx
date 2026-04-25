import { SectionHeader } from "./SectionHeader";
import { Card } from "@/components/ui/card";
import { Quote, MapPin, Star } from "lucide-react";

const AREAS = [
  "DHA Lahore",
  "Bahria Town",
  "Johar Town",
  "Gulberg",
  "Model Town",
  "Multan",
];

const REVIEWS = [
  { name: "Ahmed Khan", text: "Very professional team. Installation was completed on time and everything works perfectly." },
  { name: "Usman Ali", text: "Good quality work and very cooperative staff." },
  { name: "Bilal Hussain", text: "Excellent service. They delivered exactly what they promised." },
  { name: "Ayesha Malik", text: "Really satisfied with the installation and quick response." },
  { name: "Fatima Noor", text: "Reliable company with good customer support." },
];

export const AboutSection = () => {
  return (
    <section id="about" className="section-pad relative bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="About Us"
          title={<>Engineering <span className="text-gradient-gold">Trusted Security</span></>}
          description="Fatima Automation is a Lahore-based security and automation company helping homes and businesses stay protected, connected and in control. From perimeter electric fencing to fully smart homes, we deliver complete solutions backed by professional installation and dependable after-sales support."
        />

        {/* Service areas */}
        <div className="mb-16">
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-6">
            Trusted Across Major Societies
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {AREAS.map((a) => (
              <div
                key={a}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-card border border-border hover:border-primary/40 transition-colors"
              >
                <MapPin className="size-4 text-primary" />
                <span className="text-sm font-medium">{a}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-semibold text-center mb-10">
            What our customers say
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((r, i) => (
              <Card
                key={r.name}
                className={`p-7 bg-gradient-card border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-card ${
                  i === 0 ? "lg:col-span-1" : ""
                }`}
              >
                <Quote className="size-8 text-primary/60 mb-4" />
                <p className="text-foreground/90 leading-relaxed mb-5">
                  "{r.text}"
                </p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold">{r.name}</div>
                    <div className="text-xs text-muted-foreground mt-0.5">
                      Verified customer
                    </div>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <Star
                        key={idx}
                        className="size-4 fill-primary text-primary"
                      />
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
