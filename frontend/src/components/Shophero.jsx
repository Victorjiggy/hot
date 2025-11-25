import React from 'react'
import image from '../assets/—Pngtree—sale tag highlighting promotions and_20036418.png'

function Shophero() {
  return (
    <section className="bg-gradient-to-r from-blue-100 via-blue-200 to-purple-300 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-6 py-16">
        {/* Text Section */}
        <div className="w-full md:w-3/5 text-center md:text-left py-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-900">
            Exclusive Deals Available
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Upgrade the lifestyle.
          </p>
          <a href="#products">
            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg shadow">
              View Shop
            </button>
          </a>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-3/5 mt-8 md:mt-0 flex justify-center">
          <img
            src={image}
            alt="Promotions"
            className="w-full h-auto max-h-[70vh] object-contain"
          />
        </div>
      </div>
    </section>
  )
}

export default Shophero
