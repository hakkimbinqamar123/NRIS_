import { motion } from "framer-motion";
import motImg from "../../assets/Mot.png";

export default function MotorHero() {
  return (
    <section className="relative overflow-hidden w-full md:h-[calc(100dvh-81px)] bg-black/5">
      <motion.img loading="lazy"
        src={motImg}
        alt="Motor Insurance Hero"
        className="w-full h-auto md:h-full object-cover object-top z-0 block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      />
    </section>
  );
}
