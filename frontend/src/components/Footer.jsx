import React from 'react';
import image from '../assets/ChatGPT Image Aug 27, 2025, 02_56_39 AM.png'
import { Link } from "react-router-dom";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-100 text-white py-10">
      <div className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        {/* Logo / About */}
        <div className="text-center sm:text-left">        
             <img 
               src={image}
               alt="" className="ml-[25%] sm:ml-[10%] w-40 h-20"
               />
               <br /> 
          <p className="text-gray-900 text-sm">
            Your one-stop destination for the latest electronics.
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center sm:text-left">
          <h4 className="text-black font-semibold mb-3">Quick Links</h4>
          <ul className="text-gray-900 text-sm space-y-2">
            <li className='hover:text-blue-400'><Link to="/">Home</Link></li>
            <li className='hover:text-blue-400'><Link to="/shop">Shop</Link></li>
            <li className='hover:text-blue-400'><Link to="/contact">Contact</Link></li>
            <li className='hover:text-blue-400'><Link to="/about">About</Link></li>
          </ul>
        </div>

        {/* Categories */}
        <div className="text-center sm:text-left">
          <h4 className="text-black font-semibold mb-3">Categories</h4>
          <ul className="text-gray-900 text-sm space-y-2">
            <li className='hover:text-blue-400'>Air Conditioners</li>
            <li className='hover:text-blue-400'>Refrigerators</li>
            <li className='hover:text-blue-400'>Televisions</li>
            <li className='hover:text-blue-400'>Gas Cookers</li>
            <li className='hover:text-blue-400'>Washing Machines</li>
            <li className='hover:text-blue-400'>Kitchen Appliances</li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="text-center sm:text-left">
          <h4 className="text-black font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center sm:justify-start space-x-4 text-gray-900">
            <FaFacebookF className="hover:text-blue-600 cursor-pointer transition" />
            <FaTwitter className="hover:text-blue-400 cursor-pointer transition" />
            <FaInstagram className="hover:text-pink-500 cursor-pointer transition" />
          </div>
        </div>

      </div>

      {/* Copyright */}
      <p className="text-center text-gray-500 text-sm mt-10">
        © 2025 JAMVACC Electronics. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
