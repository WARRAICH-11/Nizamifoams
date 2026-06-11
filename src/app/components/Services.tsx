import { Scissors, Layers, Sofa, Truck, Home, MessageSquare } from "lucide-react";
import { ScrollReveal } from "./ScrollReveal";
import { SpotlightCard } from "./SpotlightCard";
import { BlobGlow } from "./BlobGlow";

const services = [
  {
    icon: Scissors,
    title: "Curtain Supply & Fitting",
    description:
      "Premium curtain materials sourced from top suppliers, with expert fitting for every room size and window style.",
  },
  {
    icon: Layers,
    title: "Premium Foam Products",
    description:
      "High-density foam in all grades and sizes — for mattresses, sofas, cushions, and custom applications.",
  },
  {
    icon: Sofa,
    title: "Sofa Cover Solutions",
    description:
      "Custom-tailored sofa covers in a wide range of fabrics. Protective, stylish, and washable.",
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description:
      "We deliver directly to your doorstep across Gujrat, Kharian, and surrounding areas in Punjab.",
  },
  {
    icon: Home,
    title: "Full Room Fitting",
    description:
      "End-to-end service — we visit your home, measure, and professionally install curtains and fittings.",
  },
  {
    icon: MessageSquare,
    title: "Custom Quotes & Consultation",
    description:
      "Not sure what you need? Our team will guide you through options and provide a free, no-pressure quote.",
  },
];

export function Services() {
  return (
    <section
      id="services"
      className="relative py-32 overflow-hidden"
      style={{ background: "#050505" }}
    >
      <BlobGlow className="top-0 right-1/4" size={500} opacity={0.055} animate />

      {/* Divider line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24"
        style={{ background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.08), transparent)" }}
      />

      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <div className="mb-20 text-center">
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
              Our Offerings
            </span>
            <h2
              style={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: "clamp(36px, 4.5vw, 60px)",
                fontWeight: 500,
                color: "#EBEBEB",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              What We{" "}
              <em style={{ color: "#10B981", fontStyle: "italic" }}>Offer</em>
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 300,
                fontSize: "16px",
                color: "rgba(235,235,235,0.38)",
                maxWidth: "480px",
                margin: "20px auto 0",
                lineHeight: 1.7,
              }}
            >
              From fabric selection to final fitting — every step handled with
              care and craftsmanship.
            </p>
          </ScrollReveal>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 0.08}>
                <SpotlightCard className="h-full group">
                  <div className="p-7 flex flex-col gap-5 h-full">
                    {/* Icon */}
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6"
                      style={{
                        background: "rgba(16,185,129,0.08)",
                        border: "1px solid rgba(16,185,129,0.15)",
                      }}
                    >
                      <Icon size={20} style={{ color: "#10B981" }} />
                    </div>

                    {/* Title */}
                    <h3
                      style={{
                        fontFamily: "Newsreader, Georgia, serif",
                        fontSize: "20px",
                        fontWeight: 500,
                        color: "#EBEBEB",
                        lineHeight: 1.3,
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 300,
                        fontSize: "14px",
                        color: "rgba(235,235,235,0.38)",
                        lineHeight: 1.75,
                        flex: 1,
                      }}
                    >
                      {service.description}
                    </p>

                    {/* Bottom accent */}
                    <div
                      className="h-px"
                      style={{
                        background: "linear-gradient(to right, rgba(16,185,129,0.3), transparent)",
                      }}
                    />
                  </div>
                </SpotlightCard>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
