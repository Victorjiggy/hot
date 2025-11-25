import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import image from '../assets/ChatGPT Image Aug 27, 2025, 02_56_39 AM.png'
import { FaUser, FaSearch, FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const brands = [
  { name: "Midea", link: "/brands/midea" },
  { name: "Bruhm", link: "/brands/bruhm" },
  { name: "Genstar", link: "/brands/genstar" },
  { name: "Etec", link: "/brands/etec" },
  { name: "AEON", link: "/brands/aeon" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [brandsOpen, setBrandsOpen] = useState(false); // Desktop dropdown
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false); // Mobile dropdown

  const activeClass = "text-blue-600 font-bold";
  const inactiveClass = "text-gray-700 font-medium hover:text-blue-600";

  return (
    <nav className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 sticky top-0 z-50">
      <div className="container pr-6 flex items-center justify-between h-24">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold text-blue-600">
          <img src={image} alt="Logo" className="w-40 h-20" />
        </NavLink>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-6 text-gray-700">
          <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Home
          </NavLink>
          <NavLink to="/shop" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Shop
          </NavLink>

          {/* Desktop Brands Dropdown */}
          <div 
            className="relative group cursor-pointer"
            onMouseEnter={() => setBrandsOpen(true)}
            onMouseLeave={() => setBrandsOpen(false)}
          >
            <span className={`${inactiveClass} flex items-center gap-1`}>
              Brands <FaChevronDown className="text-sm"/>
            </span>
            <div
              className={`absolute top-full left-0 mt-2 w-70 bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300  rounded-md shadow-lg overflow-hidden transition-transform origin-top scale-y-0 group-hover:scale-y-100`}
            >
              {brands.map((brand) => (
                <NavLink
                  key={brand.name}
                  to={brand.link}
                  className="block px-4 py-2 text-gray-700 hover:bg-blue-400 hover:text-white"
                >
                  {brand.name}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass}>
            Contact
          </NavLink>
        </div>

        {/* Search & Hamburger */}
        <div className="flex items-center gap-4 md:gap-6">
          {/* Desktop Search */}
          <div className="hidden md:flex items-center bg-gray-100 rounded-full px-4 py-2 w-full max-w-xs">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search for products..."
              className="ml-3 bg-transparent outline-none flex-1 text-sm"
            />
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-gray-700 text-2xl focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes className="hover:text-red-700" /> : <FaBars className="hover:text-blue-700" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="block bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 px-6 pb-4 md:hidden">
          <div className="flex flex-col space-y-4">
            <NavLink to="/" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/shop" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setMenuOpen(false)}>
              Shop
            </NavLink>

            {/* Mobile Brands Dropdown */}
            <div className="flex flex-col">
              <button
                className="flex items-center justify-between text-gray-700 font-medium hover:text-blue-600"
                onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
              >
                Brands <FaChevronDown className={`ml-1 transition-transform ${mobileBrandsOpen ? 'rotate-180' : ''}`} />
              </button>
              {mobileBrandsOpen && (
                <div className="flex flex-col mt-2 ml-4 space-y-1">
                  {brands.map((brand) => (
                    <NavLink
                      key={brand.name}
                      to={brand.link}
                      className="block text-gray-700 hover:text-blue-600"
                      onClick={() => setMenuOpen(false)}
                    >
                      {brand.name}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>

            <NavLink to="/about" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setMenuOpen(false)}>
              About
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeClass : inactiveClass} onClick={() => setMenuOpen(false)}>
              Contact
            </NavLink>
          </div>

          {/* Mobile Search */}
          <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 mt-4 w-full">
            <FaSearch className="text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="ml-3 bg-transparent outline-none flex-1 text-sm w-full"
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
