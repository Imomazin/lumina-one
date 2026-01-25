interface CitySkyline {
  name: string
  imageUrl: string
  alt: string
}

const citySkylines: CitySkyline[] = [
  {
    name: 'New York',
    imageUrl: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800&h=400&fit=crop&q=80',
    alt: 'New York City skyline at dusk'
  },
  {
    name: 'Tokyo',
    imageUrl: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&h=400&fit=crop&q=80',
    alt: 'Tokyo skyline with Mount Fuji'
  },
  {
    name: 'Dubai',
    imageUrl: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&h=400&fit=crop&q=80',
    alt: 'Dubai skyline with Burj Khalifa'
  },
  {
    name: 'Singapore',
    imageUrl: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?w=800&h=400&fit=crop&q=80',
    alt: 'Singapore Marina Bay skyline'
  },
  {
    name: 'Hong Kong',
    imageUrl: 'https://images.unsplash.com/photo-1536599018102-9f803c140fc1?w=800&h=400&fit=crop&q=80',
    alt: 'Hong Kong Victoria Harbour skyline'
  },
  {
    name: 'London',
    imageUrl: 'https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=400&fit=crop&q=80',
    alt: 'London skyline with Thames River'
  },
  {
    name: 'Shanghai',
    imageUrl: 'https://images.unsplash.com/photo-1537511446984-935f663eb1f4?w=800&h=400&fit=crop&q=80',
    alt: 'Shanghai Pudong skyline'
  },
  {
    name: 'Paris',
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&h=400&fit=crop&q=80',
    alt: 'Paris skyline with Eiffel Tower'
  },
  {
    name: 'Chicago',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=800&h=400&fit=crop&q=80',
    alt: 'Chicago downtown skyline'
  },
  {
    name: 'Sydney',
    imageUrl: 'https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800&h=400&fit=crop&q=80',
    alt: 'Sydney Opera House and skyline'
  }
]

function CityImage({ city, index, theme }: { city: CitySkyline; index: number; theme: 'dark' | 'white' }) {
  // Improved visibility for both themes with better contrast
  // Dark theme: increased opacity for better visibility on dark backgrounds
  // White theme: solid and visible
  const imageOpacity = theme === 'dark' ? 'opacity-70' : 'opacity-90'
  const hoverOpacity = theme === 'dark' ? 'group-hover:opacity-85' : 'group-hover:opacity-100'
  const borderColor = theme === 'dark' ? 'border-white/20' : 'border-gray-300'
  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-900'
  const textSecondary = theme === 'dark' ? 'text-white/90' : 'text-gray-600'
  const gradientOverlay = theme === 'dark'
    ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent'
    : 'bg-gradient-to-t from-white/80 via-white/40 to-transparent'

  return (
    <div
      className="relative flex-shrink-0 h-[280px] w-[500px] group"
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* City image with premium effects */}
      <div className={`relative h-full w-full rounded-lg overflow-hidden border ${borderColor} shadow-2xl`}>
        <img
          src={city.imageUrl}
          alt={city.alt}
          className={`w-full h-full object-cover ${imageOpacity} ${hoverOpacity} group-hover:scale-105 transition-all duration-500`}
          loading="lazy"
        />

        {/* Gradient overlay for depth */}
        <div className={`absolute inset-0 ${gradientOverlay}`} />

        {/* City label */}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className={`${textColor} text-xl font-semibold tracking-tight drop-shadow-lg`}>
            {city.name}
          </div>
          <div className={`${textSecondary} text-sm mt-1 drop-shadow`}>
            Global Business Hub
          </div>
        </div>

        {/* Premium glow effect on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-500" />
      </div>
    </div>
  )
}

export function WorldCitiesSkyline({ theme = 'dark' }: { theme?: 'dark' | 'white' }) {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <style>{`
        @keyframes scrollCitiesRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .cities-scroll {
          animation: scrollCitiesRight 180s linear infinite;
        }
        .cities-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* Gradient overlay at bottom for seamless blend */}
      <div className={`absolute bottom-0 left-0 right-0 h-40 ${theme === 'dark' ? 'bg-gradient-to-t from-black via-black/90 to-transparent' : 'bg-gradient-to-t from-white via-white/90 to-transparent'} z-10 pointer-events-none`} />

      {/* Top fade for seamless integration */}
      <div className={`absolute top-0 left-0 right-0 h-40 ${theme === 'dark' ? 'bg-gradient-to-b from-black via-black/50 to-transparent' : 'bg-gradient-to-b from-white via-white/50 to-transparent'} z-10 pointer-events-none`} />

      {/* Scrolling cities container */}
      <div className="absolute -bottom-32 left-0 right-0 flex items-end">
        <div className="cities-scroll flex items-end gap-8 will-change-transform">
          {/* Render cities twice for seamless infinite loop */}
          {[...citySkylines, ...citySkylines].map((city, index) => (
            <CityImage key={`${city.name}-${index}`} city={city} index={index} theme={theme} />
          ))}
        </div>
      </div>

      {/* Premium atmospheric glow effects */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-blue-600/5 via-purple-600/5 to-transparent pointer-events-none" />

      {/* Subtle light rays effect */}
      <div className="absolute inset-0 opacity-30 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 800px 400px at 50% 100%, rgba(99, 102, 241, 0.08), transparent)'
      }} />
    </div>
  )
}
