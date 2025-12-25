import { Eye } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div data-aos="fade-right">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">About Sadain's Optics</h2>
            <p className="text-gray-400 text-lg mb-6">
              With over 15 years of expertise in eyewear, Sadain's Optics has been serving customers with premium quality glasses and exceptional service. We combine style, comfort, and cutting-edge technology to bring you the best vision experience.
            </p>
            <p className="text-gray-400 text-lg mb-6">
              Our mission is to provide everyone with access to high-quality eyewear that not only enhances vision but also complements personal style. From classic designs to modern trends, we have something for everyone.
            </p>
            <div className="flex items-center space-x-8">
              <div>
                <p className="text-4xl font-bold text-red-500">15+</p>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-500">50K+</p>
                <p className="text-gray-400">Happy Customers</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-red-500">1000+</p>
                <p className="text-gray-400">Products</p>
              </div>
            </div>
          </div>
          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-red-900 to-black rounded-2xl p-12 border border-red-500/30">
              <Eye className="w-32 h-32 text-white mx-auto mb-8" />
              <h3 className="text-2xl font-bold text-white text-center mb-4">Vision Excellence</h3>
              <p className="text-gray-300 text-center">Your trusted partner for perfect vision</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
