/**
 * ModuleCube - Exact replica of Lumina S cube design
 * Professional 3D cube with proper perspective and shading
 */

interface ModuleCubeProps {
  color: 'strategy' | 'risk' | 'finance'
  size?: number
  className?: string
}

export function ModuleCube({ color, size = 200, className = '' }: ModuleCubeProps) {
  // Exact colors from requirements
  const colorMap = {
    strategy: {
      // Keep Lumina S purple/indigo
      main: '#5B21B6',
      light: '#7C3AED',
      dark: '#4C1D95'
    },
    risk: {
      // Red for Risk
      main: '#DC2626',
      light: '#EF4444',
      dark: '#991B1B'
    },
    finance: {
      // Yellow for Finance
      main: '#EAB308',
      light: '#FACC15',
      dark: '#A16207'
    }
  }

  const colors = colorMap[color]
  const cubeSize = size

  return (
    <div className={`inline-block ${className}`} style={{ perspective: '1000px' }}>
      <div
        className="relative"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: 'preserve-3d',
          transform: 'rotateX(-20deg) rotateY(-30deg)',
        }}
      >
        {/* Front face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.dark}`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `translateZ(-${cubeSize / 2}px) rotateY(180deg)`,
            border: `1px solid ${colors.dark}`,
          }}
        />

        {/* Right face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to bottom, ${colors.main} 0%, ${colors.dark} 100%)`,
            transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.dark}`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.dark}`,
          }}
        />

        {/* Top face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to right, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.dark}`,
          }}
        />

        {/* Bottom face */}
        <div
          className="absolute"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.dark}`,
          }}
        />
      </div>
    </div>
  )
}
