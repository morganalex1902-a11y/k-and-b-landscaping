import { Link } from "react-router-dom";
import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import HeroParallax from "@/components/HeroParallax";
import { services, serviceAreas } from "@/data/siteData";
import { Phone } from "lucide-react";
import lawnPatio from "@/assets/lawn-patio.png";
import snowPlows from "@/assets/snow-plows.png";
import mowersFleet from "@/assets/mowers-fleet.png";
import brushClearing from "@/assets/brush-clearing.png";
import excavatorWork from "@/assets/excavator-work.png";
import lawnStriped from "@/assets/lawn-striped.png";

const serviceImages: Record<string, string> = {
  "lawn-maintenance": mowersFleet,
  "landscape-design": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2Fded2bd4011da44ab831b2c065951aa30?format=webp&width=800&height=1200",
  "snow-removal": snowPlows,
  "spring-fall-cleanup": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F0218b20191694889b6a992a30d5bd879?format=webp&width=800&height=1200",
  "hardscaping": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F52915f82b004471eb7983ab03233f525?format=webp&width=800&height=1200",
  "light-excavation": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F53684aa1d06145f4bc0b33de1f72cffb?format=webp&width=800&height=1200",
  "shrub-tree-trimming": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2Feb02cd35a7444a1e8c64f4bde3e07aa1?format=webp&width=800&height=1200",
  "cobblestone-edging": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F0084615ec92841d3b1a61d033adfd1f4?format=webp&width=800&height=1200",
  "brush-removal": brushClearing,
  "forestry-mulching": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F63f48c150f814db1a401d32d052c800e?format=webp&width=800&height=1200",
  "mulch-peastone": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2Fd94374c53f7a4d58970bdec0d9e719dc?format=webp&width=800&height=1200",
  "mulch-blowing": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F09045371e52a49a8b6d3f6ec4f28d3d3?format=webp&width=800&height=1200",
  "flail-mowing": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2Fb4796e9998444639afaf859963b15356?format=webp&width=800&height=1200",
  "plantings": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2Fd0d12234171443c7835b2e56bbd3e5ba?format=webp&width=800&height=1200",
  "demo-service": "https://cdn.builder.io/api/v1/image/assets%2Fac74af0e91684e859253068842865ac0%2F8be1ff56d9d546719de2f8e38a743e1e?format=webp&width=800&height=1200",
};

const Services = () => (
  <div>
    {/* Hero */}
    <HeroParallax imageUrl={lawnStriped} overlayOpacity={0.8}>
      <h1 className="font-display text-5xl md:text-[72px] text-kb-white animate-hero-2">OUR SERVICES</h1>
      <p className="font-heading text-lg text-primary tracking-[0.2em] italic mt-2 animate-hero-3">DESIGN · BUILD · MAINTAIN</p>
      <p className="text-kb-gray text-sm mt-3 animate-hero-4">
        <Link to="/" className="hover:text-primary">Home</Link> &gt; Services
      </p>
    </HeroParallax>

    {/* Services */}
    <section className="section-dark py-20">
      <div className="container mx-auto px-4 space-y-20">
        {services.map((s, i) => (
          <ScrollReveal key={s.id}>
            <div className={`grid lg:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <img src={serviceImages[s.id] || lawnPatio} alt={s.title} className="rounded-sm w-full h-[450px] object-cover" />
              </div>
              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="font-display text-3xl md:text-[44px] text-kb-white leading-tight">{s.title.toUpperCase()}</h2>
                <p className="text-kb-gray mt-4 leading-relaxed">{s.short}</p>
                <ul className="mt-6 space-y-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-2 text-kb-white text-sm">
                      <span className="text-primary mt-0.5">•</span> {item}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-green inline-block mt-6">Get a Quote →</Link>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Service Areas */}
    <section className="section-dark py-20 border-t border-kb-gray-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-[48px] text-kb-white">SERVICE AREAS</h2>
        <p className="text-kb-gray mt-3">We proudly serve East Kingston and the surrounding NH/MA seacoast region:</p>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {serviceAreas.map(a => (
            <span key={a} className="area-badge">{a}</span>
          ))}
        </div>
        <a href="tel:9788049679" className="btn-green inline-flex items-center gap-2 mt-8">
          <Phone size={16} /> Call to Confirm Your Area: (978) 804-9679
        </a>
      </div>
    </section>
  </div>
);

export default Services;
