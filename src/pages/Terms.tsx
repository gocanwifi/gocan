import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";

const Terms = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">Terms & Conditions</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

        <DisclosureBanner className="mb-10" />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Agreement to Terms</h2>
            <p>By accessing or using the NorthBridge Service Assist website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Nature of Services</h2>
            <p>NorthBridge Service Assist is an independent third-party service assistance provider. We provide general informational guidance and assistance related to internet, broadband, Wi-Fi, and cable TV services. We are not an Internet Service Provider (ISP) and we do not sell internet or cable subscriptions.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">No Affiliation</h2>
            <p>NorthBridge Service Assist is not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or streaming service provider. Any references to third-party providers are made solely for informational purposes.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Service Fees</h2>
            <p>Our service assistance fees are separate from any charges billed by your internet or cable TV service provider. Fees charged by NorthBridge Service Assist are for the general guidance and informational support we provide.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Limitation of Liability</h2>
            <p>NorthBridge Service Assist provides general informational guidance only. We do not guarantee specific outcomes or results. We are not responsible for any decisions you make based on the guidance provided through our platform.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Changes to Terms</h2>
            <p>We reserve the right to update these Terms and Conditions at any time. Continued use of our services after changes are posted constitutes your acceptance of the revised terms.</p>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Terms;
