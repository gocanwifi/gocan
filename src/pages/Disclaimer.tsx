import PageWrapper from "@/components/PageWrapper";
import { AlertTriangle } from "lucide-react";

const items = [
  "NorthBridge Service Assist is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.",
  "Brand names mentioned on this website are used strictly for informational purposes. All trademarks belong to their respective owners.",
  "The information provided by NorthBridge Service Assist is for general informational guidance only. We do not guarantee the accuracy, completeness, or usefulness of any information provided.",
  "Users are encouraged to verify all information directly with their respective service providers. NorthBridge Service Assist is not responsible for any actions taken based on the information provided through our platform.",
  "Our service assistance fees are separate from any charges billed by telecom or cable service providers.",
];

const Disclaimer = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Disclaimer</h1>
        <p className="text-primary-foreground/70 text-sm">Last updated: March 2026</p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="space-y-4">
          {items.map((text, i) => (
            <div key={i} className="rounded-2xl border bg-card p-6 flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="h-8 w-8 rounded-lg bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Disclaimer;
