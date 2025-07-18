
import { Mail, MessageSquare, Instagram, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ContactInfo = () => {
  const handleWhatsApp = () => {
    console.log('Opening WhatsApp');
    window.open('https://wa.me/918248960558?text=Hi, I would like to discuss my project', '_blank');
  };

  const handleInstagram = () => {
    console.log('Opening Instagram');
    window.open('https://instagram.com/shadowbyte.studio', '_blank');
  };

  const handleEmail = () => {
    console.log('Opening Email');
    window.open('mailto:shadowbyte.studio.online@gmail.com', '_blank');
  };

  const contactMethods = [
    {
      icon: MessageSquare,
      title: 'WhatsApp',
      description: 'Quick responses within 1 hour',
      action: 'Chat Now',
      color: 'from-green-500 to-green-600',
      onClick: handleWhatsApp
    },
    {
      icon: Instagram,
      title: 'Instagram',
      description: 'Follow our creative journey',
      action: 'Follow Us',
      color: 'from-pink-500 to-purple-600',
      onClick: handleInstagram
    },
    {
      icon: Mail,
      title: 'Email',
      description: 'shadowbyte.studio.online@gmail.com',
      action: 'Send Email',
      color: 'from-green-500 to-emerald-500',
      onClick: handleEmail
    }
  ];

  return (
    <div className="space-y-8">
      {/* Contact Methods */}
      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const IconComponent = method.icon;
          return (
            <Card key={index} className="bg-white/30 backdrop-blur-sm border-green-200 hover:border-green-300 transition-all duration-300 group cursor-pointer" onClick={method.onClick}>
              <CardContent className="p-6">
                <div className="flex items-center space-x-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${method.color} bg-opacity-20 border border-opacity-30 flex items-center justify-center group-hover:scale-110 transition-all duration-300`}>
                    <IconComponent className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {method.title}
                    </h4>
                    <p className="text-sm text-gray-600">{method.description}</p>
                  </div>
                  <Button size="sm" variant="outline" className="border-green-300 text-green-600 hover:bg-green-50">
                    {method.action}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Quick Info */}
      <Card className="bg-white/30 backdrop-blur-sm border-green-200">
        <CardContent className="p-6">
          <h4 className="font-semibold text-gray-800 mb-4">Quick Info</h4>
          <div className="space-y-3">
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">Remote Team, Global Service</span>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">+91 8248960558</span>
            </div>
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">shadowbyte.studio.online@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-4 h-4 text-green-600" />
              <span className="text-gray-600">@ShadowByte.studio</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Pricing Info */}
      <Card className="bg-gradient-to-br from-green-100/50 to-emerald-100/50 border-green-200">
        <CardContent className="p-6 text-center">
          <h4 className="font-semibold text-gray-800 mb-2">💰 Starting From</h4>
          <p className="text-2xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">₹999</p>
          <p className="text-sm text-gray-600 mb-4">
            Professional websites and digital marketing solutions
          </p>
          <Button 
            onClick={handleWhatsApp}
            size="sm" 
            variant="outline" 
            className="border-green-300 text-green-600 hover:bg-green-50"
          >
            Get Quote
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactInfo;
