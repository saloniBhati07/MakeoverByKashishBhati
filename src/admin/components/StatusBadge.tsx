import type { BookingStatus } from '../data/mockData';

interface StatusBadgeProps {
  status: BookingStatus;
  size?: 'sm' | 'md';
}

const config: Record<BookingStatus, { label: string; bg: string; text: string; dot: string }> = {
  pending:   { label: 'Pending',   bg: '#FFFBEB', text: '#92620A', dot: '#F59E0B' },
  confirmed: { label: 'Confirmed', bg: '#F0FDF4', text: '#166534', dot: '#22C55E' },
  completed: { label: 'Completed', bg: '#EFF6FF', text: '#1E3A5F', dot: '#3B82F6' },
  cancelled: { label: 'Cancelled', bg: '#FFF1F2', text: '#881337', dot: '#F43F5E' },
};

export function StatusBadge({ status, size = 'md' }: StatusBadgeProps) {
  const c = config[status];
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '5px',
        backgroundColor: c.bg,
        color: c.text,
        padding: size === 'sm' ? '2px 8px' : '4px 12px',
        borderRadius: '100px',
        fontSize: size === 'sm' ? '11px' : '12px',
        fontWeight: 500,
        fontFamily: "'Jost', sans-serif",
        letterSpacing: '0.02em',
        whiteSpace: 'nowrap',
      }}
    >
      <span
        style={{
          width: size === 'sm' ? 5 : 6,
          height: size === 'sm' ? 5 : 6,
          borderRadius: '50%',
          backgroundColor: c.dot,
          flexShrink: 0,
        }}
      />
      {c.label}
    </span>
  );
}
