import type { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "coral" | "cream";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  children: ReactNode;
  fullWidth?: boolean;
}

const variants: Record<Variant, string> = {
  primary:
    "bg-teal text-white hover:bg-teal/90 shadow-md shadow-teal/20",
  secondary:
    "bg-white text-teal border border-teal/20 hover:border-teal/40 hover:bg-cream/30",
  outline:
    "bg-transparent text-teal border-2 border-teal/30 hover:border-teal hover:bg-teal/5",
  coral:
    "bg-coral text-white hover:bg-coral/90 shadow-md shadow-coral/25",
  cream:
    "bg-cream text-teal hover:bg-cream/90 font-semibold",
};

export function Button({
  variant = "primary",
  children,
  fullWidth,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      type="button"
      className={[
        "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral disabled:opacity-50",
        variants[variant],
        fullWidth ? "w-full" : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
