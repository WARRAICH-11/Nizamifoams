import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Layers, Scissors, Package } from "lucide-react";
import { BlobGlow } from "./BlobGlow";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const rightCardY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const rightCard2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: "#050505", paddingTop: "100px" }}
    >
      {/* Background blob glows */}
      <BlobGlow className="top-1/4 -left-40" size={600} opacity={0.07} animate />
      <BlobGlow className="bottom-1/4 right-0" size={500} opacity={0.05} animate />

      {/* Subtle grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start gap-8">
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center gap-3"
          >
            <span
              className="relative flex h-2 w-2"
            >
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping"
                style={{ background: "#10B981" }}
              />
              <span
                className="relative inline-flex rounded-full h-2 w-2"
                style={{ background: "#10B981" }}
              />
            </span>
            <span
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                letterSpacing: "0.2em",
                fontSize: "10px",
                textTransform: "uppercase",
                color: "rgba(235,235,235,0.5)",
              }}
            >
              Gujrat · Kharian · Est. 2009
            </span>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1
              style={{
                fontFamily: "Newsreader, Georgia, serif",
                fontSize: "clamp(48px, 6vw, 88px)",
                fontWeight: 500,
                lineHeight: 1.05,
                color: "#EBEBEB",
                letterSpacing: "-0.02em",
              }}
            >
              Premium{" "}
              <em
                style={{
                  color: "#10B981",
                  fontStyle: "italic",
                }}
              >
                Curtains
              </em>{" "}
              &amp; Foam —{" "}
              <br className="hidden md:block" />
              Delivered to Your Door.
            </h1>
          </motion.div>

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 300,
              fontSize: "17px",
              lineHeight: 1.75,
              color: "rgba(235,235,235,0.45)",
              maxWidth: "480px",
            }}
          >
            Supplying quality curtains, foam products, and sofa covers across
            Punjab — with home delivery and professional fitting.
          </motion.p>

          {/* Urdu headline */}
          <p className="urdu">معیاری پردے، فوم، اور صوفہ کورز — آپ کے گھر تک ڈیلیوری</p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="https://wa.me/923334331036"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-300"
              style={{
                background: "#EBEBEB",
                color: "#050505",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                boxShadow: "0 0 30px rgba(16,185,129,0.25)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(16,185,129,0.45)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(16,185,129,0.25)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              Get a Quote
            </a>
            <button
              onClick={() => scrollTo("services")}
              className="flex items-center gap-2 px-7 py-3.5 rounded-full transition-all duration-300"
              style={{
                background: "transparent",
                color: "#EBEBEB",
                fontFamily: "Space Grotesk, sans-serif",
                fontSize: "12px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "1px solid rgba(235,235,235,0.2)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(235,235,235,0.4)";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(235,235,235,0.2)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              Our Services
              <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>

        {/* Right Column — Layered glassmorphism mockup */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative hidden lg:flex items-center justify-center"
          style={{ height: "560px" }}
        >
          {/* Background glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(50% 50% at 50% 50%, rgba(16,185,129,0.06) 0%, transparent 100%)",
            }}
          />

          {/* Card 3 — back */}
          <motion.div
            style={{ y: rightCard2Y, zIndex: 1 }}
            className="absolute right-0 top-8 w-72 rounded-3xl p-5"
            initial={{ rotate: 6, opacity: 0.5 }}
            animate={{ rotate: 6, opacity: 0.5 }}
          >
            <div
              className="rounded-3xl p-5"
              style={{
                background: "rgba(255,255,255,0.015)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                transform: "rotate(6deg)",
              }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.1)" }}>
                  <Package size={16} style={{ color: "#10B981" }} />
                </div>
                <div>
                  <div className="h-2 w-24 rounded-full" style={{ background: "rgba(235,235,235,0.12)" }} />
                  <div className="h-1.5 w-16 rounded-full mt-1.5" style={{ background: "rgba(235,235,235,0.06)" }} />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 rounded-full" style={{ background: "rgba(235,235,235,0.08)", width: "80%" }} />
                <div className="h-2 rounded-full" style={{ background: "rgba(235,235,235,0.06)", width: "60%" }} />
              </div>
            </div>
          </motion.div>

          {/* Card 2 — middle */}
          <motion.div
            style={{ y: rightCardY }}
            className="absolute left-0 bottom-16 w-64 rounded-3xl"
          >
            <div
              className="rounded-3xl p-5"
              style={{
                background: "rgba(255,255,255,0.025)",
                border: "1px solid rgba(255,255,255,0.1)",
                backdropFilter: "blur(12px)",
                transform: "rotate(-4deg)",
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.12)" }}>
                  <Scissors size={14} style={{ color: "#10B981" }} />
                </div>
                <span style={{ fontFamily: "Newsreader, serif", fontSize: "13px", color: "rgba(235,235,235,0.7)" }}>
                  Curtain Fitting
                </span>
              </div>
              <div
                className="h-16 rounded-2xl"
                style={{
                  background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                  border: "1px solid rgba(16,185,129,0.1)",
                }}
              />
            </div>
          </motion.div>

          {/* Main Card — front */}
          <div
            className="relative w-80 rounded-3xl p-6"
            style={{
              background: "rgba(255,255,255,0.035)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(20px)",
              zIndex: 10,
              boxShadow: "0 32px 80px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.05)",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl flex items-center justify-center" style={{ background: "rgba(16,185,129,0.15)" }}>
                  <Layers size={18} style={{ color: "#10B981" }} />
                </div>
                <div>
                  <p style={{ fontFamily: "Newsreader, serif", fontSize: "15px", color: "#EBEBEB", fontWeight: 500 }}>
                    Nizami Parda
                  </p>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "9px", letterSpacing: "0.15em", color: "rgba(235,235,235,0.35)", textTransform: "uppercase" }}>
                    Est. 2009 · Punjab
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full opacity-75 animate-ping" style={{ background: "#10B981" }} />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "#10B981" }} />
                </span>
                <span style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "9px", letterSpacing: "0.1em", color: "#10B981" }}>LIVE</span>
              </div>
            </div>

            {/* Image placeholder */}
            <div
              className="h-36 rounded-2xl mb-4 overflow-hidden"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.1) 0%, rgba(255,255,255,0.03) 50%, rgba(16,185,129,0.05) 100%)",
                border: "1px solid rgba(16,185,129,0.12)",
              }}
            >
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="Premium curtain interior design"
                loading="lazy"
                decoding="async"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "Years", value: "15+" },
                { label: "Customers", value: "1K+" },
                { label: "Locations", value: "2" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl p-3 text-center"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <p style={{ fontFamily: "Newsreader, serif", fontSize: "18px", color: "#EBEBEB", fontWeight: 500 }}>{stat.value}</p>
                  <p style={{ fontFamily: "Space Grotesk, sans-serif", fontSize: "8px", letterSpacing: "0.12em", color: "rgba(235,235,235,0.35)", textTransform: "uppercase" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Shimmer border effect */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(16,185,129,0.08) 0%, transparent 40%, rgba(16,185,129,0.04) 100%)",
              }}
            />
          </div>

          {/* Floating emerald accent */}
          <motion.div
            animate={{ y: [-6, 6, -6], rotate: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute top-12 left-12 w-3 h-3 rounded-full"
            style={{ background: "#10B981", boxShadow: "0 0 16px rgba(16,185,129,0.6)", zIndex: 20 }}
          />
          <motion.div
            animate={{ y: [6, -6, 6], rotate: [360, 180, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-20 right-8 w-2 h-2 rounded-full"
            style={{ background: "#10B981", opacity: 0.7, boxShadow: "0 0 12px rgba(16,185,129,0.5)", zIndex: 20 }}
          />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span
          style={{
            fontFamily: "Space Grotesk, sans-serif",
            fontSize: "9px",
            letterSpacing: "0.2em",
            color: "rgba(235,235,235,0.25)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8"
          style={{ background: "linear-gradient(to bottom, rgba(16,185,129,0.4), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
