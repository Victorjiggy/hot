import React from "react";
import image from "../assets/ChatGPT Image Aug 27, 2025, 02_56_39 AM.png";

const AboutHero = () => (
  <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300  py-16">
    <div className="container mx-auto flex flex-col items-center text-center px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-2">
        Our Story
      </h1>

      <p className="text-gray-700 text-base sm:text-lg md:text-xl">
        How we started?
      </p>

      <span className="block text-lg sm:text-xl md:text-2xl font-medium mt-2 text-blue-800">
        Who We Are?
      </span>

      <img
        src={image}
        alt="About us"
        className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl object-contain mt-10"
      />
    </div>
  </section>
);

export default AboutHero;
