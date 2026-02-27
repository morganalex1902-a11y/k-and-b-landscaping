import { useState } from "react";
import { Phone, Mail, MapPin, Facebook, Clock } from "lucide-react";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-[72px] text-kb-white animate-hero-2">GET YOUR<br />FREE QUOTE</h1>
          <p className="font-body italic text-lg text-kb-gray mt-3 animate-hero-3">No pressure. Just honest pricing and great work.</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <ScrollReveal>
              <div className="bg-kb-white rounded-sm p-8 md:p-10 shadow-lg">
                <h2 className="font-display text-3xl text-foreground mb-6">REQUEST A FREE ESTIMATE</h2>
                {submitted ? (
                  <div className="text-center py-10">
                    <span className="text-5xl">✅</span>
                    <p className="font-heading text-xl text-foreground mt-4">Thanks! We'll be in touch within 24 hours.</p>
                    <p className="text-kb-gray mt-2">Call us directly at (978) 804-9679 if you need a faster response.</p>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="First Name *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                      <input type="text" placeholder="Last Name *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="tel" placeholder="Phone Number *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                      <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                    </div>
                    <input type="text" placeholder="Address / Property Location" className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                    <select className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body">
                      <option>Service Type</option>
                      <option>Lawn Maintenance</option>
                      <option>Landscaping Design</option>
                      <option>Hardscaping</option>
                      <option>Spring/Fall Cleanup</option>
                      <option>Snow Removal</option>
                      <option>Shrub & Tree Pruning</option>
                      <option>Cobblestone Edging</option>
                      <option>Brush Removal</option>
                      <option>Mulch & Peastone Beds</option>
                      <option>Junk Removal (Scribby's)</option>
                      <option>Multiple Services</option>
                      <option>Not Sure — Please Contact Me</option>
                    </select>
                    <div className="flex gap-4">
                      <label className="flex items-center gap-2 font-body"><input type="radio" name="ptype" value="residential" defaultChecked /> Residential</label>
                      <label className="flex items-center gap-2 font-body"><input type="radio" name="ptype" value="commercial" /> Commercial</label>
                    </div>
                    <textarea placeholder="Tell us about your project" rows={4} className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body" />
                    <select className="w-full px-4 py-3 rounded-sm border border-kb-gray-border/30 focus:ring-2 focus:ring-primary outline-none font-body">
                      <option>How did you hear about us?</option>
                      <option>Google</option>
                      <option>Facebook</option>
                      <option>Neighbor/Friend</option>
                      <option>Drove By / Saw Truck</option>
                      <option>Other</option>
                    </select>
                    <button type="submit" className="btn-green w-full text-lg font-display tracking-wider">Submit Request →</button>
                    <p className="text-kb-gray text-xs text-center">We respond within 24 hours · Free estimates · No obligation</p>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-2">
            <ScrollReveal>
              <h3 className="font-heading text-xl text-primary uppercase tracking-wider mb-6">Contact Information</h3>
              <div className="space-y-4">
                <a href="tel:9788049679" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" /> <span className="font-body">Primary: (978) 804-9679</span>
                </a>
                <a href="tel:6033475369" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Phone size={18} className="text-primary" /> <span className="font-body">Alternate: (603) 347-5369</span>
                </a>
                <a href="mailto:kblandscaping@comcast.net" className="flex items-center gap-3 text-foreground hover:text-primary transition-colors">
                  <Mail size={18} className="text-primary" /> <span className="font-body">kblandscaping@comcast.net</span>
                </a>
                <p className="flex items-center gap-3 text-foreground">
                  <MapPin size={18} className="text-primary" /> <span className="font-body">East Kingston, NH 03827</span>
                </p>
              </div>

              <a href="https://www.facebook.com/profile.php?id=100064051238990" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 mt-6 text-foreground hover:text-primary transition-colors">
                <Facebook size={20} className="text-primary" />
                <span className="font-body text-sm">Follow K&B on Facebook</span>
              </a>

              <div className="mt-8">
                <h4 className="font-heading text-lg text-foreground uppercase mb-3 flex items-center gap-2">
                  <Clock size={16} className="text-primary" /> Business Hours
                </h4>
                <div className="space-y-1 font-body text-sm text-foreground/80">
                  <p>Mon–Fri: 7:00 AM – 6:00 PM</p>
                  <p>Saturday: 7:00 AM – 4:00 PM</p>
                  <p>Sunday: Emergency snow removal only</p>
                </div>
                <p className="text-kb-gray italic text-xs mt-3">Storm response available 24/7 during active weather events.</p>
              </div>

              <div className="mt-8 pt-6 border-t border-kb-gray-border/30">
                <h4 className="font-heading text-sm text-foreground uppercase tracking-wider mb-3">Partner — Junk Removal</h4>
                <p className="font-body text-sm text-foreground/80">📞 Scribby's: 603-397-7536</p>
                <p className="font-body text-sm text-foreground/80">🌐 SCRIBBYSJUNK.COM</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
