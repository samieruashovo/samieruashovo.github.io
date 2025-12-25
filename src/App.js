import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlideFinityPrivacyPolicy from "./components/privacy-policy/SlideFinityPrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide-finity-privacy-policy" element={<SlideFinityPrivacyPolicy />} />
        <Route path="/slide-finity-terms-of-service" element={<SlideFinityPrivacyPolicy />} />
        <Route path="/slide-finity-home-page" element={<SlideFinityPrivacyPolicy />} />

      </Routes>
    </Router>
  );
}

export default App;
