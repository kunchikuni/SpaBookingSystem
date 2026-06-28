import Link from "next/link";
import { ButtonHTMLAttributes, ReactNode } from "react";
import clsx from "clsx";

type ButtonVariant = "primary" | "secondary" | "accent" | "outline";
type ButtonSize = "sm" | "md" | "lg";

const variantClasses: Record<ButtonVariant, string> = {
  primary: "btn-primary",
  secondary: "btn-secondary",
  accent: "btn-accent",
  outline:
    "bg-transparent border border-primary text-primary hover:bg-primary-50 px-6 py-3 rounded-lg font-medium transition-all duration-200",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "text-sm px-4 py-2",
  md: "",
  lg: "text-lg px-8 py-4",
};

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  hoverLift?: boolean;
  className?: string;
}

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
    isLoading?: boolean;
    children: ReactNode;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  children: ReactNode;
};

type ButtonProps = ButtonAsButton | ButtonAsLink;

export default function Button(props: ButtonProps) {
  const { variant = "primary", size = "md", hoverLift = false, className } = props;
  const classes = clsx(
    variantClasses[variant],
    sizeClasses[size],
    hoverLift && "hover-lift",
    className,
  );

  if ("href" in props && props.href) {
    const { href, external, children } = props;
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  const { isLoading, children, disabled, ...rest } = props as ButtonAsButton;
  return (
    <button className={classes} disabled={disabled || isLoading} {...rest}>
      {isLoading ? (
        <span className="inline-flex items-center gap-2">
          <span
            className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white"
            aria-hidden="true"
          />
          {children}
        </span>
      ) : (
        children
      )}
    </button>
  );
}
