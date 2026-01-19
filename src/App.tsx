import { Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Layout } from './core/layout'
import Overview from './pages/Overview'
import ControlPlane from './pages/ControlPlane'
import { moduleRegistry } from './modules'
import { LuminaProvider } from './context/LuminaContext'

export default function App() {
  return (
    <LuminaProvider>
      <BrowserRouter>
        <Layout>
          <Suspense fallback={<ModuleLoadingFallback />}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/control-plane" element={<ControlPlane />} />

              {/* Dynamically generate routes from module registry */}
              {moduleRegistry.map((module) => {
                const ModuleComponent = module.component
                return (
                  <Route
                    key={module.id}
                    path={`${module.baseRoute}/*`}
                    element={<ModuleComponent />}
                  />
                )
              })}
            </Routes>
          </Suspense>
        </Layout>
      </BrowserRouter>
    </LuminaProvider>
  )
}

function ModuleLoadingFallback() {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <div className="w-8 h-8 border-4 border-slate-200 dark:border-slate-700 border-t-blue-500 rounded-full animate-spin mx-auto mb-4" />
        <p className="text-sm text-slate-500 dark:text-slate-400">Loading module...</p>
      </div>
    </div>
  )
}
