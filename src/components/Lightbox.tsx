import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

interface LightboxProps {
  images: { src: string; alt: string }[];
  current: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

const Lightbox = ({ images, current, onClose, onPrev, onNext }: LightboxProps) => {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, onPrev, onNext]);

  return (
    <div className="fixed inset-0 z-[100] bg-kb-black/95 flex items-center justify-center" onClick={onClose}>
      <button className="absolute top-6 right-6 text-kb-white hover:text-primary" onClick={onClose}><X size={32} /></button>
      <button className="absolute left-4 text-kb-white hover:text-primary" onClick={(e) => { e.stopPropagation(); onPrev(); }}><ChevronLeft size={40} /></button>
      <button className="absolute right-4 text-kb-white hover:text-primary" onClick={(e) => { e.stopPropagation(); onNext(); }}><ChevronRight size={40} /></button>
      <img
        src={images[current].src}
        alt={images[current].alt}
        className="max-h-[85vh] max-w-[90vw] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  );
};

export default Lightbox;
