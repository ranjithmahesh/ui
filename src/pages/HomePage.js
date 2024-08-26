import React from "react";
import CSVFolder from "../components/CSVFolder";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import WhyWebClazify from "../components/WhyWebClazify";

function HomePage() {
  return (
    <div className="position-relative">
      <Header />
      <WhyWebClazify />
      <Features />
      <Pricing />
      <CSVFolder />

      <Footer />
    </div>
  );
}

export default HomePage;
