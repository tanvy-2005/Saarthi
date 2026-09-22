import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import AdminLoginPage from './pages/AdminLoginPage';
import AppLayout from './components/layout/AppLayout';
import LandingPage from './components/layout/LandingPage';
import NetworkPage from './pages/Network';
import MentorshipPage from './pages/Mentorship';
import OpportunitiesPage from './pages/Opportunities';
import EventsPage from './pages/Events';
import GivingPage from './pages/Giving';
import ProfilePage from './pages/Profile';
import AdminApprovalsPage from './pages/AdminApprovals';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/admin/login" element={<AdminLoginPage />} />
        
        <Route element={<AppLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/network" element={<NetworkPage />} />
          <Route path="/mentorship" element={<MentorshipPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/giving" element={<GivingPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/admin/approvals" element={<AdminApprovalsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
