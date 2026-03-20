import { cn } from "@/lib/utils";

interface SectionBadgeProps {
  children: React.ReactNode;
  color?: "blue" | "green" | "purple" | "red" | "yellow";
  className?: string;
}

export default function SectionBadge({
  children,
  color = "blue",
  className = "",
}: SectionBadgeProps) {
  const colorMap = {
    blue: {
      background: "rgba(107,114,128,0.05)",
      border: "rgba(107,114,128,0.15)",
      color: "#6b7280",
    },
    green: {
      background: "rgba(16,185,129,0.05)",
      border: "rgba(16,185,129,0.15)",
      color: "#10b981",
    },
    purple: {
      background: "rgba(99,102,241,0.05)",
      border: "rgba(99,102,241,0.15)",
      color: "#6366f1",
    },
    red: {
      background: "rgba(239,68,68,0.05)",
      border: "rgba(239,68,68,0.15)",
      color: "#ef4444",
    },
    yellow: {
      background: "rgba(180,83,9,0.05)",
      border: "rgba(180,83,9,0.15)",
      color: "#b45309",
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
