import { Link } from "react-router-dom";
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  Star,
  ShieldCheck,
  Clock,
  ArrowRight,
  Users,
  Target,
  Handshake,
  Zap,
  BadgePercent,
  HeartHandshake,
  HeartPulse,
  Car,
  HardHat,
  Building2,
  ClipboardList,
  Search,
  FileCheck2,
  LifeBuoy,
  LineChart,
  Shield,
  PiggyBank,
  Wallet,
  CheckCircle2,
  Smile,
  Smartphone,
} from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";
import nrisHeroBanner from "../assets/NRIS_hero_banner.png";
import healthImg from "../assets/health.png";
import motorImg from "../assets/motor.png";
import engineeringImg from "../assets/Eng.png";
import propertyImg from "../assets/Home.png";
import whyChooseUsImg from "../assets/why_choose_us.png";

const goals = [
  { icon: LineChart, title: "Planning for retirement", iconColor: "text-red-500" },
  { icon: Shield, title: "Protecting my family", iconColor: "text-red-600" },
  { icon: PiggyBank, title: "Growing my money", iconColor: "text-red-500" },
  { icon: Wallet, title: "Managing my expenses", iconColor: "text-red-600" },
];

const whyChoose = [
  {
    icon: Smile,
    title: "Tailored Solutions",
    desc: "Coverage engineered around your risk profile — never off-the-shelf.",
  },
  {
    icon: Users,
    title: "Partnership with World Class Insurers",
    desc: "Access to a curated network of A-rated regional and global insurers.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "Proactive risk identification and mitigation strategies.",
  },
  {
    icon: Smartphone,
    title: "Consultancy You Can Trust",
    desc: "Expert advisory services tailored to your specific needs.",
  },
  {
    icon: Wallet,
    title: "Up To Date Business Insights",
    desc: "Data-driven market analytics to inform your insurance decisions.",
  },
  {
    icon: Car,
    title: "Claim Assistance",
    desc: "Dedicated claims managers with 24/7 response and end-to-end tracking.",
  },
];

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
    href: "/engineering-insurance",
    img: engineeringImg,
  },
  {
    tag: "PROPERTY",
    title: "Property Insurance",
    desc: "Comprehensive protection for physical assets, real estate, and facilities against unforeseen damages.",
    href: "/property-insurance",
    img: propertyImg,
  },
];

const processSteps = [
  { num: "1", title: "Consultation", desc: "We map your exposures and goals during a discovery session with a licensed advisor." },
  { num: "2", title: "Risk Assessment", desc: "Our analysts benchmark risk against industry data and quantify coverage gaps." },
  { num: "3", title: "Policy Selection", desc: "We negotiate with insurers and present a shortlist with a transparent comparison." },
  { num: "4", title: "Claims Support", desc: "A dedicated claims manager stays with you from first notice of loss to settlement." },
];

const stats = [
  { value: 20, suffix: "+", label: "YEARS EXPERIENCE" },
  { value: 5000, suffix: "+", label: "SATISFIED CLIENTS", format: true },
  { value: 100, suffix: "+", label: "CORPORATE CLIENTS" },
  { value: 98, suffix: "%", label: "CLAIM SATISFACTION" },
];

const partners = [
  "Insurance House",
  "MetLife",
  "Oman Insurance",
  "Orient Insurance pjsc",
  "Orient UNB Takaful"
];

const testimonials = [
  {
    quote:
      "NRIS renegotiated our corporate medical program and delivered 22% savings without reducing benefits. Their team feels like part of ours.",
    name: "Sarah Al-Mansoori",
    role: "CFO, Meridian Logistics",
  },
  {
    quote:
      "When our contractors' all-risk claim hit, the NRIS team had our loss adjuster on-site within 24 hours. Settlement in six weeks.",
    name: "James O'Connor",
    role: "Project Director, Vertex Construction",
  },
  {
    quote:
      "The advisory quality is on another level. They translate insurance-speak into decisions our board can act on.",
    name: "Priya Ramesh",
    role: "Head of Risk, Nova Industrial",
  },
];

const news = [
  {
    tag: "Health",
    date: "May 12, 2026",
    title: "2026 Corporate Medical Trends: What Employers Must Know",
    desc: "How mental-health inclusions and preventative care are reshaping premiums.",
    img: healthImg,
  },
  {
    tag: "Motor",
    date: "Apr 28, 2026",
    title: "EV Insurance: Underwriting the Next Generation of Vehicles",
    desc: "Battery risk, charging liability, and how carriers are pricing electric fleets.",
    img: motorImg,
  },
  {
    tag: "Engineering",
    date: "Mar 30, 2026",
    title: "Managing Risk on Mega-Projects: Lessons from 2025",
    desc: "A retrospective on major regional projects and evolving CAR wordings.",
    img: engineeringImg,
  },
];

