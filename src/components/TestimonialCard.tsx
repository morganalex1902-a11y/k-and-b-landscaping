const TestimonialCard = ({ text, name, title }: { text: string; name: string; title: string }) => (
  <div className="review-card">
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <span key={i} className="text-primary text-lg">★</span>
      ))}
    </div>
    <p className="text-kb-white text-[15px] leading-relaxed mb-4 italic">"{text}"</p>
    <p className="text-primary font-heading text-sm">— {name}</p>
    <p className="text-kb-gray text-xs">{title}</p>
  </div>
);

export default TestimonialCard;
