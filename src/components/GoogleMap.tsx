const GoogleMap = () => (
  <div className="w-full h-[400px] bg-kb-black-soft rounded-sm overflow-hidden border-2 border-kb-gray-border/30">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d46890.75331575823!2d-71.0401!3d42.9287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e2e60475371c6d%3A0x6b77243917537704!2sEast%20Kingston%2C%20NH!5e0!3m2!1sen!2sus!4v1645564859000!5m2!1sen!2sus"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map of East Kingston, NH"
      className="grayscale hover:grayscale-0 transition-all duration-500"
    ></iframe>
  </div>
);

export default GoogleMap;
