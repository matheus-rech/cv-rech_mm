import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

export default function SlideNavigation({
  currentSlide,
  totalSlides,
  onPrevious,
  onNext,
  isAutoPlay,
  onToggleAutoPlay
}) {
  return (
    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20">
      <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 py-2 shadow-md border border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0} className="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground rounded-full w-8 h-8">


          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <span className="text-xs font-medium text-gray-600tabular-nums">
          {currentSlide + 1} / {totalSlides}
        </span>
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full w-8 h-8">

          <ChevronRight className="w-4 h-4" />
        </Button>
        
        <div className="w-px h-5 bg-gray-300 mx-1" />
        
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggleAutoPlay}
          className="rounded-full w-8 h-8">

          {isAutoPlay ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
        </Button>
      </div>
    </div>);

}