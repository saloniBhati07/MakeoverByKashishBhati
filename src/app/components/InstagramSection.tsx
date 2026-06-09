import { motion } from "motion/react";
import { Instagram, Heart, MessageCircle } from "lucide-react";

const posts = [
  {
    url: "https://images.unsplash.com/photo-1488846343176-08e05ab9a2a1?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "2.4k",
    comments: "38",
    caption: "Saturday's bride ✨",
  },
  {
    url: "https://images.unsplash.com/photo-1646335940441-67c4e56c2e67?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "1.8k",
    comments: "24",
    caption: "Soft glam engagement session 🌸",
  },
  {
    url: "https://images.unsplash.com/photo-1648249969490-44f3052a3721?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "3.1k",
    comments: "52",
    caption: "Rosé editorial — out now",
  },
  {
    url: "https://images.unsplash.com/photo-1643932919088-53349a7c3385?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "2.2k",
    comments: "41",
    caption: "Modern muse — editorial work",
  },
  {
    url: "https://images.unsplash.com/photo-1563170446-9c3c0622d8a9?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "1.9k",
    comments: "29",
    caption: "Eyes that tell a story 👁",
  },
  {
    url: "https://images.unsplash.com/photo-1599029575302-290d8f461dc9?w=400&h=400&fit=crop&auto=format&q=85",
    likes: "2.7k",
    comments: "45",
    caption: "Lace & light — bridal editorial",
  },
];

export function InstagramSection() {
  return (
    <section
      id="instagram"
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
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
                Instagram
              </span>
            </div>
            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(32px, 4vw, 48px)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.2,
              }}
            >
              Follow the <em style={{ fontStyle: "italic" }}>Journey</em>
            </h2>
          </div>

          <a
            href="https://instagram.com/sophiabellebeauty"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 400,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#2C2C2C",
              textDecoration: "none",
              border: "1px solid rgba(44,44,44,0.25)",
              padding: "12px 24px",
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
            <Instagram size={16} />
            @sophiabellebeauty
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {posts.map((post, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative group overflow-hidden"
              style={{ aspectRatio: "1 / 1", cursor: "pointer", backgroundColor: "#E8D8C4" }}
            >
              <img
                src={post.url}
                alt={post.caption}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                }}
                className="group-hover:scale-110"
              />
              {/* Hover overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  backgroundColor: "rgba(44,44,44,0.7)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  opacity: 0,
                  transition: "opacity 0.35s ease",
                }}
                className="group-hover:!opacity-100"
              >
                <Instagram size={22} color="#FFFFFF" />
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <Heart size={14} fill="#FFFFFF" color="#FFFFFF" />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                      }}
                    >
                      {post.likes}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MessageCircle size={14} color="#FFFFFF" />
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        fontWeight: 400,
                        color: "#FFFFFF",
                      }}
                    >
                      {post.comments}
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follower count */}
        <div className="flex justify-center mt-12">
          <p
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "13px",
              fontWeight: 300,
              color: "#8A7A6E",
              letterSpacing: "0.08em",
            }}
          >
            Join{" "}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontStyle: "italic",
                color: "#2C2C2C",
                fontSize: "15px",
              }}
            >
              47.2k
            </span>{" "}
            followers for daily beauty inspiration
          </p>
        </div>
      </div>
    </section>
  );
}
