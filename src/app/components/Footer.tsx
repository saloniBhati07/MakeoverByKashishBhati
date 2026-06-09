import { Instagram, Facebook, Youtube, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Process", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Now", href: "#booking" },
];

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "https://instagram.com/sophiabellebeauty" },
  { icon: Facebook, label: "Facebook", href: "#" },
  { icon: Youtube, label: "YouTube", href: "#" },
];

export function Footer() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ backgroundColor: "#1A1A1A" }}>
      {/* Main footer content */}
      <div
        className="max-w-[1440px] mx-auto px-8 md:px-16"
        style={{ paddingTop: "80px", paddingBottom: "60px" }}
      >
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Brand column */}
          <div className="md:col-span-3 lg:col-span-1">
            {/* Logo */}
            <div className="mb-6">
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#F8F5F2",
                  marginBottom: "4px",
                }}
              >
                SOPHIA BELLE
              </p>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "9px",
                  fontWeight: 400,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#D4B483",
                }}
              >
                Luxury Bridal Makeup
              </p>
            </div>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "13px",
                fontWeight: 300,
                color: "rgba(248,245,242,0.5)",
                lineHeight: 1.8,
                marginBottom: "24px",
                maxWidth: "280px",
              }}
            >
              London-based luxury makeup artist specialising in bridal and editorial beauty.
              Available worldwide for destination weddings.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              {socialLinks.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    style={{
                      width: "36px",
                      height: "36px",
                      border: "1px solid rgba(212,180,131,0.25)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      transition: "all 0.3s ease",
                      color: "rgba(248,245,242,0.5)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget).style.borderColor = "#D4B483";
                      (e.currentTarget).style.color = "#D4B483";
                      (e.currentTarget).style.backgroundColor = "rgba(212,180,131,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget).style.borderColor = "rgba(212,180,131,0.25)";
                      (e.currentTarget).style.color = "rgba(248,245,242,0.5)";
                      (e.currentTarget).style.backgroundColor = "transparent";
                    }}
                  >
                    <Icon size={15} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4B483",
                marginBottom: "20px",
              }}
            >
              Navigation
            </p>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleScroll(link.href)}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "13px",
                      fontWeight: 300,
                      color: "rgba(248,245,242,0.55)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.25s ease",
                    }}
                    onMouseEnter={(e) => { (e.currentTarget).style.color = "#D4B483"; }}
                    onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(248,245,242,0.55)"; }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4B483",
                marginBottom: "20px",
              }}
            >
              Contact
            </p>
            <ul className="flex flex-col gap-5">
              {[
                { icon: Mail, text: "hello@sophiabellebeauty.com" },
                { icon: MapPin, text: "Mayfair, London W1K, UK" },
                { icon: Phone, text: "+44 7700 000 000" },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <li key={i} className="flex items-start gap-3">
                    <Icon size={14} color="#D4B483" style={{ marginTop: "2px", flexShrink: 0 }} />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "13px",
                        fontWeight: 300,
                        color: "rgba(248,245,242,0.55)",
                        lineHeight: 1.6,
                      }}
                    >
                      {item.text}
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "10px",
                fontWeight: 500,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                color: "#D4B483",
                marginBottom: "12px",
              }}
            >
              Beauty Journal
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 300,
                color: "rgba(248,245,242,0.5)",
                lineHeight: 1.7,
                marginBottom: "20px",
              }}
            >
              Tips, trends, and behind-the-scenes from the studio.
            </p>
            <div style={{ display: "flex" }}>
              <input
                type="email"
                placeholder="Your email"
                style={{
                  flex: 1,
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#F8F5F2",
                  backgroundColor: "rgba(248,245,242,0.06)",
                  border: "1px solid rgba(212,180,131,0.2)",
                  borderRight: "none",
                  padding: "10px 14px",
                  outline: "none",
                }}
              />
              <button
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#2C2C2C",
                  backgroundColor: "#D4B483",
                  border: "1px solid #D4B483",
                  padding: "10px 16px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  whiteSpace: "nowrap",
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTop: "1px solid rgba(212,180,131,0.1)" }}
      >
        <div
          className="max-w-[1440px] mx-auto px-8 md:px-16 py-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 300,
              color: "rgba(248,245,242,0.3)",
              letterSpacing: "0.08em",
            }}
          >
            © 2026 Sophia Belle Beauty. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 300,
                  color: "rgba(248,245,242,0.3)",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.25s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.color = "#D4B483"; }}
                onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(248,245,242,0.3)"; }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
