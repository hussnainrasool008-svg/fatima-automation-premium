import { SectionHeader } from "./SectionHeader";
import { Button } from "@/components/ui/button";
import homeImg from "@/assets/work/luxury_villa_fence.png";
import {
  Lightbulb,
  Plug,
  Smartphone,
  Mic,
  Leaf,
  Wifi,
} from "lucide-react";

const FEATURES = [
  { icon: Lightbulb, title: "Smart Lighting Control", desc: "Set scenes, dim and schedule lights effortlessly." },
  { icon: Plug, title: "Appliance Automation", desc: "Control fans, AC and outlets from one app." },
  { icon: Smartphone, title: "Mobile App Control", desc: "One simple app for your entire home." },
  { icon: Wifi, title: "Remote Access", desc: "Manage your home from anywhere in the world." },
  { icon: Mic, title: "Voice Control Option", desc: "Compatible with leading voice assistants." },
  { icon: Leaf, title: "Energy Efficient", desc: "Reduce bills with intelligent scheduling." },
];

interface Props {
  onQuote: () => void;
}

export const HomeAutomationSection = ({ onQuote }: Props) => {
  return (
    <section id="home-automation" className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Home Automation"
          title={<>Live the <span className="text-gradient-gold">Smart Home</span> Lifestyle</>}
          description="Transform your home into an intelligent, energy-efficient space — fully controlled from your phone, voice or schedule."
        />

        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5 relative">
            <div className="absolute -inset-6 bg-gradient-gold opacity-15 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-border shadow-elegant">
              <img
                src={homeImg}
                alt="Modern home with smart automation installed"
                className="w-full h-[460px] object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
            </div>
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
            <div className="sm:col-span-2 mt-2">
              <Button variant="hero" size="lg" onClick={onQuote}>
                Build My Smart Home
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
