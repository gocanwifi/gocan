import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-slate-900 shadow-md">
      <div className="container">
        {/* Desktop nav */}
        <div className="hidden md:flex items-center justify-between h-24">
          {/* Left Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img src={logo} alt="Go Canada Wifi" className="h-32 w-32 object-contain" />
          </Link>

          {/* Centered Menu */}
          <nav className="flex items-center gap-12 absolute left-1/2 transform -translate-x-1/2">
            {navLinks.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-base font-medium transition-colors ${
                  location.pathname === l.to
                    ? "text-red-500"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Right Call Button */}
          <a href="tel:+18886517421">
            <Button size="default" className="bg-red-600 hover:bg-red-700 text-white gap-2">
              <Phone className="h-4 w-4" />
              <span className="hidden lg:inline">Call Now (888) 651-7421</span>
              <span className="lg:hidden">Call Now</span>
            </Button>
          </a>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Go Canada Wifi" className="h-20 w-20 object-contain" />
          </Link>
          <button className="p-2 text-white" onClick={() => setOpen(!open)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t border-slate-700 bg-slate-900 px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-3 text-base font-medium ${
                location.pathname === l.to ? "text-red-500" : "text-gray-300"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+18886517421" className="block mt-3">
            <Button size="default" className="w-full bg-red-600 hover:bg-red-700 text-white gap-2">
              <Phone className="h-4 w-4" /> Call Now (888) 651-7421
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
