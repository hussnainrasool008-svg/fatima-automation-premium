import { SectionHeader } from "./SectionHeader";

import ef1 from "@/assets/work/ef1-1200w.webp";
import efFactory from "@/assets/work/ef_factory-800w.webp";
import efHome from "@/assets/work/ef_home-800w.webp";
import efNotif from "@/assets/work/ef_notifications-1200w.webp";
import efPf1 from "@/assets/work/ef_pf1-1200w.webp";
import efPf5 from "@/assets/work/ef_pf5-1200w.webp";
import efSmart from "@/assets/work/ef_smart-1200w.webp";
import efSsrods from "@/assets/work/ef_ssrods-1200w.webp";
import gmPhone from "@/assets/work/gm_phonecontrol-1200w.webp";
import gmTrack from "@/assets/work/gm_track-1200w.webp";
import ssSecurity from "@/assets/work/ss_security-1200w.webp";
import ssWhy from "@/assets/work/gate_premium_entrance.png";
import gateMotor from "@/assets/work/gate_motor_closeup.png";

const PROJECTS = [
  { src: ssSecurity, title: "Premium Perimeter Fence", category: "Electric Fence", span: "lg:col-span-2 lg:row-span-2" },
  { src: efPf1, title: "Residential Villa Security", category: "Electric Fence" },
  { src: gmPhone, title: "Smart Gate Access", category: "Gate Automation" },
  { src: efHome, title: "Modern Home Installation", category: "Electric Fence" },
  { src: gmTrack, title: "Sliding Gate Track System", category: "Gate Automation" },
  { src: efSmart, title: "Smart Energizer Setup", category: "Electric Fence", span: "lg:col-span-2" },
  { src: efSsrods, title: "Stainless Steel Poles", category: "Electric Fence" },
  { src: efNotif, title: "Mobile Alert System", category: "Home Automation" },
  { src: efFactory, title: "Industrial Perimeter", category: "Electric Fence" },
  { src: efPf5, title: "Boundary Wall Protection", category: "Electric Fence" },
  { src: ef1, title: "Premium Estate Fencing", category: "Electric Fence" },
  { src: ssWhy, title: "Premium Automated Entrance", category: "Gate Automation" },
  { src: gateMotor, title: "Swing Gate Motor System", category: "Gate Automation" },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="section-pad relative">
      <div className="container">
        <SectionHeader
          eyebrow="Projects"
          title={<>Selected <span className="text-gradient-gold">Installations</span></>}
          description="A glimpse of recent electric fence, gate automation and home automation work completed across Lahore."
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-[220px] gap-4">
          {PROJECTS.map((p, i) => (
            <figure
              key={i}
              className={`group relative overflow-hidden rounded-2xl border border-border hover:border-primary/50 transition-all duration-500 shadow-card ${
                p.span ?? ""
              }`}
            >
              <img
                src={p.src}
                alt={p.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-xs uppercase tracking-wider text-primary mb-1 font-semibold">
                  {p.category}
                </div>
                <div className="font-display text-lg font-semibold leading-tight">
                  {p.title}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};
