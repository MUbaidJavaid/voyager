import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonProps = React.ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
};

const variants = {
  primary:
    "bg-accent text-background hover:bg-accent/90 shadow-[0_0_40px_rgba(61,214,198,0.25)]",
  secondary: "glass text-foreground hover:border-accent/40 hover:bg-surface-elevated",
  ghost: "text-muted hover:text-foreground hover:bg-white/5",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <Link
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}

export function ButtonElement({
  variant = "primary",
  size = "md",
  className,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants;
  size?: keyof typeof sizes;
}) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    />
  );
}
