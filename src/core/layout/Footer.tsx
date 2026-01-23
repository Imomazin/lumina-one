import { getBuildStamp } from '../../utils/buildInfo'

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 py-4 px-6">
      <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
        <div>© 2026 Lumina One. All rights reserved.</div>
        <div className="font-mono">{getBuildStamp()}</div>
      </div>
    </footer>
  )
}
