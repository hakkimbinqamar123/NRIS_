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
import AnimatedBackground from "../components/AnimatedBackground";
import CTASection from "../components/CTASection";
import healthImg from "../assets/health.png";
import motorImg from "../assets/motor.png";
import engineeringImg from "../assets/Eng.png";
import propertyImg from "../assets/Home.png";
import whyChooseUsImg from "../assets/why_choose_us.png";
import heroBannerImg from "../assets/hero_banner_image.png";
import homePageImg from "../assets/Home Page.png";
import wc1 from "../assets/Tailored Solutaions.png";
import wc2 from "../assets/Partnership with world class insurers.png";
import wc3 from "../assets/Risk Management.png";
import wc4 from "../assets/Consultancy You Can Trust.png";
import wc5 from "../assets/Up To Date Business Insights.png";
import wc6 from "../assets/Claim Assistance.png";

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
    img: wc1,
  },
  {
    icon: Users,
    title: "Partnership with World Class Insurers",
    desc: "Access to a curated network of A-rated regional and global insurers.",
    img: wc2,
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    desc: "Proactive risk identification and mitigation strategies.",
    img: wc3,
  },
  {
    icon: Smartphone,
    title: "Consultancy You Can Trust",
    desc: "Expert advisory services tailored to your specific needs.",
    img: wc4,
  },
  {
    icon: Wallet,
    title: "Up To Date Business Insights",
    desc: "Data-driven market analytics to inform your insurance decisions.",
    img: wc5,
  },
  {
    icon: Car,
    title: "Claim Assistance",
    desc: "Dedicated claims managers with 24/7 response and end-to-end tracking.",
    img: wc6,
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
  { value: 35, suffix: "+", label: "YEARS OF EXPERIENCE" },
  { value: 25, suffix: "+", label: "INTERNATIONAL AND LOCAL INSURERS", format: true },
  { value: 10, suffix: "+", label: "THIRD PARTY ADMINISTRATORS" },
  { value: 1000, suffix: "+", label: "SATISFIED COORPORATE CLIENTS", format: true },
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
    quote: (
      <>
        <span className="text-[#0B4EA2] font-semibold">NRiS</span> renegotiated our corporate medical program and delivered 22% savings without reducing benefits. Their team feels like part of ours.
      </>
    ),
    name: "Sarah Al-Mansoori",
    role: "CFO, Meridian Logistics",
  },
  {
    quote: (
      <>
        When our contractors' all-risk claim hit, the <span className="text-[#0B4EA2] font-semibold">NRiS</span> team had our loss adjuster on-site within 24 hours. Settlement in six weeks.
      </>
    ),
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
    <span ref={ref} className="font-display text-4xl sm:text-5xl font-bold text-[#0B4EA2]">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}


