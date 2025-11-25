import React from "react";
import { motion } from 'framer-motion';
import ContactHeader from "../components/ContactHeader";
import ContactSection from "../components/ContactSection";
import Map from "../components/Map";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeIn" } }
};

const ContactPage = () => {
  return (
    <>
      <motion.div variants={fadeIn} initial="hidden" animate="show">
        <ContactHeader />
      </motion.div>

      <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
        <ContactSection />
      </motion.div>

     <motion.div variants={fadeIn} initial="hidden" whileInView="show" viewport={{ once: true }}>
      <Map />
    </motion.div>
    </>
  );
};

export default ContactPage;
