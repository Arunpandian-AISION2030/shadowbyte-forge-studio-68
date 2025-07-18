
import { useState } from 'react';
import { Menu, X, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleGetQuote = () => {
    window.open('https://wa.me/918248960558?text=Hi, I would like to get a quote for my project', '_blank');
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-12 sm:h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10">
              <img 
                src="/lovable-uploads/fb541cbc-ecc8-4699-96a5-c08c82224378.png" 
                alt="ShadowByte Studio Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="text-lg sm:text-xl font-bold gradient-text">ShadowByte.Studio</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground hover:text-green-600 transition-all duration-300 font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-green-600 after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
            <Button 
              onClick={handleGetQuote}
              size="sm"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 transform"
            >
              <MessageSquare className="w-3 h-3 mr-1.5" />
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
          <div className="px-2 pt-2 pb-2 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 border border-border">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-3 py-2 text-sm text-foreground hover:text-green-600 transition-all duration-300 hover:bg-green-50 dark:hover:bg-green-950/30 rounded-md"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-3 py-2">
              <Button 
                onClick={handleGetQuote}
                size="sm"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white transition-all duration-300"
              >
                <MessageSquare className="w-3 h-3 mr-1.5" />
                Get Quote
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
