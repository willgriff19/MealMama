import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPageWeb from './components/LandingPageWeb'
import SignUpPage from './components/SignUpPage'
import DashboardPage from './components/DashboardPage'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPageWeb />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>
    </Router>
  )
}

export default App
