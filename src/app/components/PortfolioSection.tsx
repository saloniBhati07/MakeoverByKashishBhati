import { useState } from "react";
import { motion } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

const categories = ["All", "Bridal", "Engagement", "Reception", "Editorial"];

const images = [
  {
    url: "https://images.unsplash.com/photo-1488846343176-08e05ab9a2a1?w=600&h=900&fit=crop&auto=format&q=85",
    alt: "Ethereal bridal look — soft glam",
    category: "Bridal",
    title: "The Garden Bride",
  },
  {
    url: "https://images.unsplash.com/photo-1523263685509-57c1d050d19b?w=600&h=800&fit=crop&auto=format&q=85",
    alt: "Classic bridal elegance",
    category: "Bridal",
    title: "Classic Elegance",
  },
  {
    url: "https://images.unsplash.com/photo-1501175635532-bdd01562edb2?w=600&h=750&fit=crop&auto=format&q=85",
    alt: "Bridal veil portrait",
    category: "Bridal",
    title: "Veil & Grace",
  },
  {
    url: "https://images.unsplash.com/photo-1599029575302-290d8f461dc9?w=600&h=900&fit=crop&auto=format&q=85",
    alt: "Lace wedding dress editorial",
    category: "Editorial",
    title: "Lace Editorial",
  },
  {
    url: "https://images.unsplash.com/photo-1766416143564-27ea392747fa?w=600&h=800&fit=crop&auto=format&q=85",
    alt: "Bride with jewellery",
    category: "Reception",
    title: "Golden Reception",
  },
  {
    url: "https://images.unsplash.com/photo-1646335940441-67c4e56c2e67?w=600&h=700&fit=crop&auto=format&q=85",
    alt: "Close up bridal beauty",
    category: "Engagement",
    title: "Soft Romance",
  },
  {
    url: "https://images.unsplash.com/photo-1648249969490-44f3052a3721?w=600&h=750&fit=crop&auto=format&q=85",
    alt: "Editorial beauty — rose and gold",
    category: "Editorial",
    title: "Rose Petal",
  },
  {
    url: "https://images.unsplash.com/photo-1643932919088-53349a7c3385?w=600&h=900&fit=crop&auto=format&q=85",
    alt: "Modern editorial beauty",
    category: "Editorial",
    title: "Modern Muse",
  },
  {
    url: "https://images.unsplash.com/photo-1646335939931-4c69bfb5d395?w=600&h=800&fit=crop&auto=format&q=85",
    alt: "Soft engagement look",
    category: "Engagement",
    title: "Sunlit Glow",
  },
  {
    url: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?w=600&h=900&fit=crop&auto=format&q=85",
    alt: "Blue eyes editorial portrait",
    category: "Editorial",
    title: "Aquamarine",
  },
  {
    url: "https://images.unsplash.com/photo-1631549423660-c10874dc335f?w=600&h=800&fit=crop&auto=format&q=85",
    alt: "Romantic bridal veil",
    category: "Bridal",
    title: "The Veil",
  },
  {
    url: "https://images.unsplash.com/photo-1646335938513-3124ac54f93f?w=600&h=700&fit=crop&auto=format&q=85",
    alt: "Natural bridal glow",
    category: "Bridal",
    title: "Natural Radiance",
  },
];


function PortfolioImage({ img }: { img: typeof images[0] }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden group"
      style={{ cursor: "pointer", backgroundColor: "#E8D8C4" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img
        src={img.url}
        alt={img.alt}
        style={{
          width: "100%",
          display: "block",
          transition: "transform 0.7s cubic-bezier(0.22,1,0.36,1)",
          transform: hovered ? "scale(1.06)" : "scale(1)",
        }}
        loading="lazy"
      />
      {/* Hover overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(44,44,44,0.65)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          padding: "28px",
        }}
      >
        <div
          style={{
            transform: hovered ? "translateY(0)" : "translateY(12px)",
            transition: "transform 0.4s ease",
          }}
        >
          <span
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "10px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#D4B483",
              display: "block",
              marginBottom: "6px",
            }}
          >
            {img.category}
          </span>
          <span
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "20px",
              fontWeight: 400,
              fontStyle: "italic",
              color: "#F8F5F2",
            }}
          >
            {img.title}
          </span>
        </div>
      </div>
    </div>
  );
}

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? images
    : images.filter((img) => img.category === activeCategory);

  return (
    <section
      id="portfolio"
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Section Header */}
        <div className="flex flex-col items-center mb-16">
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
              Portfolio
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
              letterSpacing: "-0.01em",
              marginBottom: "16px",
              textAlign: "center",
            }}
          >
            The Art of <em style={{ fontStyle: "italic" }}>Beauty</em>
          </h2>
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "15px",
              fontWeight: 300,
              color: "#8A7A6E",
              lineHeight: 1.8,
              maxWidth: "480px",
              textAlign: "center",
            }}
          >
            Each look is a unique story — meticulously crafted to honour your beauty and your moment.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                fontWeight: 400,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: activeCategory === cat ? "#F8F5F2" : "#2C2C2C",
                backgroundColor: activeCategory === cat ? "#2C2C2C" : "transparent",
                border: `1px solid ${activeCategory === cat ? "#2C2C2C" : "rgba(44,44,44,0.25)"}`,
                padding: "8px 20px",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget).style.borderColor = "#D4B483";
                  (e.currentTarget).style.color = "#D4B483";
                }
              }}
              onMouseLeave={(e) => {
                if (activeCategory !== cat) {
                  (e.currentTarget).style.borderColor = "rgba(44,44,44,0.25)";
                  (e.currentTarget).style.color = "#2C2C2C";
                }
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Masonry Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 900: 3, 1200: 4 }}>
            <Masonry gutter="12px">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.url}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <PortfolioImage img={img} />
                </motion.div>
              ))}
            </Masonry>
          </ResponsiveMasonry>
        </motion.div>

        {/* View More */}
        <div className="flex justify-center mt-16">
          <button
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "11px",
              fontWeight: 400,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "#2C2C2C",
              background: "none",
              border: "1px solid rgba(44,44,44,0.3)",
              padding: "14px 40px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.backgroundColor = "#2C2C2C";
              (e.currentTarget).style.color = "#F8F5F2";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.backgroundColor = "transparent";
              (e.currentTarget).style.color = "#2C2C2C";
            }}
          >
            View Full Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
