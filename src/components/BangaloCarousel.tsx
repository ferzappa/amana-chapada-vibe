import * as React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface BangaloCarouselProps {
  images: string[];
  alt: string;
}

const BangaloCarousel = ({ images, alt }: BangaloCarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false, stopOnMouseEnter: true }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi]);

  const handlePrev = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    emblaApi?.scrollPrev();
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    emblaApi?.scrollNext();
  };

  const handleDot = (e: React.MouseEvent, index: number) => {
    e.preventDefault();
    e.stopPropagation();
    emblaApi?.scrollTo(index);
  };

  return (
    <div className="relative group aspect-[4/3] overflow-hidden">
      <div ref={emblaRef} className="h-full">
        <div className="flex h-full">
          {images.map((src, i) => (
            <div key={i} className="min-w-0 shrink-0 grow-0 basis-full h-full">
              <img
                src={src}
                alt={`${alt} — foto ${i + 1}`}
                className="w-full h-full object-cover"
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-chumbo/40 text-branco flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-chumbo/60"
        aria-label="Foto anterior"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-chumbo/40 text-branco flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 hover:bg-chumbo/60"
        aria-label="Próxima foto"
      >
        <ChevronRight className="w-4 h-4" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => handleDot(e, i)}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-500 ${
              i === selectedIndex ? "bg-branco w-4" : "bg-branco/50"
            }`}
            aria-label={`Ir para foto ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BangaloCarousel;
