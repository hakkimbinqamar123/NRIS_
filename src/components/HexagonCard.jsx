import React from "react";
import AnimatedSection from "./AnimatedSection";

export default function HexagonCard({ icon: Icon, title, delay = 0, invisible = false }) {
  if (invisible) {
    return (
      <div
        className="w-[260px] h-[225px] opacity-0 pointer-events-none"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      />
    );
  }

  return (
    <AnimatedSection delay={delay}>
      <div
        className="w-[264px] h-[229px] bg-red-600 flex items-center justify-center hover:scale-105 transition-transform duration-300"
        style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
      >
        <div
          className="w-[260px] h-[225px] bg-gradient-to-br from-[#0B4EA2] to-[#083D82] flex flex-col items-center justify-center p-6 text-center"
          style={{ clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)' }}
        >
          <div className="flex flex-col items-center -translate-y-[6px]">
            <div className="mb-4 text-white">
              <Icon size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-white text-[15px] font-bold tracking-wide uppercase leading-snug">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
