import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AnalysisPage from './pages/AnalysisPage';
import VolunteerCampaigns from './pages/VolunteerCampaigns';
import LoginPage from './pages/LoginPage';
import IndividualDashboard from './pages/IndividualDashboard';
import OrganizationDashboard from './pages/OrganizationDashboard';
import ReportPage from './pages/ReportPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 font-arabic">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analysis" element={<AnalysisPage />} />
          <Route path="/campaigns" element={<VolunteerCampaigns />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/individual-dashboard" element={<IndividualDashboard />} />
          <Route path="/organization-dashboard" element={<OrganizationDashboard />} />
          <Route path="/report/:type/:id" element={<ReportPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;