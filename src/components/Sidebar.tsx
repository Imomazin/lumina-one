import { NavLink } from 'react-router-dom'
import { LayoutGrid } from 'lucide-react'
import { getAllModules } from '../modules'

export default function Sidebar() {
  const modules = getAllModules()

  return (
    <aside className="w-64 bg-gray-50 dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700">
      <div className="flex flex-col h-full">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
            Lumina One
          </h1>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
            Unified Intelligence Platform
          </p>
        </div>

        <nav className="flex-1 p-4 space-y-1">
          {/* Overview - always first */}
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                isActive
                  ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                  : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`
            }
          >
            <LayoutGrid className="w-5 h-5" />
            <span className="font-medium">Overview</span>
          </NavLink>

          {/* Modules from registry */}
          {modules.map((module) => {
            const Icon = module.icon
            return (
              <NavLink
                key={module.id}
                to={module.baseRoute}
                className={({ isActive }) =>
                  `flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                    isActive
                      ? 'bg-blue-100 dark:bg-blue-900 text-blue-900 dark:text-blue-100'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                  } ${!module.enabled ? 'opacity-50' : ''}`
                }
              >
                <Icon className="w-5 h-5" />
                <div className="flex-1">
                  <div className="font-medium">{module.label}</div>
                  {module.description && (
                    <div className="text-xs opacity-75">{module.description}</div>
                  )}
                </div>
                {!module.enabled && (
                  <span className="text-xs px-2 py-0.5 rounded bg-gray-200 dark:bg-gray-700">
                    Soon
                  </span>
                )}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </aside>
  )
}
