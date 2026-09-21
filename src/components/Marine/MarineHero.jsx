import { motion } from "framer-motion";
import marImg from "../../assets/MAR.png";

export default function MarineHero() {
  return (
    <section className="relative overflow-hidden w-full md:h-[calc(100dvh-81px)] bg-black/5">
      <motion.img loading="lazy"
        src={marImg}
        alt="Marine Hero"
        className="w-full h-auto md:h-full object-cover object-top z-0 block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
