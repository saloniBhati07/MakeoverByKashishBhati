import { motion } from 'motion/react';
import { useNavigate } from 'react-router';
import { CalendarPlus, UserPlus, ImagePlus, Megaphone, Star, Settings } from 'lucide-react';

const actions = [
  { label: 'New Booking', icon: CalendarPlus, path: '/admin/bookings', color: '#C8A97E' },
  { label: 'Add Client', icon: UserPlus, path: '/admin/clients', color: '#8AA4C8' },
  { label: 'Upload Photo', icon: ImagePlus, path: '/admin/portfolio', color: '#A8C8A0' },
  { label: 'Add Service', icon: Megaphone, path: '/admin/services', color: '#C8A0A0' },
  { label: 'View Reviews', icon: Star, path: '/admin/testimonials', color: '#C8C0A0' },
  { label: 'Settings', icon: Settings, path: '/admin/settings', color: '#B0A8C8' },
];

export function QuickActions() {
  const navigate = useNavigate();

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 10 }}>
      {actions.map((action, i) => (
        <motion.button
          key={action.label}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: i * 0.05, duration: 0.3 }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => navigate(action.path)}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 8,
            padding: '16px 12px',
            backgroundColor: '#FAFAFA',
            border: '1px solid rgba(200, 169, 126, 0.15)',
            borderRadius: 12,
            cursor: 'pointer',
            transition: 'border-color 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = `${action.color}60`)}
          onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(200, 169, 126, 0.15)')}
        >
          <div style={{
            width: 38,
            height: 38,
            borderRadius: 10,
            backgroundColor: `${action.color}18`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <action.icon size={18} color={action.color} strokeWidth={1.8} />
          </div>
          <span style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 12,
            fontWeight: 500,
            color: '#2C2C2C',
            textAlign: 'center',
          }}>
            {action.label}
          </span>
        </motion.button>
      ))}
    </div>
  );
}
