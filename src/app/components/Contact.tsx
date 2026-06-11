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
      style={{ background: "#050505" }}
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
              fontFamily: "Space Grotesk, sans-serif",
              letterSpacing: "0.2em",
              fontSize: "10px",
              textTransform: "uppercase",
              color: "#10B981",
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
              fontFamily: "Newsreader, Georgia, serif",
              fontSize: "clamp(36px, 5vw, 72px)",
              fontWeight: 500,
              letterSpacing: "-0.02em",
              lineHeight: 1.08,
              marginBottom: "24px",
              background: "linear-gradient(135deg, #EBEBEB 0%, #10B981 50%, #EBEBEB 100%)",
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
            fontFamily: "Inter, sans-serif",
            fontWeight: 300,
            fontSize: "17px",
            color: "rgba(235,235,235,0.4)",
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
            className="flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: "#10B981",
              color: "#050505",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "12px",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              boxShadow: "0 0 40px rgba(16,185,129,0.35), 0 0 80px rgba(16,185,129,0.1)",
              animation: "whatsapp-pulse 2.5s ease-in-out infinite",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(16,185,129,0.55), 0 0 120px rgba(16,185,129,0.15)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(16,185,129,0.35), 0 0 80px rgba(16,185,129,0.1)";
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
            className="flex items-center gap-3 px-8 py-4 rounded-full transition-all duration-300 w-full sm:w-auto justify-center"
            style={{
              background: "transparent",
              color: "#EBEBEB",
              fontFamily: "Space Grotesk, sans-serif",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              border: "1px solid rgba(235,235,235,0.18)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(235,235,235,0.35)";
              (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(235,235,235,0.18)";
              (e.currentTarget as HTMLElement).style.background = "transparent";
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
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "10px",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "rgba(235,235,235,0.2)",
            marginTop: "32px",
          }}
        >
          No spam · No pressure · Trusted since 2009
        </motion.p>
      </div>
    </section>
  );
}
