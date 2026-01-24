/**
 * BuildStamp Component - Mandatory Visibility Proof
 *
 * This component MUST be visible in production to confirm deployments.
 * Every PR increments UI_REV to prove the update deployed.
 */

// UI_REV: Increment this number with EVERY PR (001, 002, 003...)
const UI_REV = '006'

export function BuildStamp({ className = '' }: { className?: string }) {
  const commit = import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local'
  const buildTime = import.meta.env.VITE_BUILD_TIME || 'unknown'

  // Format build time to readable date
  const formattedTime = buildTime !== 'unknown'
    ? new Date(buildTime).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    : 'unknown'

  return (
    <div className={`font-mono text-xs ${className}`}>
      <span className="font-bold text-blue-600 dark:text-blue-400">UI_REV={UI_REV}</span>
      {' • '}
      <span className="text-gray-600 dark:text-gray-400">
        {commit} • {formattedTime}
      </span>
    </div>
  )
}

// Export UI_REV for console logging
export const currentUIRev = UI_REV
