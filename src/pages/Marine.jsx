import AnimatedBackground from "../components/AnimatedBackground";
import MarineHero from "../components/Marine/MarineHero";
import MarineIntro from "../components/Marine/MarineIntro";
import MarineBenefits from "../components/Marine/MarineBenefits";

export default function Marine() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <MarineHero />
      <MarineIntro />
      <MarineBenefits />
    </div>
  );
}
