import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { FileText, AlertCircle, DollarSign, Scale, RefreshCw, ShieldCheck, Ban, Gavel } from "lucide-react";

const sections = [
  { 
    icon: FileText, 
    title: "Agreement to Terms", 
    text: "By accessing or using the Go Canada Wifi website and services, you agree to be bound by these Terms and Conditions. If you do not agree, please discontinue use immediately. You represent that you are at least 18 years of age and have the legal capacity to enter into this agreement."
  },
  { 
    icon: ShieldCheck, 
    title: "Nature of Services", 
    text: "Go Canada Wifi is an independent third-party service assistance provider established in 2026. We provide general informational guidance and support related to internet, broadband, Wi-Fi, and cable TV services. We are NOT an ISP, telecommunications company, or cable provider. We do not provide actual internet connectivity, install equipment, or activate services. Our role is limited to providing independent guidance and informational assistance."
  },
  { 
    icon: AlertCircle, 
    title: "No Affiliation or Authorization", 
    text: "Go Canada Wifi is NOT affiliated with, authorized by, endorsed by, or connected with any internet service provider, cable company, or telecommunications provider. We have no partnership or agency relationship with any ISP. References to third-party provider names are made solely for informational purposes and do not imply endorsement or affiliation. We are not responsible for the actions, services, or billing practices of any third-party provider."
  },
  { 
    icon: DollarSign, 
    title: "Service Fees and Payment", 
    text: "Go Canada Wifi charges service assistance fees for providing independent guidance and support. These fees are SEPARATE from and IN ADDITION to any charges billed by your actual service provider. Our fees compensate us for our time and expertise. Payment may be required before, during, or after service delivery. Fees are non-refundable except as outlined in our Refund Policy. You are responsible for providing accurate billing information."
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
          Please read these Terms carefully before using Go Canada Wifi. By using our services, you agree to be bound by these terms.
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
            Contact us at <a href="mailto:support@gocanadawifi.com" className="text-primary hover:underline">support@gocanadawifi.com</a> or 
            call <a href="tel:+18882657538" className="text-primary hover:underline">(888) 265-7538</a>.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Terms;

const sections = [
  { 
    icon: FileText, 
    title: "Agreement to Terms", 
    text: "By accessing, browsing, or using the Go Canada Wifi website (gocanadawifi.com) and services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions, as well as our Privacy Policy and other policies referenced herein. These terms constitute a legally binding agreement between you ('User', 'you', or 'your') and Go Canada Wifi ('we', 'us', or 'our'). If you do not agree with any part of these terms, you must immediately discontinue use of our website and services. Your continued use of our services following the posting of revised terms means that you accept and agree to the changes. You represent and warrant that you are at least 18 years of age and have the legal capacity to enter into this agreement. If you are accessing our services on behalf of a business or entity, you represent that you have the authority to bind that entity to these terms."
  },
  { 
    icon: ShieldCheck, 
    title: "Nature of Services", 
    text: "Go Canada Wifi is an independent third-party service assistance provider established in 2026. We provide general informational guidance, assistance, and support related to internet, broadband, Wi-Fi, and cable TV services for consumers across Canada. Our services are strictly informational and educational in nature. We are NOT an Internet Service Provider (ISP), telecommunications company, cable television provider, or utility company. We do not provide actual internet connectivity, broadband service, Wi-Fi infrastructure, or cable TV broadcasting. We do not install equipment, activate services, or provide technical support on behalf of any service provider. Our role is limited to providing independent guidance, answering questions, helping users understand their options, and offering general assistance related to connectivity and service-related concerns. We do not sell internet subscriptions, cable packages, or any telecommunications services directly to consumers."
  },
  { 
    icon: AlertCircle, 
    title: "No Affiliation or Authorization", 
    text: "Go Canada Wifi operates as an independent third-party assistance platform and is NOT affiliated with, authorized by, endorsed by, sponsored by, or connected with any internet service provider, cable television company, telecommunications provider, or streaming service. We have no formal partnership, agency relationship, reseller agreement, or authorization from any ISP or cable company to act on their behalf. Any references to third-party provider names, brand names, trademarks, service marks, logos, or service offerings on our website are made solely for informational, descriptive, and educational purposes to help users understand their options. These references do not imply endorsement, affiliation, or authorization from those providers. Users should verify all information directly with their chosen service provider. We are not responsible for the actions, services, billing practices, policies, or customer service of any third-party internet, cable, or telecommunications provider."
  },
  { 
    icon: DollarSign, 
    title: "Service Fees and Payment", 
    text: "Go Canada Wifi charges service assistance fees for providing independent informational guidance and support services. These fees are SEPARATE from and IN ADDITION to any charges, subscription fees, installation costs, or monthly service fees billed by your actual internet, broadband, cable TV, or telecommunications service provider. Our fees compensate us for the time, expertise, research, and assistance we provide to help you understand service options, navigate provider processes, troubleshoot connectivity concerns, and access general informational support. Payment for our services may be required before, during, or after service delivery depending on the nature of assistance provided. All fees are disclosed prior to service delivery. Fees are non-refundable except as specifically outlined in our Refund Policy. We accept payment via methods specified during the service engagement. You are responsible for providing accurate billing information and for all charges incurred under your account. Failure to pay fees may result in suspension or termination of service assistance."
  },
  { 
    icon: UserX, 
    title: "User Conduct and Prohibited Activities", 
    text: "You agree to use our services only for lawful purposes and in accordance with these Terms. You agree NOT to: (a) Use our services in any way that violates any applicable federal, provincial, or local law or regulation; (b) Engage in any conduct that restricts or inhibits anyone's use or enjoyment of our services; (c) Impersonate or attempt to impersonate Go Canada Wifi, our employees, another user, or any other person or entity; (d) Transmit any advertising, promotional materials, junk mail, spam, chain letters, or any other form of unsolicited communication; (e) Use our services to transmit viruses, malware, or any other malicious code; (f) Attempt to gain unauthorized access to our systems, servers, or networks; (g) Interfere with or disrupt our services or servers; (h) Use automated systems such as bots, scrapers, or robots to access our services without permission; (i) Provide false, misleading, or inaccurate information when requesting assistance; (j) Abuse, harass, threaten, or intimidate our staff or representatives. Violation of these prohibited activities may result in immediate termination of your access to our services and potential legal action."
  },
  { 
    icon: Ban, 
    title: "Intellectual Property Rights", 
    text: "The content, features, and functionality of the Go Canada Wifi website, including but not limited to text, graphics, logos, images, design, layout, compilation, and software, are owned by Go Canada Wifi and are protected by Canadian and international copyright, trademark, patent, trade secret, and other intellectual property laws. Our trademarks, service marks, and logos may not be used without our prior written consent. You are granted a limited, non-exclusive, non-transferable, revocable license to access and use our website and services for personal, non-commercial purposes in accordance with these Terms. You may not: reproduce, distribute, modify, create derivative works of, publicly display, republish, download, store, or transmit any material from our website, except as necessary for personal use. You may not frame or utilize framing techniques to enclose any trademark, logo, or other proprietary information without express written consent. Any unauthorized use terminates the permission granted by these Terms."
  },
  { 
    icon: Scale, 
    title: "Disclaimer of Warranties", 
    text: "OUR SERVICES ARE PROVIDED ON AN 'AS IS' AND 'AS AVAILABLE' BASIS WITHOUT ANY WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. To the fullest extent permitted by law, Go Canada Wifi disclaims all warranties, express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, completeness, or reliability of content. We do not warrant that: (a) Our services will be uninterrupted, timely, secure, or error-free; (b) The information or guidance provided will be accurate, reliable, complete, or current; (c) Any defects or errors will be corrected; (d) Our services are free of viruses or harmful components; (e) The results obtained from using our services will meet your requirements or expectations. We provide general informational assistance only and do not guarantee specific outcomes, successful resolution of service issues, cost savings, or any particular result from following our guidance. Users must make their own independent decisions and verify all information with their service providers."
  },
  { 
    icon: AlertTriangle, 
    title: "Limitation of Liability", 
    text: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL GO CANADA WIFI, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM: (a) Your access to or use of or inability to access or use our services; (b) Any conduct or content of any third party on our services; (c) Any information or guidance obtained through our services; (d) Unauthorized access, use, or alteration of your transmissions or content; (e) Decisions made based on our guidance or information. Our total liability for any claims arising from your use of our services shall not exceed the amount you paid to Go Canada Wifi for services in the three months prior to the claim. Some jurisdictions do not allow the exclusion of certain warranties or limitations on liability, so some of the above limitations may not apply to you."
  },
  { 
    icon: Gavel, 
    title: "Indemnification", 
    text: "You agree to defend, indemnify, and hold harmless Go Canada Wifi, its affiliates, licensors, employees, agents, and representatives from and against any and all claims, damages, obligations, losses, liabilities, costs, debt, and expenses (including but not limited to attorney's fees) arising from: (a) Your use of or access to our services; (b) Your violation of any term of these Terms and Conditions; (c) Your violation of any third-party right, including without limitation any copyright, property, or privacy right; (d) Any claim that your use of our services caused damage to a third party; (e) Your conduct in connection with our services. This indemnification obligation will survive termination of these Terms and your use of our services. We reserve the right to assume the exclusive defense and control of any matter subject to indemnification by you, in which event you will cooperate with us in asserting any available defenses."
  },
  { 
    icon: Info, 
    title: "Third-Party Services and Links", 
    text: "Our website may contain links to third-party websites, services, or resources including internet service provider websites, cable company portals, telecommunications provider sites, and other external resources provided solely for your convenience and informational purposes. These links do not imply endorsement, sponsorship, or recommendation of the third-party services. We have no control over and assume no responsibility for the content, accuracy, privacy policies, practices, or opinions expressed on any third-party websites or services. You acknowledge and agree that Go Canada Wifi shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods, or services available on or through any third-party websites or services. When you leave our website, we strongly advise you to read the terms and conditions and privacy policy of every website you visit. Your interactions with third-party service providers are solely between you and such providers."
  },
  { 
    icon: CheckCircle, 
    title: "Dispute Resolution and Governing Law", 
    text: "These Terms and Conditions shall be governed by and construed in accordance with the laws of Canada and the province in which Go Canada Wifi operates, without regard to conflict of law principles. Any legal action or proceeding arising out of or relating to these Terms or your use of our services shall be instituted exclusively in the courts of competent jurisdiction in Canada. You consent to the personal jurisdiction of such courts and waive any objection to venue. Before initiating any formal legal proceedings, the parties agree to attempt to resolve disputes through good faith negotiation. If the dispute cannot be resolved through negotiation within thirty (30) days, either party may pursue available legal remedies. In the event of any dispute, the prevailing party shall be entitled to recover its reasonable attorney's fees and costs. If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited or eliminated to the minimum extent necessary so that these Terms shall otherwise remain in full force and effect."
  },
  { 
    icon: RefreshCw, 
    title: "Modifications and Updates", 
    text: "We reserve the right to modify, update, revise, or replace these Terms and Conditions at any time at our sole discretion. Changes may be made to reflect changes in our services, legal requirements, business practices, or for other operational reasons. When we make changes to these terms, we will update the 'Last Updated' date at the top of this page and post the revised terms on our website. If we make material changes that significantly affect your rights or obligations, we will provide additional notice by posting a prominent announcement on our website or sending an email to registered users. It is your responsibility to review these Terms periodically for changes. Your continued use of our services following the posting of revised Terms means that you accept and agree to the changes. If you do not agree to the modified terms, you must stop using our services. We recommend checking this page regularly to stay informed of any updates."
  },
  { 
    icon: Ban, 
    title: "Termination", 
    text: "We reserve the right to suspend or terminate your access to our services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Terms and Conditions. Upon termination, your right to use our services will immediately cease. If you wish to terminate your relationship with Go Canada Wifi, you may simply discontinue using our services. All provisions of these Terms which by their nature should survive termination shall survive, including without limitation ownership provisions, warranty disclaimers, indemnification obligations, and limitations of liability. Termination does not relieve you of any obligations to pay fees incurred prior to termination. We are not liable to you or any third party for any termination of your access to our services. If your access is terminated for breach of these Terms, you may not re-register or access our services through any means without our express written permission."
  },
];

const Terms = () => (
  <PageWrapper>
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-4xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Terms & Conditions</h1>
        <p className="text-primary-foreground/70 text-sm mb-4">Last updated: March 2026</p>
        <p className="text-primary-foreground/80 text-base leading-relaxed max-w-3xl">
          Please read these Terms and Conditions carefully before using the Go Canada Wifi website and services. By accessing or using our services, you agree to be bound by these terms.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-4xl">
        <DisclosureBanner className="mb-12" />

        {/* Important Notice */}
        <div className="rounded-2xl border-2 border-amber-500/20 bg-amber-500/5 p-6 mb-10">
          <div className="flex items-start gap-3">
            <AlertTriangle className="h-6 w-6 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="font-display text-lg font-bold text-foreground mb-2">Binding Agreement</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                These Terms constitute a legally binding agreement. By using our services, you accept all terms outlined below. 
                If you do not agree, please do not use our website or services.
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

        {/* Additional Legal Info */}
        <div className="mt-12 rounded-2xl border bg-muted/50 p-6">
          <h3 className="font-display text-base font-bold text-foreground mb-3">Entire Agreement</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            These Terms and Conditions, together with our Privacy Policy and any other legal notices published by Go Canada Wifi, 
            constitute the entire agreement between you and Go Canada Wifi concerning your use of our services. No waiver of any term 
            shall be deemed a further or continuing waiver of such term or any other term. If you have questions about these Terms, 
            please contact us at <a href="mailto:support@gocanadawifi.com" className="text-primary hover:underline">support@gocanadawifi.com</a> or 
            call <a href="tel:+18882657538" className="text-primary hover:underline">(888) 265-7538</a>.
          </p>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default Terms;
