import React, { useEffect } from "react";
import CSVFolder from "../components/CSVFolder";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Pricing from "../components/Pricing";
import WhyValidX from "../components/WhyValidX";

function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="">
      <Header />
      <WhyValidX />
      <Features />
      <Pricing />
      <CSVFolder />

      <Footer />
    </div>
  );
}

export default HomePage;
