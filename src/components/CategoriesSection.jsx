import React from "react";
import { Sun, Eye, Trophy, Check } from "lucide-react";

const CategoriesSection = () => {
  const categories = [
    { icon: Sun, name: 'Sunglasses', types: ['Aviator', 'Wayfarer', 'Round', 'Cat Eye', 'Oversized', 'Sport'] },
    { icon: Eye, name: 'Eyeglasses', types: ['Rectangle', 'Round', 'Oval', 'Square', 'Cat Eye', 'Geometric'] },
    { icon: Trophy, name: 'Sports Glasses', types: ['Running', 'Cycling', 'Swimming', 'Basketball', 'Skiing', 'Tennis'] }
  ];

  return (
    <section id="categories" className="py-20 bg-black">
      <div data-aos="flip-left" className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="flip-left">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Categories</h2>
          <p className="text-gray-400 text-lg">Explore our extensive collection of premium eyewear</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8 hover:border-red-500 transition transform hover:scale-105" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex items-center justify-center w-16 h-16 bg-red-900 rounded-full mb-6">
                <category.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{category.name}</h3>
              <ul className="space-y-2">
                {category.types.map((type, i) => (
                  <li key={i} className="text-gray-400 flex items-center">
                    <Check className="w-4 h-4 text-red-500 mr-2" />
                    {type}
                  </li>
                ))}
              </ul>
              <button className="mt-6 w-full bg-red-900 text-white py-3 rounded-full hover:bg-red-800 transition">
                View Collection
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default CategoriesSection;
