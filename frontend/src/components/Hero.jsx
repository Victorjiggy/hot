import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/allone.png";
import videoBg1 from "../assets/UNICOOL-TVC-15s-No-subtitle-1920x800 (2).mp4";
import videoBg2 from "../assets/pc.mp4";

const slides = [
  {
    title: "Higher Level Electronic Communication",
    subtitle: "New Technology",
    description: "Discover the latest electronics at unbeatable prices — designed for modern life.",
    image: image1,
    link: "/shop",
  },
  {
    title: "UNICOOL solution ",
    subtitle: "Innovative Solutions",
    description: "Upgrade your home with the newest ACs.",
    video: videoBg1,
    link: "/shop",
  },
  {
    title: "Top Brands You Can Trust",
    subtitle: "Quality Electronics",
    description: "Featuring Midea, Bruhm, Genstar, and Etec for reliable and stylish gadgets.",
    video: videoBg2,
    link: "/shop",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [volume, setVolume] = useState(0.5); // Default volume
  const videoRef = useRef(null);

  // Slide change timer for image slides (non-video)
  useEffect(() => {
    if (!slides[currentSlide].video) {
      const timer = setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [currentSlide]);

  // Handle video end to go to next slide
  const handleVideoEnd = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const slide = slides[currentSlide];

  return (
    <section className="relative overflow-hidden h-[90vh]">
      {/* Video Background */}
      {slide.video && (
        <video
          ref={videoRef}
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={slide.video}
          autoPlay
          muted={volume === 0}
          onEnded={handleVideoEnd}
        />
      )}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 opacity-70 z-10"></div>

      {/* Content */}
      <div className="container mx-auto px-6 h-full flex flex-col md:flex-row items-center justify-center md:justify-between relative z-20 transition-all duration-700">
        {/* Left Text */}
        <div className="max-w-lg  mt-10 text-center md:text-left">
          <h3 className="text-blue-500 font-semibold mb-2 uppercase tracking-wide">
            {slide.subtitle}
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold leading-snug mb-4">
            {slide.title.split(" ").map((word, idx) => (
              <span key={idx} className={idx === 2 ? "text-blue-600 block" : ""}>
                {word}{" "}
              </span>
            ))}
          </h1>
          <p className="text-gray-600 mb-6">{slide.description}</p>
          <Link
            to={slide.link}
            className="group bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-50 hover:text-black hover:border-black hover:border-[1px] transition"
          >
            Shop Now
          </Link>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0 flex justify-center md:justify-end">
          {!slide.video && (
            <img
              src={slide.image}
              alt={slide.title}
              className="w-[300px] sm:w-[400px] md:w-[500px] lg:w-[600px] transition-all duration-700 rounded-lg"
            />
          )}
        </div>
      </div>

      {/* Volume Toggle */}
      {slide.video && (
        <div className="absolute top-4 right-4 z-30">
          <button
            onClick={() => {
              const newVolume = volume === 0 ? 0.5 : 0;
              setVolume(newVolume);
              if (videoRef.current) videoRef.current.volume = newVolume;
            }}
            className="bg-black/50 text-white px-2 py-1 rounded"
          >
            {volume === 0 ? "Unmute" : "Mute"}
          </button>
        </div>
      )}

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              idx === currentSlide ? "bg-blue-800" : "bg-white"
            }`}
            onClick={() => setCurrentSlide(idx)}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Hero;
