import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Trophy, Award, Star } from 'lucide-react';

// Import project images
import periodCareImage from '@/assets/period-care-project.jpg';
import legalBuddyImage from '@/assets/legal-buddy-project.jpg';
import pulsePrismImage from '@/assets/pulse-prism-project.jpg';
import offlineEdubotImage from '@/assets/offline-edubot-project.jpg';
import deepLoveImage from '@/assets/deeplove-ai-project.jpg';
import govEaseImage from '@/assets/govease-project.jpg';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'Period Care',
      badge: '1st Place Winner - Replit & Cursor Hackathon',
      badgeColor: 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20',
      badgeIcon: Trophy,
      description: 'Holistic health platform supporting individuals throughout their entire menstrual cycle',
      longDescription: 'A comprehensive health platform that empowers users to take control of their health year-round with advanced health insights, mood tracking, and appointment booking features.',
      techStack: ['React', 'AI', 'Health Analytics', 'Machine Learning'],
      features: ['Health insights', 'Mood tracking', 'Appointment booking', 'Personalized recommendations'],
      image: periodCareImage,
      github: '',
      demo: '',
      impact: 'Empowers users to take control of their health year-round'
    },
    {
      id: 2,
      title: 'LegalBuddy',
      badge: 'Stanford Law School Hackathon',
      badgeColor: 'bg-blue-500/10 text-blue-500 border-blue-500/20',
      badgeIcon: Award,
      description: 'AI-powered tool for attorneys to generate case analysis reports',
      longDescription: 'Sophisticated legal technology platform that assists attorneys with case analysis, featuring OCR document processing and comprehensive liability reporting with 500+ case indexing.',
      techStack: ['MongoDB', 'LLaMA', 'OCR', 'OpenAI', 'Python'],
      features: ['Case analysis', 'Liability reports', '500+ case indexing', 'Document OCR'],
      image: legalBuddyImage,
      github: '',
      demo: '',
      role: 'DevOps & Database Specialist'
    },
    {
      id: 3,
      title: 'Pulse & Prism',
      badge: 'Top 5 - Aria & Allegro Hackathon',
      badgeColor: 'bg-purple-500/10 text-purple-500 border-purple-500/20',
      badgeIcon: Star,
      description: 'Fully automated short-form video content creation for TikTok/YouTube',
      longDescription: 'Revolutionary AI-powered platform that transforms ideas into polished videos automatically, streamlining the content creation process for social media platforms.',
      techStack: ['Aria', 'Allegro', 'OpenAI TTS', 'Video Processing'],
      features: ['Automated video generation', 'TikTok integration', 'YouTube optimization', 'AI voice synthesis'],
      image: pulsePrismImage,
      github: 'https://github.com/bilal77511/aria-and-allegro-hackathon',
      demo: '',
      innovation: 'Transforms ideas into polished videos automatically'
    },
    {
      id: 4,
      title: 'Offline Edubot',
      badge: 'Top 5 - Edge Runners Hackathon',
      badgeColor: 'bg-green-500/10 text-green-500 border-green-500/20',
      badgeIcon: Star,
      description: 'AI-powered offline tutor for low-connectivity areas',
      longDescription: 'Innovative educational solution providing quality AI-powered tutoring in underserved regions with limited internet connectivity, using fine-tuned LLaMA models optimized for mobile devices.',
      techStack: ['Fine-tuned LLaMA 3.2', 'Mobile Optimization', 'Offline AI'],
      features: ['Offline functionality', 'Mobile-optimized', 'Personalized learning', 'Multi-subject support'],
      image: offlineEdubotImage,
      github: '',
      demo: '',
      impact: 'Provides quality education in underserved regions'
    },
    {
      id: 5,
      title: 'DeepLove AI',
      badge: 'DeepSeek Hackathon',
      badgeColor: 'bg-pink-500/10 text-pink-500 border-pink-500/20',
      badgeIcon: Award,
      description: 'Revolutionary AI dating assistant with voice capabilities',
      longDescription: 'Advanced AI-powered dating platform featuring voice assistant technology, red flag detection algorithms, and immersive dating simulation experiences.',
      techStack: ['DeepSeek R1', 'OpenAI Whisper', 'React.js', 'Voice AI'],
      features: ['Voice assistant', 'Red flag detection', 'Dating simulator', 'Personality matching'],
      image: deepLoveImage,
      github: '',
      demo: ''
    },
    {
      id: 6,
      title: 'GovEase',
      badge: 'Llama Hackathon',
      badgeColor: 'bg-indigo-500/10 text-indigo-500 border-indigo-500/20',
      badgeIcon: Award,
      description: 'Government website navigation simplification tool',
      longDescription: 'Comprehensive government services platform that simplifies navigation and provides multilingual support for accessing government websites and services.',
      techStack: ['LLaMA 3.2', 'Streamlit', 'Multilingual NLP'],
      features: ['Simplified navigation', 'Multilingual support', 'Government integration', 'User-friendly interface'],
      image: govEaseImage,
      github: '',
      demo: '',
      languages: ['English', 'Spanish', 'Hindi', 'French', 'Urdu', 'German']
    }
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            Featured <span className="gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto px-4 sm:px-0">
            Showcase of award-winning projects from international hackathons and competitions
          </p>
        </div>

        <div className="grid gap-6 lg:gap-8 xl:grid-cols-2">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden glass-card hover:shadow-hover transition-all duration-500 group">
              {/* Project Image */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4">
                  <Badge className={`${project.badgeColor} border`}>
                    <project.badgeIcon className="w-4 h-4 mr-2" />
                    {project.badge}
                  </Badge>
                </div>

                {/* Action Buttons */}
                <div className="absolute bottom-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.github && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      variant="secondary"
                      className="bg-white/20 backdrop-blur-sm hover:bg-white/30"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>

              {/* Project Content */}
              <div className="p-4 sm:p-6 space-y-3 sm:space-y-4">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 text-sm sm:text-base">{project.description}</p>
                  <p className="text-xs sm:text-sm leading-relaxed">{project.longDescription}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.techStack.map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-sm mb-2 text-primary">Key Features:</h4>
                  <ul className="text-xs sm:text-sm text-muted-foreground space-y-1">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Special Attributes */}
                {(project.impact || project.role || project.innovation || project.languages) && (
                  <div className="pt-3 sm:pt-4 border-t border-border space-y-2">
                    {project.impact && (
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        💡 Impact: {project.impact}
                      </p>
                    )}
                    {project.role && (
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        👨‍💻 Role: {project.role}
                      </p>
                    )}
                    {project.innovation && (
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        🚀 Innovation: {project.innovation}
                      </p>
                    )}
                    {project.languages && (
                      <p className="text-xs sm:text-sm text-primary font-medium">
                        🌍 Languages: {project.languages.join(', ')}
                      </p>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-3 pt-2">
                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 w-full sm:w-auto"
                      onClick={() => window.open(project.github, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  )}
                  {project.demo && (
                    <Button
                      size="sm"
                      className="flex-1 w-full sm:w-auto gradient-primary"
                      onClick={() => window.open(project.demo, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            onClick={() => window.open('https://github.com/bilal77511', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;