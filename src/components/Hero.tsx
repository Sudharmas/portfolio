import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 glass rounded-full text-sm text-primary glow">
            👋 Welcome to my portfolio
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Creative Developer
          </h1>
          
          <h2 className="text-2xl md:text-4xl mb-8 text-muted-foreground">
            Building digital experiences with{' '}
            <span className="text-primary glow">passion</span> and{' '}
            <span className="text-purple-400">precision</span>
          </h2>
          
          <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I craft modern web applications that combine beautiful design with 
            cutting-edge technology. Let's build something amazing together.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="glow-strong group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="glass-strong">
              Download CV
            </Button>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="#"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}