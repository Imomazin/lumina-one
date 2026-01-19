import { Routes, Route } from 'react-router-dom'
import { FinanceDashboard } from './pages/FinanceDashboard'

export function FinanceRoutes() {
  return (
    <Routes>
      {/* All routes are relative to /finance */}
      <Route path="/" element={<FinanceDashboard />} />
      <Route path="/*" element={<FinanceDashboard />} />
    </Routes>
  )
}
