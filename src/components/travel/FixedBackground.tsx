import type { TravelImage } from "@/lib/images";

type FixedBackgroundProps = {
  image: TravelImage;
  children: React.ReactNode;
  className?: string;
  overlay?: "light" | "dark" | "none";
};

/** Fixed full-viewport background — content scrolls over it */
export function FixedBackground({
  image,
  children,
  className = "",
  overlay = "dark",
}: FixedBackgroundProps) {
  return (
    <div className={`relative ${className}`}>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      {overlay === "dark" && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-ink/55" />
      )}
      {overlay === "light" && (
        <div aria-hidden className="pointer-events-none fixed inset-0 z-0 bg-sand/88" />
      )}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** Section with its own fixed bg — previous section scrolls away */
export function ParallaxBand({
  image,
  children,
  className = "",
  minHeight = "min-h-[70vh]",
}: {
  image: TravelImage;
  children: React.ReactNode;
  className?: string;
  minHeight?: string;
}) {
  return (
    <section className={`relative z-20 ${minHeight} ${className}`}>
      <div
        aria-hidden
        className="absolute inset-0 z-0 hero-parallax-bg"
        style={{ backgroundImage: `url(${image.src})` }}
      />
      <div aria-hidden className="absolute inset-0 z-0 bg-gradient-to-t from-ink/75 via-ink/45 to-ink/25" />
      <div className="relative z-10 flex min-h-[inherit] flex-col justify-end">{children}</div>
    </section>
  );
}
