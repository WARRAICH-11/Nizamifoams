import { Instagram, Facebook } from "lucide-react";
import logoNizami from "../../imports/logoNIZAMI.jpeg";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Services", id: "services" },
  { label: "About", id: "about" },
  { label: "Locations", id: "locations" },
  { label: "Contact", id: "contact" },
];

export function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer
      className="relative"
      style={{ background: "#050505" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      {/* Glass panel */}
      <div
        className="mx-4 md:mx-8 lg:mx-16 rounded-3xl mb-6"
        style={{
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 py-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {/* Left: Brand */}
            <div className="flex flex-col gap-5">
              <div className="flex items-center gap-3">
                <img
                  src={logoNizami}
                  alt="Nizami Group"
                  className="h-8 w-auto object-contain rounded-lg"
                  style={{ filter: "brightness(1.05)" }}
                />
                <div className="flex flex-col gap-1">
                  <span
                    style={{
                      fontFamily: "Newsreader, Georgia, serif",
                      fontStyle: "italic",
                      fontSize: "18px",
                      color: "#EBEBEB",
                    }}
                  >
                    Nizami Group
                  </span>
                  <span className="urdu" style={{ fontSize: "0.9em", display: "block", margin: 0 }}>
                    نظامی پردہ اینڈ فوم سینٹر
                  </span>
                </div>
              </div>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "13px",
                  color: "rgba(235,235,235,0.35)",
                  lineHeight: 1.75,
                  maxWidth: "240px",
                }}
              >
                Nizami Parda and Foam Center — Gujrat &amp; Kharian, Punjab.
                <br />
                Serving homes since 2009.
              </p>
              <div className="flex items-center gap-2">
                <span
                  className="relative flex h-2 w-2"
                >
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#10B981" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10B981" }} />
                </span>
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    color: "rgba(16,185,129,0.7)",
                  }}
                >
                  Open for inquiries
                </span>
              </div>
            </div>

            {/* Center: Nav */}
            <div className="flex flex-col gap-4">
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "0.18em",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  color: "rgba(235,235,235,0.3)",
                  marginBottom: "4px",
                }}
              >
                Navigation
              </span>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className="text-left transition-colors duration-200"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 300,
                    fontSize: "13px",
                    color: "rgba(235,235,235,0.42)",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#EBEBEB")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(235,235,235,0.42)")}
                >
                  {link.label}
                </button>
              ))}
            </div>

            {/* Right: Socials + Contact */}
            <div className="flex flex-col gap-5">
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "0.18em",
                  fontSize: "9px",
                  textTransform: "uppercase",
                  color: "rgba(235,235,235,0.3)",
                }}
              >
                Connect With Us
              </span>

              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/nizamiparda/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(235,235,235,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#10B981";
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(235,235,235,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Instagram size={16} />
                </a>
                <a
                  href="https://www.facebook.com/p/Nizami-Parda-Foam-Centre-61579372240519/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-2xl flex items-center justify-center transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    color: "rgba(235,235,235,0.5)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.3)";
                    (e.currentTarget as HTMLElement).style.color = "#10B981";
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                    (e.currentTarget as HTMLElement).style.color = "rgba(235,235,235,0.5)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
                  }}
                >
                  <Facebook size={16} />
                </a>
              </div>

              <div
                className="rounded-2xl p-4"
                style={{
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <p
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: "rgba(235,235,235,0.25)",
                    marginBottom: "6px",
                  }}
                >
                  WhatsApp
                </p>
                <a
                  href="https://wa.me/923334331036"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "Newsreader, Georgia, serif",
                    fontSize: "18px",
                    color: "#EBEBEB",
                    fontWeight: 500,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#10B981")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#EBEBEB")}
                >
                  0333-4331036
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="px-8 py-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(235,235,235,0.2)",
              }}
            >
              © 2025 Nizami Group. All rights reserved.
            </p>
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "9px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(235,235,235,0.15)",
              }}
            >
              Gujrat · Kharian · Punjab, Pakistan
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
