import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaRobot, FaCloud, FaBolt } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiPython, SiMongodb, SiLangchain, SiGooglecloud, SiDatabricks, SiFlask, SiSpring, SiMysql, SiFirebase } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandZapier } from 'react-icons/tb'
import { PiGraph } from 'react-icons/pi'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { GiArtificialIntelligence } from 'react-icons/gi'
import React from 'react'

// Helper for custom image icons
const CustomIcon = ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} className="w-16 h-16 object-contain inline-block" />
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
    { name: 'Vertex AI', icon: <CustomIcon src="/src/components/vertex-ai-logo-png_seeklogo-523075.png" alt="Vertex AI" /> },
    { name: 'Microsoft Azure', icon: <CustomIcon src="/src/components/azure.png" alt="Azure" /> },
    { name: 'Databricks', icon: <SiDatabricks className="text-orange-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'Hibernate', icon: <CustomIcon src="src/components/hibernate-logo.png" alt="Hibernate" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Firestore', icon: <CustomIcon src="src/components/firestore.png" alt="Firestore" /> },
    { name: 'make.com', icon:<CustomIcon src="src/components/make.png" alt="Make.com" /> },
    { name: 'Zapier', icon: <TbBrandZapier className="text-orange-400" /> },
    { name: 'n8n', icon: <CustomIcon src="src/components/n8n-color.png" alt="n8n" /> },
]

function generateGridPositions(count: number, width: number, height: number) {
    const positions: { x: number; y: number }[] = []
    const cols = Math.ceil(Math.sqrt(count * (width / height)))
    const rows = Math.ceil(count / cols)
    
    const cellWidth = width / cols
    const cellHeight = height / rows
    const padding = 60
    
    for (let i = 0; i < count; i++) {
        const row = Math.floor(i / cols)
        const col = i % cols
        
        // Add some randomness within each cell for organic feel
        const randomX = (Math.random() - 0.5) * (cellWidth * 0.3)
        const randomY = (Math.random() - 0.5) * (cellHeight * 0.3)
        
        const x = col * cellWidth + cellWidth / 2 + randomX
        const y = row * cellHeight + cellHeight / 2 + randomY
        
        // Ensure positions stay within bounds
        positions.push({
            x: Math.max(padding, Math.min(width - padding, x)),
            y: Math.max(padding, Math.min(height - padding, y))
        })
    }
    
    return positions
}

export default function Skills() {
    const width = 1000
    const height = 500

    const positions = React.useMemo(
        () => generateGridPositions(skills.length, width, height),
        []
    )

    return (
        <section
            id="skills"
            className="relative w-full h-[70vh] overflow-hidden bg-transparent flex items-center justify-center"
            style={{ minHeight: height }}
        >
            <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-bold text-center z-10 pointer-events-none">Skills</h2>
            <div
                className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
                style={{ width, height, left: '50%', top: '50%', transform: 'translate(-50%, -50%)', position: 'absolute' }}
            >
                <div className="relative w-full h-full mx-auto">
                    {skills.map((skill, i) => {
                        const { x, y } = positions[i]
                        return (
                            <div
                                key={skill.name + i}
                                 className="absolute pointer-events-auto transition-all duration-500 group hover:z-10"
                                style={{
                                    left: x,
                                    top: y,
                                    fontSize: '3.5rem',
                                    animation: `floatIcon${i} ${4 + (i % 3)}s ease-in-out infinite`,
                                    animationDelay: `${i * 0.2}s`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <div className="relative group-hover:scale-125 transition-transform duration-300">
                                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 scale-150"></div>
                                    <span className="block relative z-10 drop-shadow-lg">
                                        {skill.icon}
                                    </span>
                                </div>
                                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-xs font-medium text-foreground whitespace-nowrap bg-background/80 backdrop-blur-sm px-2 py-1 rounded-md border border-border/50">
                                    {skill.name}
                                </div>
                                <style>
                                    {`
                                        @keyframes floatIcon${i} {
                                            0%, 100% { 
                                                transform: translate(-50%, -50%) translateY(0px) rotate(0deg) scale(1); 
                                            }
                                            25% { 
                                                transform: translate(-50%, -50%) translateY(-${5 + (i % 10)}px) rotate(${(i % 2 === 0 ? 1 : -1) * 2}deg) scale(1.05); 
                                            }
                                            50% { 
                                                transform: translate(-50%, -50%) translateY(-${10 + (i % 8)}px) rotate(0deg) scale(1.1); 
                                            }
                                            75% { 
                                                transform: translate(-50%, -50%) translateY(-${5 + (i % 6)}px) rotate(${(i % 2 === 0 ? -1 : 1) * 2}deg) scale(1.05); 
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
