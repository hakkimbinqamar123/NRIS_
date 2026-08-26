import { motion } from "framer-motion";
import nrisHeroBanner from "../assets/NRIS_hero_banner2.png";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:65%_center]"
        style={{ backgroundImage: `url(${nrisHeroBanner})` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
    </div>
  );
}
