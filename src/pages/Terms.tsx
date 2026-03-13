import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { FileText, AlertCircle, DollarSign, Scale, RefreshCw, ShieldCheck } from "lucide-react";

const sections = [
  { icon: FileText, title: "Agreement to Terms", text: "By accessing or using the Go Canada Wifi website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services." },
  { icon: ShieldCheck, title: "Nature of Services", text: "Go Canada Wifi is an independent third-party service assistance provider. We provide general informational guidance and assistance related to internet, broadband, Wi-Fi, and cable TV services. We are not an Internet Service Provider (ISP) and we do not sell internet or cable subscriptions." },
  { icon: AlertCircle, title: "No Affiliation", text: "Go Canada Wifi is not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or streaming service provider. Any references to third-party providers are made solely for informational purposes." },
  { icon: DollarSign, title: "Service Fees", text: "Our service assistance fees are separate from any charges billed by your internet or cable TV service provider. Fees charged by Go Canada Wifi are for the general guidance and informational support we provide." },
  { icon: Scale, title: "Limitation of Liability", text: "Go Canada Wifi provides general informational guidance only. We do not guarantee specific outcomes or results. We are not responsible for any decisions you make based on the guidance provided through our platform." },
  { icon: RefreshCw, title: "Changes to Terms", text: "We reserve the right to update these Terms and Conditions at any time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms." },
];

const Terms = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Terms & Conditions</h1>
        <p className="text-primary-foreground/70 text-sm">Last updated: March 2026</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <DisclosureBanner className="mb-12" />

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-bold text-primary">{String(i + 1).padStart(2, "0")}</span>
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

export default Terms;
