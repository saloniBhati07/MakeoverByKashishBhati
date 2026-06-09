import { motion } from "motion/react";
import { MessageCircle, Brush, Sparkles, Star } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Consultation",
    subtitle: "Getting to Know You",
    description:
      "We begin with an in-depth consultation — in person or virtually. We discuss your vision, review inspiration imagery, assess your skin, and craft a bespoke beauty plan tailored to your wedding day.",
    duration: "60–90 minutes",
  },
  {
    number: "02",
    icon: Brush,
    title: "Trial Session",
    subtitle: "Perfecting the Look",
    description:
      "Your trial is where the magic happens. We experiment with looks, refine details, and ensure you're completely in love with every element before your wedding day. The trial is always included for bridal bookings.",
    duration: "2–3 hours",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Event Day Preparation",
    subtitle: "Your Moment Arrives",
    description:
      "I arrive early, fully prepared, and focused entirely on you. Using only the finest luxury products, I create your flawless look with precision and care, while keeping the atmosphere calm and celebratory.",
    duration: "2–4 hours",
  },
  {
    number: "04",
    icon: Star,
    title: "Final Touches",
    subtitle: "Walk Out Radiant",
    description:
      "Before you leave, we do a final perfecting pass — checking every angle, ensuring longevity, and providing you with a personalised touch-up kit and guide so you stay radiant all day and into the night.",
    duration: "30 minutes",
  },
];

export function ProcessSection() {
  return (
    <section
      id="process"
      style={{ backgroundColor: "#2C2C2C", padding: "120px 0" }}
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
              The Experience
            </span>
            <span style={{ width: "40px", height: "1px", backgroundColor: "#D4B483" }} />
          </div>
          <h2
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(36px, 4vw, 56px)",
              fontWeight: 400,
              color: "#F8F5F2",
              lineHeight: 1.2,
              textAlign: "center",
              letterSpacing: "-0.01em",
            }}
          >
            The <em style={{ fontStyle: "italic" }}>Sophia Belle</em> Journey
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
          {/* Connecting line */}
          <div
            className="hidden lg:block"
            style={{
              position: "absolute",
              top: "40px",
              left: "12.5%",
              right: "12.5%",
              height: "1px",
              backgroundColor: "rgba(212,180,131,0.2)",
              zIndex: 0,
            }}
          />

          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center px-6 lg:px-8 py-6"
                style={{ position: "relative", zIndex: 1 }}
              >
                {/* Step number circle */}
                <div
                  style={{
                    width: "80px",
                    height: "80px",
                    border: "1px solid rgba(212,180,131,0.4)",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#2C2C2C",
                    marginBottom: "24px",
                    position: "relative",
                  }}
                >
                  <Icon size={22} color="#D4B483" />
                  {/* Step number badge */}
                  <div
                    style={{
                      position: "absolute",
                      top: "-8px",
                      right: "-8px",
                      width: "24px",
                      height: "24px",
                      backgroundColor: "#D4B483",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Jost', sans-serif",
                        fontSize: "9px",
                        fontWeight: 600,
                        color: "#2C2C2C",
                      }}
                    >
                      {i + 1}
                    </span>
                  </div>
                </div>

                {/* Duration pill */}
                <div
                  style={{
                    backgroundColor: "rgba(212,180,131,0.1)",
                    border: "1px solid rgba(212,180,131,0.2)",
                    padding: "4px 14px",
                    marginBottom: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Jost', sans-serif",
                      fontSize: "10px",
                      fontWeight: 300,
                      letterSpacing: "0.15em",
                      color: "#D4B483",
                    }}
                  >
                    {step.duration}
                  </span>
                </div>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "10px",
                    fontWeight: 400,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#D4B483",
                    marginBottom: "8px",
                  }}
                >
                  {step.subtitle}
                </p>

                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "24px",
                    fontWeight: 500,
                    color: "#F8F5F2",
                    marginBottom: "16px",
                  }}
                >
                  {step.title}
                </h3>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "13px",
                    fontWeight: 300,
                    color: "rgba(248,245,242,0.6)",
                    lineHeight: 1.9,
                  }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="flex justify-center mt-20">
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            onClick={() => {
              const el = document.querySelector("#booking");
              if (el) el.scrollIntoView({ behavior: "smooth" });
            }}
            style={{
              fontFamily: "'Jost', sans-serif",
              fontSize: "12px",
              fontWeight: 500,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#2C2C2C",
              backgroundColor: "#D4B483",
              border: "1px solid #D4B483",
              padding: "16px 48px",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget).style.backgroundColor = "transparent";
              (e.currentTarget).style.color = "#D4B483";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget).style.backgroundColor = "#D4B483";
              (e.currentTarget).style.color = "#2C2C2C";
            }}
          >
            Begin Your Journey
          </motion.button>
        </div>
      </div>
    </section>
  );
}
