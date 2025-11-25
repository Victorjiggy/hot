import React from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Hero';
import Features from '../components/PromoBanners';
import FeaturedProducts from "../components/FeaturedProducts";
import SaleBanner from "../components/SaleBanner";
import TopTrendingSection from '../components/TopTrendingSection';

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeIn"  } }
};

const Home = () => {
  return (
    <div className='bg-white overflow-hidden'>

      {/* Hero Section with Smooth Fade */}
      <motion.div variants={fadeIn} initial="hidden" animate="show">
        <Hero />
      </motion.div>

      <div className='mt-[3%] '>

        {/* Features Section */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <Features />
        </motion.div>

        {/* Featured Products */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <FeaturedProducts />
        </motion.div>

        {/* Sale Banner */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <SaleBanner />
        </motion.div>

        {/* Trending Section */}
        <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
          <TopTrendingSection />
        </motion.div>

      </div>
    </div>
  );
};

export default Home;
