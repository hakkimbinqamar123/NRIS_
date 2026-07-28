import { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../components/AnimatedSection";
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "../components/SocialIcons";

const infoItems = [
  { icon: MapPin, label: "Address", value: "1201 Corporate Tower, Business Bay, Dubai, UAE" },
  { icon: Phone, label: "Phone", value: "+971 4 000 0000" },
  { icon: Mail, label: "Email", value: "info@nris.com" },
  { icon: Clock, label: "Office Hours", value: "Sunday – Thursday, 9:00 – 18:00" },
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
            <h1 className="font-display text-4xl sm:text-5xl font-bold text-ink mb-4">
              Speak with an <span className="text-primary">NRIS</span> specialist
            </h1>
            <p className="text-muted text-lg max-w-2xl mx-auto lg:mx-0">
              Tell us about your coverage needs and a licensed advisor will respond within one business day.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <AnimatedSection className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-ink mb-1">
              Request a quote
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
                  A licensed <span className="text-primary">NRIS</span> advisor will get back to you within one
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
                    Phone
                  </label>
                  <input
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
                    <option>Other / Advisory</option>
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-ink">
                    Message *
                  </label>
                  <textarea
                    required
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

          {/* Info */}
          <div className="space-y-8">
            <AnimatedSection delay={0.1} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm">
              <h3 className="font-display text-lg font-semibold text-ink mb-6">
                Company Information
              </h3>
              <ul className="space-y-6">
                {infoItems.map((it) => (
                  <li key={it.label} className="flex gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <it.icon size={20} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted mb-0.5">
                        {it.label}
                      </p>
                      <p className="text-sm font-medium text-ink">{it.value}</p>
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

            <AnimatedSection delay={0.2} className="relative overflow-hidden rounded-2xl border border-black/5 bg-surface shadow-sm h-64">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14440.710777931355!2d55.26252924103175!3d25.180216776100588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6831d10e051d%3A0xc3c6b24d732be7!2sBusiness%20Bay%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
                title="NRIS HQ Map"
              ></iframe>
            </AnimatedSection>
          </div>
          </div>
        </div>
      </section>
    </>
  );
}
