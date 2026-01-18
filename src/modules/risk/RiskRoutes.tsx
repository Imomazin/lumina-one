import { Routes, Route } from 'react-router-dom';
import { ProtectedRoute } from './components/ProtectedRoute';

// Protected pages
import { Dashboard } from './pages/Dashboard';
import { RiskRegister } from './pages/RiskRegister';
import { Alerts } from './pages/Alerts';
import { Analytics } from './pages/Analytics';
import { Reports } from './pages/Reports';
import { AICoach } from './pages/AICoach';
import { RiskFrameworks } from './pages/RiskFrameworks';
import { Team } from './pages/Team';
import { Settings } from './pages/Settings';
import { Admin } from './pages/Admin';
import { DataAnalysis } from './pages/DataAnalysis';
import { APIGateway } from './pages/APIGateway';

export function RiskRoutes() {
  return (
    <Routes>
      {/* All routes are relative to /risk */}
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/register"
        element={
          <ProtectedRoute>
            <RiskRegister />
          </ProtectedRoute>
        }
      />
      <Route
        path="/alerts"
        element={
          <ProtectedRoute>
            <Alerts />
          </ProtectedRoute>
        }
      />
      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />
      <Route
        path="/reports"
        element={
          <ProtectedRoute>
            <Reports />
          </ProtectedRoute>
        }
      />
      <Route
        path="/ai-coach"
        element={
          <ProtectedRoute>
            <AICoach />
          </ProtectedRoute>
        }
      />
      <Route
        path="/frameworks"
        element={
          <ProtectedRoute>
            <RiskFrameworks />
          </ProtectedRoute>
        }
      />
      <Route
        path="/team"
        element={
          <ProtectedRoute>
            <Team />
          </ProtectedRoute>
        }
      />
      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <Admin />
          </ProtectedRoute>
        }
      />
      <Route
        path="/data-analysis"
        element={
          <ProtectedRoute>
            <DataAnalysis />
          </ProtectedRoute>
        }
      />
      <Route
        path="/api-gateway"
        element={
          <ProtectedRoute>
            <APIGateway />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
