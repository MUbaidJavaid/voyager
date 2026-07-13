import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  variant?: "travel" | "platform" | "light";
  showWordmark?: boolean;
  size?: "sm" | "md" | "lg";
};

const sizes = {
  sm: { mark: 28, text: "text-base" },
  md: { mark: 34, text: "text-lg md:text-xl" },
  lg: { mark: 44, text: "text-2xl md:text-3xl" },
};

export function VoyagerLogo({
  className,
  variant = "travel",
  showWordmark = true,
  size = "md",
}: Props) {
  const { mark, text } = sizes[size];
  const ink = variant === "light" ? "#f6f2ea" : variant === "platform" ? "#eceae6" : "#1c1a17";
  const gold = variant === "platform" ? "#6eb5aa" : "#9a7b52";
  const muted = variant === "light" ? "rgba(246,242,234,0.72)" : variant === "platform" ? "#8a8680" : "#6b6560";

  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width={mark}
        height={mark}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <circle cx="32" cy="32" r="31" stroke={gold} strokeWidth="1.25" opacity="0.55" />
        <path
          d="M32 10 L44 48 L32 38 L20 48 Z"
          fill={ink}
          stroke={ink}
          strokeWidth="0.5"
          strokeLinejoin="round"
        />
        <path
          d="M14 42 C22 36 42 36 50 42"
          stroke={gold}
          strokeWidth="2"
          strokeLinecap="round"
        />
        <circle cx="32" cy="22" r="2.25" fill={gold} />
      </svg>
      {showWordmark && (
        <span className="flex flex-col leading-none">
          <span className={cn("font-display tracking-[-0.02em]", text)} style={{ color: ink }}>
            Voyager
          </span>
          <span
            className="mt-1 text-[0.5625rem] font-semibold uppercase tracking-[0.28em] md:text-[0.625rem]"
            style={{ color: muted }}
          >
            Travel
          </span>
        </span>
      )}
    </span>
  );
}
