import React from "react";
import luxStore from "../assets/ChatGPT Image Aug 27, 2025, 02_56_39 AM.png";
import image from '../assets/Midea.webp'
import image1 from '../assets/bruhm.webp'
import image3 from '../assets/aeon.jpg'
import image4 from '../assets/TAMASHI-300x300.webp'
import image2 from '../assets/kenstar.webp'
import image5 from '../assets/royal.png'
import image6 from '../assets/samsung.png'
import image7 from '../assets/lg.png'
import image8 from '../assets/hisense.webp'

// Example brands (replace with real logos)
const brands = [
  image,
  image1,
  image2,
  image3,
   image4,
   image5,
   image6,
   image7,
   image8,
  
];

const TeamSection = () => (
  <section className="bg-gray-50 py-16 py-16 px-4 ">
     <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
         {/* Image */}
         <div className="flex justify-center">
           <img
             src={luxStore}
             alt="Our Workshop"
             className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-full object-cover"
           />
         </div>

         {/* Text */}
         <div>
           <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700 mb-4 leading-snug">
             Creating Beautiful Spaces Since 2010
           </h2>
   
           <p className="text-gray-700 text-base sm:text-lg mb-4">
             LuxeLiving was founded with a simple mission: to help people create homes that reflect
             their personal style and provide comfort and inspiration every day.
           </p>
   
           <p className="text-gray-700 text-base sm:text-lg mb-4">
             Our journey began in a small workshop where we crafted custom furniture pieces for local
             clients. Word of our quality and attention to detail spread, and soon we were serving
             customers across the country.
           </p>
   
           <p className="text-gray-700 text-base sm:text-lg mb-4">
             Today, we curate collections from artisans around the world, bringing together the finest
             materials, craftsmanship, and design to create pieces that stand the test of time.
           </p>
   
           <p className="text-gray-700 text-base sm:text-lg">
             We believe your home should be a sanctuary — a place that nurtures you and tells your unique
             story. Every piece in our collection is chosen with this philosophy in mind.
           </p>
         </div>
  
   
       </div>

    {/* Brands Section */}
    <div className="mt-16 px-6">
      <h2 className="text-2xl font-bold text-blue-400 mb-6 text-center">
        BRANDS
      </h2>
      <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
        {brands.map((brand, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-50 h-40 flex items-center justify-center bg-white shadow rounded-lg p-2 
           transform transition-all duration-300 hover:scale-110 hover:shadow-xl"

          >
            <img
              src={brand}
              alt={`Brand ${index + 1}`}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;
