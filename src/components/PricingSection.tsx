
import { Check, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const PricingSection = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '₹5,999',
      billing: '(One Time Charge)',
      subtitle: 'Excluding Hosting and Domain',
      description: 'For Growing Team',
      features: [
        'Landing page',
        'On Page SEO',
        'User Friendly & Attractive',
        '2 Month Support'
      ],
      buttonText: "Let's Start",
      popular: false,
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-200 hover:border-green-300'
    },
    {
      name: 'Startup',
      price: '₹16,999',
      billing: '(One Time Charge)',
      subtitle: 'Excluding Hosting and Domain',
      description: 'For Growing Business',
      features: [
        '5-7 Pages',
        'On Page SEO & Branding Support',
        'Premium Design',
        '5 Month Support'
      ],
      buttonText: "Let's Start",
      popular: true,
      color: 'from-emerald-100 to-green-100',
      borderColor: 'border-green-400 hover:border-green-500'
    },
    {
      name: 'Enterprise',
      price: 'Contact the Team',
      billing: '(Billed Yearly)',
      subtitle: 'Including Hosting and Domain',
      description: 'For large-scale organization',
      features: [
        'Unlimited Pages',
        'Branding & Marketing',
        'Premium Design',
        '1 Year Support'
      ],
      buttonText: 'Contact',
      popular: false,
      color: 'from-green-100 to-emerald-100',
      borderColor: 'border-green-200 hover:border-green-300'
    }
  ];

  const handleGetQuote = () => {
    window.open('https://wa.me/918248960558?text=Hi, I would like to get a quote for my project', '_blank');
  };

  return (
    <section id="pricing" className="py-20 relative bg-gradient-to-b from-green-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 border border-green-200 mb-6">
            <Star className="w-4 h-4 text-green-600 mr-2" />
            <span className="text-sm font-medium text-green-800">Pricing Plans</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Simple Pricing</span>
            <br />
            <span className="text-gray-800">For Every Business</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your business needs. All plans include our premium design 
            and development services with dedicated support.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-white ${plan.borderColor} transition-all duration-300 group hover:shadow-lg hover:shadow-green-500/10 hover:-translate-y-1 ${
                plan.popular ? 'ring-2 ring-green-400 ring-opacity-50' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full text-sm font-medium">
                    Best Choice
                  </div>
                </div>
              )}
              
              <CardContent className="p-8">
                {/* Plan Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">{plan.name}</h3>
                  <div className="mb-2">
                    <span className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                      {plan.price}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mb-1">{plan.billing}</p>
                  <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                  <p className="text-gray-600 font-medium">{plan.description}</p>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-5 h-5 rounded-full bg-green-100 border border-green-300 flex items-center justify-center mr-3 flex-shrink-0">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={handleGetQuote}
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/25' 
                      : 'border-green-300 text-green-600 hover:bg-green-50'
                  } transition-all duration-300`}
                  variant={plan.popular ? 'default' : 'outline'}
                >
                  {plan.buttonText}
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Need a custom solution? Our team is ready to discuss your unique requirements.
          </p>
          <Button 
            onClick={handleGetQuote}
            variant="outline" 
            className="border-green-300 text-green-600 hover:bg-green-50"
          >
            Schedule a Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
