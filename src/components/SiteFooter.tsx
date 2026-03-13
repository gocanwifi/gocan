import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const SiteFooter = () => (
  <footer className="border-t bg-card">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-2 font-display text-lg font-bold text-foreground mb-3">
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-lg hero-gradient text-primary-foreground text-xs font-extrabold">NB</span>
            NorthBridge Service Assist
          </div>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Independent third-party service assistance startup launched in 2026. Providing general guidance related to internet, broadband, Wi-Fi, and cable TV services.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-display font-semibold text-foreground mb-1">Pages</span>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</Link>
            <Link to="/faq" className="text-muted-foreground hover:text-foreground transition-colors">FAQ</Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display font-semibold text-foreground mb-1">Legal</span>
            <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms & Conditions</Link>
            <Link to="/refund" className="text-muted-foreground hover:text-foreground transition-colors">Refund Policy</Link>
            <Link to="/disclaimer" className="text-muted-foreground hover:text-foreground transition-colors">Disclaimer</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <span className="font-display font-semibold text-foreground mb-3 block">Contact</span>
          <div className="flex flex-col gap-2 text-sm text-muted-foreground">
            <a href="tel:+18886412045" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Phone className="h-4 w-4" /> +1 (888) 641-2045
            </a>
            <a href="mailto:support@northbridgeserviceassist.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
              <Mail className="h-4 w-4" /> support@northbridgeserviceassist.com
            </a>
          </div>
        </div>
      </div>

      {/* Disclosure */}
      <div className="mt-10 pt-6 border-t">
        <p className="disclosure-banner rounded-lg px-4 py-3 text-xs leading-relaxed text-center">
          NorthBridge Service Assist is an independent third-party service assistance startup launched in 2026. We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or streaming service provider. All trademarks belong to their respective owners.
        </p>
        <p className="text-center text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} NorthBridge Service Assist. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
