import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Overview from './pages/Overview'
import ModulePlaceholder from './pages/ModulePlaceholder'

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Overview />} />
          <Route path="/strategy" element={<ModulePlaceholder />} />
          <Route path="/risk" element={<ModulePlaceholder />} />
          <Route path="/finance" element={<ModulePlaceholder />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}
