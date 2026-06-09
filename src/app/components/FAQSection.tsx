import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "When should I book my bridal makeup?",
    answer:
      "I recommend booking as early as possible — ideally 12–18 months before your wedding date, especially for peak season (May–September). Trial sessions are typically scheduled 6–8 weeks before the wedding. Early booking guarantees your date and allows ample time for the trial process.",
  },
  {
    question: "Is a trial session included in the bridal package?",
    answer:
      "Yes — every bridal booking includes one trial session. The trial is held at my London studio and lasts approximately 2–3 hours. We explore looks, refine details, and document everything so your wedding morning is relaxed and precise.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "Absolutely. I have an extensive portfolio of destination weddings across Europe, the Middle East, and beyond. Travel packages are available and I'm experienced in working internationally with customs, timing, and climate considerations. Please enquire for a bespoke travel quote.",
  },
  {
    question: "What brands and products do you use?",
    answer:
      "I work exclusively with luxury beauty brands including Charlotte Tilbury, Dior Beauty, Chanel, Giorgio Armani Beauty, NARS, and MAC Pro. Every product is chosen for its performance, photography-friendliness, and long-wearing formula. Skincare prep begins with La Mer and La Prairie.",
  },
  {
    question: "Can you accommodate a bridal party?",
    answer:
      "Yes — I offer full bridal party packages covering bridesmaids, mothers of the bride, and flower girls. For larger parties (5+), I collaborate with my trusted network of vetted assistant artists to ensure everyone is ready on time without compromising quality.",
  },
  {
    question: "How do I secure my booking?",
    answer:
      "A 30% non-refundable retainer secures your date, with the balance due 14 days before the wedding. All bookings are protected by a detailed contract for peace of mind. I accept bank transfer and major credit cards.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "The retainer is non-refundable as it secures your date from other bookings. If you need to reschedule with more than 60 days' notice, I'll do my best to accommodate a new date subject to availability. Full terms are outlined in the booking agreement.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      style={{ backgroundColor: "#F0EBE4", padding: "120px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[340px,1fr] gap-16 lg:gap-24">
          {/* Left — Sticky header */}
          <div className="lg:sticky" style={{ top: "120px", alignSelf: "start" }}>
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
                FAQ
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
              Everything
              <br />
              You Need to
              <br />
              <em style={{ fontStyle: "italic" }}>Know</em>
            </h2>
            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#8A7A6E",
                lineHeight: 1.8,
                marginBottom: "32px",
              }}
            >
              Have a question that isn't answered here? I'd love to hear from you directly.
            </p>
            <a
              href="mailto:hello@sophiabellebeauty.com"
              style={{
                display: "inline-block",
                fontFamily: "'Jost', sans-serif",
                fontSize: "11px",
                fontWeight: 500,
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#2C2C2C",
                textDecoration: "none",
                border: "1px solid rgba(44,44,44,0.3)",
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
              Ask a Question
            </a>
          </div>

          {/* Right — Accordions */}
          <div>
            {faqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  borderBottom: "1px solid rgba(212,180,131,0.25)",
                }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between py-6 text-left"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    gap: "16px",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "18px",
                      fontWeight: openIndex === i ? 500 : 400,
                      color: openIndex === i ? "#2C2C2C" : "#2C2C2C",
                      lineHeight: 1.4,
                      textAlign: "left",
                      flex: 1,
                    }}
                  >
                    {faq.question}
                  </span>
                  <div
                    style={{
                      width: "32px",
                      height: "32px",
                      border: `1px solid ${openIndex === i ? "#D4B483" : "rgba(44,44,44,0.2)"}`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      backgroundColor: openIndex === i ? "#D4B483" : "transparent",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {openIndex === i ? (
                      <Minus size={14} color="#2C2C2C" />
                    ) : (
                      <Plus size={14} color="#2C2C2C" />
                    )}
                  </div>
                </button>

                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: "hidden" }}
                    >
                      <p
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "14px",
                          fontWeight: 300,
                          color: "#8A7A6E",
                          lineHeight: 1.9,
                          paddingBottom: "24px",
                          maxWidth: "680px",
                        }}
                      >
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
