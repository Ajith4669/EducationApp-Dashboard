import React from "react";
import Dashboard from "../components/home/dashboard";
import About from "../components/home/about";
import Feature from "../components/home/feature";
import Faq from "../components/home/faq";
import Pricing from "../components/home/pricing";
import Contact from "../components/home/contact";

function AppHome() {
  return (
    <div className="main">
      <Dashboard />
      <About />
      <Feature />
      <Faq />
      <Pricing />
      <Contact />
    </div>
  );
}

export default AppHome;
