import SectionLabel from "@/components/SectionLabel";
import ScrollReveal from "@/components/ScrollReveal";
import { serviceAreas } from "@/data/siteData";
import kbTrailer from "@/assets/kb-trailer.png";
import mowersFleet from "@/assets/mowers-fleet.png";

const values = [
  { icon: "🌿", title: "Quality First", desc: "We don't cut corners. Every lawn, every install, every snowplow is done to the highest standard." },
  { icon: "🤝", title: "Family Values", desc: "A family business that treats clients like neighbors — with honesty, respect, and reliability." },
  { icon: "📍", title: "Local Commitment", desc: "We live and work in East Kingston. This is our community and we're proud to serve it." },
  { icon: "📅", title: "Year-Round Service", desc: "Landscaping in spring/summer/fall. Snow removal in winter. We're your year-round outdoor partner." },
];

const About = () => (
  <div>
    {/* Hero */}
    <section className="hero-gradient pt-32 pb-16">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-[72px] text-kb-white animate-hero-2">ABOUT K&B<br />LANDSCAPING</h1>
        <p className="font-body italic text-lg text-primary mt-3 animate-hero-3">Family-Run · Community Trusted · East Kingston, NH</p>
      </div>
    </section>

    {/* Our Story */}
    <section className="section-light py-20">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <ScrollReveal>
          <img src={kbTrailer} alt="K&B Landscaping trailer" className="rounded-sm w-full object-cover" />
          <img src={mowersFleet} alt="K&B mower fleet" className="rounded-sm w-full object-cover mt-6" />
        </ScrollReveal>
        <ScrollReveal>
          <SectionLabel text="Our Story" />
          <h2 className="font-display text-4xl md:text-[52px] text-foreground leading-tight">BUILT ON HARD<br />WORK & FAMILY VALUES</h2>
          <p className="text-kb-gray mt-6 leading-[1.9]">
            K&B Landscaping was founded by Keith with a simple mission: provide quality outdoor services with the kind of attention to detail you'd only expect from someone who cares about the work — not just the paycheck.
          </p>
          <p className="text-kb-gray mt-4 leading-[1.9]">
            As a family-run business, we bring that personal touch to every job. When you hire K&B, you're not hiring a faceless corporation. You're hiring a team that shows up, works hard, and stands behind everything we do.
          </p>
          <p className="text-kb-gray mt-4 leading-[1.9]">
            We serve both residential homeowners who take pride in their property and commercial clients who need reliable, professional service they can count on — season after season.
          </p>
          <p className="font-heading text-lg text-green-dark mt-6">
            "DESIGN · BUILD · MAINTAIN — that's not just our slogan. It's how we approach every single job."
          </p>
          <p className="text-kb-gray text-sm mt-1">— Keith, Founder & Owner</p>
        </ScrollReveal>
      </div>
    </section>

    {/* Values */}
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-4xl md:text-[52px] text-kb-white text-center mb-14">OUR VALUES</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(v => (
            <ScrollReveal key={v.title}>
              <div className="service-card text-center">
                <span className="text-3xl">{v.icon}</span>
                <h3 className="font-heading text-lg text-kb-white uppercase mt-3">{v.title}</h3>
                <p className="text-kb-gray text-sm mt-2">{v.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Service Areas */}
    <section className="section-dark py-20 border-t border-kb-gray-border">
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-[48px] text-kb-white">WHERE WE WORK</h2>
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {serviceAreas.map(a => (
            <span key={a} className="area-badge">{a}</span>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
