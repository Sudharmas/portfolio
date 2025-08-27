import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Github } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Multi Class Classification model for image classification',
      description: 'A machine learning project that classifies images into multiple categories using deep learning techniques.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      tech: ['Python','Deep Learning', 'Pytorch'],
      color: 'from-blue-500 to-purple-600',
      code: 'https://github.com/Sudharmas/MulticlassImageClassification',
      live: 'https://github.com/Sudharmas/MulticlassImageClassification'
    },
    {
      title: 'Multi Agent News&Trend Analyzer using RAG',
      description: 'A system that leverages Retrieval-Augmented Generation (RAG) and multiple agents to analyze news and trending topics.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
      tech: ['Python', 'Langchain', 'Langgraph', 'ChromaDB','RAG'],
      color: 'from-green-500 to-teal-600',
      code: 'https://github.com/Sudharmas/Multi_Agent_News_and_Trend_ananlyzer_with_RAG',
      live: 'https://github.com/Sudharmas/Multi_Agent_News_and_Trend_ananlyzer_with_RAG'
    },
    {
      title: 'Campus Connect',
      description: 'A platform designed to connect students and faculty, facilitating campus-wide communication and collaboration.',
      image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=400&fit=crop',
      tech: ['Three.js', 'Typescript', 'Genkit', 'Google AI','Firestore','Firebase'],
      color: 'from-purple-500 to-pink-600',
      code: 'https://github.com/Sudharmas/CampusConnect',
      live: 'https://github.com/Sudharmas/CampusConnect'
    },
    {
      title: 'NewYork taxi fare prediction Regression model ',
      description: 'A regression model that predicts taxi fares in New York City based on trip data and machine learning.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop',
      tech: ['Python', 'Pandas', 'Numpy', 'XGBoost'],
      color: 'from-orange-500 to-red-600',
      code: 'https://github.com/Sudharmas/New-York-Taxi-Fare-Prediction',
      live: 'https://github.com/Sudharmas/New-York-Taxi-Fare-Prediction'
    },
    {
      title: 'Stock Market Prediction ',
      description: 'A project that utilizes machine learning to forecast stock market trends and prices.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop',
      tech: ['ython', 'tensorflow', ],
      color: 'from-indigo-500 to-blue-600',
      code: 'https://github.com/Sudharmas/SMPredict_basic',
      live: 'https://github.com/Sudharmas/SMPredict_basic'
    },
    {
      title: 'Rice type classification using Pytorch',
      description: 'A deep learning project using PyTorch to classify different types of rice grains from images.',
      image: 'https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?w=600&h=400&fit=crop',
      tech: ['Python', 'Pytorch'],
      color: 'from-teal-500 to-green-600',
      code: 'https://github.com/Sudharmas/RiceTypeClassification',
      live: 'https://github.com/Sudharmas/RiceTypeClassification'
    }
  ]

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Featured <span className="text-primary glow">Projects</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A collection of projects that showcase my skills and passion for creating 
              innovative digital solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
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
                    <Button asChild size="sm" variant="outline" className="glass flex-1 group/btn">
                      <a href={project.code} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button asChild size="sm" className="flex-1 group/btn">
                      <a href={project.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                        Live
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="glass-strong glow">
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}