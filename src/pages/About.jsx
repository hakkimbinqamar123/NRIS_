import AnimatedBackground from "../components/AnimatedBackground";
import AboutHero from "../components/About/AboutHero";
import AboutIntro from "../components/About/AboutIntro";
import AboutMission from "../components/About/AboutMission";
import AboutCoreValues from "../components/About/AboutCoreValues";

export default function About() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <AboutHero />
      <AboutIntro />
      <AboutMission />
      <AboutCoreValues />
    </div>
  );
}
