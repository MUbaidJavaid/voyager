import Image from "next/image";
import { cn } from "@/lib/utils";
import type { TravelImage } from "@/lib/images";

type Props = {
  image: TravelImage;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  overlay?: boolean;
  sizes?: string;
};

export function TravelImage({
  image,
  className,
  imageClassName,
  priority,
  overlay = false,
  sizes = "(max-width: 768px) 100vw, 50vw",
}: Props) {
  const isAbsolute = className?.includes("absolute");

  return (
    <div
      className={cn(
        "overflow-hidden",
        isAbsolute ? className : cn("relative w-full", className),
      )}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn("object-cover", imageClassName)}
      />
      {overlay && <div className="image-overlay absolute inset-0" aria-hidden />}
    </div>
  );
}
