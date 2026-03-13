import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Users, Eye, Heart, Shield, Target, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import aboutTeam from "@/assets/about-team.jpg";
import heroSupport from "@/assets/hero-support.jpg";
import carouselSupport from "@/assets/carousel-support.jpg";

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

const values = [
  { icon: Shield, title: "Independence", desc: "We operate independently of all telecom and cable service providers." },
  { icon: Eye, title: "Transparency", desc: "We clearly communicate what we do and what we do not do." },
  { icon: Heart, title: "Helpfulness", desc: "We aim to inform and guide users through service-related concerns." },
  { icon: Users, title: "Accessibility", desc: "We strive to make our assistance available to anyone who needs guidance." },
];

const milestones = [
  { year: "2026", text: "Go Canada Wifi launched as an independent assistance platform in Canada." },
  { year: "2026", text: "Assembled a dedicated team of independent service advisors." },
  { year: "2026", text: "Began assisting thousands of users with internet and cable TV guidance." },
];

const About = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img src={aboutTeam} alt="Go Canada Wifi team" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/75 to-foreground/50" />
      </div>
      <div className="container relative z-10 py-24 md:py-32">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-3 animate-fade-in">About Us</p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold text-primary-foreground leading-tight mb-5 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Independent Guidance,{" "}
            <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">Honest Assistance</span>
          </h1>
          <p className="text-lg text-primary-foreground/80 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Go Canada Wifi is an independent third-party service assistance platform launched in 2026, helping Canadians navigate internet, broadband, Wi-Fi, and cable TV services.
          </p>
        </div>
      </div>
    </section>

    {/* Mission split */}
    <section className="py-20 md:py-28">
      <div className="container">
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          <AnimatedSection>
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Mission</p>
            <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground mb-5">Helping Canadians Understand Their Connectivity Options</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our goal is to help users better understand internet, broadband, Wi-Fi, and cable TV services by providing general informational guidance and assistance.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              We support individuals who are seeking clarity about connectivity concerns, service processes, or general provider-related questions.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              We do not deliver internet services and we do not represent any telecom or cable provider. Our assistance is independent, transparent, and focused on providing helpful guidance.
            </p>
            <div className="flex flex-col gap-2">
              {["Independent third-party platform", "No telecom affiliation", "Transparent service fees", "General informational guidance"].map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>
          <AnimatedSection delay="[animation-delay:200ms]">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img src={heroSupport} alt="Our team at work" className="w-full aspect-[4/3] object-cover" />
              </div>
              <div className="absolute -top-4 -right-4 bg-card rounded-xl border p-4 shadow-lg">
                <div className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="font-display text-sm font-bold text-foreground">Est. 2026</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Canadian startup</p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>

    <DisclosureBanner className="container max-w-5xl mb-10" />

    {/* Values */}
    <section className="section-alt py-20 md:py-28">
      <div className="container max-w-5xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">What Drives Us</p>
          <h2 className="font-display text-3xl md:text-5xl font-extrabold text-foreground">Our Core Values</h2>
        </AnimatedSection>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <AnimatedSection key={v.title} delay={`[animation-delay:${i * 100}ms]`}>
              <div className="bg-card rounded-2xl border p-6 h-full hover:shadow-md transition-shadow text-center">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-display font-bold text-foreground mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="py-20 md:py-28">
      <div className="container max-w-3xl">
        <AnimatedSection className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">Our Journey</p>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-foreground">How We Started</h2>
        </AnimatedSection>
        <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:bottom-0 before:w-px before:bg-border">
          {milestones.map((m, i) => (
            <AnimatedSection key={i} delay={`[animation-delay:${i * 150}ms]`}>
              <div className="flex gap-6 items-start">
                <div className="h-12 w-12 rounded-full hero-gradient flex items-center justify-center flex-shrink-0 z-10 text-primary-foreground font-display text-xs font-bold">
                  {m.year}
                </div>
                <div className="bg-card rounded-xl border p-5 flex-1">
                  <p className="text-foreground text-sm leading-relaxed">{m.text}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Team photo CTA */}
    <section className="relative py-20 overflow-hidden">
      <div className="absolute inset-0">
        <img src={carouselSupport} alt="Our advisor" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>
      <div className="container relative z-10 text-center max-w-2xl">
        <AnimatedSection>
          <h2 className="font-display text-3xl md:text-4xl font-extrabold text-primary-foreground mb-4">Ready for Independent Guidance?</h2>
          <p className="text-primary-foreground/75 mb-6 text-lg">Our team is here to assist you with any internet or cable TV-related questions.</p>
          <a href="tel:+18886517421">
            <button className="hero-gradient text-primary-foreground font-semibold px-8 py-3 rounded-xl text-base hover:opacity-90 transition-opacity">
              Call Now (888) 651-7421
            </button>
          </a>
        </AnimatedSection>
      </div>
    </section>
  </PageWrapper>
);

export default About;
