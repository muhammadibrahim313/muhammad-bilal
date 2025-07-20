import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  Download,
  Send,
  CheckCircle,
  Globe
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'bilal77511@gmail.com',
      action: () => window.open('mailto:bilal77511@gmail.com'),
      color: 'text-blue-400'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 340 6322593',
      action: () => window.open('tel:+923406322593'),
      color: 'text-green-400'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Available for remote work globally',
      action: null,
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      label: 'Status',
      value: '🟢 Available for AI/ML projects and consulting',
      action: null,
      color: 'text-green-400'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/bilal77511',
      color: 'hover:text-gray-400'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://linkedin.com/in/muhammad-bilal-a75782280/',
      color: 'hover:text-blue-400'
    },
    {
      name: 'LabLab',
      icon: ExternalLink,
      url: 'https://lablab.ai/u/@muhammad_bilal310',
      color: 'hover:text-purple-400'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Get in <span className="gradient-primary bg-clip-text text-transparent">Touch</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to collaborate on your next AI project? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's Connect</h3>
              <p className="text-muted-foreground mb-8">
                I'm always excited to discuss new opportunities, collaborations, and innovative AI projects. 
                Whether you're looking for a technical consultant, hackathon partner, or full-time AI engineer, 
                I'd love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <Card
                  key={index}
                  className={`p-4 glass-card hover:shadow-hover transition-all duration-300 ${
                    contact.action ? 'cursor-pointer' : ''
                  }`}
                  onClick={contact.action || undefined}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`flex-shrink-0 p-3 rounded-lg bg-muted ${contact.color}`}>
                      <contact.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-medium text-primary">{contact.label}</p>
                      <p className="text-muted-foreground">{contact.value}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold mb-4">Find me on</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    size="icon"
                    className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                    onClick={() => window.open(social.url, '_blank')}
                  >
                    <social.icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* CV Download */}
            <Card className="p-6 glass-card hover:shadow-hover transition-all duration-300 border-primary/20">
              <div className="text-center space-y-4">
                <h4 className="text-xl font-semibold">Download My Resume</h4>
                <p className="text-muted-foreground">
                  Get a comprehensive overview of my experience, skills, and achievements.
                </p>
                <Button
                  size="lg"
                  className="gradient-primary glow-primary w-full"
                  onClick={() => window.open('https://drive.google.com/file/d/1B-lUJfJ7fpgrLZcFKO9bOY0mJnadAvO3/view?usp=sharing', '_blank')}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Download CV
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="p-8 glass-card">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="bg-background/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project, collaboration ideas, or just say hello!"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="bg-background/50 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full gradient-primary glow-primary"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-border text-center">
              <p className="text-sm text-muted-foreground">
                Typically responds within 24 hours
              </p>
            </div>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <Card className="p-8 glass-card max-w-2xl mx-auto border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate on your next AI project. From hackathon prototypes to enterprise solutions, 
              I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary glow-primary"
                onClick={() => window.open('mailto:bilal77511@gmail.com?subject=Project Collaboration')}
              >
                <Mail className="w-5 h-5 mr-2" />
                Start a Project
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => window.open('https://linkedin.com/in/muhammad-bilal-a75782280/', '_blank')}
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Connect on LinkedIn
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;