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
      style={{ background: "#f2f2f2" }}
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
              fontFamily: "Satoshi, Inter, sans-serif",
              letterSpacing: "0.12em",
              fontSize: "11px",
              textTransform: "uppercase",
              color: "#838282",
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
                    background: "rgba(255,255,255,0.4)",
                    border: "1px solid rgba(17,17,17,0.08)",
                    backdropFilter: "blur(12px)",
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.14)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.85)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.08)";
                    (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.4)";
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform duration-400 group-hover:scale-110"
                    style={{
                      background: "rgba(17,17,17,0.04)",
                      border: "1px solid rgba(17,17,17,0.08)",
                    }}
                  >
                    <Icon size={18} style={{ color: "#111111" }} />
                  </div>
                  <div>
                    <h3
                      style={{
                        fontFamily: "Clash Display, Satoshi, sans-serif",
                        fontSize: "17px",
                        fontWeight: 700,
                        color: "#111111",
                        lineHeight: 1.1,
                        marginBottom: "8px",
                      }}
                    >
                      {reason.title}
                    </h3>
                    <p
                      style={{
                        fontFamily: "Satoshi, Inter, sans-serif",
                        fontWeight: 500,
                        fontSize: "13px",
                        color: "rgba(17,17,17,0.62)",
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
