import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function AboutIntro() {
  return (
    <section className="section bg-white relative z-10 pt-24 pb-16">
      <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
        <AnimatedSection>
          <div className="mb-4"></div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
            <span className="block text-[#0B4EA2]">Our Story</span>
            <span className="block text-red-600">Our Commitment</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            At <span className="text-[#0B4EA2] font-bold">NRiS</span>, we understand that every client matters. Our comprehensive advisory gives you <span className="text-[#0B4EA2] font-bold">peace of mind</span>, safeguarding your business and family's future.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Request a Quote <ArrowRight size={18} />
            </Link>
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-base font-semibold border-2 border-[#0B4EA2] text-[#0B4EA2] hover:bg-blue-50 transition-all">
              Explore Services
            </Link>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.2} animation="slideRight">
          <h2 className="font-display text-4xl font-bold text-ink mb-6">
            About <span className="text-[#0B4EA2]">NRiS</span>
          </h2>
          <div className="text-muted text-lg space-y-4 leading-relaxed font-medium">
            <p>
              National Resources Insurance Services stands as a prominent insurance brokerage company in the UAE, providing premium value, prompt services, and maximum satisfaction to its clientele.
            </p>
            <p>
              Since its inception in 1990, NRiS has diligently served clients garnering trust by skillful representation and profitable results. We offer insurance products and services for general businesses, corporations, professional organizations, families and individuals.
            </p>
            <p>
              Our years of analytical experience render a deep insight into the market matrix and market volatility, giving us a competitive edge and agility to rise above any challenge. We endeavor to protect and preserve the interest of individuals and groups, delivering cutting-edge solutions factoring in the market dynamism to optimize benefits and minimize risks.
            </p>
            <p>
              Our reliable guidance, responsive assistance, and our proficient teams have led to our exponential growth, making us a recognizable force to reckon with. NRiS caters to your demands by providing individualized tailored action plans sheltering its customers against all kind of risks.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
