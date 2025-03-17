"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid"; // Import Heroicons

import eastmanClubImg from "../../public/img/hébergement/eastman-club.png";
import bedroomImg from "../../public/img/hébergement/chambre-ensoleillé.png";
import livingRoomImg from "../../public/img/hébergement/salon-intime.png";
import poolImg from "../../public/img/hébergement/piscine.png";

const images = [
    { src: eastmanClubImg, alt: "Eastman Club" },
    { src: bedroomImg, alt: "Chambre de l'Ensoleillé" },
    { src: livingRoomImg, alt: "Chambre dans l'Ensoleillé" },
    { src: poolImg, alt: "Piscine" },
];
  

const Carousel = () => {
    const [index, setIndex] = useState(0);
  
    const prevSlide = () => setIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    const nextSlide = () => setIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

    // Auto-scroll effect
    useEffect(() => {
        const interval = setInterval(nextSlide, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup when unmounted
    }, []);
  
    return (
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-lg">
        {/* Image Container */}
        <div className="relative h-64 md:h-96 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={images[index].src}
                alt={images[index].alt}
                fill
                className="object-cover rounded-lg"
                priority={index === 0} // Optimize first image
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