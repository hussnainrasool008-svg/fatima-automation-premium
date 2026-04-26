import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-14">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <img src={logo} alt="Fatima Automation" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Premium electric fencing, gate automation and home automation —
              engineered for reliability, designed for life.
            </p>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#electric-fence" className="hover:text-primary transition-colors">Electric Fence</a></li>
              <li><a href="#gate-automation" className="hover:text-primary transition-colors">Gate Automation</a></li>
              <li><a href="#home-automation" className="hover:text-primary transition-colors">Home Automation</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Get in touch</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-3">
                <Phone className="size-4 text-primary mt-0.5 shrink-0" />
                <a href="tel:+923213190017" className="hover:text-primary transition-colors">+92 321 3190017</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="size-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:Jahangiromer@yahoo.com" className="hover:text-primary transition-colors break-all">Jahangiromer@yahoo.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-primary mt-0.5 shrink-0" />
                <span>15-A Khayaban-e-Amin, Lahore, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div>
            © {new Date().getFullYear()} Fatima Automation. All rights reserved.
          </div>
          <div>Designed for security &amp; smart living.</div>
        </div>
      </div>
    </footer>
  );
};
