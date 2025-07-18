
import { Code, Palette, Zap } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Pages: [
      'Homepage',
      'About',
      'Services',
      'Portfolio'
    ],
    'Quick Links': [
      'Career',
      'Blog',
      'Contact',
      'Support'
    ],
    'Follow Us': [
      'Facebook',
      'Instagram',
      'WhatsApp',
      'LinkedIn'
    ]
  };

  return (
    <footer className="relative bg-black text-white border-t border-gray-800">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 transition-transform duration-300 hover:scale-110">
                <img 
                  src="/lovable-uploads/fb541cbc-ecc8-4699-96a5-c08c82224378.png" 
                  alt="ShadowByte Studio Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-emerald-600 bg-clip-text text-transparent transition-all duration-300 hover:from-green-400 hover:to-emerald-500">ShadowByte.Studio</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed transition-colors duration-300 hover:text-gray-200">
              Get a professional website and digital marketing support for your business within your budget.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-green-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-gray-700">
                <Code className="w-5 h-5 text-green-400 transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-green-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-gray-700">
                <Palette className="w-5 h-5 text-green-400 transition-transform duration-300 hover:scale-110" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center hover:border-green-500 transition-all duration-300 cursor-pointer hover:scale-110 hover:bg-gray-700">
                <Zap className="w-5 h-5 text-green-400 transition-transform duration-300 hover:scale-110" />
              </div>
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4 transition-colors duration-300 hover:text-green-500">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a 
                      href="#" 
                      className="text-gray-300 hover:text-green-400 transition-all duration-300 hover:translate-x-1 transform inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-center text-sm text-gray-400">
            <span className="transition-colors duration-300 hover:text-gray-300">©{currentYear} ShadowByte.Studio | All Rights Reserved</span>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-2 h-2 bg-green-500 rounded-full animate-float opacity-30"></div>
      <div className="absolute top-20 right-20 w-3 h-3 bg-emerald-500 rounded-full animate-float opacity-30" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-1 h-1 bg-green-600 rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
    </footer>
  );
};

export default Footer;
