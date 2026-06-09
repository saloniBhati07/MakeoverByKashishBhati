import { motion } from "motion/react";
import { Award, BookOpen, Brush } from "lucide-react";

const credentials = [
  { icon: Award, label: "Charlotte Tilbury Certified Artist" },
  { icon: Award, label: "MAC Pro Artist Certification" },
  { icon: Award, label: "PTTLS Teaching Qualification" },
  { icon: BookOpen, label: "Vidal Sassoon School of Beauty" },
  { icon: Brush, label: "Bobbi Brown Advanced Master Class" },
  { icon: Award, label: "Airbrush Artistry Certified" },
];

export function AboutSection() {
  return (
    <section
      id="about"
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0", overflow: "hidden" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main portrait */}
            <div style={{ position: "relative" }}>
              <img
                src="https://images.unsplash.com/photo-1643932919088-53349a7c3385?w=600&h=760&fit=crop&auto=format&q=85"
                alt="Sophia Belle — Luxury Bridal Makeup Artist"
                style={{
                  width: "100%",
                  maxWidth: "480px",
                  display: "block",
                  objectFit: "cover",
                }}
              />
              {/* Gold accent border */}
              <div
                style={{
                  position: "absolute",
                  top: "-16px",
                  left: "-16px",
                  width: "200px",
                  height: "200px",
                  border: "1px solid rgba(212,180,131,0.4)",
                  zIndex: -1,
                }}
              />
            </div>

            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              style={{
                position: "absolute",
                bottom: "-32px",
                right: "0",
                backgroundColor: "#2C2C2C",
                padding: "32px 36px",
                maxWidth: "220px",
              }}
            >
              <span
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "52px",
                  fontWeight: 400,
                  color: "#D4B483",
                  display: "block",
                  lineHeight: 1,
                  marginBottom: "8px",
                }}
              >
                12
              </span>
              <span
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 400,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#F8F5F2",
                }}
              >
                Years of
                <br />
                Excellence
              </span>
            </motion.div>

            {/* Floating makeup tools image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.6 }}
              style={{
                position: "absolute",
                top: "40px",
                right: "-40px",
                width: "160px",
                height: "200px",
                overflow: "hidden",
                display: "none",
              }}
              className="lg:!block"
            >
              <img
                src="https://images.unsplash.com/photo-1652706299340-e8a346491541?w=300&h=400&fit=crop&auto=format&q=85"
                alt="Luxury makeup tools"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </motion.div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-4 mb-8">
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
                About the Artist
              </span>
            </div>

            <h2
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "clamp(36px, 4vw, 52px)",
                fontWeight: 400,
                color: "#2C2C2C",
                lineHeight: 1.2,
                letterSpacing: "-0.01em",
                marginBottom: "24px",
              }}
            >
              Beauty is Not Worn —<br />
              <em style={{ fontStyle: "italic" }}>It is Felt.</em>
            </h2>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#8A7A6E",
                lineHeight: 1.9,
                marginBottom: "20px",
              }}
            >
              I'm Sophia Belle — London-based luxury makeup artist with over 12 years of experience
              creating breathtaking bridal and editorial looks. My journey began at the Vidal Sassoon
              School of Beauty and has taken me across four continents, adorning brides in Paris,
              New York, Dubai, and Cape Town.
            </p>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "15px",
                fontWeight: 300,
                color: "#8A7A6E",
                lineHeight: 1.9,
                marginBottom: "40px",
              }}
            >
              My philosophy is simple: every face tells a story. My role is to enhance, not transform.
              I work exclusively with the world's finest luxury beauty brands to deliver a flawless,
              photography-ready finish that lasts from ceremony to last dance.
            </p>

            {/* Philosophy quote */}
            <blockquote
              style={{
                borderLeft: "2px solid #D4B483",
                paddingLeft: "24px",
                marginBottom: "40px",
              }}
            >
              <p
                style={{
                  fontFamily: "'Playfair Display', serif",
                  fontSize: "18px",
                  fontWeight: 400,
                  fontStyle: "italic",
                  color: "#2C2C2C",
                  lineHeight: 1.7,
                }}
              >
                "True luxury in beauty is the confidence to walk into any room and feel entirely,
                radiantly yourself."
              </p>
            </blockquote>

            {/* Credentials */}
            <div>
              <p
                style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#2C2C2C",
                  marginBottom: "16px",
                }}
              >
                Certifications & Training
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {credentials.map((cred, i) => {
                  const Icon = cred.icon;
                  return (
                    <div
                      key={i}
                      className="flex items-center gap-3"
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "12px",
                        fontWeight: 300,
                        color: "#8A7A6E",
                      }}
                    >
                      <Icon size={14} color="#D4B483" />
                      {cred.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
