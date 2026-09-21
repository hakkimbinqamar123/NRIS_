import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import AnimatedSection from "../AnimatedSection";

export default function ContactForm() {
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
    <AnimatedSection className="rounded-2xl border border-black/5 bg-white p-8 sm:p-10 shadow-sm mb-12">
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
          <div className="sm:col-span-1">
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
              <option>Motor Insurance</option>
              <option>Health Insurance</option>
              <option>Engineering Insurance</option>
              <option>Cyber Insurance</option>
              <option>Marine Insurance</option>
              <option>Property Insurance</option>
              <option>Other / Advisory</option>
            </select>
          </div>
          <div className="sm:col-span-1">
            <label className="mb-2 block text-sm font-medium text-ink">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={1}
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
  );
}
