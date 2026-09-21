import AnimatedBackground from "../components/AnimatedBackground";
import HealthHero from "../components/HealthInsurance/HealthHero";
import HealthIntro from "../components/HealthInsurance/HealthIntro";
import HealthReasons from "../components/HealthInsurance/HealthReasons";
import HealthPlans from "../components/HealthInsurance/HealthPlans";

export default function HealthInsurance() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <HealthHero />
      <HealthIntro />
      <HealthReasons />
      <HealthPlans />
    </div>
  );
}
