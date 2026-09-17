import nrisIcon from "../assets/NRiS without Background.png";

export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center ${className}`}>
      <img loading="lazy" 
        src={nrisIcon} 
        alt="NRIS Logo" 
        className={`h-16 md:h-[72px] w-auto object-contain ${light ? "brightness-0 invert" : ""}`} 
      />
    </div>
  );
}
