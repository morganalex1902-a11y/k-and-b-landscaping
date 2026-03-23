import ScrollReveal from "@/components/ScrollReveal";
import SectionLabel from "@/components/SectionLabel";

const scribbyServices = [
  { icon: "🚛", title: "Junk Removal", desc: "Remove unwanted furniture, appliances, debris, and more. Fast pickup, responsible disposal." },
  { icon: "🏠", title: "Garage Cleanouts", desc: "Complete garage clearing — we haul everything away so you don't have to make multiple trips." },
  { icon: "🏚️", title: "Basement Cleanouts", desc: "Full basement decluttering service. We handle all the heavy lifting and sorting." },
];

const JunkRemoval = () => (
  <div>
    {/* Hero */}
    <section className="bg-kb-black-soft pt-32 pb-16 border-b-4 border-scribby-yellow">
      <div className="container mx-auto px-4">
        <h1 className="font-display text-5xl md:text-[72px] text-kb-white animate-hero-2">JUNK REMOVAL &<br />DUMPSTER RENTALS</h1>
        <p className="font-heading text-xl text-scribby-yellow tracking-wider mt-3 animate-hero-3">IN PARTNERSHIP WITH SCRIBBY'S JUNK REMOVAL</p>
      </div>
    </section>

    {/* About */}
    <section className="section-dark py-20">
      <div className="container mx-auto px-4">
        <ScrollReveal>
          <SectionLabel text="Our Partner" color="scribby" />
          <h2 className="font-display text-4xl md:text-[48px] text-kb-white">RECLAIM YOUR SPACE</h2>
          <p className="text-kb-gray mt-4 max-w-2xl leading-relaxed">
            We've partnered with Scribby's Junk Removal to provide our clients with complete property cleanup solutions.
            Scribby's specializes in providing efficient and reliable junk removal services to help you declutter and reclaim your space.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* Services */}
    <section className="section-dark py-16 border-t border-kb-gray-border">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-6">
        {scribbyServices.map(s => (
          <ScrollReveal key={s.title}>
            <div className="bg-kb-black-soft rounded-sm p-8" style={{ borderLeft: "4px solid hsl(47, 92%, 52%)" }}>
              <span className="text-3xl">{s.icon}</span>
              <h3 className="font-heading text-xl text-kb-white uppercase mt-3">{s.title}</h3>
              <p className="text-kb-gray text-sm mt-2 leading-relaxed">{s.desc}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* Why Scribby's */}
    <section className="section-dark py-16 border-t border-kb-gray-border">
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-wrap justify-center gap-6">
          {["Prompt and Hassle-Free Service", "Environmentally Conscious", "Experienced and Professional Team"].map(p => (
            <span key={p} className="flex items-center gap-2 font-heading text-kb-white uppercase tracking-wider">
              <span className="text-scribby-yellow">✅</span> {p}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20" style={{ background: "hsl(47, 92%, 52%)" }}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="font-display text-4xl md:text-[56px] text-foreground">CONTACT SCRIBBY'S DIRECT</h2>
        <p className="font-heading text-2xl text-foreground mt-4">📞 603-397-7536</p>
        <p className="text-foreground/70 mt-1">SCRIBBYSJUNK.COM</p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <a href="tel:6033977536" className="btn-dark">Call Scribby's Now</a>
          <a href="https://scribbysjunk.com" target="_blank" rel="noopener noreferrer" className="btn-outline-dark">Visit ScribbysJunk.com</a>
        </div>
        <p className="text-foreground/60 text-sm mt-6 max-w-lg mx-auto">
          Scribby's Junk Removal is an independent business. K&B Landscaping partners with Scribby's to provide complete property services.
        </p>
      </div>
    </section>
  </div>
);

export default JunkRemoval;
