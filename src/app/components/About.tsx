import { useEffect, useRef, useState } from "react";
import { useInView } from "motion/react";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { BlobGlow } from "./BlobGlow";

const stats = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 2, suffix: "", label: "Locations" },
  { value: 1000, suffix: "+", label: "Happy Customers" },
  { value: 100, suffix: "%", label: "Satisfaction Rate" },
];

function CountUp({ target, suffix, duration = 1800 }: { target: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const step = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section
      id="about"
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <BlobGlow className="bottom-0 left-0" size={600} opacity={0.055} animate />

      {/* Section divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left: Story */}
          <div>
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
                Our Story
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.05}>
              <h2
                style={{
                  fontFamily: "Newsreader, Georgia, serif",
                  fontSize: "clamp(36px, 4vw, 58px)",
                  fontWeight: 500,
                  color: "#EBEBEB",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                  marginBottom: "28px",
                }}
              >
                Trusted Since{" "}
                <em style={{ color: "#10B981", fontStyle: "italic" }}>2009</em>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  color: "rgba(235,235,235,0.45)",
                  lineHeight: 1.85,
                  marginBottom: "20px",
                }}
              >
                For over 15 years, Nizami Group has been the trusted name for
                curtains, foam, and sofa covers across Gujrat and Kharian.
                We've built our reputation on quality materials, honest pricing,
                and service that goes the extra mile.
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 300,
                  fontSize: "16px",
                  color: "rgba(235,235,235,0.38)",
                  lineHeight: 1.85,
                }}
              >
                Registered as{" "}
                <span style={{ color: "rgba(235,235,235,0.65)" }}>
                  Nizami Parda
                </span>{" "}
                and{" "}
                <span style={{ color: "rgba(235,235,235,0.65)" }}>
                  Foam Center
                </span>
                , we source directly from reputable suppliers to ensure every
                product meets our high standards — and yours.
              </p>

              {/* Urdu text */}
              <p className="urdu" style={{ marginBottom: "20px" }}>
                ۱۵ سال سے زیادہ عرصے سے گجرات اور کھاریاں میں خدمت انجام دے رہے ہیں۔ 
                معیاری مواد، قابل اعتماد سپلائرز، اور گاہک کی مکمل اطمینان ہماری پہچان ہے۔
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="mt-10 flex items-center gap-4">
                <a
                  href="https://wa.me/923334331036"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(16,185,129,0.1)",
                    border: "1px solid rgba(16,185,129,0.3)",
                    color: "#10B981",
                    fontFamily: "Space Grotesk, sans-serif",
                    fontSize: "11px",
                    fontWeight: 600,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.18)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.5)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.1)";
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.3)";
                  }}
                >
                  Reach Out
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right: Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.08 + i * 0.07}>
                <SpotlightCard className="h-full">
                  <div className="p-7 flex flex-col gap-2">
                    <p
                      style={{
                        fontFamily: "Newsreader, Georgia, serif",
                        fontSize: "clamp(36px, 4vw, 52px)",
                        fontWeight: 500,
                        color: "#EBEBEB",
                        lineHeight: 1,
                        letterSpacing: "-0.03em",
                      }}
                    >
                      <CountUp target={stat.value} suffix={stat.suffix} />
                    </p>
                    <p
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        textTransform: "uppercase",
                        color: "rgba(235,235,235,0.35)",
                        marginTop: "4px",
                      }}
                    >
                      {stat.label}
                    </p>
                    <div
                      className="mt-3 h-px"
                      style={{
                        background: "linear-gradient(to right, rgba(16,185,129,0.25), transparent)",
                      }}
                    />
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
