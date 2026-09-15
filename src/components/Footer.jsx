import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import { LinkedInIcon, TwitterIcon, FacebookIcon, InstagramIcon } from "./SocialIcons";
import footerBg from "../assets/footer_bg.png";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="text-black bg-cover bg-center relative" style={{ backgroundImage: `url(${footerBg})` }}>
      <div className="container-xl py-28 grid gap-12 md:grid-cols-2 lg:grid-cols-4 relative z-10">
        <div>
          <Link to="/" className="flex items-center mb-6 group">
            <div className="transition-transform group-hover:scale-105">
              <Logo />
            </div>
          </Link>
          <p className="text-lg leading-relaxed text-black/80 max-w-xs">
            National Resource Insurance Services — a trusted brokerage delivering
            tailored coverage, expert advisory, and rapid claims support for
            individuals, businesses, and enterprises.
          </p>
          <div className="flex gap-3 mt-6">
            {[
              { Icon: LinkedInIcon, href: "https://www.linkedin.com/company/nrisinsurance/" },
              { Icon: TwitterIcon, href: "https://x.com/nrisinsurance?s=11" },
              { Icon: FacebookIcon, href: "https://www.facebook.com/share/1HCVFMz484/?mibextid=wwXIfr" },
              { Icon: InstagramIcon, href: "https://www.instagram.com/nrisinsurance?stkn=dHZ5bzhkY204ZmR6" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                aria-label="social link"
              >
                <Icon className="h-4 w-4 text-black" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-xl uppercase tracking-wide">
            Quick Links
          </h4>
          <ul className="space-y-3 text-lg">
            <li><Link to="/" className="hover:text-black/70 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-black/70 transition-colors">About Us</Link></li>
            {/* <li><Link to="/news" className="hover:text-black/70 transition-colors">News & Insights</Link></li> */}
            <li><Link to="/contact" className="hover:text-black/70 transition-colors">Contact Us</Link></li>
            <li><Link to="/contact" className="hover:text-black/70 transition-colors">Get a Quote</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-xl uppercase tracking-wide">
            Services
          </h4>
          <ul className="space-y-3 text-lg">
            <li><Link to="/motor-insurance" className="hover:text-black/70 transition-colors">Motor Insurance</Link></li>
            <li><Link to="/health-insurance" className="hover:text-black/70 transition-colors">Health Insurance</Link></li>

            <li><Link to="/engineering-insurance" className="hover:text-black/70 transition-colors">Engineering Insurance</Link></li>
            <li><Link to="/property-insurance" className="hover:text-black/70 transition-colors">Property Insurance</Link></li>
            <li><Link to="/marine-insurance" className="hover:text-black/70 transition-colors">Marine Insurance</Link></li>

          </ul>
        </div>

        <div>
          <h4 className="text-black font-display font-semibold mb-4 text-xl uppercase tracking-wide">
            Contact
          </h4>
          <ul className="space-y-4 text-lg">
            <li className="flex gap-3">
              <MapPin size={22} className="shrink-0 text-black/70 mt-0.5" />
              <span>
                <span className="font-semibold">Abu Dhabi:</span> Airport Road, NBK Tower, Office 1304
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={22} className="shrink-0 text-black/70 mt-0.5" />
              <a href="tel:+97124466234" className="hover:text-black/70 transition-colors">+971 2 446 6234</a>
            </li>
            <li className="flex gap-3">
              <MapPin size={18} className="shrink-0 text-black/70 mt-0.5" />
              <span>
                <span className="font-semibold">Dubai:</span> Business Bay, BaysWater Tower, Office 2205
              </span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-black/70 mt-0.5" />
              <a href="tel:+97145645452" className="hover:text-black/70 transition-colors">+971 4 564 5452</a>
            </li>
            <li className="flex gap-3">
              <Mail size={22} className="shrink-0 text-black/70 mt-0.5" />
              <a href="mailto:complaints@nris.ae" className="hover:text-black/70 transition-colors">complaints@nris.ae</a>
            </li>
            <li className="flex gap-3">
              <Clock size={22} className="shrink-0 text-black/70 mt-0.5" />
              <span>Mon–Fri, 08:30 – 18:00</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-black/10 relative z-10">
        <div className="container-xl py-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-base text-black/60">
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
