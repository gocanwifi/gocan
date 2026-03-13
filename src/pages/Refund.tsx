import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";

const Refund = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">Refund Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

        <DisclosureBanner className="mb-10" />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Refund Window</h2>
            <p>Refund requests can be submitted within <strong className="text-foreground">7 to 15 days</strong> of the service purchase date depending on the nature of the assistance provided.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Eligibility</h2>
            <p>Eligibility may vary based on whether assistance services have already been delivered. Please review the conditions below before submitting a refund request.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">How to Request a Refund</h2>
            <p>To submit a refund request, please contact us at <a href="mailto:support@northbridgeserviceassist.com" className="text-primary hover:underline">support@northbridgeserviceassist.com</a> or call <a href="tel:+18886412045" className="text-primary hover:underline">+1 (888) 641-2045</a>.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Processing</h2>
            <p>Refunds are processed after internal review. Processing times may vary depending on the payment method used and the nature of the assistance provided.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Important Note</h2>
            <p>NorthBridge Service Assist service fees are separate from any charges billed by your internet, broadband, or cable TV service provider. Refunds apply to NorthBridge Service Assist fees only.</p>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Refund;
