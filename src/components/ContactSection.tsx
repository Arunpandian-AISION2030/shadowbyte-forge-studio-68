
import { Send } from 'lucide-react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';

const ContactSection = () => {
  return (
    <section id="contact" className="py-10 sm:py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16">
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-green-100 dark:bg-green-950 border border-green-200 dark:border-green-800 mb-4 sm:mb-6">
            <Send className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 mr-1.5 sm:mr-2" />
            <span className="text-xs sm:text-sm font-medium text-green-800 dark:text-green-200">Get In Touch</span>
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-3 sm:mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Start Your</span>
            <br />
            <span className="text-gray-800 dark:text-gray-200">Digital Journey</span>
          </h2>
          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto px-4">
            Ready to transform your ideas into reality? Let's discuss your project 
            and create something extraordinary together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-12">
          <ContactForm />
          <ContactInfo />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
