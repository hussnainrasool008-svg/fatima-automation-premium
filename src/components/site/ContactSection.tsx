import { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Phone, Mail, MapPin, MessageCircle, User, CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");

export const ContactSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, email, message });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      });
      toast.success("Your message has been sent successfully");
      setSuccess(true);
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-pad relative bg-secondary/30">
      <div className="container">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's Build Your <span className="text-gradient-gold">Smart, Secure Home</span></>}
          description="Speak to our automation engineer or send us a message — we usually respond the same day."
        />

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Contact info + map */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-7 rounded-2xl bg-gradient-card border border-border shadow-card">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-border">
                <div className="size-14 rounded-full bg-gradient-gold flex items-center justify-center shrink-0">
                  <User className="size-7 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-xl font-semibold">
                    Omer Jahangir
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Automation Engineer
                  </div>
                </div>
              </div>

              <ul className="space-y-5">
                <li>
                  <a
                    href="tel:+923213190017"
                    className="flex items-start gap-4 group"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Phone className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        Phone
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        +92 321 3190017
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://wa.me/923213190017"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <MessageCircle className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        WhatsApp
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors">
                        +92 321 3190017
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Jahangiromer@yahoo.com"
                    className="flex items-start gap-4 group"
                  >
                    <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Mail className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                        Email
                      </div>
                      <div className="font-medium group-hover:text-primary transition-colors break-all">
                        Jahangiromer@yahoo.com
                      </div>
                    </div>
                  </a>
                </li>
                <li className="flex items-start gap-4">
                  <div className="size-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="size-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider mb-0.5">
                      Address
                    </div>
                    <div className="font-medium leading-relaxed">
                      15-A Khayaban-e-Amin,
                      <br /> Lahore, Pakistan
                    </div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl overflow-hidden border border-border shadow-card h-72">
              <iframe
                title="Fatima Automation — 15-A Khayaban-e-Amin, Lahore"
                src="https://www.google.com/maps?q=15-A%20Khayaban-e-Amin%2C%20Lahore%2C%20Pakistan&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                style={{ border: 0 }}
                className="w-full h-full"
              />
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=15-A+Khayaban-e-Amin+Lahore"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary hover:text-primary-glow transition-colors"
            >
              <MapPin className="size-4" /> Open in Google Maps
            </a>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            name="contact"
            method="POST"
            data-netlify="true"
            netlify-honeypot="bot-field"
            className="lg:col-span-7 p-7 md:p-10 rounded-2xl bg-gradient-card border border-border shadow-card space-y-5"
          >
            <input type="hidden" name="form-name" value="contact" />
            <p className="hidden">
              <label>
                Don't fill this out: <input name="bot-field" />
              </label>
            </p>
            <h3 className="font-display text-2xl md:text-3xl font-semibold mb-2">
              Send us a message
            </h3>
            <p className="text-muted-foreground mb-2">
              Fill out the form below and we'll get back to you shortly.
            </p>

            {success ? (
              <div className="flex flex-col items-center text-center py-10 px-4 rounded-xl bg-primary/5 border border-primary/20">
                <CheckCircle2 className="size-14 text-primary mb-4" />
                <h4 className="font-display text-2xl font-semibold mb-2">
                  Thank you!
                </h4>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Your message has been sent successfully. We'll get back to you shortly.
                </p>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setSuccess(false)}
                >
                  Send another message
                </Button>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <Label htmlFor="c-name">Name</Label>
                  <Input
                    id="c-name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your full name"
                    maxLength={100}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-email">Email</Label>
                  <Input
                    id="c-email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    maxLength={255}
                    required
                    className="h-12"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="c-message">Message</Label>
                  <Textarea
                    id="c-message"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    rows={6}
                    maxLength={1000}
                    required
                  />
                </div>
                <Button
                  type="submit"
                  variant="hero"
                  size="lg"
                  disabled={submitting}
                  className="w-full sm:w-auto"
                >
                  {submitting ? "Sending…" : "Send Message"}
                </Button>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
