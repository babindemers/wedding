"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; 

interface CarouselProps {
  images: { src: string | StaticImageData; alt: string }[];
}

const Carousel: React.FC<CarouselProps> = ({ images = [] }) => {
    const [index, setIndex] = useState(0);

    if (!images || images.length === 0) {
      return <div className="text-center p-4">No images available</div>;
    }

    const prevSlide = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 7000); 
        return () => clearInterval(interval); 
    }, [images.length]);

    return (
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
        {/* Image Container */}
        <div className="relative w-full h-[450px] md:h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full flex justify-center items-center"
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                width={1080}
                height={1350}
                className="object-contain w-full h-full rounded-lg"
                priority={index === 0}
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
              onClick={() => setIndex(i)}
              className={`h-3 w-3 rounded-full transition ${
                i === index ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    );
};

export default Carousel;
