import React from "react";


import Navigation from "./components/Navigation";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import FeaturesSection from "./components/FeaturesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import './App.css'
import GlassesImage from "./components/GlassesImage";

const App = () =>  {
  return (
    <div className="bg-black">
    
      <Navigation/>
      <HeroSection/>
      <CategoriesSection/>
      <GlassesImage/>
      <FeaturedProducts/>
      <AboutSection/>
      <FeaturesSection/>
      <TestimonialsSection/>
      <ContactSection/>
      <Footer/>

    </div>
  );
}
export default App;