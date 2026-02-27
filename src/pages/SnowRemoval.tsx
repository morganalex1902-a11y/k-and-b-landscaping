import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import snowPlows from "@/assets/snow-plows.png";
import snowWolf from "@/assets/snow-wolf.png";

const features = [
  { icon: "❄️", title: "24/7 Emergency Response", desc: "We respond around the clock during storms" },
  { icon: "🧂", title: "Pre & Post Treatment", desc: "Salting and ice melt for safe surfaces" },
  { icon: "🚜", title: "Commercial & Residential", desc: "Driveways, parking lots, sidewalks" },
  { icon: "📋", title: "Seasonal Contracts", desc: "Peace of mind all winter long" },
];

const SnowRemoval = () => (
  <div>
    {/* Hero */}
    <section className="section-gradient min-h-[60vh] flex items-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle, hsl(var(--kb-white)) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <h1 className="font-display text-5xl md:text-[80px] text-kb-white animate-hero-2">SNOW & ICE<br />REMOVAL</h1>
        <p className="font-heading text-lg text-primary tracking-[0.15em] mt-3 animate-hero-3">24/7 STORM RESPONSE · EAST KINGSTON, NH</p>
        <p className="text-kb-gray mt-3 animate-hero-4">Don't get caught in a storm unprepared.</p>
      </div>
    </section>

    {/* Features */}
    <section className="section-dark py-16">
      <div className="container mx-auto px-4 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map(f => (
          <ScrollReveal key={f.title}>
            <div className="service-card text-center">
              <span className="text-3xl">{f.icon}</span>
              <h3 className="font-heading text-lg text-kb-white uppercase mt-3">{f.title}</h3>
              <p className="text-kb-gray text-sm mt-2">{f.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Services List */}
    <section className="section-dark py-20 border-t border-kb-gray-border">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <ScrollReveal>
          <h2 className="font-display text-4xl md:text-[52px] text-kb-white">SNOW REMOVAL SERVICES</h2>
          <div className="mt-8 space-y-8">
            <div>
              <h3 className="font-heading text-xl text-primary uppercase mb-3">Residential</h3>
              <ul className="space-y-2 text-kb-white text-sm">
                {["Driveway plowing", "Walkway and path clearing", "Steps and porch clearing", "Sand/salt application"].map(s => (
                  <li key={s} className="flex items-center gap-2"><span className="text-primary">•</span>{s}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-heading text-xl text-primary uppercase mb-3">Commercial</h3>
              <ul className="space-y-2 text-kb-white text-sm">
                {["Parking lot plowing", "Loading dock clearing", "Sidewalk compliance (ADA)", "Pre-treatment / anti-icing", "Contract-based priority service"].map(s => (
                  <li key={s} className="flex items-center gap-2"><span className="text-primary">•</span>{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <img src={snowPlows} alt="K&B snow plow fleet" className="rounded-sm w-full object-cover h-[300px]" />
          <img src={snowWolf} alt="SnowWolf equipment" className="rounded-sm w-full object-cover h-[300px] mt-6" />
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-gradient py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-[52px] text-kb-white">SECURE YOUR SPOT<br />THIS WINTER</h2>
        <p className="text-kb-gray mt-3">Limited seasonal contracts available. Book early.</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="tel:9788049679" className="btn-green text-lg">Call Now: (978) 804-9679</a>
          <Link to="/contact" className="btn-outline-green">Get Winter Contract Quote →</Link>
        </div>
      </div>
    </section>
  </div>
);

export default SnowRemoval;
