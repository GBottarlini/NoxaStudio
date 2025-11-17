import React from "react";
import NavBar from "./components/NavBar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Services from "./sections/Services.jsx";
import Packs from "./sections/Packs.jsx";
import Process from "./sections/Process.jsx";
import Portfolio from "./sections/Portfolio.jsx";
import FAQ from "./sections/FAQ.jsx";
import Contact from "./sections/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="noxa-root">
      <NavBar />
      <Hero />
      <About />
      <Services />
      <Packs />
      <Process />
      <Portfolio />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
