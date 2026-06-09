import { motion } from 'motion/react';
import { CalendarCheck, Users, MessageSquare, PoundSterling, Clock, Gem } from 'lucide-react';
import { StatCard } from '../components/StatCard';
import { BookingChart } from '../components/BookingChart';
import { QuickActions } from '../components/QuickActions';
import { StatusBadge } from '../components/StatusBadge';
import { dashboardStats, bookings } from '../data/mockData';

const GOLD = '#C8A97E';

function Card({ children, style = {} }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      borderRadius: 16,
      border: '1px solid rgba(200, 169, 126, 0.15)',
      boxShadow: '0 2px 12px rgba(44, 44, 44, 0.04)',
      overflow: 'hidden',
      ...style,
    }}>
      {children}
    </div>
  );
}

function CardHeader({ title, subtitle, action }: { title: string; subtitle?: string; action?: React.ReactNode }) {
  return (
    <div style={{ padding: '20px 24px 16px', borderBottom: '1px solid rgba(200,169,126,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>{title}</h3>
        {subtitle && <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', margin: '2px 0 0' }}>{subtitle}</p>}
      </div>
      {action}
    </div>
  );
}

const upcomingBookings = bookings.filter(b => b.status === 'confirmed').slice(0, 5);

const recentInquiries = bookings.filter(b => b.status === 'pending').slice(0, 4);

const statusCounts = {
  confirmed: bookings.filter(b => b.status === 'confirmed').length,
  pending: bookings.filter(b => b.status === 'pending').length,
  completed: bookings.filter(b => b.status === 'completed').length,
  cancelled: bookings.filter(b => b.status === 'cancelled').length,
};

export function Dashboard() {
  return (
    <div>
      {/* Welcome banner */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        style={{ marginBottom: 28 }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
          <Gem size={14} color={GOLD} strokeWidth={1.5} />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
            Good morning
          </span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>
          Welcome back, Sophia ✦
        </h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: '6px 0 0' }}>
          You have <strong style={{ color: '#2C2C2C' }}>3 upcoming weddings</strong> this month and <strong style={{ color: '#2C2C2C' }}>5 pending inquiries</strong> to review.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginBottom: 24 }}>
        <StatCard label="Total Bookings" value={dashboardStats.totalBookings.value} trend={dashboardStats.totalBookings.trend} icon={CalendarCheck} color="#C8A97E" delay={0} />
        <StatCard label="Upcoming Weddings" value={dashboardStats.upcomingWeddings.value} trend={dashboardStats.upcomingWeddings.trend} icon={Gem} color="#8AA4C8" delay={0.05} />
        <StatCard label="New Inquiries" value={dashboardStats.newInquiries.value} trend={dashboardStats.newInquiries.trend} icon={MessageSquare} color="#A8C8A0" delay={0.1} />
        <StatCard label="Monthly Revenue" value={dashboardStats.monthlyRevenue.value} trend={dashboardStats.monthlyRevenue.trend} icon={PoundSterling} prefix="£" color="#C8A0C0" delay={0.15} />
      </div>

      {/* Chart + Quick Actions */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, marginBottom: 24 }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <Card>
            <CardHeader title="Monthly Bookings" subtitle="Annual overview" action={
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: GOLD, cursor: 'pointer', fontWeight: 500 }}>View Report →</span>
            } />
            <div style={{ padding: '20px 16px 16px' }}>
              <BookingChart type="area" dataKey="bookings" />
            </div>
          </Card>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}>
          <Card style={{ height: '100%' }}>
            <CardHeader title="Quick Actions" />
            <div style={{ padding: 16 }}>
              <QuickActions />
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Booking Status + Upcoming Appointments */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: 16, marginBottom: 24 }}>
        {/* Upcoming Appointments */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <Card>
            <CardHeader title="Upcoming Appointments" subtitle={`${upcomingBookings.length} confirmed bookings`} />
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ borderBottom: '1px solid rgba(200,169,126,0.1)' }}>
                    {['Client', 'Wedding Date', 'Package', 'Venue', 'Amount'].map(h => (
                      <th key={h} style={{ padding: '10px 24px', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 600, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {upcomingBookings.map((b, i) => (
                    <tr key={b.id} style={{ borderBottom: i < upcomingBookings.length - 1 ? '1px solid rgba(200,169,126,0.07)' : 'none' }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}>
                      <td style={{ padding: '14px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                          <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
                            {b.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, color: '#2C2C2C' }}>{b.clientName}</p>
                            <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E' }}>{b.phone}</p>
                          </div>
                        </div>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                          <Clock size={12} color="#C8A97E" />
                          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C' }}>{new Date(b.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                        </div>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#2C2C2C', backgroundColor: 'rgba(200,169,126,0.1)', padding: '3px 8px', borderRadius: 6 }}>
                          {b.package.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: '#8A7A6E' }}>{b.venue.split(',')[0]}</span>
                      </td>
                      <td style={{ padding: '14px 24px' }}>
                        <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 14, color: '#2C2C2C', fontWeight: 600 }}>£{b.totalAmount.toLocaleString()}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Card>
        </motion.div>

        {/* Booking Status */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>
          <Card>
            <CardHeader title="Booking Status" subtitle="All time" />
            <div style={{ padding: '20px 24px' }}>
              {Object.entries(statusCounts).map(([status, count]) => {
                const colors: Record<string, { bar: string; bg: string; label: string }> = {
                  confirmed: { bar: '#22C55E', bg: '#F0FDF4', label: 'Confirmed' },
                  pending:   { bar: '#F59E0B', bg: '#FFFBEB', label: 'Pending' },
                  completed: { bar: '#3B82F6', bg: '#EFF6FF', label: 'Completed' },
                  cancelled: { bar: '#F43F5E', bg: '#FFF1F2', label: 'Cancelled' },
                };
                const total = Object.values(statusCounts).reduce((a, b) => a + b, 0);
                const pct = Math.round((count / total) * 100);
                const c = colors[status];
                return (
                  <div key={status} style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', fontWeight: 500 }}>{c.label}</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E' }}>{count} ({pct}%)</span>
                    </div>
                    <div style={{ height: 6, backgroundColor: '#F0EBE4', borderRadius: 3, overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${pct}%` }}
                        transition={{ duration: 0.8, delay: 0.4 + Object.keys(statusCounts).indexOf(status) * 0.1 }}
                        style={{ height: '100%', backgroundColor: c.bar, borderRadius: 3 }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Recent Inquiries */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
        <Card>
          <CardHeader title="Recent Client Inquiries" subtitle="Awaiting your review" action={
            <StatusBadge status="pending" size="sm" />
          } />
          <div style={{ padding: '8px 0' }}>
            {recentInquiries.map((b, i) => (
              <div key={b.id}
                style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 24px', borderBottom: i < recentInquiries.length - 1 ? '1px solid rgba(200,169,126,0.07)' : 'none', cursor: 'pointer' }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'linear-gradient(135deg, #E8D4B4, #C8A97E)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', fontWeight: 600, flexShrink: 0 }}>
                  {b.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div style={{ flex: 1 }}>
                  <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, color: '#2C2C2C' }}>{b.clientName}</p>
                  <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E' }}>{b.package} · Wedding: {new Date(b.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <p style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C' }}>£{b.totalAmount.toLocaleString()}</p>
                  <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E' }}>{b.brideParty} in party</p>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <button style={{ padding: '6px 14px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 8, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 500 }}>Approve</button>
                  <button style={{ padding: '6px 14px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.3)', borderRadius: 8, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12 }}>Review</button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>
    </div>
  );
}
