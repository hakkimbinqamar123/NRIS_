import AnimatedBackground from "../components/AnimatedBackground";
import EngineeringHero from "../components/Engineering/EngineeringHero";
import EngineeringIntro from "../components/Engineering/EngineeringIntro";
import EngineeringServices from "../components/Engineering/EngineeringServices";

export default function Engineering() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <EngineeringHero />
      <EngineeringIntro />
      <EngineeringServices />
    </div>
  );
}
