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
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F14e5175458544bc3aa34805bea5cb68c?format=webp&width=800&height=1200",
    alt: "Overgrown brush before clearing",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fc23fa863ac544f00acb917277df096c1?format=webp&width=800&height=1200",
    alt: "Brush cleared by shed",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe159f39405634072963499149ec5ef57?format=webp&width=800&height=1200",
    alt: "Excavator arm with attachment",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fde08d78d6ff847b490f3696767d9d2d6?format=webp&width=800&height=1200",
    alt: "Cleared field with excavator in background",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Ff7e51ff360114626a17d86255a68492c?format=webp&width=800&height=1200",
    alt: "Brush pile and cleared area",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fa38ff360d0784f6ca80f6b4096266453?format=webp&width=800&height=1200",
    alt: "View from equipment clearing brush",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd2a1485470d24e0c951fc1df5c66558f?format=webp&width=800&height=1200",
    alt: "Cleared path through trees",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F9209c0a8cb4a490eb6b1f793fc77bbc3?format=webp&width=800&height=1200",
    alt: "Green Avant equipment with mower attachment",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F664a5fed9d9d4681ba514db6fd872047?format=webp&width=800&height=1200",
    alt: "Forestry mulching equipment in action",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F1f357ee601f949fe90a30b9810137e7e?format=webp&width=800&height=1200",
    alt: "Land clearing with forestry mulcher",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2Fbdc6fde6a51240699ba7b881ddcb68df?format=webp&width=800&height=1200",
    alt: "Mulched landscape after clearing",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F0db0a9f24dbd42d58890439a563d25ae?format=webp&width=800&height=1200",
    alt: "Forestry mulching site preparation",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F8dc30133b95b4d578c56bb16c691f7d8?format=webp&width=800&height=1200",
    alt: "Cleared area with mulch material",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F3dc055fc18574dabb7a6cabcb919ff0e?format=webp&width=800&height=1200",
    alt: "Overgrown land forestry clearing",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F42db8153b1b54e9f852573d8190bb701?format=webp&width=800&height=1200",
    alt: "Professional mulching operation",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F1bba7a2716034abb812b4fc373d59b37?format=webp&width=800&height=1200",
    alt: "Tree grinding and mulching service",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F4673f781514b412daa7a53a82ac5b6c8?format=webp&width=800&height=1200",
    alt: "Mulch piles from land clearing",
    category: "Forestry mulching"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F2f47ce89b3e242d49d44baef9fa5dc9a?format=webp&width=800&height=1200",
    alt: "Before and after forestry mulching",
    category: "Forestry mulching"
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
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd531d910ec654310a72c9abcfe99cef3?format=webp&width=800&height=1200",
    alt: "Commercial mulch blowing equipment on trailer",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F35ccea98b1d940d0af91c239cddcfb9b?format=webp&width=800&height=1200",
    alt: "Freshly mulched large estate lawn",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe1b015bbeb0e48df8b50d5f43835cff2?format=webp&width=800&height=1200",
    alt: "Detail of red mulch in garden bed",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F74783ff0ff3047febb056d4b3b4e2bea?format=webp&width=800&height=1200",
    alt: "Stepping stone path with fresh mulch",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fcfd31532ff5d4e24a6339c9172f02ca6?format=webp&width=800&height=1200",
    alt: "Landscape bed with hostas and fresh dark mulch",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd543f018150e483eb2f4af9b0333da7f?format=webp&width=800&height=1200",
    alt: "Small flower bed with fresh mulch by driveway",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F080aa41369c64cc09f69f7107e10abca?format=webp&width=800&height=1200",
    alt: "Large mulched slope with plantings and stone wall",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F980f7410060143d2abdd6c5f9f833b8e?format=webp&width=800&height=1200",
    alt: "Meadowview sign with freshly mulched beds",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F72b6fb43f1bf441fb41b0b29610fe10e?format=webp&width=800&height=1200",
    alt: "Truck and mulch blowing equipment on site",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0bfbe3c2347548d5baa42368c3d01a77?format=webp&width=800&height=1200",
    alt: "Large landscape area with boulders and fresh mulch",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2F0c785f688435494a9f0a0c7546ce4fda?format=webp&width=800&height=1200",
    alt: "Yellow mulch installation alongside driveway",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2Fe6685c4263b849ffb5e35f3c6f00ee39?format=webp&width=800&height=1200",
    alt: "Light colored stone pathway with red mulch beds",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2Fbf3ddf324dc741d0bfc90ece5254af5f?format=webp&width=800&height=1200",
    alt: "Black mulch installation along fence line",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2F7e99703493564f4084a72c27a9d91b99?format=webp&width=800&height=1200",
    alt: "Forest garden area with dark mulch and stone",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2F58a711b8d69648049a12837e73c077b5?format=webp&width=800&height=1200",
    alt: "Red mulch landscaping with flowering plants",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2F5f3a0a14f2024f239b2c5e5d1f1cd653?format=webp&width=800&height=1200",
    alt: "Professional mulch blowing sign installation",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F89bd787b8ce54c6985ade182c689fc44%2F504182cae049476f9550a865c3d23ebb?format=webp&width=800&height=1200",
    alt: "K&B equipment and crew with mulch blowing truck",
    category: "Commercial & Residential Mulch Blowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F599e90c33ee44be397f66723890b0954?format=webp&width=800&height=1200",
    alt: "Red Yanmar excavator removing tree stump",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fcc334b53c6b940c2b14afcefd52fe601?format=webp&width=800&height=1200",
    alt: "Red Yanmar excavator and Kubota R540 loader",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F6391038eb6f04968a9a21da0113d22b9?format=webp&width=800&height=1200",
    alt: "Red Yanmar excavator moving large rocks",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F9c282751601d4e1981324f8b27192609?format=webp&width=800&height=1200",
    alt: "Red Yanmar excavator loading soil into truck",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fdb197ac1a38e4579b8ebd22512f8c9b2?format=webp&width=800&height=1200",
    alt: "Red Yanmar excavator and dump truck on property",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe7a4c9caccd3470fa8b3f1ec8888be1b?format=webp&width=800&height=1200",
    alt: "Kubota loader working on foundation",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd193b332ffdb49e8b8dc1677f98580ab?format=webp&width=800&height=1200",
    alt: "Excavated area for building foundation",
    category: "Light Excavation"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Ff2c05812b9a04c848d6fa0ba39c93b46?format=webp&width=800&height=1200",
    alt: "Freshly planted arborvitae row with dark mulch",
    category: "Plantings and pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F79fbcf588e0e4d4b83b92d9936f4184c?format=webp&width=800&height=1200",
    alt: "New landscape installation with trees and soil preparation",
    category: "Plantings and pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fad4b719e18c24ca89d453d93707969a6?format=webp&width=800&height=1200",
    alt: "Large balled and burlapped tree ready for planting",
    category: "Plantings and pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fdfb854e2b83c4deda56cc8029477261b?format=webp&width=800&height=1200",
    alt: "Expertly pruned tall privacy hedge along driveway",
    category: "Plantings and pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F695a68b978e6465a9af0c3ffda2d21c2?format=webp&width=800&height=1200",
    alt: "Ornamental tree with vibrant pink and purple foliage",
    category: "Plantings and pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Feb6f64eb9dfd442ea08799c1c13e05a8?format=webp&width=800&height=1200",
    alt: "Perfectly striped large residential lawn",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F49b128b6312b4eacb25e3fc363479189?format=webp&width=800&height=1200",
    alt: "Checkerboard striped lawn pattern",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F1f8313a1b82f42ceb89428f6d977a3b4?format=webp&width=800&height=1200",
    alt: "Wide landscape view of striped lawn and house",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0b22601d0eb3407798aaad465d4b546c?format=webp&width=800&height=1200",
    alt: "Curved stripes on a large property lawn",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fe429ebf4dfce4f298efcfee425102f7f?format=webp&width=800&height=1200",
    alt: "Close-up of perfectly executed lawn stripes",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F471782dd388e4203a86bbe1280dedb5a?format=webp&width=800&height=1200",
    alt: "Long vertical lawn stripes at a large residence",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fc417b6ddc08141a399201669b460fc4f?format=webp&width=800&height=1200",
    alt: "Crisp diagonal stripes on a lush green lawn",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fb7e3f7d40f3c41e49fd3922da6866ac2?format=webp&width=800&height=1200",
    alt: "Lawn stripes at dusk under property lights",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F7b9feab5b5cf42aca4feb4ca57b2e9bb?format=webp&width=800&height=1200",
    alt: "Detailed striping pattern on front yard lawn",
    category: "Mowing"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F8abd48d6c814466ebdfbd1891e4d19d8?format=webp&width=800&height=1200",
    alt: "SnowWolf plow on equipment",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F81fc4fb7f9d540c68be5a1e8da3ad41b?format=webp&width=800&height=1200",
    alt: "Fleet of trucks and tractor with plows",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F22da6e08996d44498fd3884e42b2175d?format=webp&width=800&height=1200",
    alt: "CAT loader with SnowWolf attachment in snow",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Ffe7dc01419004c49a7a984927db579f0?format=webp&width=800&height=1200",
    alt: "JCB skid steer with SnowWolf attachment",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F0f19dc117c0244498098be0ef7ac5df4?format=webp&width=800&height=1200",
    alt: "JCB skid steer with SnowWolf attachment (side view)",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F2d255bd7e1a84ddc81f576ab53aeba8e?format=webp&width=800&height=1200",
    alt: "Kubota tractor with SnowWolf attachment on trailer",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2Fd7456984010943caab4cc205cc058331?format=webp&width=800&height=1200",
    alt: "CAT loader pushing snow",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F0f042e260f4e4898bb3fdcac69332937%2F7f0cfd3b27b74bde9387cded1ebf82eb?format=webp&width=800&height=1200",
    alt: "Tractor loading salt into truck with plow",
    category: "Snow equipment"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F9748e3946c0d4b68bb88d31337191e00?format=webp&width=800&height=1200",
    alt: "Planted evergreen shrubs in mulch bed",
    category: "Shrub pruning"
  },
  {
    src: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F7f10ea8cdc584192bbe51d6b6d096baa?format=webp&width=800&height=1200",
    alt: "Finished landscape with shrubs and mulch installation",
    category: "Shrub pruning"
  },
];

