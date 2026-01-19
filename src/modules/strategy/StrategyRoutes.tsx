import { Routes, Route } from 'react-router-dom'
import { StrategyDashboard } from './pages/StrategyDashboard'

export function StrategyRoutes() {
  return (
    <Routes>
      {/* All routes are relative to /strategy */}
      <Route path="/" element={<StrategyDashboard />} />
      <Route path="/*" element={<StrategyDashboard />} />
    </Routes>
  )
}
