import { Check , TrendingUp , Trophy , Star } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    { icon: Check, title: 'Quality Assurance', desc: 'Premium materials and craftsmanship' },
    { icon: TrendingUp, title: 'Latest Trends', desc: 'Stay updated with fashion trends' },
    { icon: Trophy, title: 'Expert Service', desc: 'Professional eye care consultants' },
    { icon: Star, title: 'Customer Satisfaction', desc: '99% positive customer reviews' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose Us</h2>
          <p className="text-gray-400 text-lg">Experience the difference with Sadain's Optics</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="text-center" data-aos="zoom-in" data-aos-delay={idx * 100}>
              <div className="flex items-center justify-center w-20 h-20 bg-red-900 rounded-full mx-auto mb-4">
                <feature.icon className="w-10 h-10 text-white" /> 
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default FeaturesSection;
