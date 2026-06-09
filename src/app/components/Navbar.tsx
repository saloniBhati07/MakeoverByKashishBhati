import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#booking" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "rgba(248, 245, 242, 0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212, 180, 131, 0.2)" : "none",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16 py-5 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex flex-col leading-none group cursor-pointer"
        >
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              color: "#2C2C2C",
            }}
          >
            SOPHIA BELLE
          </span>
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "9px",
              fontWeight: 400,
              letterSpacing: "0.35em",
              color: "#D4B483",
              textTransform: "uppercase",
              marginTop: "2px",
            }}
          >
            Luxury Bridal Makeup
          </span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                onClick={() => handleNavClick(link.href)}
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 400,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: scrolled ? "#2C2C2C" : "#2C2C2C",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "4px 0",
                  position: "relative",
                }}
                className="group"
              >
                {link.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    height: "1px",
                    width: "0%",
                    backgroundColor: "#D4B483",
                    transition: "width 0.3s ease",
                  }}
                  className="group-hover:!w-full"
                />
              </button>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          onClick={() => handleNavClick("#booking")}
          className="hidden md:block"
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            textTransform: "uppercase",
            color: "#F8F5F2",
            background: "#2C2C2C",
            border: "1px solid #2C2C2C",
            padding: "10px 24px",
            cursor: "pointer",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            (e.target as HTMLButtonElement).style.background = "#D4B483";
            (e.target as HTMLButtonElement).style.borderColor = "#D4B483";
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLButtonElement).style.background = "#2C2C2C";
            (e.target as HTMLButtonElement).style.borderColor = "#2C2C2C";
          }}
        >
          Book Now
        </button>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          style={{ color: "#2C2C2C", background: "none", border: "none", cursor: "pointer" }}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            style={{ backgroundColor: "#F8F5F2", borderTop: "1px solid rgba(212,180,131,0.2)" }}
          >
            <ul className="flex flex-col px-8 py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#2C2C2C",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => handleNavClick("#booking")}
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F8F5F2",
                    background: "#2C2C2C",
                    border: "none",
                    padding: "12px 28px",
                    cursor: "pointer",
                    width: "fit-content",
                  }}
                >
                  Book Now
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
