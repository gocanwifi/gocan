import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Clock, CheckCircle, Mail, Settings, AlertTriangle, XCircle, FileText, DollarSign, Phone, Info } from "lucide-react";

const sections = [
  { 
    icon: Clock, 
    title: "Refund Time Window", 
    text: "Refund requests must be submitted within 7 to 15 days of service purchase or delivery, depending on the assistance provided: Basic guidance (7 days), Extended support (10 days), Comprehensive packages (15 days). Requests after the deadline may not be considered. Submit requests early within the window for best results."
  },
  { 
    icon: CheckCircle, 
    title: "Eligibility Criteria", 
    text: "Refunds may be considered if: services weren't provided as described, you didn't receive paid assistance due to our error, significant quality issues occurred, or technical problems prevented delivery. Refunds generally NOT available for: fully completed services, change of mind after receiving help, dissatisfaction with your own decisions, issues with third-party providers, or late requests."
  },
  { 
    icon: Mail, 
    title: "How to Request a Refund", 
    text: "Email support@trustournet.com with subject 'Refund Request' including: your name, contact info, service date, description of services, and reason for refund. Or call (888) 265-7538 with your service details ready. Provide detailed information about your situation to help us process your request efficiently."
  },
  { 
    icon: Settings, 
    title: "Processing Timeline", 
    text: "Review process: Initial review (1-3 days), detailed evaluation (3-5 days), decision notification (1-2 days), refund processing if approved (5-10 days). Total time typically 10-20 business days. Refunds processed to original payment method. Credit cards may take additional time; bank transfers 3-7 days."
  },
  { 
    icon: DollarSign, 
    title: "Important Notes", 
    text: "This policy applies ONLY to Trustournet service fees, NOT to charges from internet/cable providers. Partial refunds may be offered based on circumstances. Fees for fully delivered services are typically non-refundable. Contact us before initiating chargebacks. All refund decisions made at our discretion."
  },
  { 
    icon: AlertTriangle, 
    title: "What We Cannot Refund", 
    text: "We cannot refund: fees billed by ISPs or cable companies, provider subscription fees, installation/equipment charges from providers, or early termination fees. For provider-related refunds, contact them directly. Our refund policy covers only Trustournet assistance fees."
  }
];

const Refund = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Refund Policy</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          This policy outlines the conditions under which refunds may be requested for Trustournet service assistance fees. 
          Please read carefully to understand your refund rights and our refund process.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <DisclosureBanner className="mb-12" />

        {/* Refund Window Highlight */}
        <div className="rounded-2xl hero-gradient p-8 mb-10 text-center">
          <Clock className="h-12 w-12 text-primary-foreground mx-auto mb-4" />
          <p className="text-primary-foreground font-display font-bold text-2xl mb-2">7 – 15 Day Refund Window</p>
          <p className="text-primary-foreground/80 text-sm">Depending on the nature and extent of assistance provided</p>
          <p className="text-primary-foreground/70 text-xs mt-3 max-w-md mx-auto">
            Submit your refund request within the applicable timeframe for consideration. Requests are reviewed individually.
          </p>
        </div>

        {/* Quick Guide */}
        <div className="rounded-2xl border-2 border-primary/20 bg-primary/5 p-6 mb-10">
          <h2 className="font-display text-lg font-bold text-foreground mb-4">Quick Refund Request Guide</h2>
          <ol className="space-y-2 text-sm text-muted-foreground">
            <li className="flex gap-2">
              <span className="text-primary font-bold">1.</span>
              <span>Check if your request is within the 7-15 day refund window</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">2.</span>
              <span>Review eligibility criteria to ensure your situation qualifies</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">3.</span>
              <span>Contact us via email or phone with detailed information</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">4.</span>
              <span>Our team reviews your request (typically 5-10 business days)</span>
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">5.</span>
              <span>If approved, refund is processed within 5-10 business days</span>
            </li>
          </ol>
        </div>

        <div className="space-y-6">
          {sections.map((s, i) => (
            <div key={s.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-primary/60">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-lg font-bold text-foreground">{s.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact for Refunds */}
        <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-card p-8">
          <div className="flex items-start gap-4 mb-6">
            <Phone className="h-6 w-6 text-primary flex-shrink-0" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Submit a Refund Request</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                To request a refund for Trustournet service assistance fees, please contact us using one of the methods below:
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-foreground mb-1">Email</p>
              <a href="mailto:support@trustournet.com" className="text-primary hover:underline block mb-2">support@trustournet.com</a>
              <p className="text-xs text-muted-foreground">Include "Refund Request" in subject line</p>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <a href="tel:+18882657538" className="text-primary hover:underline block mb-2">(888) 265-7538</a>
              <p className="text-xs text-muted-foreground">Available 24/7 for assistance</p>
            </div>
          </div>
          <p className="text-xs text-muted-foreground mt-4">
            Please have your service details and payment information ready when contacting us. We typically respond to refund requests within 1-3 business days.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Refund;
