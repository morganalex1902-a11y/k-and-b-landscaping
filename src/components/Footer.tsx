import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Facebook } from "lucide-react";

const Footer = () => (
  <footer className="bg-kb-black border-t-[3px] border-primary">
    <div className="container mx-auto px-4 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Col 1 */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <span className="text-primary text-xl">🌿</span>
            <span className="font-display text-2xl text-kb-white">K&B LANDSCAPING</span>
          </div>
          <p className="text-kb-gray text-sm">Lawn Maintenance & Snow Removal LLC</p>
          <p className="text-primary italic text-sm mt-1">Family-Run Since Day One</p>
          <p className="text-kb-gray text-sm mt-2">East Kingston, NH 03827</p>
        </div>

        {/* Col 2 */}
        <div>
          <h4 className="font-heading uppercase text-primary text-sm tracking-wider mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {[
              { label: "Home", to: "/" }, { label: "Services", to: "/services" },
              { label: "Landscaping", to: "/landscaping" }, { label: "Snow Removal", to: "/snow-removal" },
              { label: "Junk Removal", to: "/junk-removal" }, { label: "About", to: "/about" },
              { label: "Gallery", to: "/gallery" }, { label: "Contact", to: "/contact" },
            ].map(l => (
              <Link key={l.to} to={l.to} className="text-kb-white text-sm hover:text-primary transition-colors">{l.label}</Link>
            ))}
          </div>
        </div>

        {/* Col 3 */}
        <div>
          <h4 className="font-heading uppercase text-primary text-sm tracking-wider mb-4">Our Services</h4>
          <ul className="space-y-2 text-sm text-kb-white">
            {["Lawn Maintenance", "Landscaping Design", "Snow & Ice Removal", "Hardscaping", "Spring/Fall Cleanup", "Junk Removal (Partner)"].map(s => (
              <li key={s} className="flex items-center gap-2"><span className="text-primary">•</span>{s}</li>
            ))}
          </ul>
        </div>

        {/* Col 4 */}
        <div>
          <h4 className="font-heading uppercase text-primary text-sm tracking-wider mb-4">Contact Us</h4>
          <div className="space-y-3 text-sm text-kb-white">
            <a href="tel:9788049679" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} className="text-primary" />(978) 804-9679</a>
            <a href="tel:6033475369" className="flex items-center gap-2 hover:text-primary transition-colors"><Phone size={14} className="text-primary" />(603) 347-5369</a>
            <a href="mailto:kblandscaping@comcast.net" className="flex items-center gap-2 hover:text-primary transition-colors"><Mail size={14} className="text-primary" />kblandscaping@comcast.net</a>
            <p className="flex items-center gap-2"><MapPin size={14} className="text-primary" />East Kingston, NH 03827</p>
          </div>
          <div className="flex items-center gap-3 mt-4">
            <a href="https://www.facebook.com/profile.php?id=100064051238990" target="_blank" rel="noopener noreferrer" className="text-kb-white hover:text-primary transition-colors"><Facebook size={20} /></a>
          </div>
          <Link to="/contact" className="btn-green inline-block mt-4 text-sm py-2 px-5">Get Free Quote</Link>
        </div>
      </div>
    </div>
    <div className="bg-foreground/95 py-4 text-center">
      <p className="text-kb-gray text-xs font-body">© 2025 K&B Landscaping LLC · East Kingston, NH · DESIGN · BUILD · MAINTAIN</p>
    </div>
  </footer>
);

export default Footer;
