import { useState } from 'react';
import { NavLink, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import {
  LayoutDashboard, CalendarCheck, Users, ImageIcon,
  Sparkles, Star, CalendarDays, MessageSquare, Settings,
  X, LogOut, Gem
} from 'lucide-react';

const GOLD = '#C8A97E';
const DARK = '#1A1A1A';
const SIDEBAR_W = 260;

const navItems = [
  { label: 'Dashboard',    icon: LayoutDashboard, path: '/admin' },
  { label: 'Bookings',     icon: CalendarCheck,   path: '/admin/bookings' },
  { label: 'Clients',      icon: Users,           path: '/admin/clients' },
  { label: 'Portfolio',    icon: ImageIcon,       path: '/admin/portfolio' },
  { label: 'Services',     icon: Sparkles,        path: '/admin/services' },
  { label: 'Testimonials', icon: Star,            path: '/admin/testimonials' },
  { label: 'Calendar',     icon: CalendarDays,    path: '/admin/calendar' },
  { label: 'Messages',     icon: MessageSquare,   path: '/admin/messages', badge: 5 },
  { label: 'Settings',     icon: Settings,        path: '/admin/settings' },
];

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  isMobile: boolean;
}

export function Sidebar({ isOpen, onClose, isMobile }: SidebarProps) {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  const isActive = (path: string) => {
    if (path === '/admin') return location.pathname === '/admin';
    return location.pathname.startsWith(path);
  };

  const sidebarContent = (
    <div style={{
      width: SIDEBAR_W,
      height: '100%',
      backgroundColor: DARK,
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative top accent */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: `linear-gradient(90deg, transparent, ${GOLD}, transparent)`,
      }} />

      {/* Logo */}
      <div style={{ padding: '28px 24px 20px', borderBottom: '1px solid rgba(200,169,126,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
              <Gem size={16} color={GOLD} strokeWidth={1.5} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.2em', color: GOLD, textTransform: 'uppercase', fontWeight: 500 }}>
                Admin
              </span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#F8F5F2', fontWeight: 600, margin: 0, lineHeight: 1.3 }}>
              Sophia Belle
            </h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: 'rgba(248,245,242,0.4)', margin: 0, marginTop: 2, letterSpacing: '0.05em' }}>
              Luxury Bridal Makeup
            </p>
          </div>
          {isMobile && (
            <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: 'rgba(248,245,242,0.5)' }}>
              <X size={18} />
            </button>
          )}
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '16px 12px', overflowY: 'auto' }}>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, letterSpacing: '0.15em', color: 'rgba(200,169,126,0.5)', textTransform: 'uppercase', fontWeight: 500, padding: '8px 12px', margin: '0 0 8px' }}>
          Main Menu
        </p>
        {navItems.map((item) => {
          const active = isActive(item.path);
          const hovered = hoveredItem === item.label;
          return (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={isMobile ? onClose : undefined}
              onMouseEnter={() => setHoveredItem(item.label)}
              onMouseLeave={() => setHoveredItem(null)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                padding: '11px 12px',
                borderRadius: 10,
                marginBottom: 2,
                textDecoration: 'none',
                position: 'relative',
                backgroundColor: active ? 'rgba(200,169,126,0.12)' : hovered ? 'rgba(248,245,242,0.04)' : 'transparent',
                transition: 'background-color 0.2s',
              }}
            >
              {active && (
                <motion.div
                  layoutId="activeIndicator"
                  style={{
                    position: 'absolute',
                    left: 0, top: '50%',
                    transform: 'translateY(-50%)',
                    width: 3, height: 20,
                    backgroundColor: GOLD,
                    borderRadius: '0 3px 3px 0',
                  }}
                />
              )}
              <item.icon
                size={17}
                color={active ? GOLD : hovered ? 'rgba(248,245,242,0.7)' : 'rgba(248,245,242,0.4)'}
                strokeWidth={active ? 2 : 1.8}
                style={{ flexShrink: 0 }}
              />
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: 13.5,
                fontWeight: active ? 500 : 400,
                color: active ? '#F8F5F2' : hovered ? 'rgba(248,245,242,0.75)' : 'rgba(248,245,242,0.45)',
                transition: 'color 0.2s',
                flex: 1,
              }}>
                {item.label}
              </span>
              {item.badge && (
                <span style={{
                  backgroundColor: GOLD,
                  color: DARK,
                  fontSize: 10,
                  fontWeight: 700,
                  borderRadius: 10,
                  padding: '1px 6px',
                  minWidth: 18,
                  textAlign: 'center',
                  fontFamily: "'Jost', sans-serif",
                }}>
                  {item.badge}
                </span>
              )}
            </NavLink>
          );
        })}
      </nav>

      {/* Footer */}
      <div style={{ padding: '16px 12px', borderTop: '1px solid rgba(200,169,126,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '10px 12px', borderRadius: 10, marginBottom: 8 }}>
          <div style={{
            width: 36, height: 36, borderRadius: '50%',
            background: `linear-gradient(135deg, ${GOLD}, #A07850)`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: "'Playfair Display', serif", fontSize: 13, color: '#FFF', fontWeight: 600,
          }}>
            SB
          </div>
          <div>
            <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#F8F5F2', fontWeight: 500 }}>Sophia Belle</p>
            <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: 'rgba(248,245,242,0.4)' }}>Admin</p>
          </div>
        </div>
        <button
          style={{
            display: 'flex', alignItems: 'center', gap: 10, width: '100%',
            padding: '9px 12px', borderRadius: 10, border: 'none', background: 'none',
            cursor: 'pointer', color: 'rgba(248,245,242,0.35)', fontFamily: "'Jost', sans-serif",
            fontSize: 13, transition: 'color 0.2s',
          }}
          onMouseEnter={e => { e.currentTarget.style.color = 'rgba(248,245,242,0.7)'; e.currentTarget.style.backgroundColor = 'rgba(248,245,242,0.04)'; }}
          onMouseLeave={e => { e.currentTarget.style.color = 'rgba(248,245,242,0.35)'; e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <LogOut size={15} strokeWidth={1.8} />
          Sign out
        </button>
      </div>
    </div>
  );

  if (isMobile) {
    return (
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 40, backdropFilter: 'blur(2px)' }}
            />
            <motion.div
              initial={{ x: -SIDEBAR_W }}
              animate={{ x: 0 }}
              exit={{ x: -SIDEBAR_W }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              style={{ position: 'fixed', left: 0, top: 0, bottom: 0, zIndex: 50, width: SIDEBAR_W }}
            >
              {sidebarContent}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    );
  }

  return (
    <motion.div
      initial={{ x: -SIDEBAR_W }}
      animate={{ x: isOpen ? 0 : -SIDEBAR_W }}
      transition={{ type: 'spring', damping: 25, stiffness: 300 }}
      style={{
        position: 'fixed', left: 0, top: 0, bottom: 0,
        zIndex: 30, width: SIDEBAR_W,
        boxShadow: '4px 0 20px rgba(0,0,0,0.08)',
      }}
    >
      {sidebarContent}
    </motion.div>
  );
}
