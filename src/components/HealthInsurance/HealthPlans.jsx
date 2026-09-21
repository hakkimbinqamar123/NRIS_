import { Check, ShieldPlus, Users, Building2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

const plans = [
  {
    icon: ShieldPlus,
    title: "Individual Plans",
    desc: "Personal medical coverage with outpatient, inpatient, and maternity add-ons.",
    points: ["Cashless network hospitals", "Chronic condition cover", "Preventive care & wellness"],
  },
  {
    icon: Users,
    title: "Family Plans",
    desc: "Consolidated policies covering spouse, children, and dependent parents.",
    points: ["Shared or per-member limits", "Newborn cover from day 1", "Global emergency assistance"],
  },
  {
    icon: Building2,
    title: "Corporate Medical",
    desc: "Group medical schemes designed around your workforce and industry.",
    points: ["Custom benefit design", "Wellness programs", "Dedicated account manager"],
  },
];

export default function HealthPlans() {
  return (
    <section className="section relative z-10">
      <div className="container-xl">
        <AnimatedSection className="text-center max-w-2xl mx-auto mb-16" animation="slideUp">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-ink mb-4">
            Choose The Coverage Model That Fits
          </h2>
        </AnimatedSection>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((p, i) => (
            <AnimatedSection
              key={p.title}
              delay={i * 0.15}
              animation="scaleUp"
              className="group overflow-hidden flex flex-col rounded-2xl bg-white shadow-md border border-blue-500/10 hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="p-8 flex-1 flex flex-col">
                <span className="mb-5 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-50 text-red-600 shadow-sm transition-transform duration-300 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white">
                  <p.icon size={24} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink mb-2">{p.title}</h3>
                <p className="text-muted text-sm mb-5">{p.desc}</p>
                <ul className="space-y-2 mt-auto">
                  {p.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2 text-sm text-ink/80">
                      <Check size={14} className="text-primary shrink-0 mt-1" /> {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
