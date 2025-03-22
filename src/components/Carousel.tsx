"use client";

import { useState, useEffect } from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CarouselProps {
  images: { src: string | StaticImageData; alt: string }[];
  autoPlay?: boolean;
  interval?: number;
}

const Carousel: React.FC<CarouselProps> = ({ images = [], autoPlay = true, interval = 7000 }) => {
  return (
    <div className="relative w-full max-w-3xl h-full mx-auto overflow-hidden rounded-lg ">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        loop={true}
        autoplay={autoPlay ? { delay: interval, disableOnInteraction: false } : false} // Autoplay control
        className="w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-full flex justify-center items-center">
              <Image
                src={image.src}
                alt={image.alt}
                width={1080}
                height={1350}
                className="rounded-lg"
                loading="eager"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dots (Swiper's pagination) will automatically be handled by Swiper */}
      
      {/* Custom Arrow Styling */}
      <style jsx>{`
        .swiper-button-prev,
        .swiper-button-next {
          color: #d3d3d3; /* Light gray color for arrows */
          opacity: 1; /* Make sure the arrows are fully visible */
          width: 30px; /* Set the arrow width */
          height: 30px; /* Set the arrow height */
          padding: 10px; /* Add some padding around the arrows */
          background-color: rgba(0, 0, 0, 0.4); /* Light background for visibility */
          border-radius: 50%; /* Make the arrow button round */
        }

        .swiper-button-prev:hover,
        .swiper-button-next:hover {
          color: #b0b0b0; /* Darker gray on hover */
        }

        /* Ensure carousel fits images and arrows on smaller screens */
        @media (max-width: 1024px) {
          .swiper-container {
            width: 100%;
            height: auto;
          }

          /* Adjust arrows position for smaller images */
          .swiper-button-prev,
          .swiper-button-next {
            top: 50%; /* Center arrows vertically */
            transform: translateY(-50%);
          }
        }

        /* Ensure carousel does not overflow */
        .swiper-container {
          width: 100%;
          height: auto; /* Allow for different image aspect ratios */
        }

        /* Additional fix for tall images */
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .swiper-slide img {
          object-fit: contain; /* Keep images proportional */
          max-height: 90vh; /* Limit height to 90% of the viewport height */
        }
      `}</style>
    </div>
  );
};

export default Carousel;
