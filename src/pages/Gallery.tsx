import { useState } from "react";
import { Link } from "react-router-dom";
import Lightbox from "@/components/Lightbox";
import ScrollReveal from "@/components/ScrollReveal";
import lawnPatio from "@/assets/lawn-patio.png";
import lawnStriped from "@/assets/lawn-striped.png";
import snowPlows from "@/assets/snow-plows.png";
import snowWolf from "@/assets/snow-wolf.png";
import mowersFleet from "@/assets/mowers-fleet.png";
import brushClearing from "@/assets/brush-clearing.png";
import excavatorWork from "@/assets/excavator-work.png";
import kbTrailer from "@/assets/kb-trailer.png";
import catPlow from "@/assets/cat-plow.png";
import kubotaSnowwolf from "@/assets/kubota-snowwolf.png";
import excavatorLoader from "@/assets/excavator-loader.png";
import greenAvant from "@/assets/green-avant.png";
import jcbSnowwolf from "@/assets/jcb-snowwolf.png";
import jcbSide from "@/assets/jcb-side.png";
import teamPhoto from "@/assets/team-photo.png";
import trailerWrap from "@/assets/trailer-wrap.png";
import kubotaLoader from "@/assets/kubota-loader.png";
import yanmarExcavator from "@/assets/yanmar-excavator.png";
import mowersLawn from "@/assets/mowers-lawn.png";

const galleryImages = [
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fbd483a0e698e474691164d60472169a5?format=webp&width=800&height=1200",
    alt: "Black lab in fall leaves",
    category: "Spring & Fall Cleanup"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd8b89d88a6914a29bb89927b27913e2b?format=webp&width=800&height=1200",
    alt: "Leaf removal truck and equipment",
    category: "Spring & Fall Cleanup"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0b2813e4345c4c69b7e0f4b5ab6df2ae?format=webp&width=800&height=1200",
    alt: "Large pile of leaves ready for removal",
    category: "Spring & Fall Cleanup"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F571ec75d219c44f39fc9d8e9bb2f9543?format=webp&width=800&height=1200",
    alt: "Ferris stand-on blowers",
    category: "Spring & Fall Cleanup"
  },
  { src: lawnPatio, alt: "Landscaped patio with striped lawn", category: "Hardscapes" },
  { src: lawnStriped, alt: "Striped lawn maintenance", category: "Mowing" },
  { src: snowPlows, alt: "Snow plow fleet ready for storm", category: "Snow equipment" },
  { src: mowersFleet, alt: "Professional mower fleet", category: "Mowing" },
  { src: brushClearing, alt: "Brush clearing project", category: "Forestry and Flail mowing" },
  { src: excavatorWork, alt: "Excavator work on property", category: "Light Excavation" },
  { src: snowWolf, alt: "SnowWolf commercial equipment", category: "Snow equipment" },
  { src: kbTrailer, alt: "K&B Landscaping trailer", category: "Mowing" },
  { src: catPlow, alt: "CAT skid steer with plow", category: "Snow equipment" },
  { src: kubotaSnowwolf, alt: "Kubota with SnowWolf", category: "Snow equipment" },
  { src: excavatorLoader, alt: "Excavator and loader", category: "Light Excavation" },
  { src: greenAvant, alt: "Green Avant loader", category: "Light Excavation" },
  { src: jcbSnowwolf, alt: "JCB with SnowWolf", category: "Snow equipment" },
  { src: jcbSide, alt: "JCB skid steer side view", category: "Snow equipment" },
  { src: teamPhoto, alt: "K&B team with equipment fleet", category: "Mowing" },
  { src: trailerWrap, alt: "K&B branded trailer wrap", category: "Mowing" },
  { src: kubotaLoader, alt: "Kubota R540 wheel loader", category: "Light Excavation" },
  { src: yanmarExcavator, alt: "Yanmar excavator on trailer", category: "Light Excavation" },
  { src: mowersLawn, alt: "Full mower fleet lineup on lawn", category: "Mowing" },
];

const categories = [
  "all",
  "Spring & Fall Cleanup",
  "Commercial & Residential Mulch Blowing",
  "Light Excavation",
  "Forestry and Flail mowing",
  "Hardscapes",
  "Plantings and pruning",
  "Mowing",
  "Snow equipment"
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryImages : galleryImages.filter(i => i.category === filter);

  return (
    <div>
      {/* Hero */}
      <section className="hero-gradient pt-32 pb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-5xl md:text-[72px] text-kb-white animate-hero-2">OUR WORK</h1>
          <p className="font-body italic text-lg text-primary mt-2 animate-hero-3">A portfolio of properties we're proud of</p>
        </div>
      </section>

      {/* Filters */}
      <section className="section-dark py-6 border-b border-kb-gray-border">
        <div className="container mx-auto px-4 flex flex-wrap justify-center gap-2">
          {categories.map(c => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`font-heading text-sm uppercase tracking-wider px-5 py-2 rounded-sm transition-colors ${
                filter === c ? "bg-primary text-primary-foreground" : "bg-kb-black-soft text-kb-white hover:bg-kb-gray-border"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Grid */}
      <section className="section-dark py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {filtered.map((img, i) => (
              <ScrollReveal key={`${img.alt}-${i}`}>
                <div className="gallery-item aspect-[4/3]" onClick={() => setLightboxIdx(i)}>
                  <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                  <div className="gallery-overlay">
                    <span className="text-sm font-heading">View Project</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 border-t border-kb-gray-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-[48px] text-kb-white">LIKE WHAT YOU SEE?</h2>
          <Link to="/contact" className="btn-green inline-block mt-6">Get a Free Quote for Your Property</Link>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <Lightbox
          images={filtered}
          current={lightboxIdx}
          onClose={() => setLightboxIdx(null)}
          onPrev={() => setLightboxIdx((lightboxIdx - 1 + filtered.length) % filtered.length)}
          onNext={() => setLightboxIdx((lightboxIdx + 1) % filtered.length)}
        />
      )}
    </div>
  );
};

export default Gallery;
