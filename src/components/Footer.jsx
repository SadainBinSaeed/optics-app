import {Eye , Facebook , Instagram , Twitter} from  "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-red-900/30 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-900 to-red-700 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Sadain's Optics</span>
            </div>
            <p className="text-gray-400">Your vision, our passion</p>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-red-500 transition">Home</a></li>
              <li><a href="#categories" className="text-gray-400 hover:text-red-500 transition">Categories</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-red-500 transition">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-red-500 transition">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Sunglasses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Eyeglasses</a></li>
              <li><a href="#" className="text-gray-400 hover:text-red-500 transition">Sports Glasses</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition">
                <Facebook className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition">
                <Instagram className="w-5 h-5 text-white" />
              </a>
              <a href="#" className="w-10 h-10 bg-red-900 rounded-full flex items-center justify-center hover:bg-red-800 transition">
                <Twitter className="w-5 h-5 text-white" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">&copy; 2024 Sadain's Optics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};


export default Footer;
