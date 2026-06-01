import React from "react";

export type MonoIconName = "Email" | "Phone" | "LinkedIn" | "GoogleScholar" | "Tistory" | "Velog";

interface MonoIconProps {
  name: MonoIconName;
  size?: number;
}

const MonoIcon: React.FC<MonoIconProps> = ({ name, size = 16 }) => {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "currentColor" as const,
    xmlns: "http://www.w3.org/2000/svg",
  };

  switch (name) {
    case "Email":
      return (
        <svg {...common}>
          <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6zm2 .5v.2l8 5 8-5v-.2H4zm16 2.7-8 5-8-5V18h16V9.2z" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg {...common}>
          <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V23h-4V8.5zm7 0h3.83v1.98h.05c.53-1 1.84-2.06 3.79-2.06 4.05 0 4.8 2.67 4.8 6.15V23h-4v-6.5c0-1.55-.03-3.55-2.17-3.55-2.17 0-2.5 1.7-2.5 3.43V23h-4V8.5z" />
        </svg>
      );
    case "GoogleScholar":
      return (
        <svg {...common}>
          <path d="M12 3 1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm0 2.18 6.9 3.73L12 12.55 5.1 8.91 12 5.18zM7 11.09v3.27L12 17.55l5-3.19v-3.27L12 14.45 7 11.09z" />
        </svg>
      );
    case "Tistory":
      return (
        <svg {...common}>
          <path d="M4 4h16v3H13v13h-2V7H4z" />
        </svg>
      );
    case "Velog":
      return (
        <svg {...common}>
          <path d="M7 6h2l3 9 3-9h2l-4 12h-2L7 6z" />
        </svg>
      );
    case "Phone":
      return (
        <svg {...common}>
          <path d="M6.6 2h10.8A1.6 1.6 0 0 1 19 3.6v16.8A1.6 1.6 0 0 1 17.4 22H6.6A1.6 1.6 0 0 1 5 20.4V3.6A1.6 1.6 0 0 1 6.6 2zm0 2v12.8h10.8V4H6.6zm5.4 15.6a1.2 1.2 0 1 0 0-2.4 1.2 1.2 0 0 0 0 2.4z" />
        </svg>
      );
    default:
      return null;
  }
};

export default MonoIcon;
