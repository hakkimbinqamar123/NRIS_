import AnimatedBackground from "../components/AnimatedBackground";
import MotorHero from "../components/MotorInsurance/MotorHero";
import MotorIntro from "../components/MotorInsurance/MotorIntro";
import MotorBenefits from "../components/MotorInsurance/MotorBenefits";

export default function MotorInsurance() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <MotorHero />
      <MotorIntro />
      <MotorBenefits />
    </div>
  );
}
