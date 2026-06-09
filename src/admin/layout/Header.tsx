import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, Search, Bell, X, ChevronDown, Moon, Sun } from 'lucide-react';

const GOLD = '#C8A97E';

const pageTitles: Record<string, string> = {
  '/admin': 'Dashboard',
  '/admin/bookings': 'Bookings',
  '/admin/clients': 'Clients',
  '/admin/portfolio': 'Portfolio',
  '/admin/services': 'Services',
  '/admin/testimonials': 'Testimonials',
  '/admin/calendar': 'Calendar',
  '/admin/messages': 'Messages',
  '/admin/settings': 'Settings',
};

interface HeaderProps {
  onToggleSidebar: () => void;
  sidebarOpen: boolean;
  notificationCount: number;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export function Header({ onToggleSidebar, notificationCount, darkMode, onToggleDarkMode }: HeaderProps) {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [notifOpen, setNotifOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const pageTitle = pageTitles[location.pathname] ?? 'Admin';

  // Close dropdowns on route change
  useEffect(() => {
    setNotifOpen(false);
    setProfileOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const notifications = [
    { id: 1, text: 'New inquiry from Isabelle Laurent', time: '10 min ago', dot: '#C8A97E' },
    { id: 2, text: 'Booking #BK002 awaiting approval', time: '1 hr ago', dot: '#F59E0B' },
    { id: 3, text: 'Trial reminder: Amelia Rosewood tomorrow', time: '2 hrs ago', dot: '#22C55E' },
    { id: 4, text: 'New review submitted for approval', time: '5 hrs ago', dot: '#8AA4C8' },
    { id: 5, text: 'Payment received: £500 from Victoria Chen', time: 'Yesterday', dot: '#A8C8A0' },
  ];

  return (
    <header style={{
      position: 'fixed', top: 0, right: 0, left: 0,
      height: 64,
      backgroundColor: 'rgba(248, 245, 242, 0.95)',
      backdropFilter: 'blur(12px)',
      borderBottom: '1px solid rgba(200, 169, 126, 0.12)',
      display: 'flex',
      alignItems: 'center',
      padding: '0 24px',
      zIndex: 20,
      gap: 16,
    }}>
      {/* Menu toggle */}
      <button
        onClick={onToggleSidebar}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 9, border: '1px solid rgba(200,169,126,0.2)',
          backgroundColor: 'transparent', cursor: 'pointer',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(200,169,126,0.1)'; }}
        onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; }}
      >
        <Menu size={17} color="#2C2C2C" strokeWidth={1.8} />
      </button>

      {/* Page title */}
      <div style={{ flex: 1 }}>
        <h2 style={{
          fontFamily: "'Playfair Display', serif",
          fontSize: 20,
          fontWeight: 600,
          color: '#2C2C2C',
          margin: 0,
        }}>
          {pageTitle}
        </h2>
      </div>

      {/* Search */}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <AnimatePresence>
          {searchOpen && (
            <motion.input
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 240, opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: 'easeInOut' }}
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              placeholder="Search clients, bookings..."
              autoFocus
              style={{
                height: 36, borderRadius: 9, border: '1px solid rgba(200,169,126,0.3)',
                backgroundColor: '#FFFFFF', paddingLeft: 12, paddingRight: 36,
                fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C',
                outline: 'none', overflow: 'hidden',
              }}
            />
          )}
        </AnimatePresence>
        <button
          onClick={() => { setSearchOpen(s => !s); if (searchOpen) setSearchQuery(''); }}
          style={{
            position: searchOpen ? 'absolute' : 'relative',
            right: searchOpen ? 8 : 'auto',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: 9,
            border: searchOpen ? 'none' : '1px solid rgba(200,169,126,0.2)',
            backgroundColor: 'transparent', cursor: 'pointer',
          }}
        >
          {searchOpen ? <X size={15} color="#8A7A6E" /> : <Search size={17} color="#2C2C2C" strokeWidth={1.8} />}
        </button>
      </div>

      {/* Dark mode */}
      <button
        onClick={onToggleDarkMode}
        style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          width: 36, height: 36, borderRadius: 9,
          border: '1px solid rgba(200,169,126,0.2)',
          backgroundColor: 'transparent', cursor: 'pointer',
        }}
      >
        {darkMode ? <Sun size={17} color="#C8A97E" /> : <Moon size={17} color="#2C2C2C" strokeWidth={1.8} />}
      </button>

      {/* Notifications */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => { setNotifOpen(n => !n); setProfileOpen(false); }}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            width: 36, height: 36, borderRadius: 9,
            border: '1px solid rgba(200,169,126,0.2)',
            backgroundColor: 'transparent', cursor: 'pointer', position: 'relative',
          }}
        >
          <Bell size={17} color="#2C2C2C" strokeWidth={1.8} />
          {notificationCount > 0 && (
            <span style={{
              position: 'absolute', top: 6, right: 6,
              width: 7, height: 7, borderRadius: '50%',
              backgroundColor: GOLD, border: '1.5px solid #F8F5F2',
            }} />
          )}
        </button>
        <AnimatePresence>
          {notifOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute', right: 0, top: 44,
                width: 320, backgroundColor: '#FFFFFF',
                borderRadius: 16, border: '1px solid rgba(200,169,126,0.2)',
                boxShadow: '0 16px 40px rgba(44,44,44,0.12)',
                overflow: 'hidden', zIndex: 100,
              }}
            >
              <div style={{ padding: '16px 18px 12px', borderBottom: '1px solid rgba(200,169,126,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C' }}>Notifications</span>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: GOLD, cursor: 'pointer' }}>Mark all read</span>
              </div>
              {notifications.map(n => (
                <div key={n.id} style={{ padding: '12px 18px', borderBottom: '1px solid rgba(200,169,126,0.07)', display: 'flex', gap: 10, alignItems: 'flex-start', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: n.dot, marginTop: 5, flexShrink: 0 }} />
                  <div>
                    <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: '#2C2C2C', lineHeight: 1.5 }}>{n.text}</p>
                    <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', marginTop: 2 }}>{n.time}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Profile */}
      <div style={{ position: 'relative' }}>
        <button
          onClick={() => { setProfileOpen(p => !p); setNotifOpen(false); }}
          style={{
            display: 'flex', alignItems: 'center', gap: 8,
            padding: '5px 10px 5px 5px',
            borderRadius: 24, border: '1px solid rgba(200,169,126,0.2)',
            backgroundColor: 'transparent', cursor: 'pointer',
          }}
        >
          <div style={{
            width: 30, height: 30, borderRadius: '50%',
            background: `linear-gradient(135deg, ${GOLD}, #A07850)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif", fontSize: 12, color: '#FFF', fontWeight: 600,
          }}>SB</div>
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, color: '#2C2C2C' }}>Sophia</span>
          <ChevronDown size={13} color="#8A7A6E" />
        </button>
        <AnimatePresence>
          {profileOpen && (
            <motion.div
              initial={{ opacity: 0, y: 8, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.18 }}
              style={{
                position: 'absolute', right: 0, top: 46,
                width: 200, backgroundColor: '#FFFFFF',
                borderRadius: 14, border: '1px solid rgba(200,169,126,0.2)',
                boxShadow: '0 12px 30px rgba(44,44,44,0.1)',
                overflow: 'hidden', zIndex: 100, padding: '6px',
              }}
            >
              {['My Profile', 'Account Settings', '—', 'Sign Out'].map(item => (
                item === '—'
                  ? <div key={item} style={{ height: 1, backgroundColor: 'rgba(200,169,126,0.15)', margin: '4px 0' }} />
                  : <button key={item} style={{
                    display: 'block', width: '100%', textAlign: 'left',
                    padding: '8px 12px', border: 'none', background: 'none', cursor: 'pointer',
                    fontFamily: "'Jost', sans-serif", fontSize: 13,
                    color: item === 'Sign Out' ? '#DC2626' : '#2C2C2C', borderRadius: 8,
                  }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                    {item}
                  </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Backdrop for dropdowns */}
      {(notifOpen || profileOpen) && (
        <div style={{ position: 'fixed', inset: 0, zIndex: 90 }} onClick={() => { setNotifOpen(false); setProfileOpen(false); }} />
      )}
    </header>
  );
}
