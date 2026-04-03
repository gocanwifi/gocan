import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { FileText, AlertCircle, DollarSign, Scale, RefreshCw, ShieldCheck, Ban, Gavel } from "lucide-react";

const sections = [
  { 
    icon: FileText, 
    title: "Agreement to Terms", 
    text: "By accessing or using the Trustournet website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately. You represent that you are at least 18 years of age and have the legal capacity to enter into this agreement."
  },
  { 
    icon: ShieldCheck, 
    title: "Nature of Services", 
    text: "Trustournet is an independent third-party service assistance provider established in 2026. We provide general informational guidance and support related to internet, broadband, Wi-Fi, and cable TV services. We are NOT an ISP, telecommunications company, or cable provider. We do not provide actual internet connectivity, install equipment, or activate services. Our role is limited to providing independent guidance and informational assistance."
  },
  { 
    icon: AlertCircle, 
    title: "No Affiliation or Authorization", 
    text: "Trustournet is NOT affiliated with, authorized by, endorsed by, or connected with any internet service provider, cable company, or telecommunications provider. We have no partnership or agency relationship with any ISP. References to third-party provider names are made solely for informational purposes and do not imply endorsement or affiliation. We are not responsible for the actions, services, or billing practices of any third-party provider."
  },
  { 
    icon: DollarSign, 
    title: "Service Fees and Payment", 
    text: "Trustournet charges service assistance fees for providing independent guidance and support. These fees are SEPARATE from and IN ADDITION to any charges billed by your actual service provider. Our fees compensate us for our time and expertise. Payment may be required before, during, or after service delivery. Fees are non-refundable except as outlined in our Refund Policy. You are responsible for providing accurate billing information."
  },
  { 
    icon: Ban, 
    title: "User Conduct and Intellectual Property", 
    text: "You agree to use our services only for lawful purposes. You may not impersonate us, transmit malware, attempt unauthorized access, use automated bots, provide false information, or abuse our staff. Our website content, including text, graphics, logos, and design, is protected by intellectual property laws. You are granted a limited license for personal use only. Unauthorized use terminates this permission."
  },
  { 
    icon: Scale, 
    title: "Disclaimers and Limitation of Liability", 
    text: "OUR SERVICES ARE PROVIDED 'AS IS' WITHOUT WARRANTIES OF ANY KIND. We do not guarantee accuracy, completeness, or specific outcomes. We provide general informational guidance only. TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE ARE NOT LIABLE FOR ANY INDIRECT, INCIDENTAL, OR CONSEQUENTIAL DAMAGES. Our total liability shall not exceed the amount you paid us in the three months prior to any claim."
  },
  { 
    icon: Gavel, 
    title: "Governing Law and Disputes", 
    text: "These Terms are governed by the laws of Canada and the applicable province. Any legal proceedings must be instituted in Canadian courts. You consent to this jurisdiction. Before initiating legal action, parties agree to attempt good faith negotiation. If any provision is found unenforceable, the remaining terms remain in full force."
  },
  { 
    icon: RefreshCw, 
    title: "Modifications and Termination", 
    text: "We reserve the right to modify these Terms at any time. Changes will be posted with an updated date. Your continued use after changes constitutes acceptance. We may suspend or terminate your access for any reason, including breach of these Terms. Termination provisions, warranty disclaimers, and liability limitations survive termination."
  },
];

const Terms = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Terms & Conditions</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          Please read these Terms carefully before using Trustournet. By using our services, you agree to be bound by these terms.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <DisclosureBanner className="mb-12" />

        {/* Important Notice */}
        <div className="rounded-2xl border-2 border-amber-500/20 bg-amber-500/5 p-6 mb-10">
          <div className="flex items-start gap-3">
            <AlertCircle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Binding Agreement</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These Terms constitute a legally binding agreement. By using our services, you accept all terms outlined below.
              </p>
            </div>
          </div>
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

        {/* Contact */}
        <div className="mt-12 rounded-2xl border bg-muted/50 p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-3">Questions About These Terms?</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Contact us at <a href="mailto:support@trustournet.com" className="text-primary hover:underline">support@trustournet.com</a> or 
            call <a href="tel:+18882657538" className="text-primary hover:underline">(888) 265-7538</a>.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Terms;
