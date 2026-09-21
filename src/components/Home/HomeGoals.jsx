import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function HomeGoals() {
  return (
    <section className="relative overflow-hidden py-24 lg:min-h-screen flex flex-col items-center justify-center text-center px-4">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[700px] h-[700px] rounded-full bg-white/30 blur-3xl" />
      </div>

      <AnimatedSection className="relative z-10 max-w-3xl mx-auto">
        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-4 md:mb-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="block text-red-600">Your Safety</span>
          <span className="block text-[#0B4EA2]">Our Priority</span>
        </motion.h1>

        <motion.p
          className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed font-medium px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          At <span className="font-bold text-[#0B4EA2]">NRiS Insurance</span>, we understand that every journey matters. Our policies give you <span className="text-[#0B4EA2] font-semibold">peace of mind</span>.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link
            to="/contact"
            className="btn-primary bg-[#0B4EA2] hover:bg-blue-800 border-[#0B4EA2] text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full shadow-lg"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
          <a
            href="#services"
            className="btn-outline border-[#0B4EA2] text-[#0B4EA2] hover:bg-blue-50 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full"
          >
            Explore Services
          </a>
        </motion.div>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600 mt-6 md:mt-8"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <span className="flex items-center gap-1.5">
            <ShieldCheck size={15} className="text-[#0B4EA2]" /> A-Rated insurer network
          </span>
          <span className="flex items-center gap-1.5">
            <Clock size={15} className="text-[#0B4EA2]" /> 24/7 claims support
          </span>
        </motion.div>

        <motion.div
          className="flex lg:hidden flex-wrap justify-center gap-2 mt-6"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {["Established in 1990", "DHA No: 00067", "HAAD No: B012", "CB UAE No: 35"].map((label) => (
            <span
              key={label}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 text-[#0B4EA2] text-[11px] font-extrabold shadow-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#0B4EA2] shrink-0" />
              {label}
            </span>
          ))}
        </motion.div>
      </AnimatedSection>

      {[
        { label: "Established in 1990", pos: "top-[10%] left-0 right-0 mx-auto w-max", init: { opacity: 0, y: -100, scale: 0.8 }, anim: { opacity: 1, y: 0, scale: 1 } },
        { label: "CB UAE No: 35", pos: "bottom-[10%] left-0 right-0 mx-auto w-max", init: { opacity: 0, y: 100, scale: 0.8 }, anim: { opacity: 1, y: 0, scale: 1 } },
        { label: "DHA No: 00067", pos: "left-[10%] xl:left-[13%] top-0 bottom-0 my-auto h-max", init: { opacity: 0, x: -100, scale: 0.8 }, anim: { opacity: 1, x: 0, scale: 1 } },
        { label: "HAAD No: B012", pos: "right-[10%] xl:right-[13%] top-0 bottom-0 my-auto h-max", init: { opacity: 0, x: 100, scale: 0.8 }, anim: { opacity: 1, x: 0, scale: 1 } },
      ].map((item, i) => (
        <motion.span
          key={item.label}
          className={`absolute z-20 hidden lg:flex items-center gap-2 px-5 py-2.5 xl:px-8 xl:py-4 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 text-[#0B4EA2] text-sm xl:text-base font-extrabold shadow-md cursor-pointer ${item.pos}`}
          initial={item.init}
          whileInView={item.anim}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 + i * 0.1 }}
          whileHover={{ scale: 1.05, y: -3, boxShadow: "0 15px 30px rgba(11,78,162,0.25)" }}
        >
          <span className="h-2 w-2 rounded-full bg-[#0B4EA2] shrink-0" />
          {item.label}
        </motion.span>
      ))}
    </section>
  );
}
