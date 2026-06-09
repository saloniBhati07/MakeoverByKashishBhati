import { useEffect, useRef, useState, type RefObject } from "react";
import { motion } from "motion/react";

const stats = [
  { value: "12+", label: "Years of Excellence", sub: "Master-level artistry since 2012" },
  { value: "500+", label: "Brides Served", sub: "Across 4 continents" },
  { value: "8", label: "Global Certifications", sub: "Charlotte Tilbury, MAC, Bobbi Brown & more" },
  { value: "30+", label: "Luxury Brands", sub: "Charlotte Tilbury · Dior · Armani · NARS" },
];

function useInView(ref: RefObject<Element | null>) {
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref]);
  return inView;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref);

  return (
    <section
      id="stats"
      ref={ref}
      style={{
        backgroundColor: "#2C2C2C",
        padding: "80px 0",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex items-center gap-4 mb-16 justify-center">
          <span style={{ width: "48px", height: "1px", backgroundColor: "#D4B483" }} />
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
            Trusted Expertise
          </span>
          <span style={{ width: "48px", height: "1px", backgroundColor: "#D4B483" }} />
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-0">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center px-8 py-8 relative group"
              style={{
                borderRight: i < stats.length - 1 ? "1px solid rgba(212,180,131,0.15)" : "none",
              }}
            >
              <div
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(48px, 6vw, 80px)",
                  fontWeight: 400,
                  color: "#D4B483",
                  lineHeight: 1,
                  marginBottom: "12px",
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F8F5F2",
                  marginBottom: "8px",
                }}
              >
                {stat.label}
              </div>
              <div
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#8A7A6E",
                  lineHeight: 1.6,
                  maxWidth: "200px",
                }}
              >
                {stat.sub}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Brand logos row */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-10 mt-16 pt-16"
          style={{ borderTop: "1px solid rgba(212,180,131,0.15)" }}
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#8A7A6E",
              marginRight: "8px",
            }}
          >
            Products Used
          </span>
          {["Charlotte Tilbury", "Dior Beauty", "Chanel", "Armani Beauty", "NARS", "MAC"].map(
            (brand, i) => (
              <span
                key={i}
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "14px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "rgba(248,245,242,0.5)",
                  letterSpacing: "0.05em",
                  transition: "color 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) => { (e.currentTarget).style.color = "#D4B483"; }}
                onMouseLeave={(e) => { (e.currentTarget).style.color = "rgba(248,245,242,0.5)"; }}
              >
                {brand}
              </span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
}
