import AnimatedBackground from "../components/AnimatedBackground";
import PropertyHero from "../components/Property/PropertyHero";
import PropertyIntro from "../components/Property/PropertyIntro";
import PropertyBenefits from "../components/Property/PropertyBenefits";

export default function Property() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <PropertyHero />
      <PropertyIntro />
      <PropertyBenefits />
    </div>
  );
}
