import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Stylized "network of Ghana" SVG: PoP nodes, animated backbone routes,
 * and a soft radial glow. Decorative — purely visual storytelling.
 */
const nodes = [
  { id: "Accra",    x: 540, y: 470, hub: true,  size: 9 },
  { id: "Tema",     x: 580, y: 460, hub: false, size: 5 },
  { id: "Kumasi",   x: 410, y: 320, hub: true,  size: 8 },
  { id: "Tamale",   x: 380, y: 160, hub: true,  size: 8 },
  { id: "Bolga",    x: 380, y: 80,  hub: false, size: 5 },
  { id: "Wa",       x: 240, y: 130, hub: false, size: 5 },
  { id: "Sunyani",  x: 320, y: 270, hub: false, size: 5 },
  { id: "Cape Coast", x: 470, y: 500, hub: false, size: 5 },
  { id: "Takoradi", x: 380, y: 520, hub: false, size: 5 },
  { id: "Ho",       x: 600, y: 380, hub: false, size: 5 },
  { id: "Koforidua",x: 510, y: 410, hub: false, size: 5 },
];

const edges: [number, number][] = [
  [0,1],[0,7],[0,10],[0,9],[10,2],[2,6],[2,7],[2,8],[6,2],[2,3],[3,4],[3,5],[5,2],[8,7],
];

export default function NetworkCanvas({ className }: { className?: string }) {
  return (
    <div className={cn("relative w-full h-full", className)}>
      {/* radial glow */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 50% at 60% 55%, hsl(var(--primary) / 0.25), transparent 70%)",
        }}
      />
      <svg viewBox="0 0 800 600" className="relative w-full h-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%"  stopColor="hsl(204 58% 70%)" stopOpacity="0.95" />
            <stop offset="100%" stopColor="hsl(95 75% 62%)" stopOpacity="0.9" />
          </linearGradient>
          <radialGradient id="node" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(95 75% 70%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(204 58% 51%)" stopOpacity="0" />
          </radialGradient>
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="6" result="b" />
            <feMerge><feMergeNode in="b" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>
        </defs>

        {/* faint Ghana outline (stylized) */}
        <path
          d="M260,90 L420,60 L470,110 L500,180 L560,230 L620,330 L640,400 L600,470 L560,520 L470,540 L380,540 L320,500 L260,420 L240,340 L220,250 L240,170 Z"
          fill="hsl(var(--primary) / 0.04)"
          stroke="hsl(var(--primary) / 0.18)"
          strokeWidth="1"
        />

        {/* edges */}
        {edges.map(([a, b], i) => {
          const A = nodes[a], B = nodes[b];
          const len = Math.hypot(B.x - A.x, B.y - A.y);
          return (
            <motion.line
              key={i}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke="url(#line)"
              strokeWidth="1.4"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.85 }}
              transition={{ duration: 1.6, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              style={{ strokeDasharray: len, strokeDashoffset: 0 }}
            />
          );
        })}

        {/* nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x} cy={n.y} r={n.size + 10}
              fill="url(#node)"
              initial={{ opacity: 0, scale: 0.4 }}
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.3, 0.9] }}
              transition={{ duration: 3.2, delay: 0.5 + i * 0.12, repeat: Infinity, ease: "easeInOut" }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            <motion.circle
              cx={n.x} cy={n.y} r={n.size}
              fill={n.hub ? "hsl(var(--secondary))" : "hsl(204 58% 70%)"}
              filter="url(#glow)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 + i * 0.07 }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            {n.hub && (
              <motion.text
                x={n.x + n.size + 8}
                y={n.y + 4}
                fontSize="11"
                fill="hsl(var(--foreground) / 0.85)"
                fontFamily="'Space Grotesk', Inter, sans-serif"
                letterSpacing="0.04em"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 + i * 0.07 }}
              >
                {n.id.toUpperCase()}
              </motion.text>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}
