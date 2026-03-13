import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Clock, CheckCircle, Mail, Settings, AlertTriangle } from "lucide-react";

const sections = [
  { icon: Clock, title: "Refund Window", text: 'Refund requests can be submitted within 7 to 15 days of the service purchase date depending on the nature of the assistance provided.' },
  { icon: CheckCircle, title: "Eligibility", text: "Eligibility may vary based on whether assistance services have already been delivered. Please review the conditions below before submitting a refund request." },
  { icon: Mail, title: "How to Request a Refund", text: "To submit a refund request, please contact us at support@northbridgeserviceassist.com or call +1 (888) 641-2045.", hasLinks: true },
  { icon: Settings, title: "Processing", text: "Refunds are processed after internal review. Processing times may vary depending on the payment method used and the nature of the assistance provided." },
  { icon: AlertTriangle, title: "Important Note", text: "NorthBridge Service Assist service fees are separate from any charges billed by your internet, broadband, or cable TV service provider. Refunds apply to NorthBridge Service Assist fees only." },
];

const Refund = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Refund Policy</h1>
        <p className="text-primary-foreground/70 text-sm">Last updated: March 2026</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <DisclosureBanner className="mb-12" />

        {/* Highlight banner */}
        <div className="rounded-2xl hero-gradient p-6 mb-8 text-center">
          <p className="text-primary-foreground font-display font-bold text-lg">7 – 15 Day Refund Window</p>
          <p className="text-primary-foreground/80 text-sm mt-1">Depending on the nature of assistance provided</p>
        </div>

        <div className="space-y-6">
          {sections.map((s) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h2 className="font-display text-lg font-bold text-foreground mb-2">{s.title}</h2>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {s.hasLinks ? (
                      <>
                        To submit a refund request, please contact us at{" "}
                        <a href="mailto:support@northbridgeserviceassist.com" className="text-primary hover:underline">support@northbridgeserviceassist.com</a>{" "}
                        or call <a href="tel:+18886412045" className="text-primary hover:underline">+1 (888) 641-2045</a>.
                      </>
                    ) : s.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Refund;
