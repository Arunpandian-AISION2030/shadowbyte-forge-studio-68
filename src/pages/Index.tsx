
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import PricingSection from '@/components/PricingSection';
import PortfolioSection from '@/components/PortfolioSection';
import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ThemeToggle from '@/components/ThemeToggle';

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <ThemeToggle />
      <HeroSection />
      <div className="space-y-0">
        <ServicesSection />
        <PricingSection />
        <PortfolioSection />
        <AboutSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
