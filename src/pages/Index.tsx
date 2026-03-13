import { Phone, PhoneCall, Shield, Wifi, Tv, HelpCircle, CheckCircle, XCircle, ArrowRight, Users, Clock, Headphones, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { useState, useEffect, useRef } from "react";

import heroImg from "@/assets/hero-support.jpg";
import bentoWifi from "@/assets/bento-wifi.jpg";
import bentoCable from "@/assets/bento-cable.jpg";
import bentoBroadband from "@/assets/bento-broadband.jpg";
import bentoGuide from "@/assets/bento-guide.jpg";
import carouselSupport from "@/assets/carousel-support.jpg";
import carouselNetwork from "@/assets/carousel-network.jpg";
import carouselFamily from "@/assets/carousel-family.jpg";

// Intersection Observer hook
const useInView = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
};

const AnimatedSection = ({ children, className = "", delay = "" }: { children: React.ReactNode; className?: string; delay?: string }) => {
  const { ref, inView } = useInView();
  return (
    <div ref={ref} className={`${className} ${inView ? `animate-fade-in ${delay}` : "opacity-0"}`}>
      {children}
    </div>
  );
};

const stats = [
  { value: "10K+", label: "Users Assisted", icon: Users },
  { value: "24/7", label: "Guidance Available", icon: Clock },
  { value: "2026", label: "Founded", icon: Shield },
  { value: "100%", label: "Independent", icon: Headphones },
];

const weDoItems = [
  { icon: Wifi, title: "Wi-Fi Guidance", text: "Understand internet and broadband service options", img: bentoWifi },
  { icon: Tv, title: "Cable TV Assistance", text: "Access general informational assistance related to cable TV services", img: bentoCable },
  { icon: HelpCircle, title: "Broadband Support", text: "Receive guidance on common broadband connectivity concerns", img: bentoBroadband },
  { icon: Shield, title: "Service Navigation", text: "Learn how to navigate service provider processes", img: bentoGuide },
];

const weDoNotItems = [
  "We are not an Internet Service Provider (ISP)",
  "We do not provide official customer support for any telecom company",
  "We are not affiliated with any internet, cable, or telecom provider",
  "We do not sell internet or cable subscriptions",
  "We do not provide guaranteed technical fixes",
];

const carouselSlides = [
  { img: carouselSupport, title: "Dedicated Assistance Team", text: "Our independent advisors are here to help you navigate connectivity concerns with clarity and care." },
  { img: carouselNetwork, title: "Understanding Your Network", text: "We help you understand how internet and broadband services work so you can make informed decisions." },
  { img: carouselFamily, title: "Supporting Canadian Families", text: "From Wi-Fi setup guidance to cable TV questions, we assist families across Canada with independent support." },
];

