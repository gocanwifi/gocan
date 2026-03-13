import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Phone, Mail, Send, Clock, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { z } from "zod";
import contactHero from "@/assets/contact-hero.jpg";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be under 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be under 255 characters"),
  phone: z.string().trim().max(20, "Phone must be under 20 characters").optional().or(z.literal("")),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be under 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be under 1000 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", phone: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setErrors({});
      toast({ title: "Message Sent", description: "Thank you for reaching out. We will get back to you shortly." });
    }, 1200);
  };

  return (
    <PageWrapper>
      {/* Hero banner */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <div className="absolute inset-0">
          <img src={contactHero} alt="Customer support representative" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
        </div>
        <div className="container relative z-10 max-w-3xl">
          <div className="trust-badge inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold mb-5">
            <Shield className="h-3.5 w-3.5" /> Independent Assistance
          </div>
          <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Contact Us</h1>
          <p className="text-primary-foreground/80 text-lg max-w-xl">
            Reach out for general guidance related to internet, broadband, Wi-Fi, or cable TV services.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container max-w-5xl">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Left: info cards */}
            <div className="lg:col-span-2 space-y-5">
              <a href="tel:+18886517421" className="rounded-2xl border bg-card p-6 flex gap-4 items-center hover:shadow-lg transition-shadow block">
                <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">Phone</h3>
                  <p className="text-muted-foreground text-sm">(888) 651-7421</p>
                </div>
              </a>

              <a href="mailto:support@gocanadawifi.com" className="rounded-2xl border bg-card p-6 flex gap-4 items-center hover:shadow-lg transition-shadow block">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">Email</h3>
                  <p className="text-muted-foreground text-sm break-all">support@gocanadawifi.com</p>
                </div>
              </a>

              <div className="rounded-2xl border bg-card p-6 flex gap-4 items-center">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">Availability</h3>
                  <p className="text-muted-foreground text-sm">24/7 Guidance Available</p>
                </div>
              </div>

              <div className="rounded-2xl border bg-card p-6">
                <h3 className="font-display text-sm font-bold text-foreground mb-2">Call Greeting</h3>
                <p className="text-muted-foreground text-xs leading-relaxed italic">
                  "Thank you for calling Go Canada Wifi, an independent service assistance platform. We provide general guidance related to internet and cable services."
                </p>
              </div>

              <DisclosureBanner />
            </div>

            {/* Right: contact form */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill out the form and our independent support team will respond shortly.</p>

                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input id="name" placeholder="Your name" value={form.name} onChange={(e) => handleChange("name", e.target.value)} maxLength={100} />
                      {errors.name && <p className="text-xs text-destructive">{errors.name}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input id="email" type="email" placeholder="your@email.com" value={form.email} onChange={(e) => handleChange("email", e.target.value)} maxLength={255} />
                      {errors.email && <p className="text-xs text-destructive">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone (Optional)</Label>
                      <Input id="phone" type="tel" placeholder="+1 (XXX) XXX-XXXX" value={form.phone} onChange={(e) => handleChange("phone", e.target.value)} maxLength={20} />
                      {errors.phone && <p className="text-xs text-destructive">{errors.phone}</p>}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject *</Label>
                      <Input id="subject" placeholder="How can we help?" value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} maxLength={200} />
                      {errors.subject && <p className="text-xs text-destructive">{errors.subject}</p>}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea id="message" placeholder="Describe your question or concern..." rows={5} value={form.message} onChange={(e) => handleChange("message", e.target.value)} maxLength={1000} />
                    <div className="flex justify-between">
                      {errors.message ? <p className="text-xs text-destructive">{errors.message}</p> : <span />}
                      <p className="text-xs text-muted-foreground">{form.message.length}/1000</p>
                    </div>
                  </div>

                  <Button type="submit" variant="hero" className="gap-2 w-full h-12 rounded-xl text-base" disabled={submitting}>
                    {submitting ? "Sending..." : <><Send className="h-4 w-4" /> Send Message</>}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    By submitting, you acknowledge that Go Canada Wifi is an independent third-party provider.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
