import { MapPin, Phone, Mail, Clock } from "lucide-react";
import AnimatedSection from "../AnimatedSection";
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "../SocialIcons";

const abuDhabiItems = [
  { icon: MapPin, label: "Address", value: "Airport Road, NBK Tower, Office 1304" },
  { icon: Phone, label: "Phone", value: "+971 2 446 6234" },
  { icon: Phone, label: "Mobile", value: "+971 56 402 1161" },
  { icon: Mail, label: "Email", value: "info@nris.ae", href: "mailto:info@nris.ae" },
];

const dubaiItems = [
  { icon: MapPin, label: "Address", value: "Business Bay, BaysWater Tower, Office 2205" },
  { icon: Phone, label: "Phone", value: "+971 4 564 5452" },
  { icon: Mail, label: "Complaints", value: "complaints@nris.ae", href: "mailto:complaints@nris.ae" },
  { icon: Clock, label: "Office Hours", value: "Mon – Fri: 08:30 – 18:00" },
];

const InfoList = ({ items }) => (
  <ul className="space-y-6">
    {items.map((it) => (
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
);

export default function ContactLocations() {
  return (
    <div className="grid gap-8 lg:grid-cols-2">
      {/* Abu Dhabi Office */}
      <AnimatedSection delay={0.1} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm flex flex-col">
        <h3 className="font-display text-xl font-semibold text-ink mb-8">Abu Dhabi Office</h3>

        <div className="flex-1 mb-8">
          <InfoList items={abuDhabiItems} />
        </div>

        <div className="relative overflow-hidden rounded-xl border border-black/5 bg-surface h-64 w-full mt-auto">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5770432845425!2d54.3761406!3d24.465455499999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5e67d99bb72299%3A0x5e38ad64256bd255!2sNational%20Resources%20Insurance%20Services%20Company%20L.L.C!5e0!3m2!1sen!2sae!4v1789644572259!5m2!1sen!2sae"
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

      {/* Dubai Office */}
      <AnimatedSection delay={0.2} className="rounded-2xl border border-black/5 bg-white p-8 shadow-sm flex flex-col">
        <h3 className="font-display text-xl font-semibold text-ink mb-8">Dubai Office</h3>

        <div className="flex-1 mb-8">
          <InfoList items={dubaiItems} />
        </div>

        <div className="flex gap-3 mb-8">
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

        <div className="relative overflow-hidden rounded-xl border border-black/5 bg-surface h-64 w-full mt-auto">
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
  );
}
