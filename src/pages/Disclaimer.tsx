import PageWrapper from "@/components/PageWrapper";
import { AlertTriangle, Shield, FileText, Ban, Info, AlertCircle, Scale, DollarSign } from "lucide-react";

const sections = [
  {
    icon: Shield,
    title: "Independent Third-Party Status",
    text: "Go Canada Wifi is an independent third-party service assistance provider operating since 2026. We are NOT an Internet Service Provider (ISP), cable television company, telecommunications provider, or utility company. We do not provide actual internet connectivity, broadband service, Wi-Fi infrastructure, cable TV broadcasting, or telecommunications services to consumers. We are not a subsidiary, affiliate, partner, or authorized representative of any internet, cable, or telecommunications provider. Our business operates independently, and we have no formal relationship, partnership agreement, or authorization from any service provider to act on their behalf. We provide general informational assistance, guidance, and support services to help consumers understand their connectivity options and navigate service-related concerns."
  },
  {
    icon: FileText,
    title: "Informational Purposes Only",
    text: "All information, guidance, advice, suggestions, and content provided by Go Canada Wifi through our website, phone support, email communications, or any other channel is for general informational and educational purposes only. The information provided should not be considered as professional technical advice, legal advice, financial advice, or a substitute for consultation with qualified professionals. While we strive to provide accurate and up-to-date information, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information, products, services, or related graphics contained on our website or provided through our assistance services. The information provided is based on general knowledge and may not account for specific circumstances, local market conditions, or individual situations."
  },
  {
    icon: Ban,
    title: "No Brand Affiliation or Endorsement",
    text: "Go Canada Wifi is not affiliated with, authorized by, endorsed by, sponsored by, or connected with any internet service provider, cable television company, telecommunications company, streaming service, or any brand operating in the connectivity services industry. Any mention of third-party provider names, brand names, product names, trademarks, service marks, trade names, logos, or proprietary identifiers on our website, in our communications, or during our assistance services is made strictly for informational, descriptive, and educational purposes only. Such references are necessary to help users understand their service options and to provide context for our guidance. These references do not imply any endorsement, recommendation, affiliation, partnership, or authorization from those providers. All trademarks, service marks, and trade names belong to their respective owners. We have not received authorization from any provider to use their marks beyond fair use for informational purposes."
  },
  {
    icon: Info,
    title: "No Guarantee of Accuracy",
    text: "While Go Canada Wifi makes reasonable efforts to provide accurate and current information, we do not guarantee the accuracy, completeness, timeliness, reliability, or usefulness of any information provided through our platform. Information about internet service providers, cable companies, service packages, pricing, availability, technical specifications, coverage areas, and promotional offers can change frequently without notice. Service provider policies, terms, conditions, and offerings may vary by region, location, and individual circumstances. We are not responsible for any errors, omissions, inaccuracies, or outdated information in our content. Users are strongly encouraged and advised to verify all information independently and directly with their respective service provider before making any decisions. We make no representations about the suitability of any service, provider, or offering for your particular needs or situation."
  },
  {
    icon: Scale,
    title: "No Liability for Decisions or Actions",
    text: "Go Canada Wifi is not responsible or liable for any decisions, actions, or outcomes resulting from the use of our information, guidance, or assistance services. Users acknowledge and agree that they bear full responsibility for verifying all information directly with service providers before making any commitments, purchases, or changes to their services. We are not liable for any direct, indirect, incidental, consequential, special, or punitive damages arising from: (a) your reliance on information provided through our services; (b) your interactions with any third-party service providers; (c) decisions made based on our guidance or recommendations; (d) any service disruptions, technical issues, or connectivity problems; (e) billing disputes with service providers; (f) contract terms or commitments entered into with service providers; (g) quality, speed, reliability, or availability of services from third-party providers. Any reliance you place on information obtained from Go Canada Wifi is strictly at your own risk."
  },
  {
    icon: DollarSign,
    title: "Separate Service Fees",
    text: "Go Canada Wifi charges service assistance fees for providing independent guidance, informational support, and general assistance services. These fees are completely SEPARATE from and IN ADDITION to any charges, subscription fees, installation costs, equipment fees, activation fees, or monthly service fees billed by your actual internet service provider, cable television provider, or telecommunications company. Our fees compensate Go Canada Wifi for the time, expertise, research, and assistance we provide to help you navigate service options and connectivity concerns. We do not receive any portion of the fees charged by internet or cable service providers to their customers. Similarly, service providers do not receive any portion of the fees we charge for our assistance services. When you engage our services, you may incur two separate sets of fees: (1) our assistance fees paid to Go Canada Wifi, and (2) service fees paid to your chosen internet or cable provider if you subscribe to their services. Our fees are non-refundable except as specifically outlined in our Refund Policy."
  },
  {
    icon: AlertCircle,
    title: "No Technical Support or Installation",
    text: "Go Canada Wifi does not provide direct technical support, troubleshooting services, equipment installation, service activation, network configuration, or hands-on technical assistance on behalf of any internet service provider, cable company, or telecommunications provider. We do not dispatch technicians, install modems or routers, activate service accounts, configure network settings, or perform physical installation work. Our assistance is limited to providing general informational guidance, answering questions, helping users understand their options, and offering advice on how to approach service-related concerns. For actual technical support, equipment installation, service activation, network troubleshooting, or account-specific assistance, you must contact your service provider directly or engage their authorized technical support channels. We are not responsible for any technical issues, service outages, equipment malfunctions, or connectivity problems experienced with any third-party provider's services."
  },
  {
    icon: AlertTriangle,
    title: "User Responsibility to Verify",
    text: "Users are solely responsible for verifying all information, pricing, service availability, contract terms, promotional offers, technical specifications, coverage areas, and service conditions directly with their respective service provider before making any commitments or decisions. You should independently research, contact providers, read contract terms, review service agreements, and confirm all details before subscribing to any service or making any changes to your existing services. Go Canada Wifi cannot and does not verify the current accuracy of provider information, pricing, or availability in real-time. Service provider offerings, prices, terms, and availability can change without notice. Do not rely solely on information provided by Go Canada Wifi when making important decisions about internet, cable, or telecommunications services. Always obtain written confirmation from your service provider regarding pricing, terms, and service commitments before proceeding."
  },
  {
    icon: FileText,
    title: "Changes and Updates to Disclaimer",
    text: "Go Canada Wifi reserves the right to update, modify, or revise this Disclaimer at any time without prior notice to reflect changes in our business practices, services, legal requirements, or for other operational reasons. When we make changes to this Disclaimer, we will update the 'Last Updated' date displayed at the top of this page. It is your responsibility to review this Disclaimer periodically for any changes. Your continued use of our website, services, or assistance platform following the posting of changes constitutes your acceptance of such changes. If you do not agree with any modifications to this Disclaimer, you must discontinue use of our services immediately. We encourage users to check this page regularly to stay informed about our disclaimers and limitations of liability. This Disclaimer should be read in conjunction with our Terms and Conditions, Privacy Policy, and other legal documents."
  }
];

