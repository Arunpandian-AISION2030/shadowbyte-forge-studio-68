import { Code, Palette, Zap, Sparkles, ArrowRight, Globe, Figma, Brush, Monitor } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      title: 'Website Development',
      description: 'Custom React.js and Next.js websites that convert visitors into customers. Lightning fast, SEO optimized, and mobile-first.',
      icon: Globe,
      features: ['React.js & Next.js', 'Vercel Hosting', 'Mobile Responsive', 'SEO Optimized'],
      price: 'From ₹4,999',
      color: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Poster Design',
      description: 'Eye-catching posters that grab attention and drive engagement. Perfect for social media, events, and marketing campaigns.',
      icon: Brush,
      features: ['Canva Pro', 'Figma Design', 'Photoshop', 'Print Ready'],
      price: 'From ₹1,999',
      color: 'from-emerald-100 to-green-100',
      iconColor: 'text-emerald-600'
    },
    {
      title: 'Logo Design',
      description: 'Memorable logos that represent your brand identity. Minimal, iconic, and custom-crafted for your unique story.',
      icon: Sparkles,
      features: ['Custom Design', 'Multiple Concepts', 'Vector Files', 'Brand Guidelines'],
      price: 'From ₹999',
      color: 'from-green-100 to-emerald-100',
      iconColor: 'text-green-600'
    },
    {
      title: 'Digital Branding',
      description: 'Complete brand identity packages including social media assets, brand kits, and templates for consistent growth.',
      icon: Zap,
      features: ['Brand Strategy', 'Social Media Kit', 'Templates', 'Style Guide'],
      price: 'From ₹19,999',
      color: 'from-emerald-100 to-green-100',
      iconColor: 'text-emerald-600'
    }
  ];

  const handleWhatsApp = () => {
    window.open('https://wa.me/918248960558?text=Hi, I would like to get a custom quote', '_blank');
  };

  return (
    <section id="services" className="py-20 relative bg-gradient-to-b from-white to-green-50/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <Code className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Premium Solutions</span>
            <br />
            <span className="text-gray-800">Affordable Prices</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver high-quality digital solutions that help startups and creators 
            establish their online presence and grow their business.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="bg-white border border-green-200 hover:border-green-300 transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1">
                <CardContent className="p-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} border border-green-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 vector-illustration`}>
                    <IconComponent className={`w-8 h-8 ${service.iconColor}`} />
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-2xl font-bold mb-4 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">{service.price}</span>
                    <Button size="sm" variant="outline" className="border-green-300 text-green-600 hover:bg-green-50 group-hover:bg-green-100 group-hover:border-green-400 transition-all duration-300">
                      <ArrowRight className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button 
            onClick={handleWhatsApp}
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300"
          >
            Get Custom Quote
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
