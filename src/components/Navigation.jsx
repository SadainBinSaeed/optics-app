import React, { useEffect, useState } from "react";
import { Menu, X, ShoppingCart, Eye } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? "bg-black shadow-lg" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">

        {/* LOGO */}
        <div className="flex items-center gap-2">
          <div className="w-12 h-12 bg-red-900 rounded-full flex items-center justify-center">
            <Eye className="text-white" />
          </div>
          <span className="text-white text-2xl font-bold">Sadain's Optics</span>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-6">
          {["Home", "Categories", "Featured", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-red-500">
              {item}
            </a>
          ))}
          <button className="bg-red-900 px-5 py-2 rounded-full text-white flex items-center gap-2">
            <ShoppingCart size={18} /> Cart
          </button>
        </div>

        {/* MOBILE ICON */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-black px-4 pb-4">
          {["Home", "Categories", "Featured", "About", "Contact"].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block py-2 text-white">
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