const Disclaimer = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Disclaimer</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          This Disclaimer outlines important information about Go Canada Wifi's independent status, limitations, and user responsibilities. 
          Please read carefully before using our services.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Critical Notice Banner */}
        <div className="rounded-2xl border-2 border-amber-500/30 bg-amber-500/10 p-6 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-7 w-7 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Important Notice - Please Read</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Go Canada Wifi is an <strong>independent third-party service assistance provider</strong>. We are <strong>NOT</strong> an Internet Service Provider (ISP) 
                or cable company. We are not affiliated with any telecommunications provider. Our service assistance fees are separate from provider charges.
              </p>
              <p className="text-xs text-muted-foreground">
                All information provided is for general guidance only. Users must verify information directly with service providers before making any decisions or commitments.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div key={section.title} className="rounded-2xl border bg-card p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-xl bg-amber-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <section.icon className="h-5 w-5 text-amber-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold text-amber-600/60">{String(i + 1).padStart(2, "0")}</span>
                    <h2 className="font-display text-lg font-bold text-foreground">{section.title}</h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed whitespace-pre-line">{section.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Information */}
        <div className="mt-12 rounded-2xl border bg-card p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-3">Questions About This Disclaimer?</h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">
            If you have questions about this Disclaimer, our independent status, or the limitations of our services, please contact us:
          </p>
          <div className="flex flex-col gap-2 text-sm">
            <a href="tel:+18882657538" className="text-primary hover:underline">Phone: (888) 265-7538</a>
            <a href="mailto:support@gocanadawifi.com" className="text-primary hover:underline">Email: support@gocanadawifi.com</a>
          </div>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Disclaimer;
