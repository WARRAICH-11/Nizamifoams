import { useRef, useEffect } from "react";
import { motion, useInView } from "motion/react";
import { MessageCircle, Facebook, ArrowUpRight } from "lucide-react";
import { BlobGlow } from "./BlobGlow";

export function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-40 overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      {/* Strong blob glows for this CTA section */}
      <BlobGlow className="-top-20 left-1/4" size={600} opacity={0.09} animate />
      <BlobGlow className="-bottom-20 right-1/4" size={500} opacity={0.07} animate />

      {/* Top divider */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(16,185,129,0.15), transparent)" }}
      />

      <div className="max-w-4xl mx-auto px-6 text-center">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <span
            style={{
              fontFamily: "Satoshi, Inter, sans-serif",
              letterSpacing: "0.12em",
              fontSize: "11px",
              textTransform: "uppercase",
              color: "#838282",
              display: "block",
              marginBottom: "28px",
            }}
          >
            Get In Touch
          </span>
        </motion.div>

        {/* Animated headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="gradient-text-anim"
            style={{
              fontFamily: "Clash Display, Satoshi, sans-serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 700,
              letterSpacing: "-0.05em",
              lineHeight: 0.9,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #111111 0%, #838282 55%, #111111 100%)",
              backgroundSize: "200% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "gradient-shift 4s linear infinite",
            }}
          >
            Get a Quote — No Pressure, No Orders.
          </h2>
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "Satoshi, Inter, sans-serif",
            fontWeight: 500,
            fontSize: "17px",
            color: "rgba(17,17,17,0.65)",
            lineHeight: 1.75,
            marginBottom: "48px",
          }}
        >
          Reach out for pricing, consultation, or home delivery info.
          <br />
          We'll get back to you promptly — no commitment required.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* WhatsApp CTA */}
          <a
            href="https://wa.me/923334331036"
            target="_blank"
            rel="noopener noreferrer"
            className="nizami-pill flex items-center gap-3 px-8 py-4 w-full sm:w-auto justify-center transition-all duration-300"
            style={{
              background: "#111111",
              color: "#f2f2f2",
              fontFamily: "Satoshi, Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 0 22px rgba(17,17,17,0.1)",
              animation: "whatsapp-pulse 2.5s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <MessageCircle size={16} />
            WhatsApp: 0333-4331036
          </a>

          {/* Facebook CTA */}
          <a
            href="https://www.facebook.com/p/Nizami-Parda-Foam-Centre-61579372240519/"
            target="_blank"
            rel="noopener noreferrer"
            className="nizami-pill flex items-center gap-3 px-8 py-4 w-full sm:w-auto justify-center transition-all duration-300"
            style={{
              background: "transparent",
              color: "#111111",
              fontFamily: "Satoshi, Inter, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(17,17,17,0.18)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.4)";
              (e.currentTarget as HTMLElement).style.background = "#111111";
              (e.currentTarget as HTMLElement).style.color = "#f2f2f2";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(17,17,17,0.18)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
              (e.currentTarget as HTMLElement).style.color = "#111111";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <Facebook size={16} />
            Message on Facebook
            <ArrowUpRight size={13} style={{ opacity: 0.6 }} />
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.45 }}
          style={{
            fontFamily: "Satoshi, Inter, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(17,17,17,0.5)",
            marginTop: "32px",
          }}
        >
          No spam · No pressure · Trusted since 2009
        </motion.p>
      </div>
    </section>
  );
}
