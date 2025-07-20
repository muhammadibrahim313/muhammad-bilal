import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, Calendar, MapPin, TrendingUp } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: 'Data Scientist & AI Engineer',
      company: 'ZenData Labs',
      location: 'USA (Remote)',
      period: 'June 2025 - Present',
      type: 'Full-time',
      description: 'Leading AI initiatives and developing cutting-edge machine learning solutions for enterprise clients. Specializing in LLM fine-tuning, data pipeline optimization, and AI model deployment.',
      achievements: [
        'Developed enterprise-grade AI solutions for Fortune 500 clients',
        'Implemented scalable machine learning pipelines using Kubernetes',
        'Led cross-functional teams in AI product development',
        'Optimized model performance achieving 40% improvement in inference speed'
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'Kubernetes', 'AWS', 'MLOps'],
      current: true
    },
    {
      title: 'Trainer & Moderator',
      company: 'iCodeGuru',
      location: 'Pakistan',
      period: 'Sep 2024 - Feb 2025',
      type: 'Part-time',
      description: 'Training 40+ students in AI/ML technologies and moderating technical discussions. Developing curriculum for advanced AI courses and mentoring aspiring data scientists.',
      achievements: [
        'Successfully trained 40+ students in AI/ML fundamentals',
        'Developed comprehensive curriculum for deep learning courses',
        'Achieved 95% student satisfaction rating',
        'Created interactive learning modules for practical AI applications'
      ],
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      current: false
    },
    {
      title: 'MLOps Intern',
      company: 'Pak-Austria Institute',
      location: 'Pakistan',
      period: 'Sep 2023 - Nov 2023',
      type: 'Internship',
      description: 'Gained hands-on experience in MLOps practices, model deployment, and cloud infrastructure. Worked on automating machine learning workflows and implementing CI/CD pipelines for ML models.',
      achievements: [
        'Implemented automated ML model deployment pipelines',
        'Reduced model deployment time by 60% through automation',
        'Learned industry best practices for MLOps and DevOps',
        'Collaborated with senior engineers on production ML systems'
      ],
      technologies: ['Docker', 'Jenkins', 'Git', 'Linux', 'Cloud Platforms', 'MLOps'],
      current: false
    },
    {
      title: 'Hand Gesture Game Control - University Project',
      company: 'University of Haripur',
      location: 'Pakistan',
      period: 'Jan 2023 - May 2023',
      type: 'Academic Project',
      description: 'Developed an innovative hand gesture recognition system for game control with 98% accuracy. Used computer vision and machine learning techniques for real-time gesture detection.',
      achievements: [
        'Achieved 98% accuracy in hand gesture recognition',
        'Implemented real-time gesture processing with <50ms latency',
        'Created intuitive gaming interface using gesture controls',
        'Published research findings in university conference'
      ],
      technologies: ['Python', 'OpenCV', 'TensorFlow', 'Computer Vision', 'Machine Learning'],
      current: false
    }
  ];

  return (
    <section id="experience" className="py-20 lg:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-primary bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Journey through my professional career in AI engineering and software development
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary hidden md:block" />

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <div key={index} className="relative">
                {/* Timeline Dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block" />
                
                <Card className={`ml-0 md:ml-20 glass-card hover:shadow-hover transition-all duration-300 ${
                  experience.current ? 'ring-2 ring-primary/20 glow-primary' : ''
                }`}>
                  <div className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <h3 className="text-xl lg:text-2xl font-bold">{experience.title}</h3>
                          {experience.current && (
                            <Badge className="ml-3 bg-green-500/10 text-green-500 border-green-500/20">
                              Current
                            </Badge>
                          )}
                        </div>
                        
                        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-muted-foreground mb-2">
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2 text-primary" />
                            <span className="font-medium text-primary">{experience.company}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2 text-muted-foreground" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center text-sm text-muted-foreground mb-4">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{experience.period}</span>
                          <Badge variant="outline" className="ml-3 text-xs">
                            {experience.type}
                          </Badge>
                        </div>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="grid lg:grid-cols-2 gap-6">
                      {/* Key Achievements */}
                      <div>
                        <h4 className="font-semibold text-primary mb-3 flex items-center">
                          <TrendingUp className="w-4 h-4 mr-2" />
                          Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="flex items-start text-sm">
                              <span className="w-1.5 h-1.5 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                              <span className="text-muted-foreground">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="secondary"
                              className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          <Card className="p-6 text-center glass-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              2+
            </div>
            <div className="text-muted-foreground">Years Experience</div>
          </Card>
          
          <Card className="p-6 text-center glass-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              40+
            </div>
            <div className="text-muted-foreground">Students Trained</div>
          </Card>
          
          <Card className="p-6 text-center glass-card hover:shadow-hover transition-all duration-300">
            <div className="text-3xl font-bold gradient-primary bg-clip-text text-transparent mb-2">
              98%
            </div>
            <div className="text-muted-foreground">Project Success Rate</div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;