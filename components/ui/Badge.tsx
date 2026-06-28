import { ReactNode } from "react";
import clsx from "clsx";

type BadgeTone = "accent" | "secondary" | "success" | "warning" | "error";

const toneClasses: Record<BadgeTone, string> = {
  accent: "bg-accent text-white",
  secondary: "bg-secondary text-white",
  success: "bg-success-50 text-success-700",
  warning: "bg-warning-50 text-warning-700",
  error: "bg-error-50 text-error-700",
};

interface BadgeProps {
  children: ReactNode;
  tone?: BadgeTone;
  className?: string;
}

export default function Badge({ children, tone = "accent", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "px-2 py-1 rounded-full text-xs font-medium inline-block",
        toneClasses[tone],
        className,
      )}
    >
      {children}
    </span>
  );
}
