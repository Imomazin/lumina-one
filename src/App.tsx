import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import ModulePlaceholder from './pages/ModulePlaceholder'
import { RiskModule } from './modules/risk'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/strategy" element={<ModulePlaceholder />} />
          <Route path="/risk/*" element={<RiskModule />} />
          <Route path="/finance" element={<ModulePlaceholder />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
