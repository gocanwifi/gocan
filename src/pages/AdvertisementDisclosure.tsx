import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Megaphone, Shield, AlertCircle, DollarSign, Ban, Eye, Info } from "lucide-react";

const sections = [
  { 
    icon: Shield, 
    title: "Independent Service Provider", 
    text: "Trustournet is an independent third-party service assistance provider established in 2026. We are NOT an ISP, cable company, or telecommunications provider. We do not own networks, provide connectivity, or deliver internet/cable services. We operate independently across Canada and the United States with no ownership ties to any service provider. Our business focuses exclusively on providing informational guidance and assistance to users in Canada and the USA."
  },
  { 
    icon: AlertCircle, 
    title: "No Brand Affiliation", 
    text: "We are NOT affiliated with, authorized by, endorsed by, or partnered with any internet, cable, or telecommunications provider. We have no partnership agreements, reseller arrangements, or authorization to represent any provider. References to provider names, trademarks, or logos are made strictly for informational purposes to help users understand options. These do not imply endorsement, sponsorship, or affiliation."
  },
  { 
    icon: Megaphone, 
    title: "Nature of Content", 
    text: "Our content includes references to various providers, services, pricing, and features as general information to help users understand available services. This content is informational and educational, not advertising or promotion. We do not receive compensation, commissions, referral fees, or advertising revenue from providers for mentioning their services or displaying information. Our content is neutral and educational rather than sales-oriented."
  },
  { 
    icon: DollarSign, 
    title: "Revenue Model", 
    text: "We generate revenue exclusively through service assistance fees charged directly to users who engage our guidance services. These fees are SEPARATE from and IN ADDITION to provider charges. We are paid for our time and expertise in helping you understand options. We do NOT receive any revenue from service providers. There is no revenue sharing, commission structure, or financial relationship between us and any ISP or cable company."
  },
  { 
    icon: Ban, 
    title: "No Commission or Referral Fees", 
    text: "We do NOT operate on a commission or referral fee model. We receive no compensation when users contact providers, subscribe to services, or sign contracts. We are not part of affiliate programs or lead generation systems. We don't sell leads or share customer info with providers for marketing. Our business model is based entirely on charging users directly for independent assistance, ensuring unbiased guidance."
  },
  { 
    icon: Eye, 
    title: "Transparency Commitment", 
    text: "We are committed to transparency and providing balanced, unbiased information. We do not have hidden financial incentives that bias recommendations. We maintain independence so users can trust our assistance. If our business model changes in the future (e.g., entering advertising or affiliate arrangements), we will immediately update this disclosure and clearly identify any sponsored content."
  },
  { 
    icon: Info, 
    title: "User Responsibility", 
    text: "Users must verify all information, pricing, availability, and contract terms directly with service providers before making commitments. Provider offerings and prices change frequently. We cannot guarantee current accuracy. Always obtain direct confirmation from providers. Read all contracts carefully. All contractual relationships are directly between you and your chosen provider, with no involvement from Trustournet."
  },
];

const AdvertisementDisclosure = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Advertisement Disclosure</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          This disclosure provides complete transparency about Trustournet's business model, revenue sources, 
          and relationships (or lack thereof) with internet service providers and cable companies.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <DisclosureBanner className="mb-12" />

        {/* Critical Transparency Notice */}
        <div className="rounded-2xl border-2 border-primary/30 bg-primary/10 p-8 mb-10">
          <div className="flex items-start gap-4 mb-4">
            <Megaphone className="h-8 w-8 text-primary flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-xl font-bold text-foreground mb-2">Complete Transparency Statement</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                Trustournet operates as an <strong>independent third-party service assistance provider</strong>. We want to be completely transparent 
                about our business model and how we generate revenue:
              </p>
            </div>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground pl-12">
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> We are NOT affiliated with any ISP or cable company</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> We do NOT receive commissions or referral fees from providers</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> We do NOT participate in affiliate or partner programs</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> We generate revenue exclusively through service assistance fees paid directly by users</li>
            <li className="flex gap-2"><span className="text-primary font-bold">•</span> All service fees are separate from provider charges and clearly disclosed</li>
          </ul>
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

        {/* Contact Section */}
        <div className="mt-12 rounded-2xl border-2 border-primary/20 bg-card p-8">
          <h3 className="font-display text-xl font-bold text-foreground mb-3 flex items-center gap-2">
            <Info className="h-5 w-5 text-primary" />
            Questions About This Disclosure?
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6">
            If you have questions about this Advertisement Disclosure, our business model, revenue sources, independence status, 
            or any aspect of how we operate, we encourage you to contact us. We are committed to complete transparency and are 
            happy to discuss our business practices openly.
          </p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-foreground mb-1">Phone</p>
              <a href="tel:+18882657538" className="text-primary hover:underline block">(888) 265-7538</a>
            </div>
            <div className="rounded-lg bg-muted/50 p-4">
              <p className="font-semibold text-foreground mb-1">Email</p>
              <a href="mailto:support@trustournet.com" className="text-primary hover:underline block">support@trustournet.com</a>
            </div>
          </div>
        </div>

        {/* Final Notice */}
        <div className="mt-8 rounded-xl border bg-muted/50 p-6 text-center">
          <p className="text-xs text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            This Advertisement Disclosure is an integral part of our commitment to transparency and should be read together with our 
            Terms and Conditions, Privacy Policy, Disclaimer, and Refund Policy. By using our services, you acknowledge that you have 
            read and understood this disclosure and the independent nature of our business operations.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default AdvertisementDisclosure;
