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
    <img src={src} alt={alt} className="w-12 h-12 object-contain inline-block" />
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

function generateRandomPositions(count: number, width: number, height: number, minDist: number) {
    const positions: { x: number; y: number }[] = []

    let attempts = 0
    while (positions.length < count && attempts < count * 100) {
        attempts++
        const pad = 40
        const x = Math.random() * (width - 2 * pad) + pad
        const y = Math.random() * (height - 2 * pad) + pad

        let tooClose = false
        for (const pos of positions) {
            const dx = pos.x - x
            const dy = pos.y - y
            if (Math.sqrt(dx * dx + dy * dy) < minDist) {
                tooClose = true
                break
            }
        }
        if (!tooClose) {
            positions.push({ x, y })
        }
    }
    while (positions.length < count) {
        positions.push({
            x: Math.random() * width,
            y: Math.random() * height,
        })
    }
    return positions
}

export default function Skills() {
    const width = 900
    const height = 420
    const minDist = 70

    const positions = React.useMemo(
        () => generateRandomPositions(skills.length, width, height, minDist),
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
                                className="absolute pointer-events-auto transition-transform duration-700 group"
                                style={{
                                    left: x,
                                    top: y,
                                    fontSize: '2.8rem', // Increased size
                                    animation: `floatIcon${i} 6s ease-in-out infinite alternate`,
                                    transform: 'translate(-50%, -50%)',
                                }}
                            >
                                <span className="block transition-transform duration-300 group-hover:scale-125">
                                    {skill.icon}
                                </span>
                                <style>
                                    {`
                                        @keyframes floatIcon${i} {
                                            0% { transform: translate(-50%, -50%) scale(1); }
                                            100% { transform: translate(-50%, -50%) scale(1.13) rotate(${(Math.random() - 0.5) * 20}deg); }
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
