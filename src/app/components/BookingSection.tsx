import { useState } from "react";
import { motion } from "motion/react";
import { MessageCircle, Calendar, Sparkles, Send } from "lucide-react";

const services = [
  "Bridal Makeup",
  "Engagement Makeup",
  "Bridal Party Package",
  "Party & Event Glam",
  "Editorial / Photoshoot",
  "Other",
];

export function BookingSection() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    eventDate: "",
    service: "",
    location: "",
    partnerName: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    fontFamily: "'Jost', sans-serif",
    fontSize: "14px",
    fontWeight: 300,
    color: "#2C2C2C",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1px solid rgba(44,44,44,0.2)",
    padding: "12px 0",
    outline: "none",
    transition: "border-color 0.3s ease",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "'Jost', sans-serif",
    fontSize: "10px",
    fontWeight: 500,
    letterSpacing: "0.2em",
    textTransform: "uppercase",
    color: "#8A7A6E",
    display: "block",
    marginBottom: "4px",
  };

  return (
    <section
      id="booking"
      style={{ backgroundColor: "#F8F5F2", padding: "120px 0" }}
    >
      <div className="max-w-[1440px] mx-auto px-8 md:px-16">
        <div className="grid lg:grid-cols-[400px,1fr] gap-16 lg:gap-24">
          {/* Left — Info panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
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
                Book Now
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
              Reserve Your
              <br />
              <em style={{ fontStyle: "italic" }}>Date</em>
            </h2>

            <p
              style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "14px",
                fontWeight: 300,
                color: "#8A7A6E",
                lineHeight: 1.9,
                marginBottom: "48px",
              }}
            >
              Bridal dates fill quickly — especially for peak wedding season. Complete the form to
              begin your bespoke beauty journey. I respond to all enquiries within 24 hours.
            </p>

            {/* Contact details */}
            <div className="flex flex-col gap-6 mb-10">
              {[
                { label: "Email", value: "hello@sophiabellebeauty.com", icon: Send },
                { label: "Studio", value: "Mayfair, London W1K", icon: Calendar },
                { label: "Availability", value: "Mon–Sat, 9am–7pm GMT", icon: Sparkles },
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <div key={i} className="flex items-start gap-4">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        border: "1px solid rgba(212,180,131,0.4)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={14} color="#D4B483" />
                    </div>
                    <div>
                      <p
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "10px",
                          fontWeight: 500,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#8A7A6E",
                          marginBottom: "2px",
                        }}
                      >
                        {item.label}
                      </p>
                      <p
                        style={{
                          fontFamily: "'Jost', sans-serif",
                          fontSize: "14px",
                          fontWeight: 300,
                          color: "#2C2C2C",
                        }}
                      >
                        {item.value}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/447700000000?text=Hi%20Sophia%2C%20I'd%20love%20to%20enquire%20about%20a%20bridal%20booking"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Jost', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "#FFFFFF",
                textDecoration: "none",
                backgroundColor: "#25D366",
                padding: "14px 28px",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget).style.opacity = "0.85";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget).style.opacity = "1";
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>

            {/* Artist image */}
            <div className="mt-16 relative overflow-hidden" style={{ maxWidth: "320px" }}>
              <img
                src="https://images.unsplash.com/photo-1622336889416-8d790ad807d7?w=600&h=400&fit=crop&auto=format&q=85"
                alt="Sophia at work"
                style={{ width: "100%", display: "block", objectFit: "cover" }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "50%",
                  background: "linear-gradient(to top, rgba(44,44,44,0.6), transparent)",
                  display: "flex",
                  alignItems: "flex-end",
                  padding: "16px",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                    fontSize: "13px",
                    color: "#F8F5F2",
                  }}
                >
                  In the studio
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "64px 56px",
                  textAlign: "center",
                  boxShadow: "0 8px 60px rgba(44,44,44,0.07)",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "16px",
                }}
              >
                <div
                  style={{
                    width: "64px",
                    height: "64px",
                    backgroundColor: "#D4B483",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "8px",
                  }}
                >
                  <Sparkles size={24} color="#FFFFFF" />
                </div>
                <h3
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontSize: "32px",
                    fontWeight: 400,
                    fontStyle: "italic",
                    color: "#2C2C2C",
                  }}
                >
                  Thank you, {form.name || "Beautiful"}
                </h3>
                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "14px",
                    fontWeight: 300,
                    color: "#8A7A6E",
                    lineHeight: 1.8,
                    maxWidth: "400px",
                  }}
                >
                  Your enquiry has been received. I'll be in touch within 24 hours to discuss your
                  vision and begin creating your bespoke beauty experience.
                </p>
              </motion.div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  backgroundColor: "#FFFFFF",
                  padding: "56px",
                  boxShadow: "0 8px 60px rgba(44,44,44,0.07)",
                }}
              >
                <div className="grid sm:grid-cols-2 gap-8 mb-8">
                  {/* Name */}
                  <div>
                    <label style={labelStyle} htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Amara Johnson"
                      style={inputStyle}
                      onFocus={(e) => {
                        (e.target).style.borderBottomColor = "#D4B483";
                      }}
                      onBlur={(e) => {
                        (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)";
                      }}
                    />
                  </div>

                  {/* Partner Name */}
                  <div>
                    <label style={labelStyle} htmlFor="partnerName">Partner's Name</label>
                    <input
                      id="partnerName"
                      name="partnerName"
                      type="text"
                      value={form.partnerName}
                      onChange={handleChange}
                      placeholder="James Johnson"
                      style={inputStyle}
                      onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                      onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label style={labelStyle} htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="hello@youremail.com"
                      style={inputStyle}
                      onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                      onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label style={labelStyle} htmlFor="phone">Phone Number</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+44 7700 000000"
                      style={inputStyle}
                      onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                      onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                    />
                  </div>

                  {/* Event Date */}
                  <div>
                    <label style={labelStyle} htmlFor="eventDate">Wedding / Event Date</label>
                    <input
                      id="eventDate"
                      name="eventDate"
                      type="date"
                      value={form.eventDate}
                      onChange={handleChange}
                      style={inputStyle}
                      onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                      onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label style={labelStyle} htmlFor="service">Service Required</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      style={{ ...inputStyle, cursor: "pointer" }}
                      onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                      onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Location */}
                <div className="mb-8">
                  <label style={labelStyle} htmlFor="location">Venue / Location</label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    value={form.location}
                    onChange={handleChange}
                    placeholder="The Savoy, London / Paris, France"
                    style={inputStyle}
                    onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                    onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                  />
                </div>

                {/* Message */}
                <div className="mb-10">
                  <label style={labelStyle} htmlFor="message">Your Vision & Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your wedding vision, inspiration, and any details I should know..."
                    style={{
                      ...inputStyle,
                      resize: "none",
                      borderBottom: "1px solid rgba(44,44,44,0.2)",
                    }}
                    onFocus={(e) => { (e.target).style.borderBottomColor = "#D4B483"; }}
                    onBlur={(e) => { (e.target).style.borderBottomColor = "rgba(44,44,44,0.2)"; }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  style={{
                    width: "100%",
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "12px",
                    fontWeight: 500,
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "#F8F5F2",
                    backgroundColor: "#2C2C2C",
                    border: "1px solid #2C2C2C",
                    padding: "18px",
                    cursor: "pointer",
                    transition: "all 0.35s ease",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget).style.backgroundColor = "#D4B483";
                    (e.currentTarget).style.borderColor = "#D4B483";
                    (e.currentTarget).style.color = "#2C2C2C";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget).style.backgroundColor = "#2C2C2C";
                    (e.currentTarget).style.borderColor = "#2C2C2C";
                    (e.currentTarget).style.color = "#F8F5F2";
                  }}
                >
                  Send Enquiry
                </button>

                <p
                  style={{
                    fontFamily: "'Jost', sans-serif",
                    fontSize: "11px",
                    fontWeight: 300,
                    color: "#8A7A6E",
                    textAlign: "center",
                    marginTop: "16px",
                    lineHeight: 1.6,
                  }}
                >
                  I respond to all enquiries within 24 hours. Dates are only confirmed upon receipt of a booking retainer.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
