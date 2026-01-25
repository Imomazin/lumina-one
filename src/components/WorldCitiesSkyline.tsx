interface Building {
  width: number
  height: number
  color: string
  hasAntenna?: boolean
  windows?: boolean
}

interface CityConfig {
  name: string
  buildings: Building[]
  landmark?: {
    type: 'tower' | 'bridge' | 'arch' | 'dome'
    position: number
  }
}

const cities: CityConfig[] = [
  // New York
  {
    name: 'New York',
    buildings: [
      { width: 30, height: 180, color: 'from-blue-500/20 to-blue-600/30', windows: true },
      { width: 25, height: 140, color: 'from-purple-500/20 to-purple-600/30', windows: true },
      { width: 35, height: 220, color: 'from-indigo-500/20 to-indigo-600/30', hasAntenna: true, windows: true },
      { width: 20, height: 100, color: 'from-blue-400/20 to-blue-500/30', windows: true },
      { width: 28, height: 160, color: 'from-purple-400/20 to-purple-500/30', windows: true },
      { width: 32, height: 200, color: 'from-blue-500/20 to-blue-600/30', hasAntenna: true, windows: true },
    ]
  },
  // Tokyo
  {
    name: 'Tokyo',
    buildings: [
      { width: 22, height: 120, color: 'from-pink-500/20 to-pink-600/30', windows: true },
      { width: 38, height: 240, color: 'from-red-500/20 to-red-600/30', hasAntenna: true, windows: true },
      { width: 26, height: 150, color: 'from-pink-400/20 to-pink-500/30', windows: true },
      { width: 20, height: 110, color: 'from-red-400/20 to-red-500/30', windows: true },
      { width: 30, height: 170, color: 'from-pink-500/20 to-pink-600/30', windows: true },
    ]
  },
  // Dubai
  {
    name: 'Dubai',
    buildings: [
      { width: 24, height: 130, color: 'from-amber-500/20 to-amber-600/30', windows: true },
      { width: 28, height: 300, color: 'from-yellow-500/20 to-yellow-600/30', hasAntenna: true, windows: true },
      { width: 26, height: 160, color: 'from-orange-500/20 to-orange-600/30', windows: true },
      { width: 32, height: 200, color: 'from-amber-400/20 to-amber-500/30', windows: true },
      { width: 22, height: 140, color: 'from-yellow-400/20 to-yellow-500/30', windows: true },
    ]
  },
  // Singapore
  {
    name: 'Singapore',
    buildings: [
      { width: 26, height: 145, color: 'from-teal-500/20 to-teal-600/30', windows: true },
      { width: 30, height: 180, color: 'from-cyan-500/20 to-cyan-600/30', windows: true },
      { width: 35, height: 210, color: 'from-emerald-500/20 to-emerald-600/30', hasAntenna: true, windows: true },
      { width: 24, height: 130, color: 'from-teal-400/20 to-teal-500/30', windows: true },
      { width: 28, height: 165, color: 'from-cyan-400/20 to-cyan-500/30', windows: true },
    ]
  },
  // Hong Kong
  {
    name: 'Hong Kong',
    buildings: [
      { width: 32, height: 195, color: 'from-violet-500/20 to-violet-600/30', hasAntenna: true, windows: true },
      { width: 25, height: 155, color: 'from-purple-500/20 to-purple-600/30', windows: true },
      { width: 28, height: 175, color: 'from-fuchsia-500/20 to-fuchsia-600/30', windows: true },
      { width: 22, height: 125, color: 'from-violet-400/20 to-violet-500/30', windows: true },
      { width: 30, height: 190, color: 'from-purple-400/20 to-purple-500/30', hasAntenna: true, windows: true },
    ]
  },
  // London
  {
    name: 'London',
    buildings: [
      { width: 20, height: 110, color: 'from-slate-500/20 to-slate-600/30', windows: true },
      { width: 35, height: 225, color: 'from-blue-500/20 to-blue-600/30', windows: true },
      { width: 25, height: 145, color: 'from-indigo-500/20 to-indigo-600/30', windows: true },
      { width: 28, height: 170, color: 'from-slate-400/20 to-slate-500/30', hasAntenna: true, windows: true },
      { width: 23, height: 135, color: 'from-blue-400/20 to-blue-500/30', windows: true },
    ]
  },
  // Shanghai
  {
    name: 'Shanghai',
    buildings: [
      { width: 30, height: 185, color: 'from-rose-500/20 to-rose-600/30', windows: true },
      { width: 36, height: 250, color: 'from-red-500/20 to-red-600/30', hasAntenna: true, windows: true },
      { width: 26, height: 155, color: 'from-pink-500/20 to-pink-600/30', windows: true },
      { width: 28, height: 175, color: 'from-rose-400/20 to-rose-500/30', windows: true },
      { width: 24, height: 140, color: 'from-red-400/20 to-red-500/30', windows: true },
    ]
  },
  // Paris
  {
    name: 'Paris',
    buildings: [
      { width: 22, height: 120, color: 'from-amber-500/20 to-amber-600/30', windows: true },
      { width: 18, height: 200, color: 'from-orange-500/20 to-orange-600/30', hasAntenna: true }, // Eiffel Tower
      { width: 26, height: 135, color: 'from-yellow-500/20 to-yellow-600/30', windows: true },
      { width: 24, height: 125, color: 'from-amber-400/20 to-amber-500/30', windows: true },
      { width: 20, height: 115, color: 'from-orange-400/20 to-orange-500/30', windows: true },
    ]
  },
]

