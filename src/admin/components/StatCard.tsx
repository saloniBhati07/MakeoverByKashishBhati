import { motion } from 'motion/react';
import type { LucideIcon } from 'lucide-react';
import { TrendingUp, TrendingDown } from 'lucide-react';

interface StatCardProps {
  label: string;
  value: string | number;
  trend: number;
  icon: LucideIcon;
  prefix?: string;
  color?: string;
  delay?: number;
}

export function StatCard({ label, value, trend, icon: Icon, prefix = '', color = '#C8A97E', delay = 0 }: StatCardProps) {
  const isPositive = trend >= 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: '28px 28px 24px',
        border: '1px solid rgba(200, 169, 126, 0.15)',
        boxShadow: '0 2px 12px rgba(44, 44, 44, 0.04)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
      }}
      whileHover={{ y: -2, boxShadow: '0 8px 28px rgba(44, 44, 44, 0.1)' }}
    >
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: -20,
        right: -20,
        width: 100,
        height: 100,
        borderRadius: '50%',
        backgroundColor: color,
        opacity: 0.06,
        filter: 'blur(20px)',
      }} />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
        <div style={{
          width: 46,
          height: 46,
          borderRadius: 12,
          backgroundColor: `${color}18`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Icon size={22} color={color} strokeWidth={1.8} />
        </div>

        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 4,
          color: isPositive ? '#16A34A' : '#DC2626',
          fontSize: 12,
          fontWeight: 500,
          fontFamily: "'Jost', sans-serif",
          backgroundColor: isPositive ? '#F0FDF4' : '#FFF1F2',
          padding: '3px 8px',
          borderRadius: 20,
        }}>
          {isPositive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
          {Math.abs(trend)}%
        </div>
      </div>

      <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 600, color: '#2C2C2C', lineHeight: 1, marginBottom: 8 }}>
        {prefix}{typeof value === 'number' ? value.toLocaleString() : value}
      </div>
      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E', fontWeight: 400, letterSpacing: '0.03em' }}>
        {label}
      </div>
    </motion.div>
  );
}
