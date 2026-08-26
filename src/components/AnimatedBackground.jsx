import { motion, useScroll, useTransform } from "framer-motion";
import nrisHeroBanner from "../assets/NRIS_hero_banner2.png";

export default function AnimatedBackground() {
  const { scrollY } = useScroll();
  // Fade in the white overlay and blur as the user scrolls down
  // from 0 opacity at top, to 1 opacity at 300px scrolled down
  const overlayOpacity = useTransform(scrollY, [0, 400], [0, 1]);

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-cover bg-[position:65%_center]"
        style={{ backgroundImage: `url(${nrisHeroBanner})` }}
        animate={{ scale: [1, 1.05, 1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-0 bg-white/70 backdrop-blur-[4px]"
        style={{ opacity: overlayOpacity }}
      />
    </div>
  );
}
