import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Shield, Lock, Eye, Globe, Server, Cookie, Database, UserCheck } from "lucide-react";

const sections = [
  { 
    icon: Database, 
    title: "Information We Collect", 
    text: "We collect personal information that you voluntarily provide when you contact us for assistance, including your name, email address, phone number, and details about your service inquiries. We collect this information when you reach out via phone at (888) 265-7538, email at support@trustournet.com, or through our website. We do NOT collect passwords, payment card details directly through forms, or information from your service provider accounts."
  },
  { 
    icon: Eye, 
    title: "How We Use Your Information", 
    text: "We use your information solely to provide our independent service assistance: responding to inquiries, communicating about your requests, processing service fees, improving our offerings, and complying with legal obligations. We do NOT use your information for unsolicited marketing, sell your data to third parties, or share it with service providers without your knowledge."
  },
  { 
    icon: Server, 
    title: "Security and Encryption", 
    text: "Our website operates using HTTPS with SSL/TLS encryption to protect data transmission. We implement security measures to protect against unauthorized access, maintain internal access controls, and conduct regular security assessments. However, no internet transmission is 100% secure. We retain your information only as long as necessary for our services or as required by law."
  },
  { 
    icon: Lock, 
    title: "No Collection of Provider Passwords", 
    text: "Trustournet never requests, collects, or stores passwords or login credentials for your internet, cable, or streaming service provider accounts. Our assistance services are designed to provide guidance without requiring access to your provider accounts. If anyone claiming to represent us asks for your passwords, do not provide them and report this immediately."
  },
  { 
    icon: Globe, 
    title: "No Tracking or Analytics", 
    text: "Our website does not use cookies for tracking, analytics tools, advertising pixels, or automated data collection. We do not collect IP addresses for tracking, monitor browsing patterns, use services like Google Analytics, implement tracking pixels, or participate in behavioral advertising. We provide our services without invasive tracking."
  },
  { 
    icon: Cookie, 
    title: "Cookie Policy", 
    text: "We do not use cookies for tracking, advertising, or analytics purposes. We do not store persistent cookies on your device to collect personal information or monitor your behavior. Our website operates without third-party advertising cookies or marketing cookies. Any essential functionality operates without persistent data storage on your device."
  },
  { 
    icon: Shield, 
    title: "No Sale of Personal Data", 
    text: "We do not sell, rent, or trade your personal information to any third party. Your information is used exclusively for our assistance services. We may share limited information only when required by law, to protect rights and safety, or with service providers bound by confidentiality obligations. We will notify you of any business transfers affecting your data."
  },
  { 
    icon: UserCheck, 
    title: "Your Privacy Rights", 
    text: "Under applicable privacy laws (including PIPEDA in Canada and applicable US state and federal privacy regulations), you may have rights to access, correct, delete, or restrict processing of your personal information. You can withdraw consent, request data portability, or lodge complaints with privacy authorities. To exercise these rights, contact us using the information below. We respond to requests within 30 days in accordance with applicable law."
  },
];

const Privacy = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Privacy Policy</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          This Privacy Policy describes how Trustournet collects, uses, and protects your personal information.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <DisclosureBanner className="mb-12" />

        {/* Quick Summary */}
        <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 mb-10">
          <h2 className="font-display text-xl font-bold text-foreground mb-3">Privacy at a Glance</h2>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2"><span className="text-primary">✓</span> We only collect information you voluntarily provide</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> We never sell your personal data to third parties</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> We don't use tracking cookies or analytics tools</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> We never collect your service provider passwords</li>
            <li className="flex gap-2"><span className="text-primary">✓</span> Your data is encrypted and securely protected</li>
          </ul>
        </div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 rounded-2xl border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-3">Questions About Privacy?</h3>
          <p className="text-muted-foreground text-sm mb-4">
            Contact us to exercise your privacy rights or ask questions about this policy:
          </p>
          <div className="flex flex-wrap gap-4 text-sm">
            <a href="mailto:support@trustournet.com" className="text-primary hover:underline">support@trustournet.com</a>
            <a href="tel:+18882657538" className="text-primary hover:underline">(888) 265-7538</a>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Privacy;
