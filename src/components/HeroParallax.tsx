import { useEffect, useRef } from "react";

interface HeroParallaxProps {
  children: React.ReactNode;
  imageUrl?: string;
  className?: string;
  overlayOpacity?: number;
}

const HeroParallax = ({
  children,
  imageUrl,
  className = "",
  overlayOpacity = 0.6,
}: HeroParallaxProps) => {
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (bgRef.current) {
        const scrolled = window.scrollY;
        // Move background slower than scroll
        bgRef.current.style.transform = `translate3d(0, ${scrolled * 0.5}px, 0)`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`relative overflow-hidden min-h-[60vh] flex items-center ${className}`}>
      {imageUrl ? (
        <div
          ref={bgRef}
          className="absolute inset-0 z-0 w-full"
          style={{
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "120%", // Extra height to allow scrolling without running out of image
            top: 0, // Start at top
          }}
        />
      ) : (
        <div className="absolute inset-0 hero-gradient z-0" />
      )}
      
      {/* Overlay */}
      {imageUrl && (
        <div 
          className="absolute inset-0 z-0 bg-kb-black"
          style={{ opacity: overlayOpacity }} 
        />
      )}
      
      <div className="relative z-10 w-full container mx-auto px-4 pt-20">
        {children}
      </div>
    </section>
  );
};

export default HeroParallax;
