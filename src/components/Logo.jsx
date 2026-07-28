import { Shield } from "lucide-react";

export default function Logo({ className = "", light = false }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className={`flex items-center justify-center ${light ? "text-white" : "text-[#EF4444]"}`}>
        <Shield size={36} strokeWidth={2.5} />
      </span>
      <span className="leading-tight">
        <span className={`block font-display font-bold text-xl ${light ? "text-white" : "text-black"}`}>NRIS</span>
        <span className={`block text-[11px] uppercase tracking-wider ${light ? "text-white/80" : "text-black/60"}`}>
          Insurance Services
        </span>
      </span>
    </div>
  );
}
