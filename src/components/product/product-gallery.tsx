"use client";

import { useState } from "react";
import { clsx } from "clsx";

type Image = { src: string; alt: string };

export function ProductGallery({ images }: { images: Image[] }) {
  const [active, setActive] = useState(0);
  const current = images[active];
  return (
    <div className="space-y-4">
      <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-blob bg-gradient-to-br from-brand-pink/30 to-brand-sky/40 shadow-soft">
        <span className="text-center text-sm text-brand-ink/60">
          {current.alt}
          <br />
          <em className="text-xs">(image à venir)</em>
        </span>
      </div>
      {images.length > 1 && (
        <div className="flex gap-3">
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => setActive(i)}
              className={clsx(
                "h-20 w-20 flex-none rounded-2xl bg-brand-peach/40 ring-2 ring-transparent transition",
                active === i && "ring-brand-ink"
              )}
              aria-label={img.alt}
            />
          ))}
        </div>
      )}
    </div>
  );
}
