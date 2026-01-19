import { NavLink } from 'react-router-dom'
import { LayoutGrid, Activity } from 'lucide-react'
import { getAllModules } from '../../modules'
import { ROUTES } from '../../routes'

export default function Sidebar() {
  const modules = getAllModules()

  return (
    <aside className="w-64 bg-gradient-to-b from-slate-50 to-white dark:from-gray-900 dark:to-gray-900 border-r border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="flex flex-col h-full">
        {/* Brand */}
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
              <span className="text-white text-sm font-bold">L1</span>
            </div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Lumina One
            </h1>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-6 overflow-y-auto">
          {/* System Section */}
          <div className="space-y-1">
            <NavLink
              to={ROUTES.app.overview}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              <LayoutGrid className="w-5 h-5" />
              <span>Overview</span>
            </NavLink>

            <NavLink
              to={ROUTES.app.controlPlane}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`
              }
            >
              <Activity className="w-5 h-5" />
              <span>Control Plane</span>
            </NavLink>
          </div>

          {/* Modules Section */}
          <div className="space-y-1">
            <div className="px-3 pb-2">
              <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Intelligence Modules
              </span>
            </div>
            {modules.map((module) => {
              const Icon = module.icon
              return (
                <NavLink
                  key={module.id}
                  to={`/app${module.baseRoute}`}
                  className={({ isActive }) =>
                    `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
                    }`
                  }
                >
                  <Icon className="w-5 h-5" />
                  <span>{module.label}</span>
                </NavLink>
              )
            })}
          </div>
        </nav>
      </div>
    </aside>
  )
}
