import { Button } from "@/components/ui/button";
import { Phone, ShieldCheck } from "lucide-react";
import heroImg from "@/assets/work/ss_security-1200w.webp";

interface HeroProps {
  onQuote: () => void;
}

export const Hero = ({ onQuote }: HeroProps) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 overflow-hidden bg-gradient-hero"
    >
      <div className="absolute inset-0 -z-0">
        <img
          src={heroImg}
          alt="Modern home protected by Fatima Automation security solutions"
          className="w-full h-full object-cover opacity-25"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/50" />
      </div>

      <div className="container relative z-10 grid lg:grid-cols-12 gap-12 items-center pb-16">
        <div className="lg:col-span-8 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm text-sm text-primary mb-8">
            <ShieldCheck className="size-4" />
            Trusted security & automation, since day one
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.05] font-bold mb-6">
            Smart{" "}
            <span className="text-gradient-gold">Security &amp; Automation</span>{" "}
            Solutions for Your Home
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
            Fatima Automation designs and installs premium electric fencing, gate
            automation and home automation systems — engineered for reliability,
            controlled from your phone.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="xl" onClick={onQuote}>
              Get a Quote
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="tel:+923213190017">
                <Phone className="size-5" />
                Call Now
              </a>
            </Button>
          </div>

          <div className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {[
              { k: "10+", v: "Years experience" },
              { k: "500+", v: "Installations" },
              { k: "24/7", v: "Support" },
            ].map((s) => (
              <div key={s.v} className="border-l-2 border-primary/40 pl-4">
                <div className="font-display text-3xl md:text-4xl font-bold text-gradient-gold">
                  {s.k}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4 animate-fade-in">
          <div className="relative animate-float">
            <div className="absolute -inset-4 bg-gradient-gold opacity-30 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-primary/20 shadow-elegant">
              <img
                src={heroImg}
                alt="Premium electric fence installation"
                className="w-full h-[520px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <div className="glass rounded-xl p-4 border border-primary/20">
                  <div className="text-xs text-primary uppercase tracking-wider mb-1">
                    Featured
                  </div>
                  <div className="font-display text-lg font-semibold">
                    Premium Perimeter Security
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
