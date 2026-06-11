import { MapPin, MessageCircle, Navigation } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { BlobGlow } from "./BlobGlow";

const locations = [
  {
    city: "Gujrat",
    address: "Railway Road, Gujrat, Punjab, Pakistan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3362.45048093321!2d74.0686792754508!3d32.567508173751825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f1b83c699ac6f%3A0x82241d58021ed37d!2sNizami%20Parda%20%26%20Foam%20Center!5e0!3m2!1sen!2s!4v1781136818975!5m2!1sen!2s",
    label: "Main Branch",
  },
  {
    city: "Kharian",
    address: "Gullyana Road, Kharian, Punjab, Pakistan",
    mapSrc:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3353.3198281050736!2d73.86677457546138!3d32.81028977364979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391fa1003bbfde63%3A0x6ee1792393369ff2!2sNizami%20Parda%20%26%20Foam%20Center!5e0!3m2!1sen!2s!4v1781136919114!5m2!1sen!2s",
    label: "Branch",
  },
];

export function Locations() {
  return (
    <section
      id="locations"
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <BlobGlow className="top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" size={700} opacity={0.05} animate />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.2em",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "#10B981",
                display: "block",
                marginBottom: "20px",
              }}
            >
              Find Us
            </span>
            <h2
              style={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: "clamp(32px, 4vw, 54px)",
                fontWeight: 500,
                color: "#EBEBEB",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
                marginBottom: "16px",
              }}
            >
              Our{" "}
              <em style={{ color: "#10B981", fontStyle: "italic" }}>Locations</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "15px",
                color: "rgba(235,235,235,0.35)",
                lineHeight: 1.7,
              }}
            >
              Visit us in Gujrat or Kharian — or call for home delivery across Punjab.
            </p>
          </ScrollReveal>
        </div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.city} delay={i * 0.12} direction={i === 0 ? "left" : "right"}>
              <SpotlightCard className="overflow-hidden h-full">
                <div className="flex flex-col h-full">
                  {/* Map */}
                  <div className="relative h-52 overflow-hidden">
                    <iframe
                      src={loc.mapSrc}
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.85)" }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`${loc.city} map`}
                      className="absolute inset-0"
                    />
                    {/* Map overlay gradient */}
                    <div
                      className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none"
                      style={{
                        background: "linear-gradient(to bottom, transparent, rgba(5,5,5,0.8))",
                      }}
                    />
                    {/* Label */}
                    <div className="absolute top-4 left-4">
                      <span
                        className="px-3 py-1.5 rounded-full"
                        style={{
                          background: "rgba(5,5,5,0.85)",
                          border: "1px solid rgba(16,185,129,0.3)",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "9px",
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: "#10B981",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        {loc.label}
                      </span>
                    </div>
                  </div>

                  {/* Card info */}
                  <div className="p-7 flex flex-col gap-5 flex-1">
                    <div className="flex items-start gap-4">
                      <div
                        className="w-10 h-10 rounded-2xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{
                          background: "rgba(16,185,129,0.08)",
                          border: "1px solid rgba(16,185,129,0.15)",
                        }}
                      >
                        <MapPin size={16} style={{ color: "#10B981" }} />
                      </div>
                      <div>
                        <h3
                          style={{
                            fontFamily: "Newsreader, Georgia, serif",
                            fontSize: "22px",
                            fontWeight: 500,
                            color: "#EBEBEB",
                            marginBottom: "6px",
                          }}
                        >
                          {loc.city} Shop
                        </h3>
                        <p
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 300,
                            fontSize: "14px",
                            color: "rgba(235,235,235,0.45)",
                            lineHeight: 1.6,
                            marginBottom: "6px",
                          }}
                        >
                          {loc.address}
                        </p>
                        {loc.city === "Gujrat" && (
                          <p className="urdu-label">ریلوے روڈ، گجرات، پنجاب</p>
                        )}
                        {loc.city === "Kharian" && (
                          <p className="urdu-label">گلیانہ روڈ، کھاریاں، پنجاب</p>
                        )}
                      </div>
                    </div>

                    {/* Divider */}
                    <div
                      className="h-px"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    />

                    {/* Actions */}
                    <div className="flex gap-3">
                      <a
                        href="https://wa.me/923334331036"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 py-3 rounded-full transition-all duration-300"
                        style={{
                          background: "#10B981",
                          color: "#050505",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "10px",
                          fontWeight: 700,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          boxShadow: "0 0 20px rgba(16,185,129,0.2)",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 35px rgba(16,185,129,0.4)";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(16,185,129,0.2)";
                        }}
                      >
                        <MessageCircle size={13} />
                        WhatsApp
                      </a>
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(loc.address)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-5 py-3 rounded-full transition-all duration-300"
                        style={{
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.1)",
                          color: "rgba(235,235,235,0.6)",
                          fontFamily: "Space Grotesk, sans-serif",
                          fontSize: "10px",
                          fontWeight: 600,
                          letterSpacing: "0.1em",
                        }}
                        onMouseEnter={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.2)";
                          (e.currentTarget as HTMLElement).style.color = "#EBEBEB";
                        }}
                        onMouseLeave={(e) => {
                          (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)";
                          (e.currentTarget as HTMLElement).style.color = "rgba(235,235,235,0.6)";
                        }}
                      >
                        <Navigation size={13} />
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              </SpotlightCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
