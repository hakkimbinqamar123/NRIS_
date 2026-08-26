import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "../components/PageHero";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import AnimatedBackground from "../components/AnimatedBackground";
import aboutImg from "../assets/about_team.png";
import { Smile, HeartHandshake, Zap, TrendingUp, UserCheck, Trophy, ArrowRight, Star, ShieldCheck, Clock } from "lucide-react";

const coreValues = [
  {
    icon: Smile,
    title: "Ethics",
    desc: "Upholding our code of conduct and principles at every step of our work"
  },
  {
    icon: HeartHandshake,
    title: "Empathy",
    desc: "Driving strategic and client-centric decisions in all our endeavours"
  },
  {
    icon: Zap,
    title: "Integrity",
    desc: "Ensuring responsible and fair practice at every stage of our work"
  },
  {
    icon: TrendingUp,
    title: "Passion",
    desc: "Committed to adding value in the lives of our clients and loving every step of it"
  },
  {
    icon: UserCheck,
    title: "Professionalism",
    desc: "Being a service minded and customer oriented organization, we are committed to our professional obligation of serving our clients in the best way possible"
  },
  {
    icon: Trophy,
    title: "Accomplishment",
    desc: "Serving customers for more than 30 years, we invest heavily on securing a robust and progressive future for our organization"
  }
];

export default function About() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      <section className="relative overflow-hidden pt-16 pb-24 min-h-screen flex items-center">
        <div className="container-xl relative z-10">
          <AnimatedSection className="max-w-2xl bg-white/60 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/60">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-semibold text-[#0B4EA2] shadow-sm border border-blue-100/50 mb-8 backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-red-600"></span> About NRiS
            </span>
            
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.05] tracking-tight mb-6">
              <span className="block text-[#0B4EA2] mb-1">Our Story And</span>
              <span className="block text-red-600">Our Commitment</span>
            </h1>

            <p className="text-muted text-lg md:text-xl leading-relaxed font-medium mb-10 max-w-2xl">
              At <span className="text-[#0B4EA2] font-bold">NRiS</span>, we understand that every client matters. Our comprehensive advisory gives you <span className="text-[#0B4EA2] font-semibold">peace of mind</span>, safeguarding your business and family's future.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary bg-[#0B4EA2] hover:bg-blue-700 shadow-blue-500/30 text-white px-8 py-4 text-lg">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <a href="#services" className="btn-outline border-blue-200 text-[#0B4EA2] hover:bg-blue-50 px-8 py-4 text-lg bg-white">
                Explore Services
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Who We Are */}
      <section className="section bg-white">
        <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedSection className="order-2 lg:order-1">
            <h2 className="font-display text-4xl font-bold text-ink mb-6">
              About <span className="text-[#0B4EA2]">NRiS</span>
            </h2>
            <div className="text-muted text-[15px] space-y-4 leading-relaxed font-medium">
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
          <AnimatedSection className="order-1 lg:order-2" delay={0.2} animation="slideRight">
            <div className="relative h-[500px] w-full overflow-hidden rounded-2xl shadow-lg transition-transform duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer">
              <motion.img
                src={aboutImg}
                alt="About NRiS Team"
                className="h-full w-full object-cover origin-center"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section bg-[#fcfdfd]">
        <div className="container-xl max-w-5xl mx-auto">
          <div className="grid gap-12 md:grid-cols-2">
            <AnimatedSection className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#0B4EA2] hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="h-1 w-12 bg-[#ffb800] mb-6"></div>
              <h2 className="font-display text-4xl font-bold text-ink mb-6">
                Our Vision
              </h2>
              <p className="text-muted leading-relaxed font-medium">
                Our Vision is value-addition to the community via our services generating global influence as an insurance advisory. We aim for NRiS to be recognized for its excellence and achievements
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-[#0B4EA2] hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
              <div className="h-1 w-12 bg-[#ffb800] mb-6"></div>
              <h2 className="font-display text-4xl font-bold text-ink mb-6">
                Our Mission
              </h2>
              <p className="text-muted leading-relaxed font-medium">
                To recognize and revolutionize the insurance industry by comprehending consumers' needs and delivering cutting-edge solutions
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section bg-gradient-to-br from-[#0B4EA2] to-[#2b90d9] text-white">
        <div className="container-xl">
          <AnimatedSection className="text-center mb-12" animation="slideUp">
            <h2 className="font-display text-4xl font-bold mb-4">
              Our Core Values
            </h2>
          </AnimatedSection>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
            {coreValues.map((v, i) => (
              <AnimatedSection
                key={i}
                delay={i * 0.1}
                className="group bg-white rounded-lg p-6 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col h-full"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded bg-[#e61919] text-white group-hover:scale-110 group-hover:bg-[#cc1616] transition-all duration-300">
                    <v.icon size={24} />
                  </span>
                  <h3 className="font-bold text-ink text-lg group-hover:text-[#0B4EA2] transition-colors">{v.title}</h3>
                </div>
                <p className="text-muted text-sm leading-relaxed">{v.desc}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      <CTASection />
    </div>
  );
}
