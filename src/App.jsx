import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AstroMatch from "./pages/AstroMatch";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Align from "./components/Align";
import { AlignProvider } from "./context/AlignContext";
import Rings from "./pages/Rings";
import Earrings from "./pages/Earrings";
import Necklaces from "./pages/Necklaces";
import Bracelets from "./pages/Bracelets";
import CompleteLook from "./pages/CompleteLook";
import CharmBox from "./pages/CharmBox";


function App() {
  return (
    <AlignProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rings" element={<Rings />} />
          <Route path="/earrings" element={<Earrings />} />
          <Route path="/necklaces" element={<Necklaces />} />
          <Route path="/bracelets" element={<Bracelets />} />
          <Route path="/completelook" element={<CompleteLook />} />
          <Route path="/charmbox" element={<CharmBox />} />
          <Route path="/astro" element={<AstroMatch />} />
        </Routes>
        <Footer />
        <Align />
      </Router>
    </AlignProvider>
  );
}

export default App;