function CityBuilding({ building }: { building: Building }) {
  const windowRows = building.windows ? Math.floor(building.height / 20) : 0
  const windowCols = building.windows ? Math.floor(building.width / 8) : 0

  return (
    <div className="relative" style={{ width: `${building.width}px` }}>
      {/* Building body */}
      <div
        className={`bg-gradient-to-b ${building.color} border border-white/10 relative`}
        style={{
          width: `${building.width}px`,
          height: `${building.height}px`,
        }}
      >
        {/* Windows pattern */}
        {building.windows && (
          <div className="absolute inset-0 p-2">
            <div className="grid gap-1.5" style={{
              gridTemplateColumns: `repeat(${windowCols}, 1fr)`,
              gridTemplateRows: `repeat(${windowRows}, 1fr)`
            }}>
              {Array.from({ length: windowRows * windowCols }).map((_, i) => (
                <div
                  key={i}
                  className="bg-yellow-200/30 rounded-[1px]"
                  style={{
                    opacity: Math.random() > 0.3 ? 0.6 : 0.2,
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Antenna */}
      {building.hasAntenna && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-t from-white/40 to-white/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 bg-red-500/60 rounded-full animate-pulse" />
        </div>
      )}
    </div>
  )
}

function CityGroup({ city, offset = 0 }: { city: CityConfig; offset?: number }) {
  return (
    <div className="flex items-end gap-2 px-8" style={{ transform: `translateX(${offset}px)` }}>
      {city.buildings.map((building, index) => (
        <CityBuilding key={`${city.name}-${index}`} building={building} />
      ))}
    </div>
  )
}

export function WorldCitiesSkyline() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes scrollCitiesRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .cities-scroll {
          animation: scrollCitiesRight 120s linear infinite;
        }
        .cities-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Gradient overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />

      {/* Scrolling cities container */}
      <div className="absolute bottom-0 left-0 right-0 flex items-end pb-8">
        <div className="cities-scroll flex items-end gap-16 will-change-transform">
          {/* Render cities twice for seamless loop */}
          {[...cities, ...cities].map((city, index) => (
            <CityGroup key={`${city.name}-${index}`} city={city} />
          ))}
        </div>
      </div>

      {/* Additional subtle glow effects */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-blue-500/5 via-purple-500/5 to-transparent" />
    </div>
  )
}
