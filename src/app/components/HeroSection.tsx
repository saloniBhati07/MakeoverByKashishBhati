import { useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      style={{ minHeight: "100vh", backgroundColor: "#F8F5F2" }}
      className="relative flex overflow-hidden"
    >
      {/* Left — Text Panel */}
      <div
        className="relative z-10 flex flex-col justify-center px-8 md:px-16 lg:px-24"
        style={{
          width: "100%",
          maxWidth: "620px",
          paddingTop: "120px",
          paddingBottom: "80px",
        }}
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
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
            Luxury Bridal Makeup Artist
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(40px, 5vw, 72px)",
            fontWeight: 400,
            lineHeight: 1.15,
            color: "#2C2C2C",
            letterSpacing: "-0.01em",
            marginBottom: "24px",
          }}
        >
          Timeless Beauty,
          <br />
          <em style={{ fontStyle: "italic", color: "#2C2C2C" }}>Crafted</em> for Your
          <br />
          Special Day
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "16px",
            fontWeight: 300,
            lineHeight: 1.8,
            color: "#8A7A6E",
            maxWidth: "420px",
            marginBottom: "48px",
          }}
        >
          Premium bridal and event makeup artistry that celebrates your natural radiance.
          Every look is a bespoke creation — elegantly tailored to your vision and your day.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap items-center gap-4"
        >
          <button
            onClick={() => handleScroll("#booking")}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#F8F5F2",
              backgroundColor: "#2C2C2C",
              border: "1px solid #2C2C2C",
              padding: "16px 36px",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.backgroundColor = "#D4B483";
              (e.currentTarget).style.borderColor = "#D4B483";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.backgroundColor = "#2C2C2C";
              (e.currentTarget).style.borderColor = "#2C2C2C";
            }}
          >
            Book Consultation
          </button>
          <button
            onClick={() => handleScroll("#portfolio")}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2C2C2C",
              backgroundColor: "transparent",
              border: "1px solid rgba(44,44,44,0.3)",
              padding: "16px 36px",
              cursor: "pointer",
              transition: "all 0.35s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.borderColor = "#D4B483";
              (e.currentTarget).style.color = "#D4B483";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.borderColor = "rgba(44,44,44,0.3)";
              (e.currentTarget).style.color = "#2C2C2C";
            }}
          >
            View Portfolio
          </button>
        </motion.div>

        {/* Awards / Trust badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex items-center gap-6 mt-16"
        >
          {["Luxury Brand Certified", "12+ Years Experience", "500+ Brides"].map((badge, i) => (
            <div key={i} className="flex items-center gap-2">
              <span style={{ width: "4px", height: "4px", borderRadius: "50%", backgroundColor: "#D4B483", display: "block" }} />
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#8A7A6E",
                }}
              >
                {badge}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right — Image Panel */}
      <motion.div
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block flex-1 relative overflow-hidden"
        style={{ minHeight: "100vh" }}
      >
        <img
          src="https://images.unsplash.com/photo-1488846343176-08e05ab9a2a1?w=1200&h=1600&fit=crop&auto=format&q=85"
          alt="Elegant bridal portrait by Sophia Belle"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
          }}
        />
        {/* Subtle gradient fade on left edge to blend with ivory */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "120px",
            height: "100%",
            background: "linear-gradient(to right, #F8F5F2, transparent)",
          }}
        />

        {/* Floating caption card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          style={{
            position: "absolute",
            bottom: "80px",
            left: "-60px",
            backgroundColor: "rgba(248,245,242,0.92)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(212,180,131,0.3)",
            padding: "20px 28px",
            maxWidth: "240px",
          }}
        >
          <p
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "18px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#2C2C2C",
              lineHeight: 1.5,
              marginBottom: "8px",
            }}
          >
            "She made me feel like the most beautiful version of myself."
          </p>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#D4B483",
            }}
          >
            — Amara J., Bride 2024
          </p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={() => handleScroll("#stats")}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.8 }}
        style={{
          position: "absolute",
          bottom: "40px",
          left: "50%",
          transform: "translateX(-50%)",
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: "9px",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#8A7A6E",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={16} color="#D4B483" />
        </motion.div>
      </motion.button>
    </section>
  );
}
