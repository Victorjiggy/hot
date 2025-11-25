import React from 'react';
import image from '../assets/refrigirator.jpg'
import image1 from '../assets/washingmachine.webp'
import image2 from '../assets/airconditioner.webp'
import image3 from '../assets/tv.webp'
import image4 from '../assets/gas.webp'

const PromoBanners = () => {
  return (
    <section className="container mx-auto px-6 py-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
      
      <img
        src={image2}
        alt="Black Friday Sale"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

      <img
        src={image3}
        alt="Smartphone Offer"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

      <img
        src={image4}
        alt="Giveaway Banner"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

      <img
        src={image1}
        alt="Giveaway Banner"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

      <img
        src={image1}
        alt="Giveaway Banner"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

      <img
        src={image}
        alt="Giveaway Banner"
        className="rounded-lg h-30 w-90 shadow-[0_0_15px_rgba(0,123,255,0.7)] hover:scale-105 transition"
      />

    </section>
  );
};

export default PromoBanners;
