import React , { useState }  from 'react';
import { motion } from 'framer-motion';
import Shophero from '../components/Shophero'
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import { allProducts } from "../data/products"; 

const Shop = () => {
  const [filters, setFilters] = useState({
    category: "All",
    brands: [],
    maxPrice: 1500000,
  });

  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addToCart = (product) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter((item) => item !== product));
  };

  return (
    <div className=" max-w-8xl ">

      {/* Hero with fade-in animation */}
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeIn" }}>
        <Shophero />
      </motion.div>

      <motion.main className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-4 gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <SidebarFilters filters={filters} setFilters={setFilters} />
        <ProductGrid
          products={allProducts}
          filters={filters}
        />
      </motion.main>
       
    </div>
  );
};

export default Shop;