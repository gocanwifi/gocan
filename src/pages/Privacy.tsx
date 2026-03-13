import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";

const Privacy = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl prose prose-slate max-w-none">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-6">Privacy Policy</h1>
        <p className="text-muted-foreground text-sm mb-8">Last updated: March 2026</p>

        <DisclosureBanner className="mb-10" />

        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Secure Website</h2>
            <p>NorthBridge Service Assist operates a secure HTTPS website. All communications between your browser and our platform are encrypted using industry-standard SSL/TLS protocols.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Information Usage</h2>
            <p>Any information you provide to NorthBridge Service Assist is used solely for the purpose of delivering our independent assistance services. We do not use your information for any purpose beyond providing the guidance and support you have requested.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">No Sale of Personal Data</h2>
            <p>We do not sell, rent, or trade your personal data to any third party. Your information remains confidential and is used exclusively within our assistance services.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">No Collection of Provider Passwords</h2>
            <p>NorthBridge Service Assist does not request, collect, or store any passwords or sensitive login credentials related to your internet, broadband, or cable TV service providers.</p>
          </div>

          <div>
            <h2 className="font-display text-xl font-bold text-foreground mb-3">Cookies & Analytics</h2>
            <p>Our website may use standard cookies and analytics tools to improve your browsing experience. These tools help us understand how visitors use our platform so we can improve our services. Cookies do not collect personal identification information.</p>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Privacy;
