interface BlobGlowProps {
  className?: string;
  size?: number;
  opacity?: number;
  animate?: boolean;
}

export function BlobGlow({ className = "", size = 400, opacity = 0.08, animate = true }: BlobGlowProps) {
  return (
    <div
      className={`absolute pointer-events-none ${animate ? "blob-morph" : ""} ${className}`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, rgba(16,185,129,${opacity}) 0%, transparent 70%)`,
        filter: "blur(100px)",
        borderRadius: "60% 40% 70% 30% / 50% 60% 40% 50%",
      }}
    />
  );
}
