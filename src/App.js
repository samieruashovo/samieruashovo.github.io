import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlideFinityPrivacyPolicy from "./components/privacy-policy/SlideFinityPrivacyPolicy";
import SlideFinityTermsOfService from "./components/terms-of-service/SlideFinityTermsOfService";
import SlidefinityHomePage from "./components/slidefinity-home-page/SlidefinityHomePage";
import NeonGobyPrivacyPolicy from "./components/privacy-policy/NeonGobyPrivacyPolicy";
import NeonGobyTermsOfService from "./components/terms-of-service/NeonGobyTermsOfService";
import NeonGobyHomePage from "./components/neon-goby-home-page/NeonGobyHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide-finity-privacy-policy" element={<SlideFinityPrivacyPolicy />} />
        <Route path="/slide-finity-terms-of-service" element={<SlideFinityTermsOfService />} />
        <Route path="/slide-finity-home-page" element={<SlidefinityHomePage />} />
        <Route path="/neon-goby-privacy-policy" element={<NeonGobyPrivacyPolicy />} />
        <Route path="/neon-goby-terms-of-service" element={<NeonGobyTermsOfService />} />
        <Route path="/neon-goby-home-page" element={<NeonGobyHomePage />} />
      </Routes>
    </Router>
  );
}

export default App;
