/**
 * Soft animated gradient orb used as a quiet hero accent.
 *
 * Renders as overlapping blurred circles without a clipping container so the
 * glow falls off naturally instead of forming hard rectangular edges.
 *
 * @returns The gradient orb component.
 */
export function GradientOrb() {
  return (
    <div
      aria-hidden="true"
      className={`
        pointer-events-none relative h-[480px] w-[480px]
        sm:h-[600px] sm:w-[600px]
        lg:h-[720px] lg:w-[720px]
      `}
    >
      <div
        className={`
          absolute top-[8%] left-[5%] h-[55%] w-[75%] rounded-[50%] opacity-55
          blur-[60px]
          motion-reduce:!animate-none
          dark:opacity-50
        `}
        style={{
          background: "radial-gradient(ellipse, #e8623c 0%, transparent 70%)",
          animation: "orb-drift-a 18s ease-in-out infinite",
        }}
      />
      <div
        className={`
          absolute top-[25%] left-[35%] h-[70%] w-[50%] rounded-[50%] opacity-45
          blur-[70px]
          motion-reduce:!animate-none
          dark:opacity-40
        `}
        style={{
          background: "radial-gradient(ellipse, #d9784a 0%, transparent 70%)",
          animation: "orb-drift-b 22s ease-in-out infinite",
        }}
      />
      <div
        className={`
          absolute top-[18%] left-[20%] h-[60%] w-[60%] rounded-[50%] opacity-40
          blur-[80px]
          motion-reduce:!animate-none
          dark:opacity-35
        `}
        style={{
          background: "radial-gradient(circle, #ffa572 0%, transparent 70%)",
          animation: "orb-drift-c 26s ease-in-out infinite",
        }}
      />
      <style>{`
        @keyframes orb-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          25% { transform: translate(10%, -12%) scale(1.18) rotate(8deg); }
          50% { transform: translate(16%, 6%) scale(1.08) rotate(-4deg); }
          75% { transform: translate(-6%, 12%) scale(1.22) rotate(6deg); }
        }
        @keyframes orb-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1) rotate(0deg); }
          33% { transform: translate(-14%, 10%) scale(1.25) rotate(-10deg); }
          66% { transform: translate(12%, -8%) scale(0.85) rotate(8deg); }
        }
        @keyframes orb-drift-c {
          0%, 100% { transform: translate(0, 0) scale(0.9) rotate(0deg); }
          25% { transform: translate(-8%, 6%) scale(1.15) rotate(-6deg); }
          50% { transform: translate(8%, -10%) scale(1.3) rotate(4deg); }
          75% { transform: translate(4%, 8%) scale(1.05) rotate(-8deg); }
        }
      `}</style>
    </div>
  );
}
