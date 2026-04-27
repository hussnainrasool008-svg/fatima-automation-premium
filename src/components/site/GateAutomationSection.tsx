import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import gateImg from "@/assets/work/gate_app_opening_v2.png";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Automatic gate opening & closing",
  "Remote access from your phone",
  "Heavy-duty motors for daily use",
  "Safety sensors to prevent accidents",
  "Battery backup during power cuts",
  "Sliding, swing & commercial gate systems",
];

interface Props {
  onQuote: () => void;
}

export const GateAutomationSection = ({ onQuote }: Props) => {
  return (
    <section id="gate-automation" className="section-pad relative bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="Gate Automation"
          title={<>Effortless Access, <span className="text-gradient-gold">Total Control</span></>}
          description="Premium motorised gate systems for homes, offices and commercial entrances — operated from your phone, remote or keypad."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 space-y-6">
            <h3 className="font-display text-3xl md:text-4xl font-semibold">
              Smart entry for residential &amp; commercial gates
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed">
              From sliding driveway gates to large commercial swing gates, our
              automation systems pair industrial-grade motors with intelligent
              controllers — so your gate opens the moment you arrive and closes
              securely behind you.
            </p>
            <ul className="grid sm:grid-cols-2 gap-3">
              {FEATURES.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckCircle2 className="size-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-foreground/90">{f}</span>
                </li>
              ))}
            </ul>
            <div className="pt-4">
              <Button variant="hero" size="lg" onClick={onQuote}>
                Get Gate Automation Quote
              </Button>
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src={gateImg}
                alt="Automated swing gate with motor system installed at a residential entrance"
                className="w-full h-[520px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
