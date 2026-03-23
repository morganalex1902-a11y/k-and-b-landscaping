import { Link } from "react-router-dom";
import { Phone } from "lucide-react";
import GrassDivider from "@/components/GrassDivider";
import SectionLabel from "@/components/SectionLabel";
import ServiceCard from "@/components/ServiceCard";
import StatBar from "@/components/StatBar";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";
import { services, testimonials } from "@/data/siteData";
import kbTrailer from "@/assets/kb-trailer.png";
import lawnPatio from "@/assets/lawn-patio.png";

const Home = () => (
  <div>
    {/* HERO */}
    <section className="hero-gradient min-h-screen flex items-center relative overflow-hidden">
      <div className="absolute inset-0 lg:hidden">
        <img src={lawnPatio} alt="" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center pt-20">
        <div className="relative z-10">
          <div className="animate-hero-1">
            <SectionLabel text="East Kingston, NH" />
          </div>
          <h1 className="font-display text-[42px] md:text-[64px] lg:text-[72px] text-kb-white leading-[1.05] animate-hero-2">
            K&B LAWN MAINTENANCE<br />AND SNOW REMOVAL LLC.
          </h1>
          <p className="font-heading text-lg text-primary tracking-[0.3em] mt-4 animate-hero-3">
            DESIGN · BUILD · MAINTAIN
          </p>
          <p className="font-body text-lg text-kb-gray max-w-lg mt-6 leading-relaxed animate-hero-3">
            Family-run landscaping, lawn maintenance, and snow removal serving East Kingston, NH and surrounding areas. Commercial and residential — done right.
          </p>
          <div className="flex flex-wrap gap-3 mt-8 animate-hero-4">
            {["🌿 Family Run", "🏠 Residential & Commercial", "❄️ Year-Round", "✅ Free Estimates"].map(p => (
              <span key={p} className="trust-pill text-xs">{p}</span>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 mt-10 animate-hero-5">
            <Link to="/contact" className="btn-green">Get a Free Quote</Link>
            <Link to="/services" className="btn-outline-green">View Services →</Link>
          </div>
          <div className="flex items-center gap-2 mt-6 text-kb-white font-body text-sm animate-hero-5">
            <Phone size={14} className="text-primary" />
            <a href="tel:9788049679">(978) 804-9679</a>
            <span className="text-kb-gray">·</span>
            <a href="tel:6033475369">(603) 347-5369</a>
          </div>
        </div>
        <div className="hidden lg:block">
          <div className="relative">
            <img
              src={lawnPatio}
              alt="Beautiful landscaped property with striped lawn by K&B Lawn Maintenance and Snow Removal LLC."
              className="rounded-sm shadow-2xl object-cover w-full h-[500px]"
              style={{ clipPath: "polygon(8% 0, 100% 0, 100% 100%, 0 100%)" }}
            />
            <div className="absolute -bottom-4 -left-4 bg-primary px-6 py-3 rounded-sm">
              <span className="font-heading text-sm text-primary-foreground uppercase tracking-wider">Design · Build · Maintain</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <GrassDivider />
    <StatBar />

    {/* SERVICES PREVIEW */}
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="What We Do" />
          <h2 className="font-display text-5xl md:text-[64px] text-kb-white">OUR SERVICES</h2>
          <p className="font-body italic text-kb-gray mt-3 text-[17px]">Comprehensive outdoor solutions — every season</p>
        </ScrollReveal>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <ScrollReveal key={s.id} className={`delay-${i}`}>
              <ServiceCard icon={s.icon} title={s.title} description={s.short} link="/services" />
            </ScrollReveal>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link to="/services" className="btn-outline-green">View All Services →</Link>
        </div>
      </div>
    </section>

    {/* ABOUT PREVIEW */}
    <section className="section-light py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <div className="relative">
            <img src={kbTrailer} alt="K&B Lawn Maintenance and Snow Removal LLC. trailer wrap" className="rounded-sm border-[3px] border-primary w-full object-cover" />
            <p className="font-display text-xl text-green-dark mt-3 text-center">DESIGN · BUILD · MAINTAIN</p>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <SectionLabel text="About Us" />
          <h2 className="font-display text-4xl md:text-[52px] text-foreground leading-[1.05]">FAMILY-BUILT.<br />COMMUNITY TRUSTED.</h2>
          <p className="font-body text-kb-gray mt-6 leading-[1.8]">
            K&B Lawn Maintenance and Snow Removal LLC. is a family-run business founded by Keith, serving East Kingston, NH and the surrounding seacoast region. With a commitment to quality craftsmanship and honest service, we treat every property like our own.
          </p>
          <p className="font-body text-kb-gray mt-4 leading-[1.8]">
            Whether it's a weekly lawn maintenance contract, a full landscape installation, or emergency snow removal at 3am — K&B Lawn Maintenance and Snow Removal LLC. shows up ready to work.
          </p>
          <p className="font-heading text-lg text-green-dark mt-6">
            "We don't just maintain properties — we take pride in them."
          </p>
          <p className="text-kb-gray text-sm mt-1">— Keith, Owner</p>
          <Link to="/about" className="btn-green inline-block mt-6">Meet the Team →</Link>
        </ScrollReveal>
      </div>
    </section>

    {/* SCRIBBY'S PARTNER */}
    <section className="bg-kb-black-soft py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <SectionLabel text="Our Trusted Partner" color="scribby" />
          <h2 className="font-display text-4xl md:text-[44px] text-kb-white leading-[1.05]">NEED JUNK<br />REMOVED?</h2>
          <p className="font-body text-kb-gray mt-4 leading-relaxed">
            We've partnered with Scribby's Junk Removal to offer our clients complete property cleanup solutions.
          </p>
          <ul className="mt-6 space-y-2">
            {["Junk Removal", "Garage Cleanouts", "Basement Cleanouts"].map(s => (
              <li key={s} className="flex items-center gap-2 text-kb-white font-body">
                <span className="text-scribby-yellow">✓</span> {s}
              </li>
            ))}
          </ul>
          <p className="text-kb-gray italic text-sm mt-4">Prompt and Hassle-Free · Environmentally Conscious · Professional Team</p>
          <div className="flex flex-wrap gap-4 mt-6">
            <Link to="/junk-removal" className="btn-scribby">Learn More →</Link>
            <a href="tel:6033977536" className="btn-outline-scribby">Call Scribby's: 603-397-7536</a>
          </div>
        </ScrollReveal>
        <ScrollReveal className="hidden lg:block">
          <div className="bg-kb-black rounded-sm p-8 border-2 border-scribby-yellow/30 text-center">
            <span className="text-6xl">🚛</span>
            <h3 className="font-display text-3xl text-kb-white mt-4">Scribby's Junk Removal</h3>
            <p className="text-scribby-yellow font-heading mt-2">603-397-7536</p>
            <p className="text-kb-gray text-sm mt-1">SCRIBBYSJUNK.COM</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* TESTIMONIALS */}
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal className="text-center mb-14">
          <SectionLabel text="What Clients Say" />
          <h2 className="font-display text-4xl md:text-[52px] text-kb-white">TRUSTED BY HOMEOWNERS<br />& BUSINESSES</h2>
        </ScrollReveal>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <ScrollReveal key={i}>
              <TestimonialCard text={t.text} name={t.name} title={t.title} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FINAL CTA */}
    <section className="section-green py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-5xl md:text-[64px] text-primary-foreground">READY TO TRANSFORM<br />YOUR PROPERTY?</h2>
        <p className="font-body text-[17px] text-green-dark mt-4">
          Free estimates — no pressure. Just great work.<br />Serving East Kingston, NH and surrounding seacoast communities.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="tel:9788049679" className="btn-dark">📞 Call (978) 804-9679</a>
          <Link to="/contact" className="btn-outline-dark">Get Free Quote Online</Link>
        </div>
        <p className="text-green-dark text-sm mt-4">Or email us: kblandscaping@comcast.net</p>
      </div>
    </section>
  </div>
);

export default Home;
