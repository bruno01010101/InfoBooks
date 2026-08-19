import React from "react";

/**
 * LoadingSpinner
 * Um indicador de carregamento em SVG: um arco com gradiente que gira,
 * com um pequeno "núcleo" pulsante no centro.
 *
 * Props:
 * - size: tamanho em px (padrão 64)
 * - colorStart / colorEnd: cores do gradiente do arco
 * - label: texto acessível para leitores de tela
 */
export default function LoadingSpinner({
  size = 64,
  colorStart = "#6366F1", // indigo
  colorEnd = "#22D3EE", // ciano
  label = "Carregando…",
}) {
  const strokeWidth = Math.max(3, size * 0.07);
  const radius = size / 2 - strokeWidth;
  const circumference = 2 * Math.PI * radius;

  return (
    <div
      role="status"
      aria-label={label}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        width: size,
        height: size,
      }}
    >
      <svg
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
        style={{ animation: "spinner-rotate 1.1s linear infinite" }}
      >
        <defs>
          <linearGradient id="spinner-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colorStart} />
            <stop offset="100%" stopColor={colorEnd} />
          </linearGradient>
        </defs>

        {/* Trilha de fundo, sutil */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={colorStart}
          strokeOpacity="0.12"
          strokeWidth={strokeWidth}
        />

        {/* Arco animado */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#spinner-gradient)"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference * 0.75}
        />

        {/* Núcleo pulsante */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={strokeWidth * 0.9}
          fill={colorEnd}
          style={{
            transformOrigin: "center",
            animation: "spinner-pulse 1.1s ease-in-out infinite",
          }}
        />
      </svg>

      <span
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          overflow: "hidden",
          clip: "rect(0 0 0 0)",
        }}
      >
        {label}
      </span>

      <style>{`
        @keyframes spinner-rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spinner-pulse {
          0%, 100% { transform: scale(0.85); opacity: 0.7; }
          50% { transform: scale(1.15); opacity: 1; }
        }
        @media (prefers-reduced-motion: reduce) {
          svg, circle {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}

/* Demonstração rápida */
export function LoadingSpinnerDemo() {
  return (
    <div
      style={{
        display: "flex",
        gap: 32,
        alignItems: "center",
        justifyContent: "center",
        minHeight: "40vh",
        background: "#0B1020",
        padding: 40,
        borderRadius: 16,
      }}
    >
      <LoadingSpinner size={40} />
      <LoadingSpinner size={64} />
      <LoadingSpinner size={96} colorStart="#F97316" colorEnd="#F43F5E" />
    </div>
  );
}