export default function Home() {
  return (
    <div className="relative min-h-screen">
      <AnimatedBackground />
      {/* HERO */}
      <section className="relative overflow-hidden h-[calc(100dvh-81px)] w-full">
        <motion.img loading="lazy"
          src={homePageImg}
          alt="Home Page Hero"
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        />
      </section>



      {/* STATS — now below hero */}
      <section className="py-16">
        <div className="container-xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s) => (
              <AnimatedSection key={s.label}>
                <div className="flex flex-col items-center justify-center rounded-2xl bg-white/80 backdrop-blur-sm px-6 py-8 shadow-md border border-white/20">
                  <AnimatedCounter value={s.value} suffix={s.suffix} format={s.format} />
                  <div className="text-blue-800/70 text-LG font-semibold tracking-wider mt-2 uppercase text-center">
                    {s.label}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* GOALS SECTION — centered hero */}
      <section className="relative overflow-hidden min-h-screen flex flex-col items-center justify-center text-center px-4">

        {/* Subtle radial glow behind content */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
          <div className="w-[700px] h-[700px] rounded-full bg-white/30 blur-3xl" />
        </div>

        <AnimatedSection className="relative z-10 max-w-3xl mx-auto">
          {/* Badge */}
          {/* <motion.span
            className="inline-flex items-center gap-2 badge-pill mb-8 bg-blue-50/80 text-[#0B4EA2] border-blue-100 backdrop-blur-sm px-5 py-2 text-sm font-semibold"
            initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <span className="h-2 w-2 rounded-full bg-[#0B4EA2] animate-pulse" />
            Licensed Insurance Brokerage
          </motion.span> */}

          {/* Heading */}
          <motion.h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-extrabold leading-[1.05] mb-4 md:mb-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <span className="block text-red-600">Your Safety</span>
            <span className="block text-[#0B4EA2]">Our Priority</span>
          </motion.h1>

          {/* Sub-text */}
          <motion.p
            className="text-slate-700 text-sm sm:text-base md:text-lg lg:text-xl max-w-xl mx-auto mb-6 md:mb-8 leading-relaxed font-medium px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            At <span className="font-bold text-[#0B4EA2]">NRiS Insurance</span>, we understand that every journey matters. Our policies give you <span className="text-[#0B4EA2] font-semibold">peace of mind</span>.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-10"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="btn-primary bg-[#0B4EA2] hover:bg-blue-800 border-[#0B4EA2] text-white px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full shadow-lg"
            >
              Get a Quote <ArrowRight size={16} />
            </Link>
            <a
              href="#services"
              className="btn-outline border-[#0B4EA2] text-[#0B4EA2] hover:bg-blue-50 px-6 md:px-8 py-2.5 md:py-3 text-sm md:text-base rounded-full"
            >
              Explore Services
            </a>
          </motion.div>



          {/* Trust signals */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-6 text-xs text-slate-600 mt-6 md:mt-8"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-[#0B4EA2]" /> A-Rated insurer network
            </span>
            <span className="flex items-center gap-1.5">
              <Clock size={15} className="text-[#0B4EA2]" /> 24/7 claims support
            </span>
          </motion.div>

          {/* Badges — inline row on small screens */}
          <motion.div
            className="flex lg:hidden flex-wrap justify-center gap-2 mt-6"
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
          >
            {["Established in 1990", "DHA No: 00067", "HAAD No: B012", "CB UAE No: 35"].map((label) => (
              <span
                key={label}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 text-[#0B4EA2] text-[11px] font-extrabold shadow-sm"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0B4EA2] shrink-0" />
                {label}
              </span>
            ))}
          </motion.div>
        </AnimatedSection>

        {/* Floating Badges — lg+ only, absolutely positioned */}
        {[
          { label: "Established in 1990", pos: "top-[10%] left-0 right-0 mx-auto w-max", init: { opacity: 0, y: -100, scale: 0.8 }, anim: { opacity: 1, y: 0, scale: 1 } },
          { label: "CB UAE No: 35", pos: "bottom-[10%] left-0 right-0 mx-auto w-max", init: { opacity: 0, y: 100, scale: 0.8 }, anim: { opacity: 1, y: 0, scale: 1 } },
          { label: "DHA No: 00067", pos: "left-[10%] xl:left-[13%] top-0 bottom-0 my-auto h-max", init: { opacity: 0, x: -100, scale: 0.8 }, anim: { opacity: 1, x: 0, scale: 1 } },
          { label: "HAAD No: B012", pos: "right-[10%] xl:right-[13%] top-0 bottom-0 my-auto h-max", init: { opacity: 0, x: 100, scale: 0.8 }, anim: { opacity: 1, x: 0, scale: 1 } },
        ].map((item, i) => (
          <motion.span
            key={item.label}
            className={`absolute z-20 hidden lg:flex items-center gap-2 px-5 py-2.5 xl:px-8 xl:py-4 rounded-full bg-white/80 backdrop-blur-md border border-blue-200 text-[#0B4EA2] text-sm xl:text-base font-extrabold shadow-md cursor-pointer ${item.pos}`}
            initial={item.init}
            whileInView={item.anim}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ type: "spring", bounce: 0.4, duration: 1.2, delay: 0.2 + i * 0.1 }}
            whileHover={{ scale: 1.05, y: -3, boxShadow: "0 15px 30px rgba(11,78,162,0.25)" }}
          >
            <span className="h-2 w-2 rounded-full bg-[#0B4EA2] shrink-0" />
            {item.label}
          </motion.span>
        ))}

      </section>


      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container-xl">
          <AnimatedSection className="text-center max-w-2xl mx-auto mb-16">
            <span className="badge-pill mb-4 bg-red-50 text-red-700 border-red-100">Why Choose NRiS</span>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
              Advisory That Goes Beyond The Policy
            </h2>
            <p className="text-[#0B4EA2] text-lg">
              Six commitments that define the way we protect our clients — from
              the first quote to the final claim.
            </p>
          </AnimatedSection>

          <AnimatedSection className="w-full relative py-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
              {whyChoose.map((item, i) => (
                <div
                  key={i}
                  className="group h-[380px] w-full [perspective:1000px] relative transition-transform duration-500 hover:scale-125 hover:z-10"
                >
                  <div className="relative h-full w-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] shadow-md hover:shadow-xl">
                    <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl border border-red-100 bg-white/90 backdrop-blur-sm p-4 sm:p-6 text-center [backface-visibility:hidden]">
                      <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white shadow-lg shadow-red-600/30">
                        <item.icon size={24} />
                      </span>
                      <h3 className="font-display text-lg lg:text-base xl:text-lg font-semibold text-ink">
                        {item.title}
                      </h3>
                    </div>
                    <div className="absolute inset-0 rounded-2xl overflow-hidden [transform:rotateY(180deg)] [backface-visibility:hidden]">
                      <img loading="lazy" src={item.img} alt={item.title} className="h-full w-full object-cover" />
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

      {/* <CTASection /> */}
    </div>
  );
}
