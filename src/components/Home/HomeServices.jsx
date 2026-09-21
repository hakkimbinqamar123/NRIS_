import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import healthImg from "../../assets/health.png";
import motorImg from "../../assets/Motor.png";
import engineeringImg from "../../assets/Eng.png";
import propertyImg from "../../assets/Home.png";

const services = [
  {
    tag: "HEALTH",
    title: "Health Insurance",
    desc: "Individual, family, and corporate medical plans with wide network access and cashless treatment.",
    href: "/health-insurance",
    img: healthImg,
  },
  {
    tag: "MOTOR",
    title: "Motor Insurance",
    desc: "Comprehensive and third-party cover for private and commercial vehicles with rapid claim support.",
    href: "/motor-insurance",
    img: motorImg,
  },
  {
    tag: "ENGINEERING",
    title: "Engineering Insurance",
    desc: "Contractors All Risk, machinery, and industrial project coverage tailored to complex operations.",
    href: "/engineering",
    img: engineeringImg,
  },
  {
    tag: "PROPERTY",
    title: "Property Insurance",
    desc: "Comprehensive protection for physical assets, real estate, and facilities against unforeseen damages.",
    href: "/property",
    img: propertyImg,
  },
];

export default function HomeServices() {
  return (
    <section id="services" className="section">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
          <span className="badge-pill mb-4 bg-red-50 text-red-700 border-red-100">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Coverage Across Every Risk You Carry
          </h2>
          <p className="text-[#0B4EA2] text-lg">
            Four flagship practices, each led by specialists dedicated to
            your industry.
          </p>
        </AnimatedSection>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <AnimatedSection
              key={s.title}
              delay={i * 0.1}
              className="group overflow-hidden rounded-2xl bg-white/90 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-red-100"
            >
              <div className="relative h-52 w-full overflow-hidden">
                <span className="absolute top-3 left-3 z-10 rounded-full bg-red-600 px-3 py-1 text-[11px] font-bold text-white uppercase tracking-wider shadow-md">
                  {s.tag}
                </span>
                <img loading="lazy"
                  src={s.img}
                  alt={s.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-ink mb-3">
                  {s.title}
                </h3>
                <p className="text-ink/70 text-sm leading-relaxed mb-5">{s.desc}</p>
                <Link
                  to={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-red-600 group/link"
                >
                  Learn more
                  <ArrowRight size={15} className="transition-transform group-hover/link:translate-x-1" />
                </Link>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
