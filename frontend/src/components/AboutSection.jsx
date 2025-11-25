import React from "react";
import luxStore from "../assets/ChatGPT Image Aug 27, 2025, 02_56_39 AM.png";

const AboutSection = () => (
  <section className="py-16 px-4 ">
    <div className="container mx-auto grid md:grid-cols-2 gap-10 items-center">
      
      {/* Text */}
      <div>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-400 mb-4 leading-snug">
          WHY JAMVACCELECTRONICS
        </h2>

        <p className="text-gray-700 text-base sm:text-lg mb-4">
         🌟 Mission
At Jamvaccelectronics, our mission is to deliver reliable, high-quality electronics that enhance everyday living. We aim to provide customers with trusted brands, competitive prices, and exceptional service, ensuring a smooth and satisfying shopping experience each time.
 <br className="mb-4"/>
🚀 Vision
Our vision is to become one of the most dependable and customer-focused electronics retailers, known for innovation, integrity, and a wide selection of modern home and personal technology. We strive to create a marketplace where quality meets affordability and customers feel confident in every purchase.
<br className="mb-4"/>
🛒 Why Shop With Us?
<br className="mb-4"/>
Top-Quality Products: We offer only authentic and carefully selected electronics from reputable brands.
<br />
Affordable Prices: Get premium technology without the premium price tag.
<br />
Excellent Customer Service: Our team is committed to guiding you before, during, and after your purchase.
<br />
Fast & Secure Shopping: Enjoy a reliable and secure shopping experience, whether online or in-store.
<br />
Wide Selection: From home appliances to personal gadgets, we have something for everyone.
        </p>
      </div>

      {/* Image */}
      <div className="flex justify-center">
        <img
          src={luxStore}
          alt="Our Workshop"
          className="rounded-lg shadow-lg w-full max-w-md sm:max-w-lg md:max-w-full object-cover"
        />
      </div>

    </div>
  </section>
);

export default AboutSection;
