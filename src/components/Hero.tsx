import { Button } from '@/components/ui/button'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'
import Typewriter from 'typewriter-effect';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 glass rounded-full text-sm text-primary glow">
            👋 Welcome to my portfolio
          </div>
          
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString('AI Developer')
                  .pauseFor(1200)
                  .deleteAll(60)
                  .typeString('ML Engineer')
                  .pauseFor(1200)
                  .deleteAll(60)
                  .typeString('Agentic AI Enthusiast')
                  .pauseFor(1200)
                  .deleteAll(60)
                  .typeString('Backend developer')
                  .pauseFor(1200)
                  .deleteAll(60)
                  .start();
              }}
              options={{
                loop: true,
                cursor: '_',
                delay: 90,
                deleteSpeed: 60,
              }}
            />
            </h1>
          
            <h2 className="text-2xl md:text-4xl mb-8 text-muted-foreground">
            Empowering the future with{' '}
            <span className="text-primary" style={{ textShadow: '0 0 17px #22c55e, 0 0 100px #22c55e'}}>AI</span>,{' '}
            <span className="text-blue-400" style={{ textShadow: '0 0 17px #22c55e, 0 0 100px #22c55e'}}>Machine Learning</span>, and{' '}
            <span className="text-purp;e-400" style={{ textShadow: '0 0 17px #22c55e, 0 0 100px #22c55e'}}>Agentic AI</span> solutions
            </h2>
          
            <p className="text-lg md:text-xl mb-12 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build intelligent, scalable applications that blend innovative AI with robust engineering. Let’s create impactful solutions together.
            </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="glow-strong group">
              View My Work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
            </Button>
            <a
              href="/src/components/Sudharma_CV.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="glass-strong"
            >
              <Button variant="outline" size="lg" className="w-full">
              Download CV
              </Button>
            </a>
          </div>
          
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/Sudharmas"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Github className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/sudharmas3110"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Linkedin className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="mailto:sudharma@sudharma-s.in.net"
              className="p-3 glass-strong rounded-full hover:glow transition-all duration-300 group"
            >
              <Mail className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator - Hidden on small screens to prevent overlap */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}