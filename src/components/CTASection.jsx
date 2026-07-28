import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

export default function CTASection() {
  return (
    <section className="py-16">
      <div className="container-xl">
        <div
          className="relative overflow-hidden rounded-3xl py-16 px-6 sm:px-12 text-white text-center"
          style={{
            background:
              "linear-gradient(135deg, #0B4EA2 0%, #1565C0 40%, #0D47A1 70%, #0B4EA2 100%)",
          }}
        >
          {/* subtle radial glow overlays */}
          <div
            className="pointer-events-none absolute inset-0 opacity-25"
            style={{
              backgroundImage:
                "radial-gradient(circle at 15% 30%, white 0, transparent 35%), radial-gradient(circle at 85% 70%, white 0, transparent 35%)",
            }}
          />
          <AnimatedSection className="relative">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
              Let's Protect Your Future Together
            </h2>
            <p className="text-white/80 max-w-xl mx-auto mb-8">
              Speak with an NRIS specialist and receive a tailored quotation
              within 24 hours.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-red-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl hover:bg-red-700"
              >
                Contact Our Experts <ArrowRight size={18} />
              </Link>
              <a
                href="tel:+97140000000"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 bg-white/10 px-7 py-3.5 font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:-translate-y-0.5"
              >
                <Phone size={18} /> Call +971 4 000 0000
              </a>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
