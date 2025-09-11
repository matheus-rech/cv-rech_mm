import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Slide } from "@/api/entities";
import SlideNavigation from '../components/presentation/SlideNavigation';
import SlideContent from '../components/presentation/SlideContent';

export default function PresentationPage() {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadSlides = async () => {
      try {
        const slideData = await Slide.list('slide_number');
        setSlides(slideData);
      } catch (error) {
        console.error('Error loading slides:', error);
      } finally {
        setLoading(false);
      }
    };
    loadSlides();
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev < slides.length - 1 ? prev + 1 : prev));
    setDirection(1);
  }, [slides.length]);

  const previousSlide = useCallback(() => {
    setCurrentSlide(prev => (prev > 0 ? prev - 1 : prev));
    setDirection(-1);
  }, []);
  
  const toggleAutoPlay = useCallback(() => {
    setIsAutoPlay(prev => !prev);
  }, []);

  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        if (currentSlide < slides.length - 1) {
          nextSlide();
        } else {
          setIsAutoPlay(false);
        }
      }, 8000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, currentSlide, nextSlide, slides.length]);

  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        nextSlide();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        previousSlide();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [nextSlide, previousSlide]);

  if (loading) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: 'var(--background-main)' }}>
        <div className="text-2xl font-semibold text-gray-600">Loading presentation...</div>
      </div>
    );
  }

  if (slides.length === 0) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center" style={{ backgroundColor: 'var(--background-main)' }}>
        <div className="text-2xl font-semibold text-gray-600">No slides found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 md:p-8" style={{ backgroundColor: 'var(--background-main)' }}>
      <div className="relative w-full aspect-[16/10] max-w-7xl shadow-2xl rounded-lg overflow-hidden bg-white">
        <AnimatePresence initial={false} custom={direction}>
          <SlideContent 
            key={currentSlide}
            slide={slides[currentSlide]} 
            direction={direction} 
          />
        </AnimatePresence>

        <div className="absolute top-0 left-0 w-full h-1.5 bg-gray-200">
          <motion.div
            className="h-full"
            style={{ backgroundColor: 'var(--primary-color)' }}
            animate={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        <SlideNavigation
          currentSlide={currentSlide}
          totalSlides={slides.length}
          onPrevious={previousSlide}
          onNext={nextSlide}
          isAutoPlay={isAutoPlay}
          onToggleAutoPlay={toggleAutoPlay}
        />
      </div>
    </div>
  );
}