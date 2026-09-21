import { HeartHandshake, Trophy, ShieldCheck, Scale, Flame, Briefcase } from "lucide-react";
import HexagonCard from "../HexagonCard";

export default function AboutCoreValues() {
  return (
    <section className="section bg-white/30 backdrop-blur-sm relative overflow-hidden py-24">
      <div className="container-xl relative z-10">
        <h2 className="font-display text-4xl sm:text-5xl font-bold mb-16 text-black text-center">
          Our Core Values
        </h2>

        <div className="w-full overflow-x-auto pb-12 pt-4 flex justify-start lg:justify-center hide-scrollbar">
          <div className="flex justify-center items-start min-w-[1100px] lg:min-w-0 pl-4 pr-4">

            {/* Column 1 */}
            <div className="flex flex-col gap-2">
              <HexagonCard invisible={true} />
              <HexagonCard icon={Scale} title="Ethics" delay={0.3} />
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 -ml-[57px] mt-[116px]">
              <HexagonCard icon={HeartHandshake} title="Empathy" delay={0.2} />
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 -ml-[57px]">
              <HexagonCard icon={ShieldCheck} title="Integrity" delay={0.1} />
              <HexagonCard icon={Flame} title="Passion" delay={0.4} />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-2 -ml-[57px] mt-[116px]">
              <HexagonCard icon={Briefcase} title="Professionalism" delay={0.3} />
            </div>

            {/* Column 5 */}
            <div className="flex flex-col gap-2 -ml-[57px]">
              <HexagonCard invisible={true} />
              <HexagonCard icon={Trophy} title="Accomplishment" delay={0.5} />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
