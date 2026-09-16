import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageCircle } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "../components/SocialIcons";

const infoItems = [
  { icon: MapPin, label: "Abu Dhabi", value: "Airport Road, NBK Tower, Office 1304" },
  { icon: Phone, label: "Abu Dhabi Phone", value: "+971 2 446 6234", href: "tel:+97124466234" },
  { icon: MapPin, label: "Dubai", value: "Business Bay, BaysWater Tower, Office 2205" },
  { icon: Phone, label: "Dubai Phone", value: "+971 4 564 5452", href: "tel:+97145645452" },
  { icon: MessageCircle, label: "WhatsApp", value: "+971 56 402 1161", href: "https://wa.me/971564021161" },
  { icon: Mail, label: "Email", value: "info@nris.ae", href: "mailto:info@nris.ae" },
  { icon: Mail, label: "Complaints Email", value: "complaints@nris.ae", href: "mailto:complaints@nris.ae" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri, 8:30 – 18:00" },
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    type: "Health Insurance",
    message: "",
  });

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="section pt-32">
        <div className="container-xl">
          <div className="mb-12 text-center lg:text-left">
            <span className="badge-pill mb-4 inline-block">Contact</span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold leading-tight mb-4">
              Speak With An <span className="text-[#0B4EA2]">NRiS</span> Specialist
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto lg:mx-0">
              Tell us about your coverage needs and a licensed advisor will respond within one business day.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form Column */}
          <div className="flex flex-col gap-8 h-full">
            <AnimatedSection className="flex-1 rounded-2xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-ink mb-1">
              Request A Quote
            </h2>
            <p className="text-muted text-sm mb-8">
              All fields marked with * are required.
            </p>

            {submitted ? (
              <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                  <CheckCircle2 size={32} />
                </span>
                <h3 className="font-display text-xl font-semibold text-ink">
                  Thank you — request received
                </h3>
                <p className="text-muted max-w-sm">
                  A licensed <span className="text-[#0B4EA2] font-semibold">NRiS</span> advisor will get back to you within one
                  business day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline mt-2"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-6 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Name *
                  </label>
                  <input
                    required
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Your full name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Company
                  </label>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Company name"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="you@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Phone *
                  </label>
                  <input
                    required
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="+971 ..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Insurance Type *
                  </label>
                  <select
                    required
                    name="type"
                    value={form.type}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary bg-white"
                  >
                    <option>Health Insurance</option>
                    <option>Motor Insurance</option>
                    <option>Engineering Insurance</option>
                    <option>Marine Insurance</option>
                    <option>Property Insurance</option>
                    <option>Other / Advisory</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full rounded-lg border border-black/10 px-4 py-3 text-sm outline-none transition-colors focus:border-primary"
                    placeholder="Tell us about your coverage needs..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" className="btn-primary w-full sm:w-auto justify-center">
                    Submit request <Send size={16} />
                  </button>
                </div>
              </form>
            )}
          </AnimatedSection>
          
          <AnimatedSection delay={0.2} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
            <h3 className="font-display text-lg font-semibold text-ink mb-6">Abu Dhabi Office</h3>
            <div className="relative overflow-hidden rounded-xl border border-black/5 bg-surface h-48 sm:h-56">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.7448550929444!2d54.37725487568396!3d24.459635961178737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e6882cc076b7f%3A0x4c364f985ea748ea!2sNational%20Bank%20of%20Kuwait!5e0!3m2!1sen!2sae!4v1789542201808!5m2!1sen!2sae" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="strict-origin-when-cross-origin"
                className="absolute inset-0"
                title="NRIS Abu Dhabi Map"
              ></iframe>
            </div>
          </AnimatedSection>
          </div>

          {/* Info Column */}
          <div className="flex flex-col gap-8 h-full">
            <AnimatedSection delay={0.1} className="flex-1 rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-ink mb-6">
                Company Information
              </h3>
              <ul className="space-y-6">
                {infoItems.map((it) => (
                  <li key={it.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <it.icon size={20} />
                    </span>
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mt-2">
                      <p className="text-xs uppercase tracking-wide text-muted shrink-0">
                        {it.label}:
                      </p>
                      {it.href ? (
                        <a 
                          href={it.href} 
                          target={it.label === "WhatsApp" ? "_blank" : undefined} 
                          rel={it.label === "WhatsApp" ? "noopener noreferrer" : undefined} 
                          className="text-sm font-medium text-ink hover:text-primary transition-colors"
                        >
                          {it.value}
                        </a>
                      ) : (
                        <p className="text-sm font-medium text-ink">{it.value}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
              <div className="flex gap-3 mt-8">
                {[LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors"
                    aria-label="social link"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-ink mb-6">Dubai Office</h3>
              <div className="relative overflow-hidden rounded-xl border border-black/5 bg-surface h-48 sm:h-56">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115573.07922423695!2d55.13019559394831!3d25.14722625523658!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6932107277df%3A0x50d8e583be90f3e4!2sNational%20Resources%20Insurance%20Services%20Dubai!5e0!3m2!1sen!2sae!4v1789542247113!5m2!1sen!2sae" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="absolute inset-0"
                  title="NRIS Dubai Map"
                ></iframe>
              </div>
            </AnimatedSection>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
