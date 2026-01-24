/**
 * ModuleCube - 100% Transparent revolving 3D cube
 * Very deep colors with high transparency matching Lumina S screenshot
 */

interface ModuleCubeProps {
  color: 'strategy' | 'risk' | 'finance'
  size?: number
  className?: string
  href?: string
}

export function ModuleCube({ color, size = 200, className = '', href }: ModuleCubeProps) {
  // 100% transparent with very deep colors (matching Lumina S screenshot)
  const colorMap = {
    strategy: {
      // Very deep purple - matching the screenshot exactly
      main: 'rgba(30, 15, 70, 0.12)',
      light: 'rgba(45, 25, 90, 0.18)',
      dark: 'rgba(20, 10, 50, 0.20)',
      border: 'rgba(80, 50, 150, 0.25)'
    },
    risk: {
      // Dark red - 100% transparent
      main: 'rgba(100, 15, 15, 0.12)',
      light: 'rgba(140, 25, 25, 0.18)',
      dark: 'rgba(80, 10, 10, 0.20)',
      border: 'rgba(200, 50, 50, 0.25)'
    },
    finance: {
      // Dark gold/yellow - 100% transparent
      main: 'rgba(130, 100, 15, 0.12)',
      light: 'rgba(180, 140, 25, 0.18)',
      dark: 'rgba(100, 75, 10, 0.20)',
      border: 'rgba(220, 180, 50, 0.25)'
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
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(135deg, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.08)`,
          }}
        />

        {/* Back face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `translateZ(-${cubeSize / 2}px) rotateY(180deg)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.03)`,
          }}
        />

        {/* Right face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to bottom, ${colors.main} 0%, ${colors.dark} 100%)`,
            transform: `rotateY(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.05)`,
          }}
        />

        {/* Left face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateY(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.03)`,
          }}
        />

        {/* Top face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: `linear-gradient(to right, ${colors.light} 0%, ${colors.main} 100%)`,
            transform: `rotateX(90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.10)`,
          }}
        />

        {/* Bottom face */}
        <div
          className="absolute backdrop-blur-sm"
          style={{
            width: cubeSize,
            height: cubeSize,
            background: colors.dark,
            transform: `rotateX(-90deg) translateZ(${cubeSize / 2}px)`,
            border: `1px solid ${colors.border}`,
            boxShadow: `inset 0 0 80px rgba(255, 255, 255, 0.03)`,
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
