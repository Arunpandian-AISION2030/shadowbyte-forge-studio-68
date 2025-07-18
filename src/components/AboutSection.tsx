
import { Users, Target, Zap, Heart, Award, Globe, Code } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const AboutSection = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'Empowering 1000+ digital creators with premium tools and solutions that scale their businesses.'
    },
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'Leveraging cutting-edge technology including AI, React.js, and modern design principles.'
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'Building meaningful relationships with clients and delivering solutions that truly matter.'
    },
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Delivering premium digital solutions with attention to detail and commitment to excellence.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Serving clients worldwide with scalable solutions that transcend geographical boundaries.'
    },
    {
      icon: Users,
      title: 'Community First',
      description: 'Building a thriving community of creators and entrepreneurs through collaboration and support.'
    }
  ];

  const stats = [
    { number: '10+', label: 'Projects Completed' },
    { number: '8+', label: 'Happy Clients' },
    { number: '1', label: 'Years Experience' },
    { number: '24h', label: 'Support Available' }
  ];

  return (
    <section id="about" className="py-20 relative bg-gradient-to-b from-green-50/30 to-white">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-12 h-12 bg-emerald-300 rounded-lg rotate-12 animate-float opacity-20"></div>
      <div className="absolute top-40 right-20 w-8 h-8 bg-green-400 rounded-full animate-float opacity-20" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-40 left-20 w-6 h-6 bg-emerald-500 rounded-sm animate-float opacity-20" style={{ animationDelay: '2.5s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <Users className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">About Us</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Who We</span>
            <br />
            <span className="text-gray-800">Are</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're a passionate team of designers and developers on a mission to empower 
            digital creators with premium, affordable solutions that drive real results.
          </p>
        </div>

        {/* Stats Section with enhanced design */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center bg-white/80 backdrop-blur-sm border border-green-200 rounded-2xl p-6 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Values</span>
          </h3>
          <p className="text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do at ShadowByte.Studio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-green-200 hover:border-green-300 transition-all duration-300 group text-center hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-100 to-emerald-100 border border-green-200 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-green-700 transition-colors duration-300">{value.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Mission Statement */}
        <div className="text-center p-8 rounded-2xl bg-gradient-to-r from-green-100/50 to-emerald-100/50 border border-green-200 mb-16">
          <h3 className="text-3xl font-bold mb-4">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Mission</span>
          </h3>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            To democratize premium digital design and development, making it accessible and affordable 
            for every startup, creator, and individual who dreams of building something extraordinary. 
            We believe great design shouldn't be a luxury—it should be a foundation for success.
          </p>
        </div>

        {/* Company Story with enhanced illustration */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Our Story</span>
            </h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              ShadowByte.Studio was born from the vision of creating exceptional digital experiences 
              that empower businesses and creators to achieve their goals. We combine cutting-edge 
              technology with creative excellence to deliver solutions that make a real impact.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our team brings together diverse expertise in design, development, and digital strategy 
              to create comprehensive solutions that drive growth and success for our clients worldwide.
            </p>
          </div>
          <div className="relative">
            <div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl border border-green-200 flex items-center justify-center relative overflow-hidden">
              {/* Central coding illustration */}
              <div className="text-center relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Code className="w-10 h-10 text-white" />
                </div>
                <p className="text-gray-600 font-medium">Building the future of digital experiences</p>
              </div>
              
              {/* Floating code elements */}
              <div className="absolute top-4 left-4 w-8 h-8 bg-green-400 rounded-lg flex items-center justify-center animate-float opacity-80">
                <span className="text-white text-xs font-bold">&lt;/&gt;</span>
              </div>
              <div className="absolute top-8 right-6 w-6 h-6 bg-emerald-400 rounded-full flex items-center justify-center animate-float opacity-80" style={{ animationDelay: '1s' }}>
                <span className="text-white text-xs">{ }</span>
              </div>
              <div className="absolute bottom-6 left-8 w-7 h-7 bg-green-500 rounded-lg flex items-center justify-center animate-float opacity-80" style={{ animationDelay: '2s' }}>
                <span className="text-white text-xs">CSS</span>
              </div>
              <div className="absolute bottom-8 right-4 w-5 h-5 bg-emerald-500 rounded-full flex items-center justify-center animate-float opacity-80" style={{ animationDelay: '0.5s' }}>
                <span className="text-white text-xs">JS</span>
              </div>
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                  backgroundImage: 'linear-gradient(rgba(34, 197, 94, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 197, 94, 0.3) 1px, transparent 1px)',
                  backgroundSize: '20px 20px'
                }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
