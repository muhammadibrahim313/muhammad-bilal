import React from 'react';
import { Github, Linkedin, ExternalLink, Heart, Code, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

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

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-t from-muted/20 to-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
              Muhammad Bilal
            </div>
            <p className="text-muted-foreground max-w-sm">
              AI Engineer & Hackathon Champion building the future with artificial intelligence. 
              Winner of 10+ international hackathons.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Button
                  key={social.name}
                  variant="ghost"
                  size="icon"
                  className={`hover:scale-110 transition-all duration-300 ${social.color}`}
                  onClick={() => window.open(social.url, '_blank')}
                >
                  <social.icon className="w-5 h-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-muted-foreground hover:text-primary transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </nav>
          </div>

          {/* Current Status */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Current Status</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-3 animate-pulse" />
                <span className="text-muted-foreground">Available for projects</span>
              </div>
              <div className="flex items-center text-sm">
                <Code className="w-4 h-4 mr-3 text-primary" />
                <span className="text-muted-foreground">Remote work worldwide</span>
              </div>
              <div className="flex items-center text-sm">
                <Trophy className="w-4 h-4 mr-3 text-yellow-400" />
                <span className="text-muted-foreground">19+ Hackathons participated</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-muted-foreground text-sm">
                © {currentYear} Muhammad Bilal - AI Engineer & Hackathon Champion
              </p>
              <p className="text-muted-foreground text-xs mt-1">
                Built with React, TypeScript, and Tailwind CSS
              </p>
            </div>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and lots of</span>
              <Code className="w-4 h-4 text-primary" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <div className="fixed bottom-8 right-8">
        <Button
          variant="secondary"
          size="icon"
          className="rounded-full shadow-lg hover:shadow-xl transition-all duration-300 glow-primary"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <div className="w-4 h-4 border-2 border-current border-b-transparent rotate-180" />
        </Button>
      </div>
    </footer>
  );
};

export default Footer;