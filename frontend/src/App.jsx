import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import Navbar from './components/Navbar';
import 'leaflet/dist/leaflet.css';
import ChristmasDealsPage from "./pages/ChristmasDealsPage";
import Footer from './components/Footer';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/christmas" element={<ChristmasDealsPage />} />
        </Routes>
      <Footer />
    </Router>
  );
}

export default App;
