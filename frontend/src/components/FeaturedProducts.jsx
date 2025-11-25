import React, { useState } from "react";
import { FaHeart, FaWhatsapp, FaPhoneAlt, FaTimes, FaStar } from "react-icons/fa";

const products = [
  {
    name: "Midea 1.5HP Air Conditioner (Split Unit)",
    price: 235000,
    img: "https://images.pexels.com/photos/3965564/pexels-photo-3965564.jpeg",
    description:
      "Midea split AC delivers fast cooling, energy efficiency, and quiet operation, perfect for bedrooms and living rooms.",
    category: "Air Conditioner",
    rating: 4.8,
    stock: "In Stock",
    specs: {
      horsepower: "1.5HP",
      energy: "Energy Saving Inverter",
      noise: "Low Noise",
      features: "Turbo Cooling / Auto Restart",
    },
  },

  {
    name: "Bruhm 7KG Top Load Washing Machine",
    price: 185000,
    img: "https://images.pexels.com/photos/5591464/pexels-photo-5591464.jpeg",
    description:
      "A durable top-load washing machine with deep-clean technology and low water consumption.",
    category: "Washing Machine",
    rating: 4.7,
    stock: "In Stock",
    specs: {
      capacity: "7KG",
      type: "Top Load",
      drum: "Stainless Steel Drum",
      modes: "8 Wash Programs",
    },
  },

  {
    name: "Genstar 4-Burner Gas Cooker (Standing)",
    price: 145000,
    img: "https://images.pexels.com/photos/5591830/pexels-photo-5591830.jpeg",
    description:
      "A full-size 4-burner standing gas cooker with oven grill, perfect for family cooking.",
    category: "Gas Cooker",
    rating: 4.6,
    stock: "Limited Stock",
    specs: {
      burners: "4 Gas Burners",
      oven: "Gas Oven + Grill",
      material: "Stainless Steel Body",
      safety: "Flame Failure Safety Device",
    },
  },

  {
    name: "Etec 2HP Air Conditioner (Inverter)",
    price: 280000,
    img: "https://images.pexels.com/photos/3965567/pexels-photo-3965567.jpeg",
    description:
      "ETEC’s efficient 2HP inverter air conditioner cools large rooms quickly with low power usage.",
    category: "Air Conditioner",
    rating: 4.9,
    stock: "In Stock",
    specs: {
      horsepower: "2HP",
      technology: "Inverter Technology",
      function: "Dehumidifier",
      filter: "Anti-Dust Filter",
    },
  },

  {
    name: "Bruhm 90L Single Door Refrigerator",
    price: 110000,
    img: "https://images.pexels.com/photos/3965545/pexels-photo-3965545.jpeg",
    description:
      "Compact and energy-efficient refrigerator ideal for small kitchens, offices, or hostels.",
    category: "Refrigerator",
    rating: 4.7,
    stock: "In Stock",
    specs: {
      capacity: "90 Liters",
      freezer: "Top Freezer Compartment",
      energy: "Low Energy Consumption",
    },
  },

  {
    name: "Midea 6KG Front Load Washing Machine",
    price: 215000,
    img: "https://images.pexels.com/photos/2539463/pexels-photo-2539463.jpeg",
    description:
      "A high-efficiency front-load washer with fast spin, low water use, and anti-wrinkle technology.",
    category: "Washing Machine",
    rating: 4.9,
    stock: "In Stock",
    specs: {
      capacity: "6KG",
      type: "Front Load",
      spinSpeed: "1200 RPM",
      features: "Child Lock / Quick Wash",
    },
  },

  {
    name: "Genstar 3-Burner Table Gas Cooker",
    price: 38000,
    img: "https://images.pexels.com/photos/4109724/pexels-photo-4109724.jpeg",
    description:
      "A compact 3-burner gas tabletop cooker with strong flame output and durable metal body.",
    category: "Gas Cooker",
    rating: 4.5,
    stock: "In Stock",
    specs: {
      burners: "3 Burners",
      ignition: "Manual Ignition",
      material: "Stainless Steel Top",
    },
  },

  {
    name: "Etec 200L Chest Freezer",
    price: 190000,
    img: "https://images.pexels.com/photos/3738131/pexels-photo-3738131.jpeg",
    description:
      "Spacious and energy-efficient chest freezer with fast freeze capability.",
    category: "Freezer",
    rating: 4.8,
    stock: "In Stock",
    specs: {
      capacity: "200 Liters",
      cooling: "Fast Freeze",
      energy: "Low Power Usage",
      features: "Anti-Rust Body",
    },
  },
];


