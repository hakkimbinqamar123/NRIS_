import AnimatedSection from "../AnimatedSection";

export default function AboutMission() {
  return (
    <section className="section relative z-10">
      <div className="container-xl max-w-5xl mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          <AnimatedSection className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-red-600 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
            <div className="h-1 w-12 bg-red-600 mb-6"></div>
            <h2 className="font-display text-4xl font-bold text-ink mb-6">
              Our Vision
            </h2>
            <p className="text-muted leading-relaxed font-medium">
              Our Vision is value-addition to the community via our services generating global influence as an insurance advisory. We aim for NRiS to be recognized for its excellence and achievements
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="bg-white rounded-2xl p-8 shadow-sm border-t-4 border-red-600 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1">
            <div className="h-1 w-12 bg-red-600 mb-6"></div>
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
  );
}
