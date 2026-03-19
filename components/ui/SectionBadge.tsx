import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "purple";
  className?: string;
}

export default function SectionBadge({
  children,
  color = "blue",
  className = "",
}: SectionBadgeProps) {
  const colorMap = {
    blue: {
      background: "rgba(0,240,255,0.08)",
      border: "rgba(0,240,255,0.25)",
      color: "#00f0ff",
    },
    green: {
      background: "rgba(0,255,159,0.08)",
      border: "rgba(0,255,159,0.25)",
      color: "#00ff9f",
    },
    purple: {
      background: "rgba(139,92,246,0.08)",
      border: "rgba(139,92,246,0.25)",
      color: "#8b5cf6",
    },
  };

  const style = colorMap[color];

  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase",
        className
      )}
      style={{
        background: style.background,
        border: `1px solid ${style.border}`,
        color: style.color,
      }}
    >
      <span
        className="w-1.5 h-1.5 rounded-full animate-pulse"
        style={{ background: style.color }}
      />
      {children}
    </span>
  );
}
