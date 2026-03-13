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
    <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-bold text-foreground">
          <img src={logo} alt="Go Canada Wifi" className="h-9 w-9 object-contain" />
          <span className="hidden sm:inline">Go Canada Wifi</span>
          <span className="sm:hidden">GCW</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                location.pathname === l.to
                  ? "text-primary bg-primary/5"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+18886412045" className="ml-3">
            <Button size="sm" variant="hero" className="gap-1.5">
              <Phone className="h-3.5 w-3.5" />
              <span className="hidden lg:inline">+1 (888) 641-2045</span>
              <span className="lg:hidden">Call Us</span>
            </Button>
          </a>
        </nav>

        {/* Mobile toggle */}
        <button className="md:hidden p-2" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile nav */}
      {open && (
        <nav className="md:hidden border-t bg-card px-4 pb-4">
          {navLinks.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-sm font-medium ${
                location.pathname === l.to ? "text-primary bg-primary/5" : "text-muted-foreground"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href="tel:+18886412045" className="block mt-2">
            <Button size="sm" variant="hero" className="w-full gap-1.5">
              <Phone className="h-3.5 w-3.5" /> +1 (888) 641-2045
            </Button>
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
