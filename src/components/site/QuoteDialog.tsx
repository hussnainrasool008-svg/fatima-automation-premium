import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { CheckCircle2 } from "lucide-react";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your name").max(100),
  phone: z
    .string()
    .trim()
    .min(7, "Please enter a valid phone number")
    .max(25, "Phone number is too long")
    .regex(/^[0-9+\-\s()]+$/i, "Only digits and + - ( ) are allowed"),
  message: z.string().trim().min(5, "Message is too short").max(1000),
});

interface QuoteDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const QuoteDialog = ({ open, onOpenChange }: QuoteDialogProps) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const reset = () => {
    setName("");
    setPhone("");
    setMessage("");
    setSent(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const result = schema.safeParse({ name, phone, message });
    if (!result.success) {
      toast.error(result.error.issues[0].message);
      return;
    }
    setSubmitting(true);
    // Compose WhatsApp message so the inquiry actually reaches Fatima Automation.
    const text = `New quote request%0A%0AName: ${encodeURIComponent(
      name
    )}%0APhone: ${encodeURIComponent(phone)}%0A%0A${encodeURIComponent(message)}`;
    const url = `https://wa.me/923213190017?text=${text}`;
    setTimeout(() => {
      window.open(url, "_blank", "noopener,noreferrer");
      setSent(true);
      setSubmitting(false);
      toast.success("Your message has been sent successfully");
    }, 600);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(v) => {
        onOpenChange(v);
        if (!v) setTimeout(reset, 200);
      }}
    >
      <DialogContent className="sm:max-w-md bg-card border-border/60">
        {sent ? (
          <div className="py-8 text-center space-y-4">
            <CheckCircle2 className="size-14 text-primary mx-auto" />
            <DialogTitle className="font-display text-2xl">Thank you!</DialogTitle>
            <DialogDescription className="text-base">
              Your message has been sent successfully. Our team will get back to you
              shortly.
            </DialogDescription>
            <Button onClick={() => onOpenChange(false)} variant="hero" className="mt-2">
              Close
            </Button>
          </div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="font-display text-2xl">Get a Quote</DialogTitle>
              <DialogDescription>
                Tell us about your project and we'll get back to you within 24 hours.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit} className="space-y-4 mt-2">
              <div className="space-y-2">
                <Label htmlFor="q-name">Name</Label>
                <Input
                  id="q-name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your full name"
                  maxLength={100}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-phone">Phone Number</Label>
                <Input
                  id="q-phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="+92 300 0000000"
                  maxLength={25}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="q-message">Message</Label>
                <Textarea
                  id="q-message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us what you need…"
                  rows={4}
                  maxLength={1000}
                  required
                />
              </div>
              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={submitting}
              >
                {submitting ? "Sending…" : "Send Message"}
              </Button>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};
