import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {


     useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);

  return (
    <section  id="home" className="h-screen flex items-center justify-center bg-gradient-to-br from-black to-red-900">
      <div data-aos="zoom-in" className="text-center px-4">
        <h1  className="text-5xl md:text-7xl text-white font-bold mb-6">
          Welcome to <span className="text-red-500">Sadain's Optics</span>
        </h1>
        <p  className="text-gray-300 text-xl mb-8">
          Premium Eyewear for Perfect Vision
        </p>
        <button className="bg-red-900 px-8 py-4 rounded-full text-white hover:bg-red-800">
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
