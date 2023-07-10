import { useState } from "react";
import Navbar from "./components/Navbar.tsx";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Pricing" element={<Pricing />} />
          <Route path="/About" element={<About />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
