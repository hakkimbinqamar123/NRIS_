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
      <div className="container-xl flex items-center justify-between py-1.5 md:py-2">
        <Link to="/" className="flex items-center gap-2 group">
          <img loading="lazy"
            src={nrisIcon}
            alt="NRIS Logo"
            className="h-10 md:h-16 w-auto object-contain transition-transform group-hover:scale-105"
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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="xl:hidden fixed inset-0 z-[100] flex justify-center items-center p-4"
          >
            {/* Clickable Backdrop to close */}
            <div 
              className="absolute inset-0 bg-black/10 backdrop-blur-[2px]" 
              onClick={() => setOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative w-[90vw] max-w-sm max-h-[90vh] bg-black/10 backdrop-blur-2xl rounded-3xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] border border-white/20 flex flex-col items-center overflow-y-auto custom-scrollbar p-6"
            >
              {/* Close Button */}
              <button
                onClick={() => setOpen(false)}
                className="absolute top-4 right-4 text-[#0B4EA2] p-2 bg-[#0B4EA2]/10 rounded-full hover:bg-[#0B4EA2]/20 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>

              <div className="flex flex-col gap-6 items-center text-center w-full pt-6 pb-2">
                {links.map((l) => (
                  <div key={l.to} className="flex flex-col items-center w-full">
                    <NavLink
                      to={l.to}
                      end={l.to === "/"}
                      onClick={() => !l.dropdown && setOpen(false)}
                      className={({ isActive }) =>
                        `text-2xl font-display font-extrabold transition-all ${
                          isActive ? "text-[#0B4EA2] scale-110 tracking-wide" : "text-[#0B4EA2]/80 hover:text-[#0B4EA2]"
                        }`
                      }
                    >
                      {l.label}
                    </NavLink>
                    {l.dropdown && (
                      <div className="flex flex-col gap-3 mt-4 mb-1 w-full bg-[#0B4EA2]/10 rounded-2xl py-4">
                        {l.dropdown.map((dl) => (
                          <Link
                            key={dl.to}
                            to={dl.to}
                            onClick={() => setOpen(false)}
                            className="text-[17px] font-semibold text-[#0B4EA2]/80 hover:text-[#0B4EA2] transition-colors"
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
                  className="mt-4 bg-[#0B4EA2] text-white hover:bg-blue-800 py-3.5 px-8 text-lg font-bold rounded-full shadow-[0_0_20px_rgba(11,78,162,0.3)] transition-transform hover:scale-105 active:scale-95 w-full max-w-[220px]"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}