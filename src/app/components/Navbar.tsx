import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import logoNizami from "../../imports/logoNIZAMI.jpeg";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Locations", id: "locations" },
  { label: "Contact", id: "contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
        style={{
          background: scrolled ? "rgba(5,5,5,0.85)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
          transition: "all 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => scrollTo("home")} className="flex items-center gap-3">
            <img
              src={logoNizami}
              alt="Nizami Group"
              className="h-9 w-auto object-contain rounded-lg"
              style={{ filter: "brightness(1.1) contrast(1.05)" }}
            />
            <span
              style={{
                fontFamily: "Newsreader, Georgia, serif",
                fontStyle: "italic",
                fontSize: "20px",
                color: "#EBEBEB",
                letterSpacing: "0.02em",
              }}
            >
              Nizami Group
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "0.2em",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  color: "rgba(235,235,235,0.55)",
                  transition: "color 0.2s",
                }}
                className="hover:text-[#EBEBEB]"
                onMouseEnter={(e) => (e.currentTarget.style.color = "#EBEBEB")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(235,235,235,0.55)")}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <div className="hidden md:flex">
            <a
              href="https://wa.me/923334331036"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-full transition-all duration-300"
              style={{
                background: "#10B981",
                color: "#050505",
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.12em",
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                boxShadow: "0 0 24px rgba(16,185,129,0.35)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(16,185,129,0.55)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 24px rgba(16,185,129,0.35)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <MessageCircle size={13} />
              0333-4331036
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-xl"
            style={{ color: "#EBEBEB", background: "rgba(255,255,255,0.05)" }}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.97 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="md:hidden mt-3 mx-0 p-6 rounded-3xl"
              style={{
                background: "rgba(5,5,5,0.95)",
                backdropFilter: "blur(20px)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className="w-full text-left py-3 px-4 rounded-2xl transition-all duration-200"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      letterSpacing: "0.18em",
                      fontSize: "11px",
                      textTransform: "uppercase",
                      color: "rgba(235,235,235,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#EBEBEB";
                      (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(235,235,235,0.6)";
                      (e.currentTarget as HTMLElement).style.background = "transparent";
                    }}
                  >
                    {link.label}
                  </button>
                ))}
                <div className="mt-4 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                  <a
                    href="https://wa.me/923334331036"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-6 rounded-full w-full"
                    style={{
                      background: "#10B981",
                      color: "#050505",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontSize: "11px",
                      fontWeight: 600,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                    }}
                  >
                    <MessageCircle size={13} />
                    WhatsApp: 0333-4331036
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Sticky WhatsApp button for mobile */}
      <div className="fixed bottom-6 right-6 z-50 md:hidden">
        <a
          href="https://wa.me/923334331036"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-3 rounded-full"
          style={{
            background: "#10B981",
            color: "#050505",
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "12px",
            fontWeight: 700,
            boxShadow: "0 0 30px rgba(16,185,129,0.5), 0 4px 20px rgba(0,0,0,0.4)",
          }}
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>
      </div>
    </>
  );
}
