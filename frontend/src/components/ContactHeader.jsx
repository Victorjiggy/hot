import React from "react";
import image from "../assets/luffy-transparent-background(1)-467x534_2e45382d.png";

const ContactHeader = () => {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300  text-center py-16 px-4">
      <div className="container mx-auto flex flex-col items-center">

        {/* Text Content */}
        <h1 className="text-3xl sm:text-4xl font-bold mb-2 text-blue-700">
          Get In Touch
        </h1>

        <p className="text-gray-700 text-base sm:text-lg">
          Send in exclusive messages to us
        </p>

        <span className="block mb-4 text-blue-800 text-lg sm:text-xl font-medium">
          Your opinion matters
        </span>

        {/* Button */}
        <a href="#form">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md text-base sm:text-lg transition">
          Send Message
        </button>
        </a>

        {/* Image */}
        <img
          src={image}
          alt="Contact"
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain mt-10"
        />
      </div>
    </section>
  );
};

export default ContactHeader;
