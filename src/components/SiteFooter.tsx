import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.svg";

const SiteFooter = () => (
  <footer className="border-t border-slate-700 bg-slate-900">
    <div className="container py-12">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div>
          <div className="flex items-center mb-3">
            <img src={logo} alt="Trustournet" className="h-44 w-44 object-contain" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Independent third-party service assistance startup launched in 2026. Providing general guidance related to internet, broadband, Wi-Fi, and cable TV services.
          </p>
        </div>

        {/* Links */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex flex-col gap-2">
            <span className="font-display font-semibold text-white mb-1">Pages</span>
            <Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
            <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">FAQ</Link>
            <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link>
          </div>
          <div className="flex flex-col gap-2">
            <span className="font-display font-semibold text-white mb-1">Legal</span>
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms & Conditions</Link>
            <Link to="/refund" className="text-gray-400 hover:text-white transition-colors">Refund Policy</Link>
            <Link to="/disclaimer" className="text-gray-400 hover:text-white transition-colors">Disclaimer</Link>
            <Link to="/advertisement-disclosure" className="text-gray-400 hover:text-white transition-colors">Advertisement Disclosure</Link>
          </div>
        </div>

        {/* Contact */}
        <div>
          <span className="font-display font-semibold text-white mb-3 block">Contact</span>
          <div className="flex flex-col gap-2 text-sm text-gray-400">
            <a href="tel:+18882657538" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone className="h-4 w-4" /> (888) 265-7538
            </a>
            <a href="mailto:support@trustournet.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail className="h-4 w-4" /> support@trustournet.com
            </a>
          </div>
        </div>
      </div>

      {/* Disclosure */}
      <div className="mt-10 pt-6 border-t">
        <p className="disclosure-banner rounded-lg px-4 py-3 text-xs leading-relaxed text-center">
          Trustournet is an independent third-party service assistance startup launched in 2026. We are not affiliated with, authorized by, or endorsed by any internet, broadband, cable TV, or streaming service provider. All trademarks belong to their respective owners.
        </p>
        <p className="text-center text-xs text-gray-500 mt-4">
          © {new Date().getFullYear()} Trustournet. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default SiteFooter;
