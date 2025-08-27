import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial, Float } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function AnimatedSphere({ position, color, scale = 1 }: { position: [number, number, number], color: string, scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
    }
  })

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere ref={meshRef} args={[1 * scale, 100, 200]} position={position}>
        <MeshDistortMaterial
          color={color}
          attach="material"
          distort={0.3}
          speed={2}
          roughness={0.1}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </Sphere>
    </Float>
  )
}

function Particles() {
  const particlesRef = useRef<THREE.Points>(null!)
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.x = state.clock.elapsedTime * 0.05
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.075
    }
  })

  const particlesPosition = new Float32Array(2000 * 3)
  for (let i = 0; i < 2000; i++) {
    particlesPosition[i * 3] = (Math.random() - 0.5) * 100
    particlesPosition[i * 3 + 1] = (Math.random() - 0.5) * 100
    particlesPosition[i * 3 + 2] = (Math.random() - 0.5) * 100
  }

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={2000}
          array={particlesPosition}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.1} color="#22c55e" transparent opacity={0.6} />
    </points>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 20], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#22c55e" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        <AnimatedSphere position={[-8, 4, -10]} color="#22c55e" scale={1.5} />
        <AnimatedSphere position={[8, -4, -15]} color="#8b5cf6" scale={1.2} />
        <AnimatedSphere position={[0, 8, -20]} color="#06b6d4" scale={0.8} />
        <AnimatedSphere position={[-12, -8, -25]} color="#f59e0b" scale={1} />
        
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}