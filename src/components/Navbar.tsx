import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import kbLogoFull from "@/assets/kb-logo-full.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Snow Removal", to: "/snow-removal" },
  { label: "Junk Removal", to: "/junk-removal" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [location]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-2 border-primary ${
          scrolled ? "bg-kb-black/97 backdrop-blur-xl" : "bg-kb-black/95 backdrop-blur-md"
        }`}
        style={{ height: 68 }}
      >
        <div className="container mx-auto h-full flex items-center justify-between px-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={kbLogoFull} alt="K&B Landscaping" className="h-12 w-auto" />
          </Link>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-sm uppercase tracking-wider transition-colors duration-200 ${
                  location.pathname === link.to ? "text-primary" : "text-kb-white hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:9788049679" className="flex items-center gap-1.5 text-primary font-heading text-sm">
              <Phone size={14} />
              (978) 804-9679
            </a>
            <Link to="/contact" className="btn-green text-sm py-2 px-5">
              Get Free Quote
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button className="lg:hidden text-primary" onClick={() => setOpen(!open)}>
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer - rendered outside nav to avoid height clipping */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 top-[68px] z-[45] overflow-y-auto"
          style={{ backgroundColor: '#111111' }}
        >
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`font-heading text-xl uppercase tracking-wider py-2 border-b border-kb-gray-border ${
                  location.pathname === link.to ? "text-primary" : "text-kb-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a href="tel:9788049679" className="flex items-center gap-2 text-primary font-heading text-lg mt-4">
              <Phone size={18} />
              (978) 804-9679
            </a>
            <Link to="/contact" className="btn-green text-center mt-2">
              Get Free Quote
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
