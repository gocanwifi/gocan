import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Shield, Lock, Eye, Cookie, Server } from "lucide-react";

const sections = [
  { icon: Server, title: "Secure Website", text: "NorthBridge Service Assist operates a secure HTTPS website. All communications between your browser and our platform are encrypted using industry-standard SSL/TLS protocols." },
  { icon: Eye, title: "Information Usage", text: "Any information you provide to NorthBridge Service Assist is used solely for the purpose of delivering our independent assistance services. We do not use your information for any purpose beyond providing the guidance and support you have requested." },
  { icon: Shield, title: "No Sale of Personal Data", text: "We do not sell, rent, or trade your personal data to any third party. Your information remains confidential and is used exclusively within our assistance services." },
  { icon: Lock, title: "No Collection of Provider Passwords", text: "NorthBridge Service Assist does not request, collect, or store any passwords or sensitive login credentials related to your internet, broadband, or cable TV service providers." },
  { icon: Cookie, title: "Cookies & Analytics", text: "Our website may use standard cookies and analytics tools to improve your browsing experience. These tools help us understand how visitors use our platform so we can improve our services. Cookies do not collect personal identification information." },
];

const Privacy = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Privacy Policy</h1>
        <p className="text-primary-foreground/70 text-sm">Last updated: March 2026</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <DisclosureBanner className="mb-12" />

        <div className="space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Privacy;
