import React from "react";
import OfferBar from "../components/OfferBar";
import Hero from "../components/Hero";
import DiscoverCollection from "../components/DiscoverCollection";
import CelestialMatch from "../components/CelestialMatch";
import FeaturedPicks from "../components/FeaturedPicks";
import RootedInRitual from "../components/RootedInRitual";
import OccasionCollection from "../components/OccasionCollection";
import WhyDifferent from "../components/WhyDifferent";
import FeaturedProducts from "../components/FeaturedProducts";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pastelPeach via-pastelLavender to-pastelBlue">
      <OfferBar />
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
    </div>
  );
};

export default Home;
