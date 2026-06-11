import { Instagram as InstagramIcon } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { useEffect } from "react";

const placeholders = [
  { aspect: "square", label: "Curtain fitting — Gujrat" },
  { aspect: "portrait", label: "Premium foam showcase" },
  { aspect: "square", label: "Sofa cover installation" },
  { aspect: "landscape", label: "Full room curtain fitting" },
  { aspect: "square", label: "Fabric samples & swatches" },
  { aspect: "portrait", label: "Customer home — before & after" },
];

export function Instagram() {
  // Load Behold widget script
  useEffect(() => {
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);
    }
  }, []);

  // Hide fallback when Behold loads
  useEffect(() => {
    const beholdDiv = document.querySelector('[data-behold-id]');
    const fallback = document.getElementById('igFallback');
    if (beholdDiv && beholdDiv.getAttribute('data-behold-id') !== 'YOUR_BEHOLD_FEED_ID') {
      if (fallback) fallback.style.display = 'none';
    }
  }, []);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-16 text-center">
          <ScrollReveal>
            <div className="flex items-center justify-center gap-2 mb-5">
              <InstagramIcon size={12} style={{ color: "#10B981" }} />
              <span
                style={{
                  fontFamily: "Space Grotesk, sans-serif",
                  letterSpacing: "0.2em",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  color: "rgba(235,235,235,0.4)",
                }}
              >
                Daily Updates · @NizamiParda
              </span>
            </div>
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
              Follow Our{" "}
              <em style={{ color: "#10B981", fontStyle: "italic" }}>Work</em>
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
              See our latest curtain fittings, foam products, and interior projects.
            </p>
          </ScrollReveal>
        </div>

        {/* Feed grid */}
        <div className="instagram-widget-wrapper" style={{ width: "100%", padding: "0" }}>
          <div 
            data-behold-id="ExOiz4KWCGHqrhpAWbeX"
            style={{ "--behold-background": "transparent", "--behold-border-radius": "16px" } as any}
          />

          {/* Fallback grid */}
          <div className="ig-fallback-grid" id="igFallback" 
               style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "12px" }}>
            {[...Array(6)].map((_, i) => (
              <div key={i} className="ig-placeholder-card" style={{
                aspectRatio: "1",
                background: "rgba(255,255,255,0.03)", 
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" 
                     stroke="#10B981" strokeWidth="1.5" opacity="0.4">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1"/>
                </svg>
              </div>
            ))}
          </div>
        </div>

        {/* Developer note */}
        <ScrollReveal>
          <div
            className="mx-auto max-w-xl rounded-3xl p-5 mb-10 text-center"
            style={{
              background: "rgba(16,185,129,0.04)",
              border: "1px dashed rgba(16,185,129,0.2)",
            }}
          >
            <p
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "10px",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "rgba(16,185,129,0.5)",
                lineHeight: 1.8,
              }}
            >
              NIZAMI's Instagram feed
            </p>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal>
          <div className="text-center">
            <a
              href="https://www.instagram.com/nizamiparda/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#EBEBEB",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.3)";
                (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.06)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
            >
              <InstagramIcon size={14} style={{ color: "#10B981" }} />
              Follow on Instagram →
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}