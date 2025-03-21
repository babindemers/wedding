"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

interface CarouselProps {
  images: { src: string | StaticImageData; alt: string }[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images = [], autoPlay = true, interval = 7000 }) => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    resetAutoPlay();
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    resetAutoPlay();
  };

  // Reset autoplay timer when user interacts
  const resetAutoPlay = () => {
    if (autoPlay) {
      setIsPaused(true);
      setTimeout(() => setIsPaused(false), 5000); // Pause autoplay for 5 seconds after interaction
    }
  };

  // Automatic slide change if autoPlay is enabled
  useEffect(() => {
    if (!autoPlay || isPaused || images.length === 0) return;

    const slideInterval = setInterval(() => {
      setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, interval);

    return () => clearInterval(slideInterval);
  }, [autoPlay, isPaused, images.length, interval]);

  return (
    <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg px-4">
      {/* Image Container with a defined height */}
      <div className="relative w-full aspect-[16/9]">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 w-full h-full flex justify-center items-center"
          >
            <Image
              src={images[index].src}
              alt={images[index].alt}
              width={1080}
              height={1350}
              className="object-contain w-full h-full rounded-lg"
              loading="eager"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronLeftIcon className="h-6 w-6" />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
      >
        <ChevronRightIcon className="h-6 w-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              resetAutoPlay();
            }}
            className={`h-3 w-3 rounded-full transition ${i === index ? "bg-gray-200" : "bg-gray-400"}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;