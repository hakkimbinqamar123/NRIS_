import { Link } from "react-router-dom";
import { Car, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function MotorIntro() {
  return (
    <section className="section bg-white">
      <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
        {/* Left Column: Hero Text */}
        <AnimatedSection>
          <div className="mb-4">
            <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
              <Car size={16} /> Motor Insurance
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
            <span className="block text-red-600 mb-2">Make Your Roads Shorter</span>
            <span className="block text-[#0B4EA2]">Your Safety Is Our Priority</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            From a single family car to nationwide fleets — <span className="text-[#0B4EA2] font-bold">NRiS</span> structures motor policies that keep you moving and settle claims fast when it matters.
          </p>
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
            Request a quote <ArrowRight size={18} />
          </Link>
        </AnimatedSection>

        <AnimatedSection delay={0.2} animation="slideRight">
          <div className="mb-8">
            <div className="h-1 w-24 bg-[#0B4EA2] mb-6"></div>
            <h2 className="font-display text-4xl font-bold text-ink leading-tight tracking-tight">
              <span className="text-[#0B4EA2]">NRiS</span> Assists You To Save Big On The Best Policy For Your Car.
            </h2>
          </div>

          <div className="space-y-6 text-ink/80 text-lg leading-[1.8] font-medium">
            <p>
              Car insurance is as important as buying the car itself. At <span className="text-[#0B4EA2] font-semibold">NRiS</span> we make sure that our clients' investments are protected against accidental damage. <span className="text-[#0B4EA2] font-semibold">NRiS</span> guides them through the complex options and confusing insurance jargons to select the best type of car Insurance suited to their specific needs. Based on the requirements we contrive the best solutions that provide the greatest value. We provide our client the best protection by evaluating their needs, understanding the available options and then matching them with the right coverage plan at a competitive price.
            </p>

            <p>
              We provide insurance advice on the following under our Motor Insurance service:
            </p>

            <p className="font-semibold text-ink">
              Cars, Pickups, Trucks, Buses, Bikes etc.
            </p>

            <p>
              Drive safe and leave the hassle of going through policies and paper work to us.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
