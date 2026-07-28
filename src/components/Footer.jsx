import { Link } from "react-router-dom";
import { Shield, MapPin, Mail, Phone, Clock } from "lucide-react";
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";

export default function Footer() {
  return (
    <footer className="text-black" style={{ backgroundColor: "#8FC9FF" }}>
      <div className="container-xl py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2 mb-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-black text-[#8FC9FF]">
              <Shield size={20} strokeWidth={2.5} />
            </span>
            <span className="leading-tight">
              <span className="block font-display font-bold text-lg text-black">NRIS</span>
              <span className="block text-[11px] uppercase tracking-wider text-black/60">
                Insurance Services
              </span>
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-black/80 max-w-xs">
            National Resource Insurance Services — a trusted brokerage delivering
            tailored coverage, expert advisory, and rapid claims support for
            individuals, businesses, and enterprises.
          </p>
          <div className="flex gap-3 mt-6">
            {[LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                aria-label="social link"
              >
                <Icon className="h-4 w-4 text-black" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-black/70 transition-colors">Home</Link></li>
            <li><Link to="/news" className="hover:text-black/70 transition-colors">News & Insights</Link></li>
            <li><Link to="/contact" className="hover:text-black/70 transition-colors">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-black/70 transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Services
          </h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/health-insurance" className="hover:text-black/70 transition-colors">Health Insurance</Link></li>
            <li><Link to="/motor-insurance" className="hover:text-black/70 transition-colors">Motor Insurance</Link></li>
            <li><Link to="/engineering-insurance" className="hover:text-black/70 transition-colors">Engineering Insurance</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-sm uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-black/70 mt-0.5" />
              <span>1201 Corporate Tower, Business Bay, Dubai, UAE</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="shrink-0 text-black/70 mt-0.5" />
              <a href="mailto:info@nris.com" className="hover:text-black/70 transition-colors">info@nris.com</a>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-black/70 mt-0.5" />
              <a href="tel:+97140000000" className="hover:text-black/70 transition-colors">+971 4 000 0000</a>
            </li>
            <li className="flex gap-3">
              <Clock size={18} className="shrink-0 text-black/70 mt-0.5" />
              <span>Sun–Thu, 9:00 – 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10">
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs text-black/60">
          <p>© 2026 National Resource Insurance Services. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
