const SectionLabel = ({ text, color = "primary" }: { text: string; color?: string }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className={`w-8 h-0.5 ${color === "scribby" ? "bg-scribby-yellow" : "bg-primary"}`} />
    <span className={`font-heading text-xs uppercase tracking-[0.2em] ${color === "scribby" ? "text-scribby-yellow" : "text-primary"}`}>
      {text}
    </span>
  </div>
);

export default SectionLabel;
