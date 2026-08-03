"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { MediaItem } from "@/lib/event-media";

interface EventMediaGalleryProps {
  title: string;
  subtitle?: string;
  items: MediaItem[];
}

export default function EventMediaGallery({
  title,
  subtitle,
  items,
}: EventMediaGalleryProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, [
    Autoplay({
      playOnInit: true,
      delay: 4000,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    }),
  ]);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setPrevBtnEnabled(emblaApi.canScrollPrev());
    setNextBtnEnabled(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  if (!items.length) {
    return null;
  }

  return (
    <section className="section">
      <div className="section-inner">
        <div className="text-center stack-lg mb-10">
          <div className="stack">
            <p className="eyebrow">Gallery</p>
            <h2 className="section-title">{title}</h2>
          </div>
          {subtitle && <p className="section-lead max-w-3xl mx-auto">{subtitle}</p>}
        </div>
      </div>

      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {items.map((item) => (
              <div
                key={item.pathname}
                className="min-w-0 flex-[0_0_88%] sm:flex-[0_0_75%] lg:flex-[0_0_62%] px-2 md:px-4"
              >
                <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden rounded-[var(--radius)] bg-muted">
                  {item.type === "image" ? (
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 1024px) 62vw, (min-width: 640px) 75vw, 88vw"
                      className="object-cover"
                    />
                  ) : (
                    <>
                      <video
                        className="h-full w-full object-cover"
                        controls
                        preload="metadata"
                        poster={item.poster}
                      >
                        <source src={item.src} />
                      </video>
                      <Badge className="absolute left-3 top-3 bg-background/90 text-foreground border border-border/40">
                        Video
                      </Badge>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <Button
          variant="outline"
          size="icon"
          onClick={scrollPrev}
          disabled={!prevBtnEnabled}
          className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Previous slide</span>
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={scrollNext}
          disabled={!nextBtnEnabled}
          className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Next slide</span>
        </Button>
      </div>
    </section>
  );
}
