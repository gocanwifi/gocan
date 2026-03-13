import PageWrapper from "@/components/PageWrapper";

const Disclaimer = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">Disclaimer</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

        <div className="space-y-6 text-muted-foreground leading-relaxed">
          <p>
            NorthBridge Service Assist is an independent third-party service assistance provider. We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider.
          </p>
          <p>
            Brand names mentioned on this website are used strictly for informational purposes. All trademarks belong to their respective owners.
          </p>
          <p>
            The information provided by NorthBridge Service Assist is for general informational guidance only. We do not guarantee the accuracy, completeness, or usefulness of any information provided.
          </p>
          <p>
            Users are encouraged to verify all information directly with their respective service providers. NorthBridge Service Assist is not responsible for any actions taken based on the information provided through our platform.
          </p>
          <p>
            Our service assistance fees are separate from any charges billed by telecom or cable service providers.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Disclaimer;
