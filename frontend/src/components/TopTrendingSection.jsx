import React from "react";

const products = {
  topSelling: [
    { name: "Apple iPhone 13 Pro", price: "$999", img: "/assets/airconditioner.webp" },
    { name: "Bluetooth Headphones", price: "$120", img: "/images/headphones.jpg" },
    { name: "HD Smart CCTV Camera", price: "$180", img: "/images/cctv.jpg" },
  ],
  trending: [
    { name: "Smart Watch", price: "$250", img: "/images/smartwatch.jpg" },
    { name: "Wireless Keyboard & Mouse", price: "$80", img: "/images/keyboard.jpg" },
    { name: "Portable SSD 1TB", price: "$150", img: "/images/ssd.jpg" },
  ],
};

const ProductList = ({ title, items }) => (
  <div>
    <h3 className="text-lg font-semibold mb-4 text-gray-800">{title}</h3>
    <ul className="space-y-4">
      {items.map((product, index) => (
        <li key={index} className="flex items-center gap-4">
          <img
            src={product.img}
            className="w-14 h-14 object-cover rounded-lg shadow"
          />
          <div>
            <h4 className="text-sm font-medium">{product.name}</h4>
            <p className="text-blue-600 font-semibold text-sm">{product.price}</p>
          </div>
        </li>
      ))}
    </ul>
  </div>
);

function TopTrendingSection() {
  return (
    <section className="container mx-auto px-6 py-12 grid-cols-1  grid md:grid-cols-3 gap-8">
      <ProductList title="Top Selling" items={products.topSelling} />
      <ProductList title="Trending Products" items={products.trending} />
      <ProductList title="New Arrivals" items={products.trending} />
    </section>
  );
}

export default TopTrendingSection;
