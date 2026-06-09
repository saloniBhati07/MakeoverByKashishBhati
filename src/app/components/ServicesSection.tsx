import { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, Heart, Camera, Star } from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Bridal Makeup",
    subtitle: "For Your Wedding Day",
    description:
      "A bespoke bridal experience from trial to wedding morning. We ensure your look is perfectly tailored, long-lasting, and captures the essence of who you are on your most important day.",
    includes: [
      "Pre-wedding consultation",
      "Trial session included",
      "Wedding morning prep",
      "Touch-up kit",
    ],
    price: "From £350",
    highlight: true,
  },
  {
    icon: Sparkles,
    title: "Engagement Makeup",
    subtitle: "Celebrate Your Love",
    description:
      "Soft, romantic beauty that photographs beautifully — designed for the magic of your engagement session or pre-wedding celebration.",
    includes: ["Skin prep & hydration", "Photogenic finish", "Natural glow", "2 look options"],
    price: "From £180",
    highlight: false,
  },
  {
    icon: Star,
    title: "Party & Event Glam",
    subtitle: "Shine Every Night",
    description:
      "Sophisticated evening glamour for galas, anniversaries, red carpet events, and milestone celebrations. Bold, polished, unforgettable.",
    includes: ["Custom look creation", "Long-wear formula", "Lash application", "Glam finish"],
    price: "From £150",
    highlight: false,
  },
  {
    icon: Camera,
    title: "Editorial & Photoshoot",
    subtitle: "Art Meets Beauty",
    description:
      "High-fashion artistry for editorial shoots, campaigns, and creative productions. Conceptual, bold, and technically precise.",
    includes: [
      "Concept development",
      "Full editorial look",
      "On-set availability",
      "Multiple looks",
    ],
    price: "From £280",
    highlight: false,
  },
];

export function ServicesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section
      id="services"
      style={{ backgroundColor: "#F0EBE4", padding: "120px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <div className="flex items-center gap-4 mb-6">
              <span style={{ width: "40px", height: "1px", backgroundColor: "#D4B483" }} />
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.35em",
                  textTransform: "uppercase",
                  color: "#D4B483",
                }}
              >
                Services
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 4vw, 56px)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
              }}
            >
              Curated Beauty
              <br />
              <em style={{ fontStyle: "italic" }}>Experiences</em>
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#8A7A6E",
              lineHeight: 1.9,
              maxWidth: "440px",
            }}
          >
            Every service is a luxurious, personalised ritual designed to make you feel
            radiantly yourself — whether it's your wedding day, a special evening, or a
            creative shoot.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                style={{
                  backgroundColor: service.highlight
                    ? "#2C2C2C"
                    : isHovered
                    ? "#FFFFFF"
                    : "#FFFFFF",
                  padding: "40px 32px",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  boxShadow: isHovered
                    ? "0 24px 60px rgba(44,44,44,0.12)"
                    : "0 2px 20px rgba(44,44,44,0.04)",
                  transform: isHovered ? "translateY(-6px)" : "translateY(0)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {service.highlight && (
                  <div
                    style={{
                      position: "absolute",
                      top: "16px",
                      right: "16px",
                      backgroundColor: "#D4B483",
                      padding: "4px 12px",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "9px",
                        fontWeight: 500,
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "#2C2C2C",
                      }}
                    >
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    border: `1px solid ${service.highlight ? "rgba(212,180,131,0.4)" : "rgba(212,180,131,0.4)"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <Icon size={18} color={service.highlight ? "#D4B483" : "#D4B483"} />
                </div>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: service.highlight ? "#D4B483" : "#D4B483",
                    marginBottom: "8px",
                  }}
                >
                  {service.subtitle}
                </p>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: service.highlight ? "#F8F5F2" : "#2C2C2C",
                    lineHeight: 1.3,
                    marginBottom: "16px",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: service.highlight ? "rgba(248,245,242,0.7)" : "#8A7A6E",
                    lineHeight: 1.8,
                    marginBottom: "24px",
                  }}
                >
                  {service.description}
                </p>

                {/* Includes */}
                <ul className="flex flex-col gap-2 mb-8">
                  {service.includes.map((item, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-3"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        color: service.highlight ? "rgba(248,245,242,0.8)" : "#8A7A6E",
                      }}
                    >
                      <span
                        style={{
                          width: "4px",
                          height: "4px",
                          borderRadius: "50%",
                          backgroundColor: "#D4B483",
                          flexShrink: 0,
                        }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: 500,
                      fontStyle: "italic",
                      color: service.highlight ? "#D4B483" : "#2C2C2C",
                    }}
                  >
                    {service.price}
                  </span>
                  <button
                    onClick={() => {
                      const el = document.querySelector("#booking");
                      if (el) el.scrollIntoView({ behavior: "smooth" });
                    }}
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      fontWeight: 500,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: service.highlight ? "#2C2C2C" : "#F8F5F2",
                      backgroundColor: service.highlight ? "#D4B483" : "#2C2C2C",
                      border: "none",
                      padding: "10px 18px",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      if (!service.highlight) {
                        (e.currentTarget).style.backgroundColor = "#D4B483";
                        (e.currentTarget).style.color = "#2C2C2C";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!service.highlight) {
                        (e.currentTarget).style.backgroundColor = "#2C2C2C";
                        (e.currentTarget).style.color = "#F8F5F2";
                      }
                    }}
                  >
                    Book Now
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
