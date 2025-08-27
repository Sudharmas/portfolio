import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaDatabase, FaRobot, FaCloud, FaBolt } from 'react-icons/fa'
import { SiTensorflow, SiPytorch, SiPython, SiMongodb, SiLangchain, SiGooglecloud, SiDatabricks, SiFlask, SiSpring, SiMysql, SiFirebase } from 'react-icons/si'
import { FaJava } from 'react-icons/fa'
import { TbBrandZapier } from 'react-icons/tb'
import { PiGraph } from 'react-icons/pi'
import { MdOutlineAutoGraph } from 'react-icons/md'
import { GiArtificialIntelligence } from 'react-icons/gi'
import React from 'react'

const skills = [
    { name: 'React', icon: <FaReact className="text-sky-400" /> },
    { name: 'Node.js', icon: <FaNodeJs className="text-green-600" /> },
    { name: 'HTML5', icon: <FaHtml5 className="text-orange-500" /> },
    { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500" /> },
    { name: 'JavaScript', icon: <FaJs className="text-yellow-400" /> },
    { name: 'Git', icon: <FaGitAlt className="text-red-500" /> },
    { name: 'Tensorflow', icon: <SiTensorflow className="text-orange-400" /> },
    { name: 'Pytorch', icon: <SiPytorch className="text-red-500" /> },
    { name: 'Python', icon: <SiPython className="text-yellow-300" /> },
    { name: 'RAG', icon: <MdOutlineAutoGraph className="text-purple-400" /> },
    { name: 'MongoDB', icon: <SiMongodb className="text-green-700" /> },
    { name: 'Langchain', icon: <SiLangchain className="text-blue-400" /> },
    { name: 'Langgraph', icon: <PiGraph className="text-indigo-400" /> },
    { name: 'Google ADK', icon: <SiGooglecloud className="text-blue-300" /> },
    { name: 'Vertex AI', icon: <GiArtificialIntelligence className="text-violet-400" /> },
    { name: 'Microsoft Azure', icon: <FaCloud className="text-blue-600" /> },
    { name: 'Databricks', icon: <SiDatabricks className="text-orange-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Java', icon: <FaJava className="text-red-600" /> },
    { name: 'Flask', icon: <SiFlask className="text-gray-400" /> },
    { name: 'Hibernate', icon: <FaDatabase className="text-green-900" /> },
    { name: 'Spring', icon: <SiSpring className="text-green-500" /> },
    { name: 'MySQL', icon: <SiMysql className="text-blue-700" /> },
    { name: 'Firebase', icon: <SiFirebase className="text-yellow-500" /> },
    { name: 'Firestore', icon: <FaBolt className="text-yellow-400" /> },
    { name: 'make.com', icon: <FaCloud className="text-blue-400" /> },
    { name: 'Zapier', icon: <TbBrandZapier className="text-orange-400" /> },
    { name: 'n8n', icon: <FaCloud className="text-green-400" /> },
    { name: 'Relevance AI', icon: <GiArtificialIntelligence className="text-indigo-500" /> },
]

function getRandom(min: number, max: number) {
  return Math.random() * (max - min) + min
}
// Predefined positions and animation settings for each skill icon
const skillPositions = [
    { top: 15, left: 10, duration: 12, delay: 0, size: 3 },
    { top: 25, left: 25, duration: 10, delay: 2, size: 3.5 },
    { top: 40, left: 15, duration: 14, delay: 1, size: 2.8 },
    { top: 60, left: 12, duration: 11, delay: 3, size: 3.2 },
    { top: 75, left: 20, duration: 13, delay: 0.5, size: 3.7 },
    { top: 70, left: 35, duration: 9, delay: 1.5, size: 3 },
    { top: 60, left: 50, duration: 12, delay: 2.5, size: 3.3 },
    { top: 75, left: 65, duration: 10, delay: 1, size: 3.1 },
    { top: 60, left: 80, duration: 13, delay: 2, size: 3.4 },
    { top: 40, left: 85, duration: 14, delay: 0, size: 3.2 },
    { top: 25, left: 80, duration: 12, delay: 2, size: 3.5 },
    { top: 15, left: 70, duration: 11, delay: 1, size: 3 },
    { top: 10, left: 55, duration: 13, delay: 2.5, size: 3.6 },
    { top: 10, left: 35, duration: 12, delay: 1.5, size: 3.2 },
    { top: 25, left: 55, duration: 10, delay: 2, size: 3.4 },
    { top: 40, left: 65, duration: 14, delay: 0.5, size: 3.1 },
    { top: 55, left: 60, duration: 13, delay: 1.5, size: 3.3 },
    { top: 55, left: 40, duration: 12, delay: 2.5, size: 3.2 },
    { top: 35, left: 30, duration: 11, delay: 1, size: 3.5 },
    { top: 35, left: 70, duration: 13, delay: 2, size: 3.4 },
    { top: 50, left: 20, duration: 12, delay: 1.5, size: 3.2 },
    { top: 65, left: 25, duration: 10, delay: 2, size: 3.1 },
    { top: 80, left: 40, duration: 14, delay: 0.5, size: 3.3 },
    { top: 80, left: 60, duration: 13, delay: 1.5, size: 3.2 },
    { top: 65, left: 75, duration: 12, delay: 2.5, size: 3.5 },
    { top: 50, left: 80, duration: 11, delay: 1, size: 3.4 },
    { top: 20, left: 45, duration: 13, delay: 2, size: 3.2 },
    { top: 70, left: 50, duration: 12, delay: 1.5, size: 3.1 },
    { top: 30, left: 60, duration: 10, delay: 2, size: 3.3 },
    { top: 60, left: 30, duration: 14, delay: 0.5, size: 3.2 },
]

export default function Skills() {
    return (
        <section id="skills" className="relative w-full h-[70vh] overflow-hidden bg-transparent flex items-center justify-center">
            <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-bold text-center z-10 pointer-events-none">Skills</h2>
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                {skills.map((skill, i) => {
                    const pos = skillPositions[i] || { top: 50, left: 50, duration: 12, delay: 0, size: 3 }
                    return (
                        <div
                            key={skill.name + i}
                            className="absolute flex flex-col items-center"
                            style={{
                                top: `${pos.top}%`,
                                left: `${pos.left}%`,
                                animation: `float${i} ${pos.duration}s ease-in-out infinite alternate`,
                                animationDelay: `${pos.delay}s`,
                                zIndex: 2,
                                pointerEvents: 'auto',
                            }}
                        >
                            <div className={`mb-1`} style={{ fontSize: `${pos.size}rem` }}>
                                {skill.icon}
                            </div>
                            <span className="text-xs font-medium rounded px-2 py-0.5 shadow bg-white/70">{skill.name}</span>
                            <style>
                                {`
                                    @keyframes float${i} {
                                        0% { transform: translateY(0px) scale(1); }
                                        100% { transform: translateY(-30px) scale(1.07); }
                                    }
                                `}
                            </style>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}