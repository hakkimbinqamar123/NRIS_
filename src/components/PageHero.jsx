import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import AnimatedSection from "./AnimatedSection";

export default function PageHero({ eyebrow, title, subtitle, crumb, cta, bgImage, noOverlay, lightOverlay }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section ref={ref} className="relative pt-24 pb-[150px] border-b border-black/5 overflow-hidden">
      {bgImage && (
        <>
          <motion.div style={{ y: yBg }} className="absolute -inset-y-[10%] inset-x-0 z-0">
            <motion.img 
              src={bgImage} 
              alt="" 
              className="w-full h-full object-cover origin-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          {!noOverlay && !lightOverlay && <div className="absolute inset-0 z-0 bg-white/85" />}
          {lightOverlay && <div className="absolute inset-0 z-0 bg-white/40" />}
        </>
      )}
      {!bgImage && (
        <div className="absolute inset-0 z-0 overflow-hidden bg-slate-50">
          <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
            <motion.div
              className="absolute -top-[20%] -left-[10%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] rounded-full bg-blue-400/30 blur-[100px]"
              animate={{ x: [0, 60, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
              transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute top-[10%] -right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-red-400/20 blur-[100px]"
              animate={{ x: [0, -60, 0], y: [0, 50, 0], scale: [1, 1.15, 1] }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -bottom-[20%] left-[30%] w-[60vw] h-[40vw] max-w-[700px] max-h-[500px] rounded-full bg-purple-400/20 blur-[120px]"
              animate={{ x: [0, 40, 0], y: [0, -40, 0], scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>
          <div className="absolute inset-0 z-0 gradient-hero opacity-60 mix-blend-overlay" />
          <div className="absolute inset-0 z-0 bg-white/30" />
        </div>
      )}
      
      <div className="container-xl relative z-10">
        <AnimatedSection>
          {eyebrow && <span className="badge-pill mb-5">{eyebrow}</span>}
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink max-w-3xl mb-5 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-muted text-lg max-w-2xl mb-8 leading-relaxed">
              {subtitle}
            </p>
          )}
          {cta && cta}
        </AnimatedSection>
      </div>
    </section>
  );
}
