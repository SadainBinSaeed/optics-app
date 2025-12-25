import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    { name: 'Sarah Johnson', text: 'Best quality glasses I have ever purchased. Highly recommend!', rating: 5 },
    { name: 'Mike Williams', text: 'Excellent service and amazing collection. Will shop again.', rating: 5 },
    { name: 'Emily Davis', text: 'Perfect fit and stylish design. Very satisfied with my purchase.', rating: 5 }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Customer Reviews</h2>
          <p className="text-gray-400 text-lg">What our customers say about us</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8" data-aos="fade-up" data-aos-delay={idx * 100}>
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-gray-300 mb-6 italic">"{testimonial.text}"</p>
              <p className="text-white font-bold">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