/* Animated counter that counts up from 0 when scrolled into view */
function AnimatedCounter({ value, suffix, format }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => {
    const n = Math.round(v);
    if (format) return n.toLocaleString();
    return n;
  });

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, value, {
        duration: 2,
        ease: "easeOut",
      });
      return controls.stop;
    }
  }, [isInView, value, count]);

  return (
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold bg-gradient-to-r from-red-600 via-red-500 to-red-700 bg-clip-text text-transparent">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 z-[-1] overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-[position:65%_center]"
          style={{ backgroundImage: `url(${nrisHeroBanner})` }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 bg-white/70 backdrop-blur-[2px]" />
      </div>
      {/* HERO */}
      <section className="relative overflow-hidden pt-16 pb-24 min-h-screen flex items-center">
        <div className="container-xl grid items-center gap-8 lg:grid-cols-12 w-full">
          <AnimatedSection className="lg:col-span-5">
            <span className="badge-pill mb-6 bg-red-50 text-red-700 border-red-100">
              <span className="h-1.5 w-1.5 rounded-full bg-red-500" /> Licensed Insurance Brokerage
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-[3.6rem] font-extrabold leading-[1.05] mb-6">
              <span className="block text-[#0B4EA2]">Your safety</span>
              <span className="block text-red-600">
                our priority
              </span>
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-xl mb-8 leading-relaxed font-medium">
              At <span className="font-bold text-red-600">NRIS Insurance</span>, we understand that every journey matters. Our comprehensive policies give you <span className="text-[#0B4EA2]">peace of mind</span>, safeguarding your vehicle and well-being on the road.
            </p>
            <div className="flex flex-wrap gap-4 mb-10">
              <Link to="/contact" className="btn-primary bg-red-600 hover:bg-red-700 border-red-600 text-white">
                Get a Quote <ArrowRight size={18} />
              </Link>
              <a href="#services" className="btn-outline border-red-600 text-red-600 hover:bg-red-50">
                Explore Services
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-6 text-sm text-ink/70">
              <span className="flex items-center gap-1.5">
                <span className="flex text-red-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </span>
                <span className="font-semibold text-ink">4.9 / 5</span> client rating
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-red-600" /> A-Rated insurer network
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={16} className="text-red-600" /> 24/7 claims support
              </span>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15} className="relative w-full max-w-[420px] mx-auto lg:col-span-4 lg:col-start-9 lg:ml-auto">
            <div className="relative h-[420px] w-full overflow-hidden rounded-2xl shadow-2xl border border-white/20">
              <img
                src={whyChooseUsImg}
                alt="Why Choose NRIS"
                className="h-full w-full object-cover"
              />
            </div>

            {[
              {
                label: "Health Insurance",
                top: "4%",
                left: "-3%",
                icon: ShieldCheck,
                iconBg: "bg-red-900/90",
                iconColor: "text-red-200",
              },
              {
                label: "Motor Insurance",
                top: "42%",
                right: "-5%",
                icon: Car,
                iconBg: "bg-red-600/90",
                iconColor: "text-white",
              },
              {
                label: "Engineering Insurance",
                bottom: "6%",
                left: "-2%",
                icon: Building2,
                iconBg: "bg-red-900/90",
                iconColor: "text-red-200",
              },
            ].map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 16, scale: 0.9 }}
                animate={{ opacity: 1, y: [0, -10, 0], scale: 1 }}
                transition={{
                  opacity: { duration: 0.5, delay: 0.3 + i * 0.15 },
                  scale: { duration: 0.5, delay: 0.3 + i * 0.15 },
                  y: {
                    duration: 3.2 + i * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.7 + i * 0.25,
                  },
                }}
                className="absolute hidden sm:flex items-center gap-2 rounded-xl bg-white px-4 py-3 shadow-lg border border-black/5"
                style={{
                  top: c.top,
                  left: c.left,
                  right: c.right,
                  bottom: c.bottom,
                }}
              >
                <span className={`flex h-8 w-8 items-center justify-center rounded-full ${c.iconBg} ${c.iconColor}`}>
                  <c.icon size={16} />
                </span>
                <span className="text-xs">
                  <span className="block text-muted">
                    Covered
                  </span>
                  <span className="block font-semibold text-ink">
                    ✓ {c.label}
                  </span>
                </span>
              </motion.div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      {/* STATS — now below hero */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <AnimatedSection key={s.label}>
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-8 shadow-md border border-white/20">
                  <AnimatedCounter value={s.value} suffix={s.suffix} format={s.format} />
                  <div className="text-red-800/70 text-xs font-semibold tracking-wider mt-2 uppercase">
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS SECTION */}
      <section className="py-16">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-3">
              What's most important to you right now?
            </h2>
            <p className="text-ink/70 text-sm sm:text-base">
              Tell us about your personal financial goals & we'll share the best
              resources to help you reach them.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {goals.map((g, i) => (
              <AnimatedSection
                key={g.title}
                delay={i * 0.1}
                className="group relative flex flex-col items-center rounded-xl border border-red-100 bg-white/90 backdrop-blur-sm p-8 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="absolute top-4 left-4 text-gray-400">
                  <CheckCircle2 size={24} className="fill-gray-400 text-white" />
                </div>
                <div className="mt-4 mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-slate-50 transition-transform duration-300 group-hover:scale-110">
                  <g.icon size={40} className={g.iconColor} strokeWidth={1.5} />
                </div>
                <h3 className="text-center text-sm font-bold text-ink mt-auto">
                  {g.title}
                </h3>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill mb-4 bg-red-50 text-red-700 border-red-100">Why Choose NRIS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Advisory that goes beyond the policy
            </h2>
            <p className="text-ink/70 text-lg">
              Six commitments that define the way we protect our clients — from
              the first quote to the final claim.
            </p>
          </AnimatedSection>

          <AnimatedSection className="w-full relative py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="group h-[320px] w-full [perspective:1000px]"
                >
                  <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center [backface-visibility:hidden]">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30">
                        <item.icon size={24} />
                      </span>
                      <h3 className="font-display text-base lg:text-sm xl:text-base font-semibold text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-red-600 p-4 sm:p-6 text-center text-white [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <p className="text-sm xl:text-base leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill mb-4 bg-red-50 text-red-700 border-red-100">Our Services</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Coverage across every risk you carry
            </h2>
            <p className="text-ink/70 text-lg">
              Three flagship practices, each led by specialists dedicated to
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
                  <img
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

      <CTASection />
    </div>
  );
}
