import AnimatedBackground from "../components/AnimatedBackground";
import HomeHero from "../components/Home/HomeHero";
import HomeStats from "../components/Home/HomeStats";
import HomeGoals from "../components/Home/HomeGoals";
import HomeWhyChooseUs from "../components/Home/HomeWhyChooseUs";
import HomeServices from "../components/Home/HomeServices";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <HomeHero />
      <HomeStats />
      <HomeGoals />
      <HomeWhyChooseUs />
      <HomeServices />
    </div>
  );
}
