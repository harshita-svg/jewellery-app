// src/App.jsx
import React from "react";
import OfferBar from "./components/OfferBar";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import DiscoverCollection from "./components/DiscoverCollection";
import CelestialMatch from "./components/CelestialMatch";
import FeaturedPicks from "./components/FeaturedPicks";
import RootedInRitual from "./components/RootedInRitual";
import OccasionCollection from "./components/OccasionCollection";
import WhyDifferent from "./components/WhyDifferent";
import FeaturedProducts from "./components/FeaturedProducts";
import Testimonials from "./components/Testimonials";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import Align from "./components/Align"; // floating chatbot
import { AlignProvider } from "./context/AlignContext"; // context provider

function App() {
  return (
    <AlignProvider>
      <div className="min-h-screen bg-[length:400%_400%] animate-gradient-x bg-gradient-to-r from-pastelPeach via-pastelLavender to-pastelBlue">
        {/* Top elements */}
        <OfferBar />
        <Navbar />
        {/* Main homepage content */}
        <Hero />
        <DiscoverCollection />
        <CelestialMatch />
        <FeaturedPicks />
        <RootedInRitual />
        <OccasionCollection />
        <WhyDifferent />
        <FeaturedProducts />
        <Testimonials />
        <Newsletter />
        {/* Footer and chatbot */}
        <Footer />
        <Align /> {/* ✅ always mounted floating chat orb */}
      </div>
    </AlignProvider>
  );
}

export default App;
