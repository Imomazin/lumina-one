/**
 * Build information for deployment tracking
 * Uses Vercel environment variables when available
 */

export const buildInfo = {
  commit: import.meta.env.VITE_VERCEL_GIT_COMMIT_SHA?.slice(0, 7) || 'local',
  buildTime: import.meta.env.VITE_BUILD_TIME || new Date().toISOString(),
  env: import.meta.env.MODE,
}

export function getBuildStamp(): string {
  return `Build: ${buildInfo.commit} • ${new Date(buildInfo.buildTime).toLocaleDateString()}`
}
