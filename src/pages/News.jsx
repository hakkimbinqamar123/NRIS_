import { ArrowRight, Calendar, User, Eye, Share2, ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import CTASection from "../components/CTASection";

// Importing images for the news feed
import healthImg from "../assets/health.jpg";
import motorImg from "../assets/motor.jpg";
import engineeringImg from "../assets/engineering.jpg";
import propertyImg from "../assets/property1.png";
import marineImg from "../assets/marine1.png";
import businessImg from "../assets/hero.jpg";

const articles = [
  { 
    tag: "Business", 
    date: "May 12, 2026", 
    title: "2026 Corporate Medical Trends: What Employers Must Know", 
    author: "NRIS Advisory Team",
    views: "1.2K",
    shares: "34",
    image: businessImg
  },
  { 
    tag: "Motor", 
    date: "Apr 28, 2026", 
    title: "EV Insurance: Underwriting the Next Generation of Vehicles", 
    author: "NRIS Advisory Team",
    views: "956",
    shares: "12",
    image: motorImg
  },
  { 
    tag: "Engineering", 
    date: "Mar 30, 2026", 
    title: "Managing Risk on Mega-Projects: Lessons from 2025", 
    author: "NRIS Advisory Team",
    views: "890",
    shares: "25",
    image: engineeringImg
  },
  { 
    tag: "Property", 
    date: "Mar 08, 2026", 
    title: "Property Valuation Adjustments in Rapidly Growing Urban Centers", 
    author: "NRIS Advisory Team",
    views: "1.1K",
    shares: "40",
    image: propertyImg
  },
  { 
    tag: "Health", 
    date: "Feb 21, 2026", 
    title: "Wellness Programs That Actually Move the Needle", 
    author: "NRIS Advisory Team",
    views: "1.5K",
    shares: "88",
    image: healthImg
  },
  { 
    tag: "Marine", 
    date: "Feb 04, 2026", 
    title: "Navigating Global Supply Chain Risks and Marine Transit Exposures", 
    author: "NRIS Advisory Team",
    views: "720",
    shares: "18",
    image: marineImg
  },
];

export default function News() {
  const featured = articles[0];
  const recent = articles.slice(1);

  return (
    <>
      <section className="section bg-white pt-32 pb-24">
        <div className="container-xl">
          <div className="mb-12 text-center lg:text-left">
            <span className="badge-pill mb-4">News & Insights</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink mb-4">Perspectives from our specialists</h1>
            <p className="text-muted text-lg max-w-2xl mx-auto lg:mx-0">Market updates, coverage explainers, and thought leadership from the NRIS advisory team.</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[7fr_3fr] gap-12 lg:gap-10">
            
            {/* Left Column - Featured */}
            <AnimatedSection className="group cursor-pointer flex flex-col hover:-translate-y-1 transition-transform duration-300">
              <div className="w-full rounded-[12px] overflow-hidden mb-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.12)]">
                <img 
                  src={featured.image} 
                  alt={featured.title} 
                  className="w-full aspect-[4/3] sm:aspect-[16/10] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-3 text-[13px] text-gray-500 mb-4">
                <span className="bg-black text-white text-xs px-3 py-1 rounded-full font-medium tracking-wide">
                  {featured.tag}
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar size={14} /> {featured.date}
                </span>
              </div>
              <h2 className="text-[34px] font-bold text-[#1A1A1A] leading-tight mb-5 group-hover:text-primary transition-colors line-clamp-2">
                {featured.title}
              </h2>
              <div className="flex flex-wrap items-center gap-5 text-[13px] text-gray-500 font-medium">
                <span className="flex items-center gap-1.5"><User size={14} /> {featured.author}</span>
                <span className="flex items-center gap-1.5"><Eye size={14} /> {featured.views} Views</span>
                <span className="flex items-center gap-1.5"><Share2 size={14} /> {featured.shares} Shares</span>
              </div>
            </AnimatedSection>

            {/* Right Column - Recent News */}
            <div className="flex flex-col">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-2xl font-bold text-ink">Recent News</h3>
                <div className="flex gap-2">
                  <button className="flex h-8 w-8 items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
                    <ChevronLeft size={16} />
                  </button>
                  <button className="flex h-8 w-8 items-center justify-center bg-black text-white rounded hover:bg-gray-800 transition-colors">
                    <ChevronRight size={16} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col">
                {recent.map((n, i) => (
                  <AnimatedSection 
                    key={n.title} 
                    delay={i * 0.05}
                    className="group cursor-pointer flex gap-5 py-4 border-b border-gray-100 last:border-b-0 hover:bg-gray-50 transition-colors -mx-4 px-4 rounded-lg"
                  >
                    <div className="shrink-0 w-[110px] h-[75px] rounded-lg overflow-hidden shadow-sm">
                      <img src={n.image} alt={n.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                    </div>
                    <div className="flex flex-col justify-center flex-1 min-w-0">
                      <div className="flex items-center gap-2 text-[12px] text-gray-500 mb-1.5">
                        <span className="bg-black text-white text-[10px] px-2 py-0.5 rounded-full font-medium tracking-wide">
                          {n.tag}
                        </span>
                        <span className="flex items-center gap-1 whitespace-nowrap">
                          <Calendar size={12} /> {n.date}
                        </span>
                      </div>
                      <h4 className="text-[18px] font-semibold text-ink leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {n.title}
                      </h4>
                      <div className="flex flex-wrap items-center gap-3 text-[12px] text-gray-500 font-medium">
                        <span className="flex items-center gap-1 whitespace-nowrap"><User size={12} /> {n.author}</span>
                        <span className="flex items-center gap-1 whitespace-nowrap"><Eye size={12} /> {n.views} Views</span>
                        <span className="flex items-center gap-1 whitespace-nowrap"><Share2 size={12} /> {n.shares} Shares</span>
                      </div>
                    </div>
                  </AnimatedSection>
                ))}
              </div>

              <div className="mt-8 flex justify-start lg:justify-end">
                <button className="flex items-center gap-2 border border-black bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors">
                  ALL RECENT NEWS <ChevronRight size={16} />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
