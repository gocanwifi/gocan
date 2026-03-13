import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Are you an official internet or cable provider?", a: "No. We are an independent third-party service assistance platform. We do not provide internet, broadband, or cable TV services." },
  { q: "Do you sell internet or cable plans?", a: "No. We provide guidance and assistance only. We do not sell any subscriptions or plans." },
  { q: "Do you charge for assistance services?", a: "Yes. Our service fees are separate from any charges billed by telecom providers. Our fees cover the general guidance and informational support we provide." },
  { q: "Will my service provider still bill me?", a: "Yes. Your provider billing remains unchanged. Our service fee is separate and independent from any provider charges." },
  { q: "Do you need my provider passwords?", a: "No. We never request provider account passwords or sensitive login credentials." },
  { q: "Which providers may be referenced?", a: "We may reference companies such as Bell Canada™, Rogers Communications®, or Telus® for informational guidance only. We are not affiliated with any of these providers." },
  { q: "Are services refundable?", a: "Refund requests can be submitted within 7 to 15 days of service purchase depending on the type of assistance provided. Full eligibility conditions are explained in the Refund Policy page." },
];

const FAQ = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">Frequently Asked Questions</h1>
        <p className="text-muted-foreground mb-10">
          Find answers to common questions about NorthBridge Service Assist and our independent guidance services.
        </p>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card">
              <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-4">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <DisclosureBanner className="mt-10" />
      </div>
    </section>
  </PageWrapper>
);

export default FAQ;
