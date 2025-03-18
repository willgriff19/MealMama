import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LandingPageWeb from './components/LandingPageWeb'
import SignUpPage from './components/SignUpPage'
import LoginPage from './components/LoginPage'
import DashboardPage from './components/DashboardPage'
import AuthCallbackPage from './components/AuthCallbackPage'
import TestComponent from './playground/TestComponent'
import { useAuth } from './hooks/useAuth'

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-[#fbfcff] flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-[#1e212b] mb-4">Loading...</h2>
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#06d6a0] mx-auto"></div>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signup" />;
  }

  return <>{children}</>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWeb />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          } 
        />
        <Route path="/auth/callback" element={<AuthCallbackPage />} />
        <Route path="/playground" element={<TestComponent />} />
      </Routes>
    </Router>
  )
}

export default App