const Index = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrentSlide((p) => (p + 1) % carouselSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative overflow-hidden min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={heroImg} alt="NorthBridge Service Assist team providing independent guidance" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
        </div>
        <div className="container relative z-10 py-20">
          <div className="max-w-2xl">
            <div className="trust-badge inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold mb-6 animate-fade-in">
              <Shield className="h-3.5 w-3.5" /> Independent Third-Party Assistance · Est. 2026
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-primary-foreground leading-[1.08] mb-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Independent Internet & Cable{" "}
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Service Assistance</span>
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Get general guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services from an independent third-party assistance provider.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-5 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <a href="tel:+18886412045">
                <Button size="lg" variant="hero" className="gap-2 text-base px-7 h-13 rounded-xl">
                  <PhoneCall className="h-4 w-4" /> Talk to a Third-Party Advisor
                </Button>
              </a>
              <a href="tel:+18886412045">
                <Button size="lg" className="gap-2 text-base px-7 h-13 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold backdrop-blur-sm">
                  <Phone className="h-4 w-4" /> Call for Independent Guidance
                </Button>
              </a>
            </div>
            <p className="text-xs text-primary-foreground/60 animate-fade-in" style={{ animationDelay: "0.4s" }}>Not an ISP. No brand affiliation.</p>
          </div>
        </div>
      </section>

      {/* Disclosure below hero */}
      <div className="container py-6">
        <DisclosureBanner />
      </div>

      {/* Stats */}
      <section className="py-12 border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <AnimatedSection key={s.label} delay={`[animation-delay:${i * 100}ms]`}>
                <div className="text-center">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-3">
                    <s.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div className="font-display text-3xl font-extrabold text-foreground">{s.value}</div>
                  <div className="text-sm text-muted-foreground mt-1">{s.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Bento Grid - What We Do */}
      <section className="py-20 md:py-28">
        <div className="container">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Services</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground mb-4">How We Assist You</h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Independent guidance to help you navigate internet, broadband, Wi-Fi, and cable TV services across Canada.
            </p>
          </AnimatedSection>

          {/* Bento Grid */}
          <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {/* Large card */}
            <AnimatedSection className="md:col-span-2 md:row-span-2">
              <div className="relative rounded-2xl overflow-hidden h-full min-h-[320px] group">
                <img src={weDoItems[0].img} alt={weDoItems[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/20 backdrop-blur-sm mb-3">
                    <Wifi className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-primary-foreground mb-2">{weDoItems[0].title}</h3>
                  <p className="text-primary-foreground/80 text-sm md:text-base">{weDoItems[0].text}</p>
                </div>
              </div>
            </AnimatedSection>

            {/* Small cards */}
            {weDoItems.slice(1).map((item, i) => (
              <AnimatedSection key={item.title} delay={`[animation-delay:${(i + 1) * 150}ms]`}>
                <div className="relative rounded-2xl overflow-hidden h-48 group">
                  <img src={item.img} alt={item.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <div className="flex items-center gap-2 mb-1">
                      <item.icon className="h-4 w-4 text-primary-foreground" />
                      <h3 className="font-display text-sm font-bold text-primary-foreground">{item.title}</h3>
                    </div>
                    <p className="text-primary-foreground/75 text-xs leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <p className="text-center text-sm text-muted-foreground mt-8">
            Our role is limited to independent guidance and assistance only.
          </p>
        </div>
      </section>

      {/* Carousel Section */}
      <section className="section-alt py-20 md:py-28 overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What We Offer</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Guidance You Can Trust</h2>
          </AnimatedSection>

          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden rounded-2xl">
              <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {carouselSlides.map((slide, i) => (
                  <div key={i} className="min-w-full">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="aspect-[4/3] md:aspect-auto">
                        <img src={slide.img} alt={slide.title} className="w-full h-full object-cover" />
                      </div>
                      <div className="bg-card p-8 md:p-12 flex flex-col justify-center">
                        <h3 className="font-display text-2xl font-bold text-foreground mb-3">{slide.title}</h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">{slide.text}</p>
                        <a href="tel:+18886412045">
                          <Button variant="hero" className="gap-2 w-fit">
                            Get Assistance <ArrowRight className="h-4 w-4" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button onClick={() => setCurrentSlide((p) => (p - 1 + carouselSlides.length) % carouselSlides.length)} className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronLeft className="h-4 w-4" />
              </button>
              <div className="flex gap-2">
                {carouselSlides.map((_, i) => (
                  <button key={i} onClick={() => setCurrentSlide(i)} className={`h-2 rounded-full transition-all duration-300 ${i === currentSlide ? "w-8 bg-primary" : "w-2 bg-border"}`} />
                ))}
              </div>
              <button onClick={() => setCurrentSlide((p) => (p + 1) % carouselSlides.length)} className="h-10 w-10 rounded-full border bg-card flex items-center justify-center hover:bg-secondary transition-colors">
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do NOT Do - Split layout */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <AnimatedSection>
              <p className="text-sm font-semibold text-destructive uppercase tracking-wider mb-2">Transparency</p>
              <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-4">
                What We Do <span className="text-destructive">Not</span> Do
              </h2>
              <p className="text-muted-foreground mb-8">
                To maintain full transparency, we want you to clearly understand the boundaries of our services.
              </p>
              <div className="space-y-3">
                {weDoNotItems.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border bg-card p-4 hover:shadow-sm transition-shadow">
                    <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay="[animation-delay:200ms]">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-lg">
                  <img src={carouselNetwork} alt="Independent network guidance" className="w-full aspect-square object-cover" />
                </div>
                <div className="absolute -bottom-4 -left-4 bg-card rounded-xl border p-4 shadow-lg max-w-[200px]">
                  <div className="flex items-center gap-2 mb-1">
                    <Shield className="h-4 w-4 text-primary" />
                    <span className="font-display text-xs font-bold text-foreground">Independent</span>
                  </div>
                  <p className="text-xs text-muted-foreground">No provider affiliation</p>
                </div>
              </div>
            </AnimatedSection>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-12 max-w-2xl mx-auto">
            Provider mentions are strictly informational. Users sometimes seek guidance related to services offered by providers such as Bell Canada™, Rogers Communications®, or Telus®. Our assistance is independent and informational only.
          </p>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-alt py-20 md:py-28">
        <div className="container max-w-4xl">
          <AnimatedSection className="text-center mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Simple Process</p>
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">How It Works</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: "01", title: "Reach Out", desc: "Call our independent assistance line or send us an email with your service-related question." },
              { step: "02", title: "Get Guidance", desc: "Our team provides general informational support to help you understand your options." },
              { step: "03", title: "Move Forward", desc: "Use the guidance to make informed decisions about your internet or cable TV services." },
            ].map((item, i) => (
              <AnimatedSection key={item.step} delay={`[animation-delay:${i * 150}ms]`}>
                <div className="text-center">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl hero-gradient text-primary-foreground font-display text-xl font-extrabold mb-5">
                    {item.step}
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={carouselFamily} alt="Canadian families we assist" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-foreground/80" />
        </div>
        <div className="container relative z-10 max-w-2xl text-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Need Independent Assistance?</h2>
            <p className="text-primary-foreground/75 mb-8 text-lg">
              Speak with our team for general guidance related to internet, broadband, Wi-Fi, or cable TV services.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a href="tel:+18886412045">
                <Button size="lg" variant="hero" className="gap-2 text-base px-8 h-13 rounded-xl">
                  <Phone className="h-4 w-4" /> Get Assistance
                </Button>
              </a>
              <a href="tel:+18886412045">
                <Button size="lg" className="gap-2 text-base px-8 h-13 rounded-xl border-2 border-primary-foreground/30 bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20 font-semibold backdrop-blur-sm">
                  Speak With Support
                </Button>
              </a>
            </div>
          </AnimatedSection>
          <DisclosureBanner className="mt-10" />
        </div>
      </section>
    </PageWrapper>
  );
};

export default Index;
