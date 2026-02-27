import { Link } from "react-router-dom";
import { useState } from "react";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import lawnPatio from "@/assets/lawn-patio.png";

const steps = [
  { num: "01", title: "FREE CONSULTATION", desc: "We walk your property and discuss your vision and budget." },
  { num: "02", title: "CUSTOM DESIGN", desc: "We create a plan tailored to your property and preferences." },
  { num: "03", title: "INSTALLATION", desc: "Our crew brings the design to life with precision." },
  { num: "04", title: "ONGOING CARE", desc: "Optional maintenance plans keep your investment looking great." },
];

const Landscaping = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <img src={lawnPatio} alt="Landscaping" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-kb-black/70" />
        </div>
        <div className="container mx-auto px-4 relative z-10 pt-20">
          <h1 className="font-display text-5xl md:text-[80px] text-kb-white animate-hero-2">LANDSCAPING</h1>
          <p className="font-display text-3xl md:text-[48px] text-primary animate-hero-3">DESIGN · BUILD · MAINTAIN</p>
        </div>
      </section>

      {/* Why K&B */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <SectionLabel text="Why K&B" />
            <h2 className="font-display text-4xl md:text-[52px] text-foreground leading-tight">TRANSFORMING PROPERTIES<br />ACROSS EAST KINGSTON</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              {["01 / Custom Design Process", "02 / Quality Plant Selection", "03 / Experienced Installation", "04 / Ongoing Maintenance Plans"].map(f => (
                <div key={f} className="flex items-center gap-4">
                  <span className="text-primary font-heading text-2xl">{f.split(" / ")[0]}</span>
                  <span className="font-heading text-lg text-foreground uppercase">{f.split(" / ")[1]}</span>
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-green inline-block mt-8">Get Your Free Landscape Consultation</Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-dark py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-[48px] text-kb-white text-center mb-14">HOW IT WORKS</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((s, i) => (
              <ScrollReveal key={i} className="text-center">
                <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center mx-auto mb-4">
                  <span className="font-heading text-xl text-primary-foreground">{s.num}</span>
                </div>
                <h3 className="font-heading text-lg text-kb-white uppercase">{s.title}</h3>
                <p className="text-kb-gray text-sm mt-2">{s.desc}</p>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form */}
      <section className="section-light py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <div className="bg-kb-white rounded-sm p-8 md:p-10 shadow-lg border-l-4 border-primary">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">GET YOUR FREE LANDSCAPING QUOTE</h2>
            {submitted ? (
              <div className="text-center py-10">
                <span className="text-5xl">✅</span>
                <p className="font-heading text-xl text-foreground mt-4">Thanks! We'll be in touch within 24 hours.</p>
                <p className="text-kb-gray mt-2">Call us directly at (978) 804-9679 for a faster response.</p>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <input type="text" placeholder="Name *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border focus:ring-2 focus:ring-primary outline-none font-body" />
                <input type="tel" placeholder="Phone *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border focus:ring-2 focus:ring-primary outline-none font-body" />
                <input type="email" placeholder="Email *" required className="w-full px-4 py-3 rounded-sm border border-kb-gray-border focus:ring-2 focus:ring-primary outline-none font-body" />
                <select className="w-full px-4 py-3 rounded-sm border border-kb-gray-border focus:ring-2 focus:ring-primary outline-none font-body">
                  <option>Service Interested In</option>
                  <option>Landscape Design</option>
                  <option>Planting & Mulching</option>
                  <option>Hardscaping</option>
                  <option>Full Property Transformation</option>
                </select>
                <div className="flex gap-4">
                  <label className="flex items-center gap-2 font-body"><input type="radio" name="type" value="residential" defaultChecked /> Residential</label>
                  <label className="flex items-center gap-2 font-body"><input type="radio" name="type" value="commercial" /> Commercial</label>
                </div>
                <textarea placeholder="Project Description" rows={4} className="w-full px-4 py-3 rounded-sm border border-kb-gray-border focus:ring-2 focus:ring-primary outline-none font-body" />
                <button type="submit" className="btn-green w-full text-lg">Submit Request</button>
                <p className="text-kb-gray text-xs text-center">We typically respond within 24 hours · No obligation</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landscaping;
