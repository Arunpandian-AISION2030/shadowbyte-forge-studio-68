
import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

interface FormData {
  name: string;
  email: string;
  project: string;
  message: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    project: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const validateForm = (): boolean => {
    console.log('Validating form:', formData);
    
    if (!formData.name.trim()) {
      console.log('Name validation failed');
      toast({
        title: "Name Required",
        description: "Please enter your name.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.email.trim()) {
      console.log('Email validation failed');
      toast({
        title: "Email Required", 
        description: "Please enter your email address.",
        variant: "destructive",
      });
      return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      console.log('Email format validation failed');
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return false;
    }

    if (!formData.message.trim()) {
      console.log('Message validation failed');
      toast({
        title: "Message Required",
        description: "Please enter your project details.",
        variant: "destructive",
      });
      return false;
    }

    console.log('Form validation passed');
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log('Form submission started', formData);
    
    if (!validateForm()) {
      console.log('Form validation failed - stopping submission');
      return;
    }

    setIsSubmitting(true);
    
    try {
      console.log('Starting form submission simulation...');
      // Simulate form submission delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form submitted successfully:', formData);
      
      // Reset form and show success
      setFormData({
        name: '',
        email: '',
        project: '',
        message: ''
      });
      setIsSubmitted(true);
      
      console.log('Showing success toast...');
      toast({
        title: "Message Sent Successfully! ✅",
        description: "Thank you for your message. We'll get back to you within 24 hours.",
      });

      // Reset success state after 4 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        console.log('Success state reset');
      }, 4000);
      
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error Sending Message",
        description: "Something went wrong. Please try again or contact us directly on WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      console.log('Form submission process completed');
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    console.log(`Input changed - ${field}:`, value);
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <Card className="bg-white/50 backdrop-blur-sm border-green-200">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold mb-6 text-gray-800">Send us a message</h3>
        
        {isSubmitted && (
          <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
            <span className="text-green-500">Message sent successfully! We'll get back to you soon.</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Your Name *
              </label>
              <Input
                type="text"
                required
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="bg-green-50/50 border-green-200 focus:border-green-400"
                placeholder="John Doe"
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-600 mb-2">
                Email Address *
              </label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-green-50/50 border-green-200 focus:border-green-400"
                placeholder="john@example.com"
                disabled={isSubmitting}
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Project Type
            </label>
            <Input
              type="text"
              value={formData.project}
              onChange={(e) => handleInputChange('project', e.target.value)}
              className="bg-green-50/50 border-green-200 focus:border-green-400"
              placeholder="Website Development, Logo Design, etc."
              disabled={isSubmitting}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-2">
              Project Details *
            </label>
            <Textarea
              required
              value={formData.message}
              onChange={(e) => handleInputChange('message', e.target.value)}
              className="bg-green-50/50 border-green-200 focus:border-green-400 min-h-[120px]"
              placeholder="Tell us about your project, timeline, and budget..."
              disabled={isSubmitting}
            />
          </div>

          <Button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:from-green-600 hover:to-emerald-600 hover:shadow-xl hover:shadow-green-500/25 transition-all duration-300 disabled:opacity-50"
            onClick={() => console.log('Submit button clicked')}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
                Sending...
              </>
            ) : (
              <>
                Send Message
                <Send className="ml-2 w-4 h-4" />
              </>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ContactForm;
