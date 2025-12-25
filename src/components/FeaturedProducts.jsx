import { ShoppingCart , Star } from "lucide-react";
import GlassesImage from "./GlassesImage";

const FeaturedProducts = () => {
  const products = [
    { name: 'Premium Aviator', category: 'Sunglasses', price: '$199', rating: 5, type: 'sunglasses' },
    { name: 'Classic Rectangle', category: 'Eyeglasses', price: '$149', rating: 5, type: 'eyeglasses' },
    { name: 'Pro Sport Shield', category: 'Sports', price: '$179', rating: 4, type: 'sports' },
    { name: 'Vintage Round', category: 'Eyeglasses', price: '$159', rating: 5, type: 'eyeglasses' },
    { name: 'Polarized Wayfarer', category: 'Sunglasses', price: '$189', rating: 4, type: 'sunglasses' },
    { name: 'Cycling Pro', category: 'Sports', price: '$199', rating: 5, type: 'sports' }
  ];

  return (
    <section id="featured" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Products</h2>
          <p className="text-gray-400 text-lg">Our most popular and trending eyewear</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl overflow-hidden hover:border-red-500 transition transform hover:scale-105" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="h-48 bg-gradient-to-br from-red-900/10 to-black flex items-center justify-center p-4 overflow-hidden">
                <GlassesImage type={product.type} />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm text-red-500">{product.category}</span>
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    ))}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-red-500 mb-4">{product.price}</p>
                <button className="w-full bg-red-900 text-white py-3 rounded-full hover:bg-red-800 transition flex items-center justify-center space-x-2">
                  <ShoppingCart className="w-4 h-4" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturedProducts;
