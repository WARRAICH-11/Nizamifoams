import { Award, Gem, Truck, Wrench } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";

const reasons = [
  {
    icon: Award,
    title: "15 Years of Experience",
    description: "Over a decade and a half serving Punjab's homes with expertise.",
  },
  {
    icon: Gem,
    title: "Premium Quality Materials",
    description: "Sourced from reputable suppliers — quality you can see and feel.",
  },
  {
    icon: Truck,
    title: "Home Delivery Available",
    description: "We deliver across Gujrat, Kharian, and surrounding districts.",
  },
  {
    icon: Wrench,
    title: "Professional Fitting Service",
    description: "Our team installs every curtain and fitting with precision.",
  },
];

export function WhyUs() {
  return (
    <section
      className="relative py-24 overflow-hidden"
      style={{ background: "#050505" }}
    >
      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <ScrollReveal>
          <span
            style={{
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "0.2em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#10B981",
              display: "block",
              marginBottom: "48px",
              textAlign: "center",
            }}
          >
            Why Choose Nizami Group
          </span>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <ScrollReveal key={reason.title} delay={i * 0.07}>
                <div
                  className="group flex flex-col gap-4 p-6 rounded-3xl transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(16,185,129,0.2)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(16,185,129,0.03)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                    style={{
                      background: "rgba(16,185,129,0.07)",
                      border: "1px solid rgba(16,185,129,0.12)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#10B981" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Newsreader, Georgia, serif",
                        fontSize: "17px",
                        fontWeight: 500,
                        color: "#EBEBEB",
                        lineHeight: 1.3,
                        marginBottom: "8px",
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                        fontSize: "13px",
                        color: "rgba(235,235,235,0.38)",
                        lineHeight: 1.7,
                      }}
                    >
                      {reason.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
