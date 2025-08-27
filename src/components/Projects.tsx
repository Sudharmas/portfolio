import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'
import { useState } from 'react'

export default function Projects() {
  const [showAll, setShowAll] = useState(false)
  const projects = [
    {
      title: 'AI-Powered Dashboard',
      description: 'A comprehensive dashboard with AI-driven analytics and real-time data visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['React', 'TypeScript', 'Python', 'TensorFlow'],
      color: 'from-blue-500 to-purple-600'
    },
    {
      title: 'E-commerce Platform',
      description: 'Modern e-commerce solution with advanced features and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
      color: 'from-green-500 to-teal-600'
    },
    {
      title: '3D Portfolio Website',
      description: 'Interactive portfolio with Three.js animations and immersive 3D experiences.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
      tech: ['Three.js', 'React', 'WebGL', 'GSAP'],
      color: 'from-purple-500 to-pink-600'
    },
    {
      title: 'Mobile Finance App',
      description: 'Secure financial application with biometric authentication and real-time transactions.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tech: ['React Native', 'Node.js', 'MongoDB', 'Socket.io'],
      color: 'from-orange-500 to-red-600'
    },
    {
      title: 'Social Media Platform',
      description: 'Full-featured social platform with real-time messaging and content sharing.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['Vue.js', 'GraphQL', 'AWS', 'Docker'],
      color: 'from-indigo-500 to-blue-600'
    },
    {
      title: 'IoT Dashboard',
      description: 'Real-time monitoring dashboard for IoT devices with predictive analytics.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
      tech: ['Angular', 'Python', 'InfluxDB', 'Grafana'],
      color: 'from-teal-500 to-green-600'
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-glow">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(showAll ? projects : projects.slice(0, 4)).map((project, index) => (
              <Card key={index} className="glass-strong border-0 group overflow-hidden hover:glow transition-all duration-500">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                </div>
                
                <CardContent className="p-6">
                  <h3 className="font-bold text-xl mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 glass rounded text-xs text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-3">
                    <Button size="sm" variant="outline" className="glass flex-1 group/btn">
                      <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </Button>
                    <Button size="sm" className="flex-1 group/btn">
                      <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="glass-strong glow"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? 'Show Less' : 'View All Projects'}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}