import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#skills', label: 'Skills' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'glass py-2' : 'py-4'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
            <div
            className="text-3xl font-extrabold tracking-tight flex items-center select-none"
            style={{
              fontSize: '3em',
              textShadow: '0 0 20px #25a85cff, 0 0 70px #70ffb0ff, 0 2px 8px #0008',
              letterSpacing: '0.08em',
              color: '#ffffffff',
              fontFamily: "Orbitron",
              WebkitTextStroke: '1px #997cffff',
            }}
            >
              <img
              src="https://sudharmas.github.io/assets/src/assets/logo.png"
              alt="Logo"
              className="mr-2"
              style={{ height: '1em', width: '1em', objectFit: 'contain' }}
              />
            </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 relative group"
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
            <a href="#contact">
              <Button variant="outline" className="glass-strong glow">
              Get in Touch
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 glass-strong rounded-lg p-4">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-foreground hover:text-primary transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <Button variant="outline" className="w-full mt-4 glass glow">
              Get in Touch
            </Button>
          </div>
        )}
      </div>
    </nav>
  )
}