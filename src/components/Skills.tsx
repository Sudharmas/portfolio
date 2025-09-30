import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaRobot, FaCloud, FaBolt } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiPython, SiMongodb, SiLangchain, SiGooglecloud, SiDatabricks, SiFlask, SiSpring, SiMysql, SiFirebase } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandZapier } from 'react-icons/tb'
import { PiGraph } from 'react-icons/pi'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { GiArtificialIntelligence } from 'react-icons/gi'
import React from 'react'

// Helper for custom image icons - responsive sizing
const CustomIcon = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain inline-block" />
)

const skills = [
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Tensorflow', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'Pytorch', icon: <SiPytorch className="text-red-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'Langchain', icon: <SiLangchain className="text-blue-400" /> },
    { name: 'Langgraph', icon: <PiGraph className="text-indigo-400" /> },
    { name: 'Google ADK', icon: <CustomIcon src="src/components/agent-development-kit.png" alt="Google ADK" /> },
    { name: 'Vertex AI', icon: <CustomIcon src="https://icon.icepanel.io/GCP/svg/Vertex-AI.svg" alt="Vertex AI" /> },
    { name: 'Microsoft Azure', icon: <CustomIcon src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Microsoft_Azure.svg/240px-Microsoft_Azure.svg.png" alt="Azure" /> },
    { name: 'Databricks', icon: <SiDatabricks className="text-orange-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'Hibernate', icon: <CustomIcon src="https://hibernate.org/images/hibernate-logo.svg" alt="Hibernate" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Firestore', icon: <CustomIcon src="https://icon.icepanel.io/GCP/svg/Firestore.svg" alt="Firestore" /> },
    { name: 'make.com', icon: <CustomIcon src="https://www.make.com/_next/static/media/make-logo-text-rgb.2a3b78a1.svg" alt="Make.com" /> },
    { name: 'Zapier', icon: <CustomIcon src="https://cdn.zapier.com/zapier/images/logo_zapier_black.svg" alt="Zapier" /> },
    { name: 'n8n', icon: <CustomIcon src="/workspaces/portfolio/src/components/n8n_pink+white_logo.svg" alt="n8n" /> },
]

function generateCircularPositions(count: number, width: number, height: number) {
    const positions: { x: number; y: number; circle: number }[] = []
    const centerX = width / 2
    const centerY = height / 2
    
    // Calculate responsive radii
    const baseRadius = Math.min(width, height) * 0.15
    const circles = [
        { radius: baseRadius, itemCount: Math.ceil(count * 0.4) }, // Inner circle - 40%
        { radius: baseRadius * 1.8, itemCount: Math.ceil(count * 0.35) }, // Middle circle - 35%
        { radius: baseRadius * 2.6, itemCount: Math.floor(count * 0.25) } // Outer circle - 25%
    ]
    
    let itemIndex = 0
    
    circles.forEach((circle, circleIndex) => {
        const angleStep = (2 * Math.PI) / circle.itemCount
        
        for (let i = 0; i < circle.itemCount && itemIndex < count; i++) {
            const angle = i * angleStep
            const x = centerX + circle.radius * Math.cos(angle)
            const y = centerY + circle.radius * Math.sin(angle)
            
            positions.push({ x, y, circle: circleIndex })
            itemIndex++
        }
    })
    
    return positions
}

export default function Skills() {
    // Responsive dimensions
    const [dimensions, setDimensions] = React.useState({ width: 1000, height: 500 })
    
    React.useEffect(() => {
        const updateDimensions = () => {
            if (window.innerWidth < 640) {
                setDimensions({ width: 350, height: 600 }) // Mobile - taller to accommodate more icons
            } else if (window.innerWidth < 1024) {
                setDimensions({ width: 600, height: 500 }) // Tablet
            } else {
                setDimensions({ width: 1000, height: 500 }) // Desktop
            }
        }
        
        updateDimensions()
        window.addEventListener('resize', updateDimensions)
        return () => window.removeEventListener('resize', updateDimensions)
    }, [])

    const positions = React.useMemo(
        () => generateCircularPositions(skills.length, dimensions.width, dimensions.height),
        [dimensions]
    )

    return (
        <section
            id="skills"
            className="relative w-full min-h-[60vh] sm:min-h-[70vh] overflow-hidden bg-transparent flex items-center justify-center py-12 sm:py-20"
        >
            <h2 className="absolute top-4 sm:top-8 left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-bold text-center z-10 pointer-events-none">Skills</h2>
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
                style={{ 
                    width: dimensions.width, 
                    height: dimensions.height, 
                    left: '50%', 
                    top: '50%', 
                    transform: 'translate(-50%, -50%)', 
                    position: 'absolute' 
                }}
            >
                <div className="relative w-full h-full mx-auto">
                    {skills.map((skill, i) => {
                        const position = positions[i]
                        if (!position) return null
                        
                        const { circle } = position
                        const rotationDirection = circle % 2 === 0 ? 1 : -1 // Alternate rotation direction
                        const rotationSpeed = 30 - (circle * 5) // Inner circles rotate faster
                        const centerX = dimensions.width / 2
                        const centerY = dimensions.height / 2
                        
                        // Calculate base radius for each circle
                        const baseRadius = Math.min(dimensions.width, dimensions.height) * 0.15
                        const circleRadius = baseRadius * (1 + circle * 0.8)
                        
                        // Calculate angle for this skill in the circle
                        const skillsInCircle = positions.filter(p => p.circle === circle).length
                        const skillIndexInCircle = positions.slice(0, i + 1).filter(p => p.circle === circle).length - 1
                        const baseAngle = (skillIndexInCircle / skillsInCircle) * 360
                        
                        return (
                            <div
                                key={skill.name + i}
                                className="absolute pointer-events-auto transition-all duration-500 group hover:z-10"
                                style={{
                                    left: centerX,
                                    top: centerY,
                                    fontSize: window.innerWidth < 640 ? '1.5rem' : window.innerWidth < 1024 ? '2rem' : '2.5rem',
                                    animation: `circleRotate${circle}_${i} ${rotationSpeed}s linear infinite, pulse${i} 2s ease-in-out infinite`,
                                    animationDelay: `${i * 0.1}s`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <div className="relative group-hover:scale-125 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                                    <span className="block relative z-10 drop-shadow-lg">
                                        {skill.icon}
                                    </span>
                                </div>
                                <div className="absolute -bottom-6 sm:-bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-foreground whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md border border-border/50">
                                    {skill.name}
                                </div>
                                <style>
                                    {`
                                        @keyframes circleRotate${circle}_${i} {
                                            from { 
                                                transform: translate(-50%, -50%) 
                                                          rotate(${baseAngle}deg) 
                                                          translateX(${circleRadius}px) 
                                                          rotate(${-baseAngle}deg);
                                            }
                                            to { 
                                                transform: translate(-50%, -50%) 
                                                          rotate(${baseAngle + (rotationDirection * 360)}deg) 
                                                          translateX(${circleRadius}px) 
                                                          rotate(${-baseAngle - (rotationDirection * 360)}deg);
                                            }
                                        }
                                        @keyframes pulse${i} {
                                            0%, 100% { 
                                                filter: brightness(1); 
                                            }
                                            50% { 
                                                filter: brightness(1.2); 
                                            }
                                        }
                                    `}
                                </style>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
