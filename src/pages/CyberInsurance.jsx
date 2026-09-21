import AnimatedBackground from "../components/AnimatedBackground";
import CyberHero from "../components/CyberInsurance/CyberHero";
import CyberIntro from "../components/CyberInsurance/CyberIntro";
import CyberBenefits from "../components/CyberInsurance/CyberBenefits";

export default function CyberInsurance() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <CyberHero />
      <CyberIntro />
      <CyberBenefits />
    </div>
  );
}
