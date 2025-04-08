import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AlertsPage from './pages/AlertsPage';
import TradesPage from './pages/TradesPage';
import ScamScannerPage from './pages/ScamScannerPage';

function App() {
  const isLoggedIn = !!localStorage.getItem('token');
  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/alerts" /> : <LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/alerts" element={<AlertsPage />} />
        <Route path="/trades" element={<TradesPage />} />
        <Route path="/scanner" element={<ScamScannerPage />} />
      </Routes>
    </Router>
  );
}
export default App;
