import { Card, CardContent } from '@/components/ui/card'
import { Code, Palette, Zap, Users } from 'lucide-react'

export default function About() {
  const features = [
    {
      icon: Code,
      title: 'Robust ML Code',
      description: 'Developing reliable, maintainable, and scalable machine learning pipelines and models.'
    },
    {
      icon: Palette,
      title: 'Model Interpretability',
      description: 'Designing solutions that prioritize transparency and explainability in AI systems.'
    },
    {
      icon: Zap,
      title: 'Efficient Deployment',
      description: 'Optimizing and deploying AI/ML models for real-world performance and scalability.'
    },
    {
      icon: Users,
      title: 'Cross-functional Collaboration',
      description: 'Partnering with researchers, engineers, and stakeholders to deliver impactful AI solutions.'
    }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-primary" style={{ textShadow: '0 0 17px #22c55e, 0 0 100px #22c55e' }}>Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              I'm an enthusiastic AI/ML engineer and Agentic AI developer, dedicated to building intelligent systems that learn, adapt, and collaborate. With expertise in modern machine learning, deep learning, and agent-based architectures, I bridge the gap between innovative research and real-world applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  My journey began with a fascination for artificial intelligence and machine learning. 
                  Over the years, I have specialized in developing intelligent systems, from building deep learning models to deploying scalable AI solutions. 
                  My experience spans research, prototyping, and productionizing ML pipelines, always staying at the forefront of AI advancements and best practices.
                </p>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                My approach combines technical expertise with creative problem-solving, ensuring that 
                every project not only functions flawlessly but also provides an outstanding user experience.
              </p>
              <div className="flex flex-wrap gap-2">
                {['Artificial Intelligence', 'Machine Learning', 'Deep Learning', 'Python','Prompt Engineering','Automation','No Code AI'].map((tech) => (
                  <span key={tech} className="px-3 py-1 glass rounded-full text-sm text-primary">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="glass-strong p-8 rounded-2xl glow">
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2">Machine Learning</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-primary h-2 rounded-full w-[85%] glow"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Engineering</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-blue-400 h-2 rounded-full w-[82%] glow"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Agentic AI Development</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-purple-400 h-2 rounded-full w-[89%] glow"></div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Propmt Engineering</h4>
                  <div className="w-full bg-secondary rounded-full h-2">
                    <div className="bg-yellow-400 h-2 rounded-full w-[88%] glow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="glass-strong border-0 group hover:glow transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/20 rounded-lg group-hover:scale-110 transition-transform">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}