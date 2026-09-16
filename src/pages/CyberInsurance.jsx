import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import AnimatedBackground from "../components/AnimatedBackground";
import cyberImg from "../assets/Cyber.png";

export default function CyberInsurance() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen w-full">
        <motion.img
          src={cyberImg}
          alt="Cyber Insurance Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>

      {/* Intro Text */}
      <section className="section bg-white pt-24 pb-24">
        <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
          {/* Left Column: Hero Text */}
          <AnimatedSection>
            <div className="mb-4">
              <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
                <ShieldCheck size={16} /> Cyber Insurance
              </span>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
              <span className="block text-[#0B4EA2] mb-2">Protect Your Business</span>
              <span className="block text-red-600 mb-2"><span className="text-[#0B4EA2]">From</span> Digital Threats</span>
              <span className="block text-red-600"><span className="text-[#0B4EA2]">And</span> Cyber Risks</span>
            </h1>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
              From small startups to large enterprises — <span className="text-[#0B4EA2] font-bold">NRiS</span> structures cyber policies that keep your digital assets safe and settle claims fast when it matters.
            </p>
            <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
              Request a quote <ArrowRight size={18} />
            </Link>
          </AnimatedSection>

          <AnimatedSection delay={0.2} animation="slideRight">
            <div className="mb-8">
              <div className="h-1 w-24 bg-[#0B4EA2] mb-6"></div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink leading-tight tracking-tight">
                Protecting Your Business In An Increasingly Digital World
              </h2>
            </div>

            <div className="space-y-6 text-ink/80 text-lg leading-[1.8] font-medium">
              <p>
                At <span className="text-[#0B4EA2] font-semibold">NRiS</span>, we understand that cyber threats can affect businesses of every size and industry. A single cyber incident can lead to financial loss, operational disruption, regulatory exposure, reputational damage, and significant recovery costs.
              </p>
              <p>
                Our Cyber Security Insurance solutions are designed to help protect your organization against a wide range of digital and technology-related risks. We work with trusted insurers to assess your exposure, understand your operations, and identify coverage that is tailored to your business needs.
              </p>
              <p>
                Depending on the selected policy, coverage may include protection against data breaches, cyber-attacks, ransomware, business interruption, data restoration costs, cyber extortion, privacy liability, regulatory investigations, notification expenses, legal costs, and third-party claims.
              </p>
              <p>
                We compare available solutions from leading insurers and help you select coverage that provides an appropriate balance between protection, limits, deductibles, and premium. Our role goes beyond arranging a policy — we support you in understanding your cyber exposures and ensuring your insurance protection continues to reflect the changing risks facing your business.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
}
