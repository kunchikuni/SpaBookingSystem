import { HTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  elevated?: boolean;
  hoverLift?: boolean;
}

export default function Card({
  children,
  elevated = false,
  hoverLift = false,
  className,
  ...rest
}: CardProps) {
  return (
    <div
      className={clsx(elevated ? "card-elevated" : "card", hoverLift && "hover-lift", className)}
      {...rest}
    >
      {children}
    </div>
  );
}
