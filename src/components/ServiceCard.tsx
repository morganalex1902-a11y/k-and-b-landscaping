import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  link?: string;
}

const ServiceCard = ({ icon, title, description, link }: ServiceCardProps) => (
  <div className="service-card">
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-2xl mb-4">
      {icon}
    </div>
    <h3 className="font-heading text-2xl text-kb-white uppercase mb-3">{title}</h3>
    <p className="text-kb-gray text-[15px] leading-relaxed mb-4">{description}</p>
    {link && (
      <Link to={link} className="text-primary font-heading text-sm uppercase tracking-wider hover:underline">
        → Learn More
      </Link>
    )}
  </div>
);

export default ServiceCard;
