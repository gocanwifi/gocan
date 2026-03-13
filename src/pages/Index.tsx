import { Phone, PhoneCall, Shield, Wifi, Tv, HelpCircle, CheckCircle, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";

const weDoItems = [
  { icon: Wifi, text: "Understand internet and broadband service options" },
  { icon: HelpCircle, text: "Receive guidance on common Wi-Fi connectivity concerns" },
  { icon: Shield, text: "Learn how to navigate service provider processes" },
  { icon: Tv, text: "Access general informational assistance related to cable TV services" },
];

const weDoNotItems = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any telecom company",
  "We are not affiliated with any internet, cable, or telecom provider",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
];

const Index = () => {
  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient opacity-[0.04]" />
        <div className="container relative py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <div className="trust-badge inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium mb-6">
              <Shield className="h-3.5 w-3.5" /> Independent Third-Party Assistance
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-5">
              Independent Internet & Cable{" "}
              <span className="gradient-text">Service Assistance</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
              Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-4">
              <a href="tel:+18886412045">
                <Button size="lg" variant="hero" className="gap-2 text-base px-6">
                  <PhoneCall className="h-4 w-4" /> Talk to a Third-Party Internet Advisor
                </Button>
              </a>
              <a href="tel:+18886412045">
                <Button size="lg" variant="hero-outline" className="gap-2 text-base px-6">
                  <Phone className="h-4 w-4" /> Call for Independent Service Guidance
                </Button>
              </a>
            </div>
            <p className="text-xs text-muted-foreground">Not an ISP. No brand affiliation.</p>
          </div>

          <DisclosureBanner className="max-w-2xl mx-auto mt-10" />
        </div>
      </section>

      {/* What We Do */}
      <section className="section-alt py-16 md:py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">What We Do</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              At NorthBridge Service Assist, we help users navigate the world of internet and cable services with independent guidance.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {weDoItems.map((item) => (
              <div key={item.text} className="bg-card rounded-xl p-6 shadow-sm border flex flex-col items-center text-center gap-3">
                <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="h-5 w-5 text-primary" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">{item.text}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-8">
            Our role is limited to independent guidance and assistance only.
          </p>
        </div>
      </section>

      {/* What We Do NOT Do */}
      <section className="py-16 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3 text-center">What We Do <span className="text-destructive">Not</span> Do</h2>
          <p className="text-muted-foreground text-center mb-10">To maintain transparency:</p>
          <div className="grid gap-3">
            {weDoNotItems.map((item) => (
              <div key={item} className="flex items-start gap-3 rounded-xl border bg-card p-4">
                <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-muted-foreground mt-6">
            Provider mentions are strictly informational. Users sometimes seek guidance related to services offered by providers such as Bell Canada™, Rogers Communications®, or Telus®. Our assistance is independent and informational only.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-alt py-16 md:py-20">
        <div className="container max-w-2xl text-center">
          <h2 className="font-display text-3xl font-bold text-foreground mb-4">Need Independent Assistance?</h2>
          <p className="text-muted-foreground mb-6">
            Speak with our team for general guidance related to internet, broadband, Wi-Fi, or cable TV services.
          </p>
          <a href="tel:+18886412045">
            <Button size="lg" variant="hero" className="gap-2 text-base px-8">
              <Phone className="h-4 w-4" /> Get Assistance
            </Button>
          </a>
          <DisclosureBanner className="mt-8" />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Index;
