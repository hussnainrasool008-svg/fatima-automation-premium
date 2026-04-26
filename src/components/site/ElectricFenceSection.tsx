import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Smartphone,
  Bell,
  Radio,
  Wrench,
  CloudRain,
  Cable,
  BatteryCharging,
  ShieldCheck,
} from "lucide-react";
import efImg from "@/assets/work/ef_ss_poles.png";

const FEATURES = [
  { icon: Smartphone, title: "Mobile Control App", desc: "Arm, disarm and monitor your fence from anywhere." },
  { icon: Bell, title: "Mobile Alerts", desc: "Real-time notifications on every event." },
  { icon: Radio, title: "Remote Control", desc: "Quick on/off access from your keychain." },
  { icon: Wrench, title: "Stainless Steel Poles", desc: "Heavy-duty 16–18 gauge for long life." },
  { icon: CloudRain, title: "Weatherproof", desc: "Built for Pakistan's climate, year-round." },
  { icon: Cable, title: "Rustproof Wire", desc: "High tensile, corrosion-resistant cable." },
  { icon: BatteryCharging, title: "Longest Battery Backup", desc: "Stay protected during power cuts." },
  { icon: ShieldCheck, title: "1 Year Warranty", desc: "Peace of mind with full warranty." },
];

interface Props {
  onQuote: () => void;
}

export const ElectricFenceSection = ({ onQuote }: Props) => {
  return (
    <section id="electric-fence" className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Electric Fence"
          title={<>Professional <span className="text-gradient-gold">Perimeter Protection</span></>}
          description="A complete electric fencing solution engineered for residential, commercial and industrial properties — designed to deter, detect and notify, around the clock."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-card">
              <img
                src={efImg}
                alt="Smart electric fence energizer with mobile control"
                className="w-full h-[480px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 glass rounded-xl p-5 border border-primary/20">
                <div className="text-xs text-primary uppercase tracking-wider mb-1">
                  Smart Energizer
                </div>
                <div className="font-display text-xl font-semibold">
                  Connected. Reliable. Always on.
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="mt-6 w-full sm:w-auto" onClick={onQuote}>
              Request Installation Quote
            </Button>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <div
                  key={f.title}
                  className="group p-6 rounded-2xl bg-gradient-card border border-border hover:border-primary/40 transition-all duration-300 hover:-translate-y-1 shadow-card"
                >
                  <div className="size-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                    <Icon className="size-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
