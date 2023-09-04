"use client";

import { useState, useEffect } from "react";
import { SlideData } from "@/data/data";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () =>
        setCurrentSlide((prev) =>
          prev === SlideData.length - 1 ? 0 : prev + 1
        ),
      4000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" flex  flex-col h-screen w-full  lg:flex-row  ">
      <div className=" flex flex-1 items-center justify-center flex-col gap-6 lg:w-1/2 lg:h-full">
        <h1 className="text-3xl p-4 md:p-10 uppercase text-center md:text-4xl lg:text-5xl text-red-500">
          {SlideData[currentSlide].title}
        </h1>
        <button className="bg-red-500 p-4  text-white font-semibold text-center">
          Order Now!
        </button>
      </div>
      <div className="flex-1 relative  w-full  ">
        <Image
          src={SlideData[currentSlide].image}
          alt="Slide1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Slider;
