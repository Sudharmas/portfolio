import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, Box, Octahedron, Icosahedron, Float, Stars } from '@react-three/drei'
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function FloatingObject({ position, type, color, scale = 1 }: { 
  position: [number, number, number], 
  type: 'sphere' | 'box' | 'octahedron' | 'icosahedron',
  color: string, 
  scale?: number 
}) {
  const meshRef = useRef<THREE.Mesh>(null!)
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.1
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.15
    }
  })

  const GeometryComponent = {
    sphere: Sphere,
    box: Box,
    octahedron: Octahedron,
    icosahedron: Icosahedron
  }[type]

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
      <GeometryComponent ref={meshRef} args={[1 * scale]} position={position}>
        <meshStandardMaterial
          color={color}
          metalness={0.8}
          roughness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
      </GeometryComponent>
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
        camera={{ position: [0, 0, 30], fov: 60 }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.8} color="#22c55e" />
        <pointLight position={[-10, -10, -10]} intensity={0.4} color="#8b5cf6" />
        <pointLight position={[0, 0, 10]} intensity={0.3} color="#06b6d4" />
        
        <Stars radius={300} depth={60} count={1000} factor={7} saturation={0} fade />
        
        <FloatingObject position={[-15, 8, -20]} type="sphere" color="#22c55e" scale={2} />
        <FloatingObject position={[12, -6, -25]} type="icosahedron" color="#8b5cf6" scale={1.5} />
        <FloatingObject position={[0, 15, -30]} type="octahedron" color="#06b6d4" scale={1.2} />
        <FloatingObject position={[-20, -10, -35]} type="box" color="#f59e0b" scale={1.8} />
        <FloatingObject position={[18, 12, -15]} type="sphere" color="#ec4899" scale={1} />
        <FloatingObject position={[-8, -15, -40]} type="icosahedron" color="#10b981" scale={1.3} />
        
        <Particles />
        
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.3}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}