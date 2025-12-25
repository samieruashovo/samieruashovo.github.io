import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SlideFinityPrivacyPolicy from "./components/privacy-policy/SlideFinityPrivacyPolicy";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/slide-finity-privacy-policy" element={<SlideFinityPrivacyPolicy />} />
      </Routes>
    </Router>
  );
}

export default App;
