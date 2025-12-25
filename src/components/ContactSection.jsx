import { Phone , Mail , MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h2>
          <p className="text-gray-400 text-lg">We'd love to hear from you</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div data-aos="fade-right">
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-900 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Phone</h3>
                  <p className="text-gray-400">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-900 rounded-full flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Email</h3>
                  <p className="text-gray-400">info@sadainsoptics.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex items-center justify-center w-12 h-12 bg-red-900 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-white font-bold mb-1">Address</h3>
                  <p className="text-gray-400">123 Optics Street, Vision City, VC 12345</p>
                </div>
              </div>
            </div>
          </div>

          <div data-aos="fade-left">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-red-900/30 rounded-2xl p-8">
              <div className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                <input type="email" placeholder="Your Email" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none" />
                <textarea placeholder="Your Message" rows="4" className="w-full bg-black border border-gray-700 rounded-lg px-4 py-3 text-white focus:border-red-500 focus:outline-none"></textarea>
                <button className="w-full bg-red-900 text-white py-3 rounded-full hover:bg-red-800 transition">Send Message</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
