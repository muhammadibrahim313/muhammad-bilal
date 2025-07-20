import React, { useState, useEffect } from 'react';
import { Menu, X, Download, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-card shadow-card backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16 lg:h-20">
          {/* Logo */}
          <div 
            className="text-lg sm:text-xl lg:text-2xl font-bold gradient-primary bg-clip-text text-transparent cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            Muhammad Bilal
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-primary transition-colors nav-link font-medium text-sm lg:text-base"
              >
                {item.name}
              </button>
            ))}
            <Button
              onClick={() => window.open('https://drive.google.com/file/d/1B-lUJfJ7fpgrLZcFKO9bOY0mJnadAvO3/view?usp=sharing', '_blank')}
              className="gradient-primary glow-primary"
            >
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 glass-card shadow-card backdrop-blur-md border-t border-border">
            <nav className="px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left text-foreground hover:text-primary transition-colors font-medium py-2"
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  window.open('https://drive.google.com/file/d/1B-lUJfJ7fpgrLZcFKO9bOY0mJnadAvO3/view?usp=sharing', '_blank');
                  setIsMenuOpen(false);
                }}
                className="w-full gradient-primary glow-primary mt-4"
              >
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;