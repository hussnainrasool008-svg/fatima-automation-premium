import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "electric-fence", label: "Electric Fence" },
  { id: "gate-automation", label: "Gate Automation" },
  { id: "home-automation", label: "Home Automation" },
  { id: "about", label: "About Us" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      // Active section detection
      const offset = window.innerHeight * 0.35;
      let current = "home";
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top;
        if (top <= offset) current = item.id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "glass shadow-elegant" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-20">
        <button
          onClick={() => handleClick("home")}
          className="flex items-center gap-3 mr-6 shrink-0"
          aria-label="Fatima Automation home"
        >
          <img
            src={logo}
            alt="Fatima Automation logo"
            className="h-11 md:h-12 w-auto object-contain"
          />
        </button>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-1 ml-auto">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md",
                  active === item.id
                    ? "text-primary"
                    : "text-foreground/80 hover:text-primary"
                )}
              >
                {item.label}
                <span
                  className={cn(
                    "absolute left-1/2 -bottom-0.5 h-0.5 bg-gradient-gold rounded-full transition-all duration-300 -translate-x-1/2",
                    active === item.id ? "w-6 opacity-100" : "w-0 opacity-0"
                  )}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden ml-auto p-2 text-foreground rounded-md hover:bg-secondary transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-all duration-300 glass border-t border-border/40",
          open ? "max-h-[500px]" : "max-h-0"
        )}
      >
        <ul className="container py-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleClick(item.id)}
                className={cn(
                  "w-full text-left px-4 py-3 rounded-md text-sm font-medium transition-colors",
                  active === item.id
                    ? "bg-primary/10 text-primary"
                    : "text-foreground/85 hover:bg-secondary"
                )}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};
