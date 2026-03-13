import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Users, Eye, Heart, Shield } from "lucide-react";

const values = [
  { icon: Shield, title: "Independence", desc: "We operate independently of all telecom and cable service providers." },
  { icon: Eye, title: "Transparency", desc: "We clearly communicate what we do and what we do not do." },
  { icon: Heart, title: "Helpfulness", desc: "We aim to inform and guide users through service-related concerns." },
  { icon: Users, title: "Accessibility", desc: "We strive to make our assistance available to anyone who needs guidance." },
];

const About = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">About NorthBridge Service Assist</h1>
        <p className="text-lg text-muted-foreground leading-relaxed mb-6">
          NorthBridge Service Assist is an independent third-party service assistance platform launched in 2026.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          Our goal is to help users better understand internet, broadband, Wi-Fi, and cable TV services by providing general informational guidance and assistance.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We support individuals who are seeking clarity about connectivity concerns, service processes, or general provider-related questions.
        </p>
        <p className="text-muted-foreground leading-relaxed mb-6">
          We do not deliver internet services and we do not represent any telecom or cable provider. Our assistance is independent, transparent, and focused on providing helpful guidance.
        </p>

        <DisclosureBanner className="my-10" />

        <h2 className="font-display text-2xl font-bold text-foreground mb-6">Our Values</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {values.map((v) => (
            <div key={v.title} className="rounded-xl border bg-card p-5 flex gap-4">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <v.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{v.title}</h3>
                <p className="text-sm text-muted-foreground">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default About;
