import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, Shield, Phone, CreditCard, Lock, Building2, RotateCcw } from "lucide-react";

const faqs = [
  { icon: Building2, q: "Are you an official internet or cable provider?", a: "No. We are an independent third-party service assistance platform. We do not provide internet, broadband, or cable TV services." },
  { icon: CreditCard, q: "Do you sell internet or cable plans?", a: "No. We provide guidance and assistance only. We do not sell any subscriptions or plans." },
  { icon: Phone, q: "Do you charge for assistance services?", a: "Yes. Our service fees are separate from any charges billed by telecom providers. Our fees cover the general guidance and informational support we provide." },
  { icon: Shield, q: "Will my service provider still bill me?", a: "Yes. Your provider billing remains unchanged. Our service fee is separate and independent from any provider charges." },
  { icon: Lock, q: "Do you need my provider passwords?", a: "No. We never request provider account passwords or sensitive login credentials." },
  { icon: HelpCircle, q: "Which providers may be referenced?", a: "We may reference companies such as Bell Canada™, Rogers Communications®, or Telus® for informational guidance only. We are not affiliated with any of these providers." },
  { icon: RotateCcw, q: "Are services refundable?", a: "Refund requests can be submitted within 7 to 15 days of service purchase depending on the type of assistance provided. Full eligibility conditions are explained in the Refund Policy page." },
];

const FAQ = () => (
  <PageWrapper>
    {/* Hero */}
    <section className="hero-gradient py-16 md:py-24">
      <div className="container max-w-3xl">
        <div className="inline-flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm px-4 py-1.5 text-xs font-semibold text-primary-foreground mb-5">
          <HelpCircle className="h-3.5 w-3.5" /> Help Center
        </div>
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-primary-foreground mb-3">Frequently Asked Questions</h1>
        <p className="text-primary-foreground/70 text-sm">
          Find answers to common questions about Trustournet and our independent guidance services.
        </p>
      </div>
    </section>

    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <DisclosureBanner className="mb-12" />

        <div className="space-y-4">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-2xl px-6 bg-card hover:shadow-md transition-shadow">
                <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5 gap-4">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <faq.icon className="h-4 w-4 text-primary" />
                    </div>
                    <span>{faq.q}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-12 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 rounded-2xl hero-gradient p-8 text-center">
          <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Still have questions?</h3>
          <p className="text-primary-foreground/80 text-sm mb-5">Our independent support team is ready to help.</p>
          <a href="tel:+18882657538">
            <button className="bg-primary-foreground text-primary font-semibold px-6 py-3 rounded-xl text-sm hover:opacity-90 transition-opacity inline-flex items-center gap-2">
              <Phone className="h-4 w-4" /> Call Now (888) 265-7538
            </button>
          </a>
        </div>
      </div>
    </section>
  </PageWrapper>
);

export default FAQ;
