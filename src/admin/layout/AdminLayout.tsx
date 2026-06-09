import { useEffect, useState } from 'react';
import { Outlet } from 'react-router';
import { motion } from 'motion/react';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { useAdmin } from '../hooks/useAdmin';

const SIDEBAR_W = 260;

export function AdminLayout() {
  const { sidebarOpen, toggleSidebar, closeSidebar, darkMode, toggleDarkMode, notificationCount } = useAdmin();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const effectiveSidebarOpen = isMobile ? sidebarOpen : sidebarOpen;

  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#F8F5F2',
      fontFamily: "'Jost', sans-serif",
    }}>
      <Sidebar
        isOpen={effectiveSidebarOpen}
        onClose={closeSidebar}
        isMobile={isMobile}
      />

      {/* Main content area */}
      <motion.div
        animate={{
          marginLeft: !isMobile && effectiveSidebarOpen ? SIDEBAR_W : 0,
        }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <Header
          onToggleSidebar={toggleSidebar}
          sidebarOpen={effectiveSidebarOpen}
          notificationCount={notificationCount}
          darkMode={darkMode}
          onToggleDarkMode={toggleDarkMode}
        />

        {/* Page content */}
        <main style={{
          flex: 1,
          paddingTop: 64,
          minHeight: '100vh',
        }}>
          <div style={{ padding: '32px 28px', maxWidth: 1400, margin: '0 auto' }}>
            <Outlet />
          </div>
        </main>
      </motion.div>
    </div>
  );
}
