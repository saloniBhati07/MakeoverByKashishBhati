import "../styles/fonts.css";
import { Routes, Route } from "react-router";
import { AdminApp } from "../admin/AdminApp";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { StatsSection } from "./components/StatsSection";
import { PortfolioSection } from "./components/PortfolioSection";
import { ServicesSection } from "./components/ServicesSection";
import { AboutSection } from "./components/AboutSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ProcessSection } from "./components/ProcessSection";
import { InstagramSection } from "./components/InstagramSection";
import { FAQSection } from "./components/FAQSection";
import { BookingSection } from "./components/BookingSection";
import { Footer } from "./components/Footer";

function PublicSite() {
  return (
    <div
      style={{
        fontFamily: "'Jost', sans-serif",
        backgroundColor: "#F8F5F2",
        color: "#2C2C2C",
        scrollBehavior: "smooth",
        overflowX: "hidden",
      }}
    >
      <style>{`
        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { margin: 0; padding: 0; }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #F8F5F2; }
        ::-webkit-scrollbar-thumb { background: #D4B483; border-radius: 2px; }
        input::placeholder, textarea::placeholder {
          color: rgba(44,44,44,0.35);
          font-family: 'Jost', sans-serif;
          font-weight: 300;
        }
        select option { background: #F8F5F2; color: #2C2C2C; }
        input[type="date"]::-webkit-calendar-picker-indicator {
          opacity: 0.4;
          cursor: pointer;
        }
        .group:hover .group-hover\\:scale-110 { transform: scale(1.1); }
        .group:hover .group-hover\\:!opacity-100 { opacity: 1 !important; }
        .lg\\:!block { display: none; }
        @media (min-width: 1024px) { .lg\\:!block { display: block !important; } }
      `}</style>

      <Navbar />
      <HeroSection />
      <StatsSection />
      <PortfolioSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <ProcessSection />
      <InstagramSection />
      <FAQSection />
      <BookingSection />
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      {/* Admin panel — all /admin/* routes */}
      <Route path="/admin/*" element={<AdminApp />} />
      {/* Public site — everything else */}
      <Route path="/*" element={<PublicSite />} />
    </Routes>
  );
}
