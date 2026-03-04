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
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F7efd2591b1c74492a4bb4c2abe143c85?format=webp&width=800&height=1200",
    alt: "Excavator clearing snow and brush",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F14e5175458544bc3aa34805bea5cb68c?format=webp&width=800&height=1200",
    alt: "Overgrown brush before clearing",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fc23fa863ac544f00acb917277df096c1?format=webp&width=800&height=1200",
    alt: "Brush cleared by shed",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe159f39405634072963499149ec5ef57?format=webp&width=800&height=1200",
    alt: "Excavator arm with attachment",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fde08d78d6ff847b490f3696767d9d2d6?format=webp&width=800&height=1200",
    alt: "Cleared field with excavator in background",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Ff7e51ff360114626a17d86255a68492c?format=webp&width=800&height=1200",
    alt: "Brush pile and cleared area",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa38ff360d0784f6ca80f6b4096266453?format=webp&width=800&height=1200",
    alt: "View from equipment clearing brush",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd2a1485470d24e0c951fc1df5c66558f?format=webp&width=800&height=1200",
    alt: "Cleared path through trees",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F9209c0a8cb4a490eb6b1f793fc77bbc3?format=webp&width=800&height=1200",
    alt: "Green Avant equipment with mower attachment",
    category: "Forestry and Flail mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0f73b766519a48ed858fa5d09f854445?format=webp&width=800&height=1200",
    alt: "Paver walkway and stairs",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fb3104bbd645045e0a76b7eb2c9776b19?format=webp&width=800&height=1200",
    alt: "Retaining wall and patio area",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F3db00798dc834e01917f6e785643c01d?format=webp&width=800&height=1200",
    alt: "Large raised garden bed construction",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe0994634322a44f3a3d900c696b6d51f?format=webp&width=800&height=1200",
    alt: "Stone fire pit area with blue chairs",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F35e7d24c166d48d6ab97235e707ab963?format=webp&width=800&height=1200",
    alt: "Multi-level retaining wall and steps",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F7f8d2fc659c64330a1a45a883ad41fbe?format=webp&width=800&height=1200",
    alt: "Paver patio in front of shed",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F8d4c27a43d1149f5855b824c1c735679?format=webp&width=800&height=1200",
    alt: "Stone retaining wall on slope",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fb632ae1586d642a4840f0dbb33f57b89?format=webp&width=800&height=1200",
    alt: "Long paver walkway to door",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F35cc47986a8347888d50f8069c6188e4?format=webp&width=800&height=1200",
    alt: "Paver walkway alongside pool fence",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F38265715c9a0430aaabd57e4e96184a7?format=webp&width=800&height=1200",
    alt: "Freshly graded soil and retaining wall",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F38d5a7292851439e86b6295bdb2ac828?format=webp&width=800&height=1200",
    alt: "Large stone patio by lake",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F3ec7c252c33240ea8d5b6b7a6e2f399f?format=webp&width=800&height=1200",
    alt: "Red brick walkway construction",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F422947cb709349a9912f197f11f7ae94?format=webp&width=800&height=1200",
    alt: "Stone steps and walkway along house",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa6e89f999d93464196ecaf20d18cd04b?format=webp&width=800&height=1200",
    alt: "Red brick walkway leading to equipment",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0a336d723d5045f59e41c338e6b3023b?format=webp&width=800&height=1200",
    alt: "Paver path leading to garden area",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F6855e3328f44493488779fd4c23430d3?format=webp&width=800&height=1200",
    alt: "Stone retaining wall and graded driveway area",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F881464a8d8014ac09460890e3dbcbc5f?format=webp&width=800&height=1200",
    alt: "Excavator working on retaining wall",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fb9a7d13d15b1423e98a659ae646fd251?format=webp&width=800&height=1200",
    alt: "Stone steps leading down to patio",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F72daa86ee4da4acdbba0c9c200d537f2?format=webp&width=800&height=1200",
    alt: "Stone fire pit and seating area with walls",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe4786010710a4fb3b81f545a777949b6?format=webp&width=800&height=1200",
    alt: "Large paver patio area with wall",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fcd464427d723416bab49adfc8fd828ad?format=webp&width=800&height=1200",
    alt: "Large paver patio extension",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fbe2d5e4cddc0430c800444268a6ef9c5?format=webp&width=800&height=1200",
    alt: "Large paver patio and seating area by pool",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F4cdc8f5e42b24ad6ab6fd52fc82ecf41?format=webp&width=800&height=1200",
    alt: "Paver walkway and landscape beds",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F07388eba76b64561bc65141ca40a984b?format=webp&width=800&height=1200",
    alt: "Multi-level stone steps walkway",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fda539ba9b0834d9e9d79a23a32122d3e?format=webp&width=800&height=1200",
    alt: "Play area with retaining wall and play set",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fbe8117be03f5442b86e6579dd8d0a498?format=webp&width=800&height=1200",
    alt: "Large rock fire pit under construction",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F203f339817d947b4832e311531c72a68?format=webp&width=800&height=1200",
    alt: "Rock fire pit and surrounding gravel area",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fb3e05ed6786345a682d8197267febd04?format=webp&width=800&height=1200",
    alt: "Red brick walkway leading to stairs",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F9437dc05235b47e29abcddabe1c926f9?format=webp&width=800&height=1200",
    alt: "Large stone retaining wall and steps",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fef2ac0771bc44a23811a4d9809830c6c?format=webp&width=800&height=1200",
    alt: "Paver walkway and garden bed with plants",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa9e1f4fea80c4e1fb48e1bfd1dfe62f2?format=webp&width=800&height=1200",
    alt: "Outdoor water fountain feature with rocks",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F1df366ca74f14dcf9de4027183f08b83?format=webp&width=800&height=1200",
    alt: "Paver walkway by pool under construction",
    category: "Hardscapes"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fcce7368c7cfa463db56d5ab61b97dd16?format=webp&width=800&height=1200",
    alt: "Large paver patio area with stone walls",
    category: "Hardscapes"
  },
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
