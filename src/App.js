import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlideFinityPrivacyPolicy from "./components/privacy-policy/SlideFinityPrivacyPolicy";
import SlideFinityTermsOfService from "./components/terms-of-service/SlideFinityTermsOfService";
import SlidefinityHomePage from "./components/slidefinity-home-page/SlidefinityHomePage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide-finity-privacy-policy" element={<SlideFinityPrivacyPolicy />} />
        <Route path="/slide-finity-terms-of-service" element={<SlideFinityTermsOfService />} />
        <Route path="/slide-finity-home-page" element={<SlidefinityHomePage />} />

      </Routes>
    </Router>
  );
}

export default App;
