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

export default function Skills() {
  return (
    <section id="skills" className="relative w-full h-[70vh] overflow-hidden bg-background flex items-center justify-center">
      <h2 className="absolute top-8 left-1/2 -translate-x-1/2 text-4xl font-bold text-center z-10 pointer-events-none">Skills</h2>
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        {skills.map((skill, i) => {
          // Randomize position and animation for each icon
          const top = getRandom(10, 80)
          const left = getRandom(5, 90)
          const duration = getRandom(8, 18)
          const delay = getRandom(0, 8)
          const size = getRandom(2.5, 4.5)
          return (
            <div
              key={skill.name + i}
              className="absolute flex flex-col items-center"
              style={{
                top: `${top}%`,
                left: `${left}%`,
                animation: `float${i} ${duration}s ease-in-out infinite alternate`,
                animationDelay: `${delay}s`,
                zIndex: 2,
                pointerEvents: 'auto',
              }}
            >
              <div className={`mb-1`} style={{ fontSize: `${size}rem` }}>
                {skill.icon}
              </div>
              <span className="text-xs font-medium bg-white/70 rounded px-2 py-0.5 shadow">{skill.name}</span>
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