const categories = [
  "all",
  "Spring & Fall Cleanup",
  "Commercial & Residential Mulch Blowing",
  "Light Excavation",
  "Forestry mulching",
  "Hardscapes",
  "Plantings and pruning",
  "Shrub pruning",
  "Mowing",
  "Snow equipment"
];

const beforeAfterPairs = [
  {
    id: "shrub-pruning-1",
    before: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2Fe677b7703bde405da81429ea4e212ce3?format=webp&width=800&height=1200",
    after: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2Fe251143bdee8488a84b534959285d83e?format=webp&width=800&height=1200",
    title: "Shrub Pruning and Installation",
    category: "Shrub pruning"
  },
  {
    id: "shrub-pruning-2",
    before: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2Fb6d964fd51274251a199e926ae500a5c?format=webp&width=800&height=1200",
    after: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F0c033fe0d4654de0817b95dc508b6440?format=webp&width=800&height=1200",
    title: "Professional Shrub Trimming",
    category: "Shrub pruning"
  },
  {
    id: "shrub-pruning-3",
    before: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2Fb924803ea8834e6c8b7a7ec31876bb6c?format=webp&width=800&height=1200",
    after: "https://cdn.builder.io/api/v1/image/assets%2F41b4ab5f932c44f78c59ae25818f8603%2F37ce435943cb44e8af68195123da27b1?format=webp&width=800&height=1200",
    title: "Landscape Shrub Installation",
    category: "Shrub pruning"
  }
];

const Gallery = () => {
  const [filter, setFilter] = useState("all");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const filtered = filter === "all" ? galleryImages : galleryImages.filter(i => i.category === filter);
  const filteredBeforeAfter = filter === "all" ? beforeAfterPairs : beforeAfterPairs.filter(p => p.category === filter);

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

      {/* Before/After Section */}
      {filteredBeforeAfter.length > 0 && (
        <section className="section-dark py-12 border-t border-kb-gray-border">
          <div className="container mx-auto px-4">
            <h2 className="font-display text-4xl md:text-[48px] text-kb-white text-center mb-12">Before & After</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredBeforeAfter.map((pair) => (
                <ScrollReveal key={pair.id}>
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl text-kb-white text-center">{pair.title}</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm">
                          <img src={pair.before} alt={`${pair.title} Before`} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm font-heading text-kb-white text-center">BEFORE</p>
                      </div>
                      <div className="space-y-2">
                        <div className="aspect-[4/3] overflow-hidden rounded-sm">
                          <img src={pair.after} alt={`${pair.title} After`} className="w-full h-full object-cover" />
                        </div>
                        <p className="text-sm font-heading text-kb-white text-center">AFTER</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

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
