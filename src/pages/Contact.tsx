import PageWrapper from "@/components/PageWrapper";
import DisclosureBanner from "@/components/DisclosureBanner";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => (
  <PageWrapper>
    <section className="py-16 md:py-24">
      <div className="container max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl font-extrabold text-foreground mb-4">Contact NorthBridge Service Assist</h1>
        <p className="text-muted-foreground mb-10">
          Reach out for general guidance related to internet, broadband, Wi-Fi, or cable TV services.
        </p>

        <div className="grid sm:grid-cols-2 gap-5 mb-10">
          <a href="tel:+18886412045" className="rounded-xl border bg-card p-6 flex gap-4 items-center hover:shadow-md transition-shadow">
            <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground text-sm">Phone</h3>
              <p className="text-muted-foreground text-sm">+1 (888) 641-2045</p>
            </div>
          </a>
          <a href="mailto:support@northbridgeserviceassist.com" className="rounded-xl border bg-card p-6 flex gap-4 items-center hover:shadow-md transition-shadow">
            <div className="h-11 w-11 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-foreground text-sm">Email</h3>
              <p className="text-muted-foreground text-sm break-all">support@northbridgeserviceassist.com</p>
            </div>
          </a>
        </div>

        <div className="rounded-xl border bg-card p-6 mb-10">
          <h2 className="font-display text-lg font-semibold text-foreground mb-3">Call Greeting</h2>
          <p className="text-muted-foreground text-sm leading-relaxed italic">
            "Thank you for calling NorthBridge Service Assist, an independent service assistance platform. We provide general guidance related to internet and cable services."
          </p>
        </div>

        <DisclosureBanner />
      </div>
    </section>
  </PageWrapper>
);

export default Contact;
