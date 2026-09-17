import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, ArrowRight, ChevronDown } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import nrisIcon from "../assets/NRiS without Background.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/motor-insurance", label: "Motor" },
  { to: "/health-insurance", label: "Health" },

  { to: "/engineering", label: "Engineering" },
  { to: "/cyber", label: "Cyber" },
  { to: "/property", label: "Property" },
  { to: "/marine", label: "Marine" },
  // { to: "/news", label: "News" },
  { to: "/about", label: "About Us" },
  { to: "/contact", label: "Contact Us" },

];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [links.length]);

  return (
    <header
      className="sticky top-0 w-full z-50 bg-white shadow-[0_2px_20px_-4px_rgba(11,78,162,0.1)] border-b border-gray-100"
    >
      <div className="container-xl flex items-center justify-between py-2">
        <Link to="/" className="flex items-center gap-2 group">
          <img loading="lazy"
            src={nrisIcon}
            alt="NRIS Logo"
            className="h-16 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        <nav className="hidden xl:flex items-center gap-8 2xl:gap-14">
          {links.map((l) =>
            l.dropdown ? (
              <div key={l.to} className="relative group">
                <Link
                  to={l.to}
                  className="relative flex items-center gap-1 text-lg font-semibold transition-colors text-[#0B4EA2] hover:text-black py-2"
                >
                  {l.label}{" "}
                  <ChevronDown
                    size={16}
                    className="transition-transform group-hover:rotate-180"
                  />
                </Link>

                <div className="absolute left-0 top-full hidden w-56 flex-col rounded-xl bg-white p-2 shadow-[0_10px_40px_-10px_rgba(11,78,162,0.15)] border border-blue-500/10 group-hover:flex">
                  {l.dropdown.map((dl) => (
                    <Link
                      key={dl.to}
                      to={dl.to}
                      className="rounded-lg px-4 py-2 text-base text-ink/80 hover:bg-red-50 hover:text-red-600 transition-colors"
                    >
                      {dl.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  `relative text-lg font-semibold transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:bg-black after:transition-all ${isActive
                    ? "text-black after:w-full"
                    : "text-[#0B4EA2] after:w-0 hover:text-black hover:after:w-full"
                  }`
                }
              >
                {l.label}
              </NavLink>
            )
          )}
        </nav>

        <div className="hidden xl:block">
          <Link
            to="/contact"
            className="btn-primary text-base rounded-full"
          >
            Get a Quote <ArrowRight size={16} />
          </Link>
        </div>

        <button
          className="xl:hidden p-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="xl:hidden overflow-hidden bg-white border-t border-black/5"
          >
            <div className="container-xl flex flex-col py-4 gap-4">
              {links.map((l) => (
                <div key={l.to} className="flex flex-col gap-2">
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    onClick={() => !l.dropdown && setOpen(false)}
                    className={({ isActive }) =>
                      `text-sm font-medium ${isActive ? "text-primary" : "text-ink/80"
                      }`
                    }
                  >
                    {l.label}
                  </NavLink>

                  {l.dropdown && (
                    <div className="flex flex-col pl-4 gap-2 border-l-2 border-red-100 ml-2 mt-1">
                      {l.dropdown.map((dl) => (
                        <Link
                          key={dl.to}
                          to={dl.to}
                          onClick={() => setOpen(false)}
                          className="text-sm text-ink/70 hover:text-red-600"
                        >
                          {dl.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="btn-primary justify-center text-sm mt-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}