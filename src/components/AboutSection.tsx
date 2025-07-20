import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Building, GraduationCap, Trophy, Users, Star, Award } from 'lucide-react';

const AboutSection = () => {
  const achievements = [
    {
      icon: Trophy,
      title: '1st Place: Replit and Cursor Hackathon',
      description: 'Developed Period Care - holistic health platform',
      color: 'text-yellow-400'
    },
    {
      icon: Award,
      title: '2nd Place: WordSprint Hackathon (National)',
      description: 'Outstanding performance in national competition',
      color: 'text-gray-400'
    },
    {
      icon: Star,
      title: 'Top 5: Allegro Multimodal Hackathon',
      description: 'Advanced AI video content creation platform',
      color: 'text-purple-400'
    },
    {
      icon: Star,
      title: 'Top 5: Edge Runners Hackathon 3.2',
      description: 'Offline AI education solution for underserved areas',
      color: 'text-purple-400'
    },
    {
      icon: Trophy,
      title: '12th Rank: Meta Hacker Cup 2024',
      description: 'Competitive programming excellence',
      color: 'text-blue-400'
    },
    {
      icon: Award,
      title: '9/9 Puzzles: CS50x Puzzle Day 2025',
      description: 'Perfect score in Harvard CS50x challenge',
      color: 'text-green-400'
    }
  ];

  const currentRoles = [
    {
      icon: Building,
      title: 'Data Scientist & AI Engineer',
      company: 'ZenData Labs (USA)',
      period: 'June 2025 - Present',
      description: 'Leading AI initiatives and developing cutting-edge machine learning solutions for enterprise clients.',
      remote: true
    },
    {
      icon: Users,
      title: 'Trainer & Moderator',
      company: 'iCodeGuru',
      period: 'Sep 2024 - Feb 2025',
      description: 'Training 40+ students in AI/ML technologies and moderating technical discussions.',
      remote: false
    }
  ];

  const skills = [
    { category: 'AI/Machine Learning', skills: ['LLMs', 'Fine-tuning', 'NeMo Curator', 'YOLO', 'Prompt Engineering'] },
    { category: 'Programming', skills: ['Python', 'JavaScript', 'TypeScript'] },
    { category: 'Frameworks', skills: ['React.js', 'Next.js', 'Django', 'FastAPI', 'Flask'] },
    { category: 'Databases', skills: ['MongoDB', 'Supabase', 'PostgreSQL'] },
    { category: 'Cloud & DevOps', skills: ['Kubernetes', 'Docker', 'AWS'] },
    { category: 'Tools', skills: ['Git', 'GitHub', 'Streamlit', 'Unreal Engine', 'Blender'] }
  ];

  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 xl:py-32 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6">
            About <span className="gradient-primary bg-clip-text text-transparent">Muhammad Bilal</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Muhammad Bilal is a highly accomplished AI Engineer and Software Developer with an exceptional track record in international hackathons. Currently working as a Data Scientist & AI Engineer at ZenData Labs (USA) and serving as Trainer & Moderator at iCodeGuru.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12 lg:mb-16">
          {/* Current Roles */}
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-6 lg:mb-8 flex items-center">
              <Building className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-primary" />
              Current Roles
            </h3>
            <div className="space-y-4 lg:space-y-6">
              {currentRoles.map((role, index) => (
                <Card key={index} className="p-4 sm:p-6 glass-card hover:shadow-hover transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-start space-y-4 sm:space-y-0 sm:space-x-4">
                    <div className="flex-shrink-0 self-center sm:self-start">
                      <role.icon className="w-6 h-6 sm:w-8 sm:h-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h4 className="text-lg sm:text-xl font-semibold">{role.title}</h4>
                        {role.remote && (
                          <Badge variant="secondary" className="bg-primary/10 text-primary mt-2 sm:mt-0 self-center sm:self-auto">
                            Remote
                          </Badge>
                        )}
                      </div>
                      <p className="text-primary font-medium mb-1">{role.company}</p>
                      <p className="text-sm text-muted-foreground mb-3">{role.period}</p>
                      <p className="text-sm leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <GraduationCap className="w-6 h-6 mr-3 text-primary" />
              Education
            </h3>
            <Card className="p-6 glass-card hover:shadow-hover transition-all duration-300">
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-semibold">BS Software Engineering</h4>
                  <p className="text-primary font-medium">University of Haripur</p>
                  <p className="text-muted-foreground">CGPA: 3.57/4.0</p>
                </div>
                <div className="pt-4 border-t border-border">
                  <h5 className="font-semibold mb-2">Notable Achievements:</h5>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ehsaas Scholarship Recipient</li>
                    <li>• IELTS Score: 6.5</li>
                    <li>• University Honors Program</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">
            🏆 Achievements & Recognition
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="p-6 glass-card hover:shadow-hover transition-all duration-300 group cursor-pointer">
                <div className="text-center space-y-4">
                  <achievement.icon className={`w-12 h-12 mx-auto ${achievement.color} group-hover:scale-110 transition-transform`} />
                  <h4 className="font-semibold text-lg leading-tight">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground">{achievement.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Technical Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skillGroup, index) => (
              <Card key={index} className="p-6 glass-card hover:shadow-hover transition-all duration-300">
                <h4 className="font-semibold text-lg mb-4 text-primary">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="bg-muted hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;