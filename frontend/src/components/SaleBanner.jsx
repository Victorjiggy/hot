import React from "react";
import { Link } from "react-router-dom";
import image1 from "../assets/Bruhm-Services.jpg";
import image3 from "../assets/images.jpg";
import image2 from "../assets/smart cooling solution.jpg";

function SaleBanner() {
  // Check if current month is December
  const isDecember = new Date().getMonth() === 10;

  return (
    <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-6">
      {/* Card 1 - Bruhm Black Friday */}
      <div
        className="relative overflow-hidden shadow-lg h-72 flex items-center justify-center bg-cover bg-center hover:scale-102 transition hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]"
        style={{ backgroundImage: `url(${image1})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">BRUHM PRODUCTS</h2>
          <p className="text-sm mb-4">Bruhm best products available.</p>
          <a
              href="https://bruhm.com/product-category/bruhm-black/"
               target="_blank"
              rel="noopener noreferrer"
           >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">
              Shop Now
            </button>
          </a>
        </div>
      </div>

      {/* Card 2 - AC Products Shop Page */}
      <div
        className="relative overflow-hidden shadow-lg h-72 flex items-center justify-center bg-cover bg-center hover:scale-102 transition hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]"
        style={{ backgroundImage: `url(${image2})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">SMART COOLING SOLUTION</h2>
          <p className="text-sm mb-4">Experience next-gen cooling with AI-powered performance.</p>
          <Link to="/shop">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">
              Discover More
            </button>
          </Link>
        </div>
      </div>  

      {/* Card 3 - Christmas Banner (only December) */}
      {isDecember && (
        <div
          className="relative overflow-hidden shadow-lg h-72 flex items-center justify-center bg-red-600 bg-cover bg-center hover:scale-102 transition hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]"
        >
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="relative z-10 text-center text-white px-6 hover:scale-105 transition">
            <h2 className="text-2xl font-bold mb-2">🎄 Christmas Deals 🎄</h2>
            <p className="text-sm mb-4">Exclusive holiday offers just for December!</p>
            <Link to="/christmas">
              <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      )}
      
      {/* Card 4 - Midea Products */}
      <div
        className="relative overflow-hidden shadow-lg h-72 flex items-center justify-center bg-cover bg-center hover:scale-102 transition hover:shadow-[0_0_15px_rgba(0,123,255,0.7)]"
        style={{ backgroundImage: `url(${image3})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-6 hover:scale-105 transition">
          <h2 className="text-2xl font-bold mb-2 text-blue-400">MIDEA</h2>
          <p className="text-sm mb-4">LEARN MORE ABOUT MIDEA PRODUCTS .</p>
          <a
              href="https://www.midea.com/ng/"
               target="_blank"
              rel="noopener noreferrer"
           >
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm transition">
              Discover More
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default SaleBanner;
