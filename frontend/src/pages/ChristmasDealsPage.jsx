import React, { useState } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import Snowfall from "react-snowfall";  // <-- import Snowfall
import image from '../assets/santa.webp';

export default function ChristmasDealsPage() {
  const phoneNumber = "08164821443";

  const products = [
    {
      name: "Midea 1.5HP Air Conditioner (Split Unit)",
      price: 235000,
      img: "https://images.pexels.com/photos/3965564/pexels-photo-3965564.jpeg",
      description:
        "Midea split AC delivers fast cooling, energy efficiency, and quiet operation, perfect for bedrooms and living rooms.",
      category: "Air Conditioner",
    },
    {
      name: "Bruhm 7KG Top Load Washing Machine",
      price: 185000,
      img: "https://images.pexels.com/photos/5591464/pexels-photo-5591464.jpeg",
      description:
        "A durable top-load washing machine with deep-clean technology and low water consumption.",
      category: "Washing Machine",
    },
    {
      name: "Genstar 4-Burner Gas Cooker (Standing)",
      price: 145000,
      img: "https://images.pexels.com/photos/5591830/pexels-photo-5591830.jpeg",
      description:
        "A full-size 4-burner standing gas cooker with oven grill, perfect for family cooking.",
      category: "Gas Cooker",
    },
    {
      name: "Etec 2HP Air Conditioner (Inverter)",
      price: 280000,
      img: "https://images.pexels.com/photos/3965567/pexels-photo-3965567.jpeg",
      description:
        "ETEC’s efficient 2HP inverter air conditioner cools large rooms quickly with low power usage.",
      category: "Air Conditioner",
    },
    {
      name: "Bruhm 90L Single Door Refrigerator",
      price: 110000,
      img: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg",
      description:
        "Compact and energy-efficient refrigerator ideal for small kitchens, offices, or hostels.",
      category: "Refrigerator",
    },
    {
      name: "Midea 6KG Front Load Washing Machine",
      price: 215000,
      img: "https://images.pexels.com/photos/2539463/pexels-photo-2539463.jpeg",
      description:
        "A high-efficiency front-load washer with fast spin, low water use, and anti-wrinkle technology.",
      category: "Washing Machine",
    },
    {
      name: "Genstar 3-Burner Table Gas Cooker",
      price: 38000,
      img: "https://images.pexels.com/photos/4109724/pexels-photo-4109724.jpeg",
      description:
        "A compact 3-burner gas tabletop cooker with strong flame output and durable metal body.",
      category: "Gas Cooker",
    },
    {
      name: "Etec 200L Chest Freezer",
      price: 190000,
      img: "https://images.pexels.com/photos/3738131/pexels-photo-3738131.jpeg",
      description:
        "Spacious and energy-efficient chest freezer with fast freeze capability.",
      category: "Freezer",
    },
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [modalProduct, setModalProduct] = useState(null);

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const handleWhatsAppOrder = (product) => {
    const message = `Hello! I'm interested in this product:\n\n*${product.name}*\nPrice: ₦${product.price.toLocaleString()}\n\nPlease confirm availability.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <div className="min-h-screen relative font-sans overflow-hidden">

      {/* Snow effect */}
      <Snowfall
        style={{ position: 'absolute', width: '100%', height: '100%', zIndex: 15 }}
        snowflakeCount={200} // adjust the number of snowflakes
      />

      {/* Santa background */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <div className="absolute inset-0 bg-black/40 z-10"></div>

      <div className="relative z-20">

        <header className="text-white py-6 shadow-md text-center">
          <h1 className="text-3xl font-bold tracking-wide">🎄 Christmas Appliance Deals</h1>
        </header>

        {/* Categories */}
        <section className="py-8 max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4 text-yellow-400">Shop by Category</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            {["All", "Air Conditioner", "Gas Cooker", "Washing Machine", "Refrigerator", "Freezer"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full font-semibold transition ${
                  selectedCategory === cat ? "bg-yellow-500 text-black" : "bg-gray-200 text-gray-800 hover:bg-yellow-100"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Product Grid */}
        <section className="py-8 max-w-6xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition relative">
              <img src={product.img} alt={product.name} className="w-full h-48 object-cover"/>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
                <p className="text-red-600 font-bold mb-2">₦{product.price.toLocaleString()}</p>
                <button
                  onClick={() => setModalProduct(product)}
                  className="w-full bg-green-600 hover:bg-green-500 text-white py-2 rounded-md transition"
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </section>

        {/* Modal */}
        {modalProduct && (
          <div className="mt-[8%] fixed inset-0  bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6 relative">

              <button
                onClick={() => setModalProduct(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 font-bold"
              >
                ✕
              </button>

              <img src={modalProduct.img} alt={modalProduct.name} className="w-full h-48 object-cover rounded-md mb-4"/>
              <h3 className="text-2xl font-bold mb-2">{modalProduct.name}</h3>
              <p className="text-red-600 font-bold mb-2">₦{modalProduct.price.toLocaleString()}</p>
              <p className="mb-4">{modalProduct.description}</p>

              <div className="flex gap-4">
                <button
                  onClick={() => handleWhatsAppOrder(modalProduct)}
                  className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 rounded-md flex items-center justify-center gap-2 transition"
                >
                  <FaWhatsapp /> WhatsApp
                </button>

                <button
                  onClick={handleCallNow}
                  className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md flex items-center justify-center gap-2 transition"
                >
                  <FaPhoneAlt /> Call
                </button>
              </div>
            </div>
          </div>
        )}

        <footer className="text-white py-6 mt-16 text-center">
          &copy; 2025 Christmas Appliance Deals • All Rights Reserved
        </footer>
      </div>
    </div>
  );
}
