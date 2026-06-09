import { Routes, Route, Navigate } from 'react-router';
import { AdminLayout } from './layout/AdminLayout';
import { Dashboard } from './pages/Dashboard';
import { Bookings } from './pages/Bookings';
import { Clients } from './pages/Clients';
import { Portfolio } from './pages/Portfolio';
import { Services } from './pages/Services';
import { Testimonials } from './pages/Testimonials';
import { Calendar } from './pages/Calendar';
import { Messages } from './pages/Messages';
import { SettingsPage } from './pages/Settings';

export function AdminApp() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="bookings" element={<Bookings />} />
        <Route path="clients" element={<Clients />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="testimonials" element={<Testimonials />} />
        <Route path="calendar" element={<Calendar />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/admin" replace />} />
      </Route>
    </Routes>
  );
}
