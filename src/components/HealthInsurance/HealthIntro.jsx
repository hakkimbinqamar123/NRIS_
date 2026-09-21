import { Link } from "react-router-dom";
import { HeartPulse, ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function HealthIntro() {
  return (
    <section className="section bg-white pt-24 pb-16">
      <div className="container-xl grid gap-12 lg:grid-cols-2 items-center">
        <AnimatedSection>
          <div className="mb-4">
            <span className="badge-pill inline-flex items-center gap-2 bg-blue-50 text-blue-600 border-blue-100 px-4 py-1.5 font-semibold text-sm">
              <HeartPulse size={16} /> Health Insurance
            </span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.2rem] font-extrabold leading-[1.1] mb-6">
            <span className="block text-[#0B4EA2]">Comprehensive Medical Cover</span>
            <span className="block text-red-600">Every Stage Of Life</span>
          </h1>
          <p className="text-slate-600 text-lg mb-8 leading-relaxed font-medium">
            From personal plans to enterprise-wide group medical schemes — <span className="text-[#0B4EA2] font-bold">NRiS</span> builds programs that keep employees, families, and individuals healthy and protected.
          </p>
          <Link to="/contact" className="btn-primary bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/20 text-white w-max px-8 py-3.5 rounded-full text-base transition-transform hover:scale-105">
            Request a quote <ArrowRight size={18} />
          </Link>
        </AnimatedSection>
        <AnimatedSection delay={0.2} animation="slideRight">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-8 leading-tight">
            Providing Access To Quality And Affordable <span className="text-[#0B4EA2]">Healthcare</span> In The UAE
          </h2>
          <div className="text-left space-y-6 text-muted text-lg leading-[1.8] font-medium">
            <p>
              At NRiS, we make the optimum use of our long year's of experience, expertise and research in health sector by offering you a whole spectrum of health insurance benefits and providing insights in forming a unique health plan based on your needs and resources. We offer tailor made individual and Group medical health insurance plans & other general insurances as per your specific requirements. Whether you are an individual seeking insurance plans for your family or a mid or large level organization or employer in need of insuring your workforce, we have market metrics and our industry experience to bring you the best solutions.
            </p>
            <p>
              We research the availability of solutions based on your health data to determine the best deal that meets all your objectives. We then connect you with the right insurer, leveraging our sizeable portfolio and experience in brokering, to generate competition and favorable pricing. We give you access to innumerable health benefits by comparing products from different insurers and matching them against your needs. We regularly review and update your existing insurance portfolio to maintain optimum insurance coverage with changing circumstances. We aim to avail you best deals in competitive prices and make sure you are fully covered with no loopholes that might cost you later. Our goal is to ensure minimum hassle and assure your peace of mind in events of medical emergencies.
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
