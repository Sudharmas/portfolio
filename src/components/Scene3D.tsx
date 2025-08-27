import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

function Stars() {
  const pointsRef = useRef<THREE.Points>(null!)
  const starCount = 4000

  // Memoize star positions and colors
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(starCount * 3)
    const colors = new Float32Array(starCount * 3)
    for (let i = 0; i < starCount; i++) {
      // Spread stars in a sphere
      const r = 80 + Math.random() * 40
      const theta = Math.random() * 2 * Math.PI
      const phi = Math.acos(2 * Math.random() - 1)
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta)
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta)
      positions[i * 3 + 2] = r * Math.cos(phi)
      // Star color: mostly white, some blue/yellow
      const color = new THREE.Color()
      if (Math.random() < 0.7) {
        color.setHSL(0.6 + Math.random() * 0.1, 0.1, 0.9 + Math.random() * 0.1)
      } else if (Math.random() < 0.85) {
        color.setHSL(0.1 + Math.random() * 0.1, 0.3, 0.8)
      } else {
        color.setHSL(0.15, 0.1, 1)
      }
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }
    return { positions, colors }
  }, [])

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.01
    }
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={starCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={starCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.25}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
      />
    </points>
  )
}

function Nebula() {
  // A large, faint, colored sphere for a nebula effect
  return (
    <mesh>
      <sphereGeometry args={[40, 64, 64]} />
      <meshBasicMaterial
        color="#6d28d9"
        transparent
        opacity={0.08}
        side={THREE.BackSide}
      />
    </mesh>
  )
}

export default function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [0, 0, 60], fov: 65 }}
        gl={{ alpha: false, antialias: true }}
        style={{ background: 'radial-gradient(ellipse at center, #0f172a 0%, #020617 100%)' }}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[0, 0, 0]} intensity={0.3} color="#fff" />
        <Nebula />
        <Stars />
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          enableRotate={true}
          autoRotate
          autoRotateSpeed={0.15}
          maxPolarAngle={Math.PI}
          minPolarAngle={0}
        />
      </Canvas>
    </div>
  )
}