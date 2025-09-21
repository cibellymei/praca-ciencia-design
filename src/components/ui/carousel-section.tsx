import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CarouselSectionProps {
  title: string;
  children: React.ReactNode;
  autoScroll?: boolean;
  className?: string;
}

export function CarouselSection({ 
  title, 
  children, 
  autoScroll = false, 
  className = "" 
}: CarouselSectionProps) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  useEffect(() => {
    checkScrollButtons();
    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener("scroll", checkScrollButtons);
      return () => scrollElement.removeEventListener("scroll", checkScrollButtons);
    }
  }, [children]);

  useEffect(() => {
    if (autoScroll && scrollRef.current) {
      const interval = setInterval(() => {
        if (scrollRef.current) {
          const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
          if (scrollLeft >= scrollWidth - clientWidth - 10) {
            scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
          } else {
            scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
          }
        }
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [autoScroll]);

  return (
    <div className={`space-y-3 sm:space-y-4 ${className}`}>
      <div className="flex items-center justify-between">
        <h2 className="text-lg sm:text-2xl font-bold text-foreground">{title}</h2>
        <div className="flex gap-1 sm:gap-2">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
          >
            <ChevronLeft className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="h-7 w-7 sm:h-8 sm:w-8 rounded-full"
          >
            <ChevronRight className="h-3 w-3 sm:h-4 sm:w-4" />
          </Button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-3 sm:gap-4 overflow-x-auto carousel-smooth pb-3 sm:pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>
    </div>
  );
}