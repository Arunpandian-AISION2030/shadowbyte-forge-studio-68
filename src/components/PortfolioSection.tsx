
import { ExternalLink, Code, Palette, Smartphone, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PortfolioSection = () => {
  const projects = [
    {
      title: 'Mediq App',
      category: 'Healthcare App Development',
      description: 'Complete healthcare management system with appointment booking, patient records, and telemedicine features.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop',
      tags: ['React.js', 'Node.js', 'MongoDB', 'Healthcare'],
      type: 'app',
      url: 'https://mediq-app-3.vercel.app/',
      stats: { users: '10K+', rating: '4.8' }
    },
    {
      title: 'GrowUp Journal',
      category: 'Personal Development Platform',
      description: 'Digital journaling and habit tracking platform helping users achieve their personal growth goals.',
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
      tags: ['Next.js', 'PostgreSQL', 'Stripe', 'Analytics'],
      type: 'web',
      url: 'https://growup-journel.vercel.app/',
      stats: { users: '5K+', rating: '4.9' }
    },
    {
      title: 'Poster Collection',
      category: 'Visual Design',
      description: 'A curated collection of marketing posters, social media graphics, and brand assets for various clients.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tags: ['Figma', 'Photoshop', 'Brand Design', 'Marketing'],
      type: 'design',
      url: 'https://poster-collection.vercel.app/',
      stats: { designs: '100+', clients: '50+' }
    }
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case 'app':
        return Smartphone;
      case 'web':
        return Code;
      case 'design':
        return Palette;
      default:
        return Code;
    }
  };

  const handleProjectClick = (url: string | null) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section id="portfolio" className="py-20 relative bg-gradient-to-b from-white to-green-50/30">
      {/* Background decorative elements */}
      <div className="absolute top-32 right-16 w-10 h-10 bg-emerald-300 rounded-lg rotate-45 animate-float opacity-20"></div>
      <div className="absolute bottom-32 left-16 w-8 h-8 bg-green-400 rounded-full animate-float opacity-20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-8 w-6 h-6 bg-emerald-500 rounded-sm animate-float opacity-20" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <Palette className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Our Work</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Featured</span>
            <br />
            <span className="text-gray-800">Projects</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest work showcasing innovative designs and cutting-edge development 
            for startups, healthcare, and personal growth platforms.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => {
            const IconComponent = getIcon(project.type);
            return (
              <Card key={index} className="bg-white/90 backdrop-blur-sm border border-green-200 hover:border-green-300 transition-all duration-300 group overflow-hidden hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1">
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
                  
                  {/* Type Icon */}
                  <div className="absolute top-4 right-4">
                    <div className="w-10 h-10 rounded-lg bg-white/90 backdrop-blur-sm border border-green-200 flex items-center justify-center">
                      <IconComponent className="w-5 h-5 text-green-600" />
                    </div>
                  </div>

                  {/* Stats overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center justify-between text-white text-sm">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span>{project.stats.rating || project.stats.designs || '4.8'}</span>
                      </div>
                      <div className="text-white/90">
                        {project.stats.users || project.stats.clients || 'Premium'}
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  {/* Category */}
                  <div className="text-sm text-green-600 font-medium mb-2">
                    {project.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 text-xs bg-green-100 border border-green-200 rounded-full text-green-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className={`w-full border-green-300 text-green-600 hover:bg-green-50 group-hover:bg-green-100 group-hover:border-green-400 transition-all duration-300 ${
                      !project.url ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={() => handleProjectClick(project.url)}
                    disabled={!project.url}
                  >
                    {project.url ? 'View Project' : 'Coming Soon'}
                    <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Enhanced Stats Section */}
        <div className="grid md:grid-cols-4 gap-8 p-8 rounded-2xl bg-gradient-to-r from-green-100/50 to-emerald-100/50 border border-green-200 mb-16 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200 rounded-full opacity-20 transform translate-x-16 -translate-y-16"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-200 rounded-full opacity-20 transform -translate-x-12 translate-y-12"></div>
          
          <div className="text-center relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">50+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">15+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">3</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center relative z-10">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">24h</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-green-100 border border-green-200 mb-6">
            <span className="text-sm font-medium text-green-800">Ready to start your project?</span>
          </div>
          <h3 className="text-3xl font-bold mb-4 text-gray-800">
            Let's Create Something <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Amazing Together</span>
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Join our growing list of satisfied clients and turn your vision into reality with our expert team.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300"
            onClick={() => window.open('https://wa.me/918248960558?text=Hi, I saw your portfolio and would like to discuss a project', '_blank')}
          >
            Start Your Project
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
