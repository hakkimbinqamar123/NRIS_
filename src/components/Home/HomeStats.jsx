import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import AnimatedSection from "../AnimatedSection";

const stats = [
  { value: 35, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 25, suffix: "+", label: "INTERNATIONAL AND LOCAL INSURERS", format: true },
  { value: 10, suffix: "+", label: "THIRD PARTY ADMINISTRATORS" },
  { value: 1000, suffix: "+", label: "SATISFIED COORPORATE CLIENTS", format: true },
];

function AnimatedCounter({ value, suffix, format }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v);
    if (format) return n.toLocaleString();
    return n;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-[#0B4EA2]">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function HomeStats() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
          {stats.map((s) => (
            <AnimatedSection key={s.label}>
              <div className="flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-8 shadow-md border border-white/20">
                <AnimatedCounter value={s.value} suffix={s.suffix} format={s.format} />
                <div className="text-blue-800/70 text-LG font-semibold tracking-wider mt-2 uppercase text-center">
                  {s.label}
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
