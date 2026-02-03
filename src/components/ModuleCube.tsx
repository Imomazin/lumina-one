/**
 * ModuleCube - Translucent revolving 3D cube
 * Exact replica of Lumina S cube design with glass-morphism
 */

interface ModuleCubeProps {
  color: 'strategy' | 'risk' | 'finance'
  size?: number
  className?: string
  href?: string
}

export function ModuleCube({ color, size = 200, className = '', href }: ModuleCubeProps) {
  // Exact colors with translucency
  const colorMap = {
    strategy: {
      // Dark purple for Lumina S
      main: 'rgba(91, 33, 182, 0.4)',
      light: 'rgba(124, 58, 237, 0.5)',
      dark: 'rgba(76, 29, 149, 0.6)',
      border: 'rgba(124, 58, 237, 0.3)'
    },
    risk: {
      // Red for Risk
      main: 'rgba(220, 38, 38, 0.4)',
      light: 'rgba(239, 68, 68, 0.5)',
      dark: 'rgba(153, 27, 27, 0.6)',
      border: 'rgba(239, 68, 68, 0.3)'
    },
    finance: {
      // Yellow for Finance
      main: 'rgba(234, 179, 8, 0.4)',
      light: 'rgba(250, 204, 21, 0.5)',
      dark: 'rgba(161, 98, 7, 0.6)',
      border: 'rgba(250, 204, 21, 0.3)'
    }
  }

  const colors = colorMap[color]
  const cubeSize = size

  const cubeContent = (
    <div className={`inline-block ${className}`} style={{ perspective: '1000px' }}>
      <div
        className="relative cube-revolve"
        style={{
          width: cubeSize,
          height: cubeSize,
          transformStyle: 'preserve-3d',
          animation: 'revolve 20s infinite linear',
        }}
      >
        {/* Front face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.1)`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `translateZ(-${cubeSize / 2}px) rotateY(180deg)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.05)`,
          }}
        />

        {/* Right face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to bottom, ${colors.main} 0%, ${colors.dark} 100%)`,
            transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.08)`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.05)`,
          }}
        />

        {/* Top face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to right, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.12)`,
          }}
        />

        {/* Bottom face */}
        <div
          className="absolute backdrop-blur-md"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 60px rgba(255, 255, 255, 0.05)`,
          }}
        />
      </div>

      {/* Keyframes for rotation */}
      <style>{`
        @keyframes revolve {
          0% {
            transform: rotateX(-20deg) rotateY(-30deg);
          }
          100% {
            transform: rotateX(-20deg) rotateY(330deg);
          }
        }
      `}</style>
    </div>
  )

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block transition-transform hover:scale-105"
      >
        {cubeContent}
      </a>
    )
  }

  return cubeContent
}
