import React, { useEffect, useState } from 'react';
import { Github, Linkedin, ExternalLink, Download, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import profileImage from '@/assets/muhammad-bilal-profile.jpg';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const texts = [
    'AI Engineer & Hackathon Champion',
    'Building the future with Artificial Intelligence',
    'Winner of 10+ International Hackathons'
  ];

  useEffect(() => {
    const text = texts[currentIndex];
    if (currentText.length < text.length) {
      const timeout = setTimeout(() => {
        setCurrentText(text.slice(0, currentText.length + 1));
      }, 50);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentText('');
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentIndex, texts]);

  const stats = [
    { number: '19+', label: 'Hackathons Participated', icon: '🏆' },
    { number: '1st', label: 'Place Winner (Replit & Cursor)', icon: '🥇' },
    { number: 'Top 5', label: 'International Competitions', icon: '🌟' },
    { number: '22', label: 'GitHub Repositories', icon: '💻' }
  ];

  const techIcons = ['🐍', '🤖', '⚛️', '🔥', '⚡', '🚀'];

  return (
    <section id="home" className="min-h-screen relative gradient-hero overflow-hidden">
      {/* Floating Tech Icons */}
      <div className="absolute inset-0 pointer-events-none">
        {techIcons.map((icon, index) => (
          <div
            key={index}
            className={`absolute text-4xl opacity-20 float-animation`}
            style={{
              left: `${10 + (index * 15)}%`,
              top: `${20 + (index % 3) * 30}%`,
              animationDelay: `${index * 0.5}s`
            }}
          >
            {icon}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-20 lg:pt-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-8rem)]">
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="block text-foreground">Muhammad</span>
                <span className="block gradient-primary bg-clip-text text-transparent">
                  Bilal
                </span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <p className="text-xl sm:text-2xl text-muted-foreground font-medium">
                  {currentText}
                  <span className="animate-pulse">|</span>
                </p>
              </div>

              <div className="flex items-center justify-center lg:justify-start text-muted-foreground space-x-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Remote AI Engineer at ZenData Labs (USA) | Based in Pakistan</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="gradient-primary glow-primary text-lg px-8"
                onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground text-lg px-8"
                onClick={() => window.open('https://drive.google.com/file/d/1B-lUJfJ7fpgrLZcFKO9bOY0mJnadAvO3/view?usp=sharing', '_blank')}
              >
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-6">
              <Button
                variant="ghost"
                size="icon"
                className="hover:glow-primary"
                onClick={() => window.open('https://github.com/bilal77511', '_blank')}
              >
                <Github className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:glow-primary"
                onClick={() => window.open('https://linkedin.com/in/muhammad-bilal-a75782280/', '_blank')}
              >
                <Linkedin className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:glow-primary"
                onClick={() => window.open('https://lablab.ai/u/@muhammad_bilal310', '_blank')}
              >
                <ExternalLink className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:glow-primary"
                onClick={() => window.open('mailto:bilal77511@gmail.com')}
              >
                <Mail className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="hover:glow-primary"
                onClick={() => window.open('tel:+923406322593')}
              >
                <Phone className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Right Column - Profile Image & Stats */}
          <div className="flex flex-col items-center space-y-8">
            {/* Profile Image */}
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden shadow-hover glow-primary ring-4 ring-primary/20">
                <img
                  src={profileImage}
                  alt="Muhammad Bilal - AI Engineer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 gradient-primary rounded-full flex items-center justify-center glow-primary">
                <span className="text-2xl">🏆</span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-md">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 glass-card hover:shadow-hover transition-all duration-300 group">
                  <div className="text-center space-y-2">
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {stat.icon}
                    </div>
                    <div className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
                      {stat.number}
                    </div>
                    <div className="text-sm text-muted-foreground leading-tight">
                      {stat.label}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;