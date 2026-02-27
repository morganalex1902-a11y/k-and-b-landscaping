import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Properties Served" },
  { value: 2, suffix: "", label: "Locations Covered" },
  { value: 100, suffix: "%", label: "Satisfaction Goal" },
];

const StatBar = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [counts, setCounts] = useState(stats.map(() => 0));
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated) {
        setAnimated(true);
        stats.forEach((stat, i) => {
          const duration = 1500;
          const steps = 40;
          const increment = stat.value / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= stat.value) {
              current = stat.value;
              clearInterval(timer);
            }
            setCounts(prev => { const n = [...prev]; n[i] = Math.round(current); return n; });
          }, duration / steps);
        });
      }
    }, { threshold: 0.3 });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <div ref={ref} className="bg-primary py-10">
      <div className="container mx-auto px-4 grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, i) => (
          <div key={stat.label}>
            <div className="font-heading text-5xl text-primary-foreground">{counts[i]}{stat.suffix}</div>
            <div className="font-heading text-sm uppercase tracking-wider text-green-dark mt-1">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatBar;
