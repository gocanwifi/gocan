import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Phone, Mail, Clock, Shield } from "lucide-react";
import contactHero from "@/assets/contact-hero.jpg";

const Contact = () => {

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
              <a href="tel:+18882657538" className="rounded-2xl border bg-card p-6 flex gap-4 items-center hover:shadow-lg transition-shadow block">
                <div className="h-12 w-12 rounded-xl hero-gradient flex items-center justify-center flex-shrink-0">
                  <Phone className="h-5 w-5 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-foreground text-sm">Phone</h3>
                  <p className="text-muted-foreground text-sm">(888) 265-7538</p>
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

            {/* Right: contact information */}
            <div className="lg:col-span-3">
              <div className="rounded-2xl border bg-card p-8">
                <h2 className="font-display text-2xl font-bold text-foreground mb-2">Get In Touch</h2>
                <p className="text-muted-foreground text-sm mb-8">Contact our independent support team directly using the information provided.</p>

                <div className="space-y-6">
                  <div className="rounded-xl border bg-muted/50 p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-4">Contact Methods</h3>
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Phone Support</p>
                        <a href="tel:+18882657538" className="text-primary hover:underline font-medium">(888) 265-7538</a>
                        <p className="text-xs text-muted-foreground mt-1">Available 24/7 for guidance</p>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-foreground mb-1">Email Support</p>
                        <a href="mailto:support@gocanadawifi.com" className="text-primary hover:underline font-medium break-all">support@gocanadawifi.com</a>
                        <p className="text-xs text-muted-foreground mt-1">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border bg-muted/50 p-6">
                    <h3 className="font-display text-lg font-bold text-foreground mb-2">What to Expect</h3>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Independent third-party guidance and support</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>General information about internet and cable services</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Assistance navigating service-related concerns</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary">•</span>
                        <span>Service assistance fees may apply separately</span>
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground text-center pt-4">
                    Go Canada Wifi is an independent third-party provider. We are not affiliated with any ISP or cable company.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};

export default Contact;
