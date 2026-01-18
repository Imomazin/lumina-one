import { NavLink } from 'react-router-dom'

const navItems = [
  { name: 'Overview', path: '/' },
  { name: 'Strategy', path: '/strategy', subtitle: 'Lumina S' },
  { name: 'Risk', path: '/risk', subtitle: 'Lumina R' },
  { name: 'Finance', path: '/finance', subtitle: 'Lumina F' },
]

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Lumina One
          </h1>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg transition-colors ${
                  isActive
                    ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`
              }
            >
              <div className="font-medium">{item.name}</div>
              {item.subtitle && (
                <div className="text-sm opacity-75">{item.subtitle}</div>
              )}
            </NavLink>
          ))}
        </nav>
      </div>
    </aside>
  )
}