function FeaturedProducts() {
  const phoneNumber = "08164821443";
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWhatsAppOrder = (product) => {
    const message = `Hello! I'm interested in this product:\n\n*${product.name}*\nPrice: ₦${product.price.toLocaleString()}\n\nPlease confirm availability.`;
    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encoded}`, "_blank");
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* PRODUCT GRID */}
      <section className="container mx-auto px-6 py-12">
       <h2 className="text-3xl mb-[4%] text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-300 to-purple-800 bg-clip-text text-transparent">FEATURED PRODUCTS</h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-4 gap-6">
          {products.map((product, i) => (
            <div
              key={i}
              onClick={() => setSelectedProduct(product)}
              className="relative rounded-xl overflow-hidden group cursor-pointer"
              style={{
                backgroundImage: `url(${product.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent group-hover:from-blue-500/40 transition-all duration-500"></div>

              <div className="relative z-10 p-4 flex flex-col justify-end h-64 text-white">
                <h3 className="font-bold">{product.name}</h3>
                <p className="text-blue-300">₦{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MODAL */}
     {selectedProduct && (
  <div className="fixed inset-0 bg-black/60 flex justify-center items-center px-4 z-50">
    <div className="bg-blue-100 w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl shadow-xl p-6 relative">

      {/* Close Button */}
      <button
        onClick={() => setSelectedProduct(null)}
        className="absolute top-4 right-4 text-gray-600 hover:text-red-500 transition"
      >
        <FaTimes size={24} />
      </button>

      {/* Product Image */}
      <img
        src={selectedProduct.img}
        alt={selectedProduct.name}
        className="rounded-lg w-full h-72 object-cover"
      />

      {/* Product Name */}
      <h2 className="text-2xl font-bold mt-4 text-blue-700">
        {selectedProduct.name}
      </h2>

      {/* Category + Rating */}
      <div className="flex flex-wrap items-center gap-3 mt-2">
        <span className="bg-black text-green-300 px-3 py-1 rounded-full text-sm">
          {selectedProduct.category}
        </span>

        <span className="flex items-center text-red-500 font-medium">
          <FaStar className="mr-1" /> {selectedProduct.rating}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-600 mt-3">{selectedProduct.description}</p>

      {/* Stock */}
      <p className="mt-2 font-semibold text-green-600">{selectedProduct.stock}</p>

      {/* Specifications */}
      <div className="mt-4 bg-gray-100 p-4 rounded-lg">
        <h3 className="font-semibold mb-2 text-gray-800">Specifications:</h3>
        <ul className="text-sm text-gray-700 space-y-1">
          {Object.entries(selectedProduct.specs).map(([key, value]) => (
            <li key={key}>
              <strong className="capitalize">{key}</strong>: {value}
            </li>
          ))}
        </ul>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-6">
        <button
          onClick={() => handleWhatsAppOrder(selectedProduct)}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 rounded-md flex items-center justify-center gap-2 transition"
        >
          <FaWhatsapp /> WhatsApp
        </button>

        <button
          onClick={handleCallNow}
          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-md flex items-center justify-center gap-2 transition"
        >
          <FaPhoneAlt /> Call
        </button>
      </div>
    </div>
  </div>
)}

    </>
  );
}

export default FeaturedProducts;
