
import { MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleGetQuote = () => {
    window.open('https://wa.me/918248960558?text=Hi, I would like to get a quote for my project', '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Spline 3D Scene Background - Full Screen */}
      <div className="absolute inset-0 z-0">
        <Spline
          scene="https://prod.spline.design/QZkWit0Q1s4LoKT8/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Section - Separated with backdrop */}
      <div className="relative z-10 min-h-screen bg-gradient-to-br from-background/80 via-green-50/70 to-emerald-50/60 backdrop-blur-sm">
        <div className="container mx-auto px-4 flex items-center justify-center min-h-screen">
          {/* Centered Content */}
          <div className="text-center max-w-4xl">
            <div className={`transition-all duration-1000 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
              {/* Main Heading with Gradient */}
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 gradient-text leading-tight">
                <span className="block animate-fade-in">ShadowByte</span>
                <span className="block text-4xl md:text-6xl lg:text-7xl animate-fade-in" style={{ animationDelay: '0.2s' }}>Studio</span>
              </h1>

              {/* Subtitle */}
              <div className={`transition-all duration-1000 delay-300 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <p className="text-2xl md:text-3xl text-muted-foreground mb-4 font-light">
                  Next-gen Design & Development Studio
                </p>
                <p className="text-lg md:text-xl text-foreground/80 mb-12 max-w-2xl mx-auto">
                  Crafting premium digital experiences for startups and creators
                </p>
              </div>

              {/* CTA Buttons */}
              <div className={`transition-all duration-1000 delay-500 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                  <Button 
                    onClick={handleGetQuote}
                    size="lg"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 hover:scale-105 transform px-8 py-6 text-lg"
                  >
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Get Free Quote
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-2 border-green-500 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 hover:scale-105 transform px-8 py-6 text-lg"
                    onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>

              {/* Stats Row */}
              <div className={`transition-all duration-1000 delay-700 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                  {[
                    { number: '10+', label: 'Projects' },
                    { number: '8+', label: 'Happy Clients' },
                    { number: '1+', label: 'Years' },
                    { number: '24h', label: 'Support' }
                  ].map((stat, index) => (
                    <div key={index} className="text-center group">
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-2 group-hover:scale-110 transition-transform duration-300">
                        {stat.number}
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
