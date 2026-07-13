import { cn } from "@/lib/utils";
import type { TravelImage } from "@/lib/images";

type PageHeroProps = {
  image: TravelImage;
  children: React.ReactNode;
  fullViewport?: boolean;
  className?: string;
  theme?: "travel" | "platform";
};

/** Fixed parallax hero background */
export function PageHero({
  image,
  children,
  fullViewport = false,
  className,
  theme = "travel",
}: PageHeroProps) {
  if (!image?.src) {
    return (
      <section
        className={cn(
          "relative flex flex-col justify-end bg-ink pt-[3.75rem]",
          fullViewport ? "min-h-[100svh]" : "min-h-[68vh] md:min-h-[74vh]",
          className,
        )}
      >
        <div className="relative z-10 w-full">{children}</div>
      </section>
    );
  }

  return (
    <section
      className={cn(
        "relative flex flex-col justify-end pt-[3.75rem]",
        fullViewport ? "min-h-[100svh]" : "min-h-[68vh] md:min-h-[74vh]",
        className,
      )}
    >
      <div
        aria-hidden
        className="hero-parallax-bg absolute inset-0 z-0"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      <div
        aria-hidden
        className={cn(
          "absolute inset-0 z-0",
          theme === "platform"
            ? "bg-gradient-to-t from-background/95 via-background/70 to-background/40"
            : "bg-gradient-to-t from-ink/82 via-ink/50 to-ink/28",
        )}
      />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}

type HeroRevealProps = {
  children: React.ReactNode;
  className?: string;
  variant?: "travel" | "platform" | "sand-dark";
};

/** Content block directly below the hero — flat edge, no scroll animation */
export function HeroReveal({ children, className, variant = "travel" }: HeroRevealProps) {
  return (
    <div
      className={cn(
        "relative z-20",
        variant === "travel" && "bg-sand",
        variant === "sand-dark" && "bg-sand-dark",
        variant === "platform" && "bg-background",
        className,
      )}
    >
      {children}
    </div>
  );
}
