import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Amara Johnson",
    role: "Bride — June 2024",
    review:
      "Sophia transformed me into the most beautiful version of myself. My bridal look was everything I dreamed of and more — it lasted the entire day through tears of joy, dancing, and everything in between. I cannot recommend her enough.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1501175635532-bdd01562edb2?w=120&h=120&fit=crop&auto=format&q=85",
    location: "London, UK",
  },
  {
    name: "Isabella Marchetti",
    role: "Bride — September 2024",
    review:
      "From the trial to my wedding morning, Sophia made everything feel effortless and luxurious. She listened to exactly what I wanted and delivered a look that was timeless and utterly me. My photos are breathtaking.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1488846343176-08e05ab9a2a1?w=120&h=120&fit=crop&auto=format&q=85",
    location: "Florence, Italy",
  },
  {
    name: "Charlotte Davies",
    role: "Bride — March 2024",
    review:
      "Working with Sophia was the best investment I made for my wedding. Her attention to detail, calm presence, and extraordinary artistry made my wedding morning truly magical. I felt like a queen all day.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1646335940441-67c4e56c2e67?w=120&h=120&fit=crop&auto=format&q=85",
    location: "New York, USA",
  },
  {
    name: "Priya Sharma",
    role: "Bride — December 2023",
    review:
      "The most incredible makeup experience of my life. Sophia has a rare gift — she understands your face better than you do. The look she created was flawless, stayed perfect for 14 hours, and honoured my heritage beautifully.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=120&h=120&fit=crop&auto=format&q=85",
    location: "Dubai, UAE",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        background: "linear-gradient(135deg, #F8F5F2 0%, #F0EBE4 100%)",
        padding: "120px 0",
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col items-center mb-20">
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
              Client Love
            </span>
            <span style={{ width: "40px", height: "1px", backgroundColor: "#D4B483" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#2C2C2C",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Words from <em style={{ fontStyle: "italic" }}>Our Brides</em>
          </h2>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-[900px] mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              style={{
                backgroundColor: "#FFFFFF",
                padding: "56px 64px",
                position: "relative",
                boxShadow: "0 8px 60px rgba(44,44,44,0.07)",
              }}
            >
              {/* Large decorative quote mark */}
              <div
                style={{
                  position: "absolute",
                  top: "24px",
                  left: "40px",
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "120px",
                  fontWeight: 400,
                  color: "rgba(212,180,131,0.15)",
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}
              >
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-8">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={16} fill="#D4B483" color="#D4B483" />
                ))}
              </div>

              {/* Review text */}
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "clamp(18px, 2vw, 24px)",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#2C2C2C",
                  lineHeight: 1.75,
                  marginBottom: "40px",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                "{t.review}"
              </p>

              {/* Client */}
              <div className="flex items-center gap-5">
                <img
                  src={t.image}
                  alt={t.name}
                  style={{
                    width: "60px",
                    height: "60px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "2px solid rgba(212,180,131,0.4)",
                  }}
                />
                <div>
                  <p
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "16px",
                      fontWeight: 500,
                      color: "#2C2C2C",
                      marginBottom: "2px",
                    }}
                  >
                    {t.name}
                  </p>
                  <p
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "11px",
                      fontWeight: 300,
                      letterSpacing: "0.1em",
                      color: "#8A7A6E",
                    }}
                  >
                    {t.role} · {t.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-10">
            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  style={{
                    width: i === current ? "32px" : "8px",
                    height: "2px",
                    backgroundColor: i === current ? "#D4B483" : "rgba(44,44,44,0.2)",
                    border: "none",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Arrows */}
            <div className="flex gap-3">
              <button
                onClick={prev}
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(44,44,44,0.2)",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.backgroundColor = "#2C2C2C";
                  (e.currentTarget).style.borderColor = "#2C2C2C";
                  const svg = (e.currentTarget).querySelector("svg");
                  if (svg) svg.style.color = "#F8F5F2";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.backgroundColor = "transparent";
                  (e.currentTarget).style.borderColor = "rgba(44,44,44,0.2)";
                  const svg = (e.currentTarget).querySelector("svg");
                  if (svg) svg.style.color = "#2C2C2C";
                }}
              >
                <ChevronLeft size={18} color="#2C2C2C" style={{ transition: "color 0.3s" }} />
              </button>
              <button
                onClick={next}
                style={{
                  width: "48px",
                  height: "48px",
                  border: "1px solid rgba(44,44,44,0.2)",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget).style.backgroundColor = "#2C2C2C";
                  (e.currentTarget).style.borderColor = "#2C2C2C";
                  const svg = (e.currentTarget).querySelector("svg");
                  if (svg) svg.style.color = "#F8F5F2";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget).style.backgroundColor = "transparent";
                  (e.currentTarget).style.borderColor = "rgba(44,44,44,0.2)";
                  const svg = (e.currentTarget).querySelector("svg");
                  if (svg) svg.style.color = "#2C2C2C";
                }}
              >
                <ChevronRight size={18} color="#2C2C2C" style={{ transition: "color 0.3s" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Google Rating banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mt-20 pt-16"
          style={{ borderTop: "1px solid rgba(212,180,131,0.2)" }}
        >
          {[
            { platform: "Google", rating: "5.0", count: "148 reviews" },
            { platform: "Hitched", rating: "5.0", count: "92 reviews" },
            { platform: "Bridebook", rating: "4.9", count: "67 reviews" },
          ].map((r, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} size={14} fill="#D4B483" color="#D4B483" />
                ))}
              </div>
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "22px",
                  fontWeight: 500,
                  color: "#2C2C2C",
                }}
              >
                {r.rating}
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "10px",
                  fontWeight: 300,
                  letterSpacing: "0.1em",
                  color: "#8A7A6E",
                }}
              >
                {r.platform} · {r.count}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
