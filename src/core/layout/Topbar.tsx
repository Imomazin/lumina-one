export default function Topbar() {
  return (
    <header className="h-16 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
      <div className="flex items-center justify-between h-full px-6">
        <div className="text-sm text-gray-600 dark:text-gray-400">
          {/* Breadcrumbs or page title can go here */}
        </div>
        <div className="flex items-center space-x-4">
          {/* Future: User menu, notifications, etc. */}
        </div>
      </div>
    </header>
  )
}
