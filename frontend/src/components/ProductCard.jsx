import React, { useState } from "react";
import { FaHeart, FaWhatsapp, FaPhoneAlt, FaTimes } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const phoneNumber = "2348012345678";

  const handleWhatsAppOrder = () => {
    const message = `Hello! I’d like to order this product:\n\n🛍️ *${product.name}*\n💰 Price: ₦${product.price.toLocaleString()}\n\nPlease confirm availability.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
  };

  const handleCallNow = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  return (
    <>
      {/* Product Card */}
      <div
        className="bg-white rounded-lg shadow hover:-translate-y-1 transition-transform p-4 relative cursor-pointer"
        onClick={() => setIsModalOpen(true)}
      >
        <img
          src={product.img}
          alt={product.name}
          className="w-full h-48 object-cover rounded-md"
        />
        <h3 className="mt-3 font-bold">{product.name}</h3>
        <p className="text-blue-400 font-semibold mb-4">
          ₦{product.price.toLocaleString()}
        </p>

        <div className="flex items-center gap-[5%]">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              handleWhatsAppOrder(product);
            }}
            className="bg-green-500 hover:bg-green-600 text-white text-sm px-2 py-2 rounded-md transition flex items-center gap-2"
          >
            <FaWhatsapp className="text-lg" /> WhatsApp
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation(); // Prevent card click
              handleCallNow();
            }}
            className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white text-sm px-2 py-2 w-10 h-10 rounded-full transition"
          >
            <FaPhoneAlt className="text-base" />
          </button>

          <button className="ml-auto text-gray-600 hover:text-red-500">
            <FaHeart />
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="bg-white rounded-lg shadow-lg w-full max-w-3xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-500 text-2xl"
            >
              <FaTimes />
            </button>

            <div className="flex flex-col md:flex-row p-6 gap-6">
              <img
                src={product.img}
                alt={product.name}
                className="w-full md:w-1/2 h-64 md:h-auto object-cover rounded-md"
              />

              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
                <p className="text-blue-400 font-semibold mb-4">
                  ₦{product.price.toLocaleString()}
                </p>
                <p className="text-gray-700 mb-4">
                  {product.description}
                </p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={handleWhatsAppOrder}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <FaWhatsapp /> WhatsApp
                  </button>
                  <button
                    onClick={handleCallNow}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center gap-2"
                  >
                    <FaPhoneAlt /> Call Now
                  </button>
                  <button className="ml-auto text-gray-600 hover:text-red-500">
                    <FaHeart />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductCard;
