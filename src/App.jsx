import React from "react";
import Navbar from "./component/Navbar";
import SectionA from "./component/sectionA";
import SectionB from "./component/SectionB";
import SectionC from "./component/SectionC";
import SectionD from "./component/SectionD";
import Footer from "./component/Footer";
import About from "./component/About/About";
import InventoryHome from "./component/Inventory/InventoryHome";
import Service from "./component/Service/Service";
import Contact from "./component/Contact/Contact";
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* home route shows the full landing sections */}
        <Route
          path="/"
          element={
            <>
              <SectionA />
              <SectionB />
              <SectionC />
              <SectionD />
              <Footer />
            </>
          }
        />

        {/* inventory route shows only inventory component */}
        <Route path="/inventory" element={<InventoryHome />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Service />} />
        <Route path="/contact" element={<Contact />} />

        {/* redirect any unknown path back to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

