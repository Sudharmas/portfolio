import React, { useEffect, useRef } from 'react'

export default function MouseFollower() {
    const followerRef = useRef<HTMLDivElement>(null)
    const mouse = useRef({ x: 0, y: 0 })
    const pos = useRef({ x: 0, y: 0 })
    const animationRef = useRef<number>()

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouse.current.x = e.clientX
            mouse.current.y = e.clientY
        }

        const animate = () => {
            // Interpolate position for smooth trailing
            pos.current.x += (mouse.current.x - pos.current.x) * 0.18
            pos.current.y += (mouse.current.y - pos.current.y) * 0.18

            if (followerRef.current) {
                followerRef.current.style.left = `${pos.current.x}px`
                followerRef.current.style.top = `${pos.current.y}px`
            }
            animationRef.current = requestAnimationFrame(animate)
        }

        window.addEventListener('mousemove', handleMouseMove)
        animationRef.current = requestAnimationFrame(animate)

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
        }
    }, [])

    return (
        <div
            ref={followerRef}
            className="pointer-events-none fixed z-[9999] w-4 h-4 rounded-full"
            style={{
                left: 0,
                top: 0,
                transform: 'translate(-50%, -50%)',
                background: 'radial-gradient(circle, #fff 60%, #aeefff 100%)',
                boxShadow: `
                    0 0 32px 8px #fff,
                    0 0 64px 16px #aeefff,
                    0 0 128px 32px #fff
                `,
                opacity: 0.85,
                filter: 'blur(0.5px)',
                transition: 'box-shadow 0.2s, background 0.2s',
                willChange: 'left, top',
            }}
        />
    )
}