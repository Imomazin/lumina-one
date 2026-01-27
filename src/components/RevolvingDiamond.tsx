/**
 * RevolvingDiamond - 3D rotating transparent diamond for Lumina ONE
 * Superior diamond shape (not a cube) with enhanced particle effects
 */

import { motion } from 'framer-motion'
import { useMemo } from 'react'

interface RevolvingDiamondProps {
  size?: number
  className?: string
}

export function RevolvingDiamond({ size = 200, className = '' }: RevolvingDiamondProps) {
  const diamondSize = size

  // Generate orbital particles
  const orbitParticles = useMemo(() => {
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      angle: (i * 360) / 12,
      distance: diamondSize * 0.7,
      size: 3 + Math.random() * 2,
      delay: i * 0.3
    }))
  }, [diamondSize])

  return (
    <div className={`inline-block ${className}`} style={{ perspective: '1200px' }}>
      {/* Orbital particles */}
      <div className="absolute inset-0 pointer-events-none">
        {orbitParticles.map((particle) => {
          const x = Math.cos((particle.angle * Math.PI) / 180) * particle.distance
          const y = Math.sin((particle.angle * Math.PI) / 180) * particle.distance

          return (
            <motion.div
              key={particle.id}
              className="absolute rounded-full bg-white/30"
              style={{
                width: particle.size,
                height: particle.size,
                left: `calc(50% + ${x}px)`,
                top: `calc(50% + ${y}px)`,
                boxShadow: '0 0 10px rgba(255, 255, 255, 0.5)'
              }}
              animate={{
                opacity: [0.2, 0.8, 0.2],
                scale: [1, 1.5, 1],
                rotate: [0, 360]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: particle.delay,
                ease: "easeInOut"
              }}
            />
          )
        })}
      </div>

      <div
        className="relative"
        style={{
          width: diamondSize,
          height: diamondSize,
          transformStyle: 'preserve-3d',
          animation: 'diamondRevolve 15s infinite linear',
        }}
      >
        {/* Top pyramid (upper half of diamond) */}
        {/* Front face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderBottom: `${diamondSize / 2}px solid rgba(200, 200, 255, 0.15)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `translateZ(${diamondSize / 4}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.1)`,
          }}
        />

        {/* Right face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderBottom: `${diamondSize / 2}px solid rgba(150, 150, 220, 0.12)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(90deg) translateZ(${diamondSize / 4}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.08)`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderBottom: `${diamondSize / 2}px solid rgba(120, 120, 200, 0.10)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(180deg) translateZ(${diamondSize / 4}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.06)`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderBottom: `${diamondSize / 2}px solid rgba(100, 100, 180, 0.12)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(-90deg) translateZ(${diamondSize / 4}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.08)`,
          }}
        />

        {/* Bottom pyramid (lower half of diamond) */}
        {/* Front face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderTop: `${diamondSize / 2}px solid rgba(180, 180, 240, 0.14)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `translateZ(${diamondSize / 4}px) translateY(${diamondSize / 2}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.09)`,
          }}
        />

        {/* Right face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderTop: `${diamondSize / 2}px solid rgba(140, 140, 210, 0.11)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(90deg) translateZ(${diamondSize / 4}px) translateY(${diamondSize / 2}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.07)`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderTop: `${diamondSize / 2}px solid rgba(110, 110, 190, 0.09)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(180deg) translateZ(${diamondSize / 4}px) translateY(${diamondSize / 2}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.05)`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: 0,
            height: 0,
            borderLeft: `${diamondSize / 2}px solid transparent`,
            borderRight: `${diamondSize / 2}px solid transparent`,
            borderTop: `${diamondSize / 2}px solid rgba(130, 130, 200, 0.11)`,
            transformOrigin: `${diamondSize / 2}px ${diamondSize / 2}px`,
            transform: `rotateY(-90deg) translateZ(${diamondSize / 4}px) translateY(${diamondSize / 2}px)`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.07)`,
          }}
        />

        {/* Central highlight */}
        <div
          className="absolute"
          style={{
            width: '8px',
            height: '8px',
            background: 'rgba(255, 255, 255, 0.6)',
            borderRadius: '50%',
            left: `calc(50% - 4px)`,
            top: `calc(50% - 4px)`,
            boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
          }}
        />
      </div>

      {/* Keyframes for rotation */}
      <style>{`
        @keyframes diamondRevolve {
          0% {
            transform: rotateX(-15deg) rotateY(0deg);
          }
          100% {
            transform: rotateX(-15deg) rotateY(360deg);
          }
        }
      `}</style>
    </div>
  )
}
