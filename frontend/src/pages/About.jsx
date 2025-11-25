import React from "react";
import { motion } from 'framer-motion';
import AboutHero from "../components/AboutHero";
import AboutSection from "../components/AboutSection";
import TeamSection from "../components/TeamSection";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeIn" } }
};

const About = () => (
  <>
    <motion.div variants={fadeIn} initial="hidden" animate="show">
      <AboutHero />
    </motion.div>

    <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <AboutSection />
    </motion.div>

    <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <TeamSection />
    </motion.div>
  </>
);

export default About;