import { AuthProvider } from './contexts/AuthContext';
import { RiskRoutes } from './RiskRoutes';

export function RiskModule() {
  return (
    <AuthProvider>
      <RiskRoutes />
    </AuthProvider>
  );
}
