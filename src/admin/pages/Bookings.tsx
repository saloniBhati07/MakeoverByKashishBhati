import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Filter, X, ChevronDown, Check, Phone, Mail, MapPin, Calendar, Users, FileText } from 'lucide-react';
import { StatusBadge } from '../components/StatusBadge';
import { bookings, type Booking, type BookingStatus } from '../data/mockData';

const GOLD = '#C8A97E';

function BookingDrawer({ booking, onClose }: { booking: Booking; onClose: () => void }) {
  const [action, setAction] = useState<null | 'approved' | 'rejected'>(null);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(28,28,28,0.3)', backdropFilter: 'blur(2px)', zIndex: 50 }} />
      <motion.div
        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
        transition={{ type: 'spring', damping: 28, stiffness: 300 }}
        style={{
          position: 'fixed', right: 0, top: 0, bottom: 0, width: 440,
          backgroundColor: '#FFFFFF', zIndex: 60,
          boxShadow: '-8px 0 32px rgba(44,44,44,0.12)',
          display: 'flex', flexDirection: 'column',
        }}
      >
        {/* Drawer header */}
        <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(200,169,126,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: GOLD, letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>Booking {booking.id}</p>
            <h2 style={{ margin: '4px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#2C2C2C' }}>{booking.clientName}</h2>
          </div>
          <button onClick={onClose} style={{ width: 36, height: 36, borderRadius: 9, border: '1px solid rgba(200,169,126,0.2)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={16} color="#8A7A6E" />
          </button>
        </div>

        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
          {/* Status + Package */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            <StatusBadge status={booking.status} />
            <span style={{ backgroundColor: 'rgba(200,169,126,0.1)', color: '#8A7A6E', padding: '4px 12px', borderRadius: 20, fontSize: 12, fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
              {booking.package.split(' ').slice(0, 2).join(' ')}
            </span>
          </div>

          {/* Details */}
          {[
            { icon: Users, label: 'Bride & Partner', value: `${booking.clientName} & ${booking.partnerName}` },
            { icon: Phone, label: 'Phone', value: booking.phone },
            { icon: Mail, label: 'Email', value: booking.email },
            { icon: Calendar, label: 'Wedding Date', value: new Date(booking.weddingDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }) },
            { icon: MapPin, label: 'Venue', value: booking.venue },
            { icon: Users, label: 'Bridal Party', value: `${booking.brideParty} people (including bride)` },
          ].map(({ icon: Icon, label, value }) => (
            <div key={label} style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Icon size={16} color={GOLD} strokeWidth={1.8} />
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{label}</p>
                <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C' }}>{value}</p>
              </div>
            </div>
          ))}

          {booking.trialDate && (
            <div style={{ display: 'flex', gap: 14, marginBottom: 18 }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: 'rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <Calendar size={16} color={GOLD} strokeWidth={1.8} />
              </div>
              <div>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Trial Date</p>
                <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C' }}>{new Date(booking.trialDate).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}</p>
              </div>
            </div>
          )}

          {/* Financial */}
          <div style={{ backgroundColor: '#FAFAF8', borderRadius: 12, padding: '16px 18px', marginBottom: 20, border: '1px solid rgba(200,169,126,0.12)' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C', marginBottom: 12, marginTop: 0 }}>Financial Summary</p>
            {[
              { label: 'Package Total', value: `£${booking.totalAmount.toLocaleString()}` },
              { label: 'Deposit Paid', value: `£${booking.depositPaid.toLocaleString()}`, color: '#22C55E' },
              { label: 'Balance Due', value: `£${(booking.totalAmount - booking.depositPaid).toLocaleString()}`, color: '#F59E0B' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E' }}>{item.label}</span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: item.color || '#2C2C2C' }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div style={{ marginBottom: 20 }}>
            <div style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'center' }}>
              <FileText size={14} color={GOLD} />
              <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Notes</p>
            </div>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#2C2C2C', lineHeight: 1.6, backgroundColor: '#FAFAF8', padding: '12px 14px', borderRadius: 10, border: '1px solid rgba(200,169,126,0.12)', margin: 0 }}>
              {booking.notes}
            </p>
          </div>
        </div>

        {/* Actions */}
        {booking.status === 'pending' && (
          <div style={{ padding: '16px 28px', borderTop: '1px solid rgba(200,169,126,0.15)', display: 'flex', gap: 10 }}>
            {action === 'approved' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#22C55E', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>
                <Check size={16} /> Booking Approved!
              </div>
            ) : action === 'rejected' ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#F43F5E', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>
                <X size={16} /> Booking Declined
              </div>
            ) : (
              <>
                <button onClick={() => setAction('approved')} style={{ flex: 1, padding: '11px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
                  Approve Booking
                </button>
                <button onClick={() => setAction('rejected')} style={{ flex: 1, padding: '11px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.3)', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>
                  Decline
                </button>
              </>
            )}
          </div>
        )}
      </motion.div>
    </>
  );
}

export function Bookings() {
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<BookingStatus | 'all'>('all');
  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null);
  const [sortField, setSortField] = useState<string>('weddingDate');

  const filtered = bookings.filter(b => {
    const matchesSearch = search === '' || b.clientName.toLowerCase().includes(search.toLowerCase()) || b.email.toLowerCase().includes(search.toLowerCase()) || b.venue.toLowerCase().includes(search.toLowerCase());
    const matchesStatus = statusFilter === 'all' || b.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Bookings</h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>{bookings.length} total bookings</p>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20, flexWrap: 'wrap' }}>
        <div style={{ position: 'relative', flex: '1 1 240px' }}>
          <Search size={15} color="#8A7A6E" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search clients, venues..."
            style={{ width: '100%', height: 40, paddingLeft: 36, paddingRight: 12, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, backgroundColor: '#FFFFFF', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', outline: 'none', boxSizing: 'border-box' }}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <select
            value={statusFilter} onChange={e => setStatusFilter(e.target.value as BookingStatus | 'all')}
            style={{ height: 40, padding: '0 36px 0 14px', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, backgroundColor: '#FFFFFF', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', outline: 'none', appearance: 'none', cursor: 'pointer' }}
          >
            <option value="all">All Status</option>
            <option value="pending">Pending</option>
            <option value="confirmed">Confirmed</option>
            <option value="completed">Completed</option>
            <option value="cancelled">Cancelled</option>
          </select>
          <ChevronDown size={13} color="#8A7A6E" style={{ position: 'absolute', right: 10, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }} />
        </div>
        {(search || statusFilter !== 'all') && (
          <button onClick={() => { setSearch(''); setStatusFilter('all'); }}
            style={{ height: 40, padding: '0 14px', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 6, fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E' }}>
            <X size={13} /> Clear
          </button>
        )}
        <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
          <Filter size={14} color="#8A7A6E" />
          <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E' }}>{filtered.length} results</span>
        </div>
      </div>

      {/* Table */}
      <div style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', boxShadow: '0 2px 12px rgba(44,44,44,0.04)', overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 700 }}>
            <thead>
              <tr style={{ borderBottom: '1px solid rgba(200,169,126,0.12)', backgroundColor: '#FAFAF8' }}>
                {['Client', 'Package', 'Wedding Date', 'Venue', 'Amount', 'Status', ''].map(h => (
                  <th key={h} style={{ padding: '12px 20px', textAlign: 'left', fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 600, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', whiteSpace: 'nowrap', cursor: h === '' ? 'default' : 'pointer' }}
                    onClick={() => h && h !== '' && setSortField(h.toLowerCase())}>
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((b, i) => (
                <motion.tr key={b.id}
                  initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: i * 0.04 }}
                  onClick={() => setSelectedBooking(b)}
                  style={{ borderBottom: i < filtered.length - 1 ? '1px solid rgba(200,169,126,0.07)' : 'none', cursor: 'pointer' }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
                >
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <div style={{ width: 34, height: 34, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
                        {b.clientName.split(' ').map(n => n[0]).join('').slice(0, 2)}
                      </div>
                      <div>
                        <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 13.5, fontWeight: 500, color: '#2C2C2C' }}>{b.clientName}</p>
                        <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E' }}>{b.email}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: '#2C2C2C', backgroundColor: 'rgba(200,169,126,0.1)', padding: '3px 9px', borderRadius: 6 }}>
                      {b.package.split(' ').slice(0, 2).join(' ')}
                    </span>
                  </td>
                  <td style={{ padding: '14px 20px', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', whiteSpace: 'nowrap' }}>
                    {new Date(b.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '14px 20px', fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: '#8A7A6E', maxWidth: 180 }}>
                    <span style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{b.venue}</span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C' }}>£{b.totalAmount.toLocaleString()}</span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <StatusBadge status={b.status} />
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <button
                      onClick={e => { e.stopPropagation(); setSelectedBooking(b); }}
                      style={{ padding: '5px 12px', border: '1px solid rgba(200,169,126,0.3)', borderRadius: 8, backgroundColor: 'transparent', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E' }}>
                      View
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && (
            <div style={{ padding: '48px 24px', textAlign: 'center' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#8A7A6E' }}>No bookings found</p>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#B0A8A0' }}>Try adjusting your search or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {selectedBooking && <BookingDrawer booking={selectedBooking} onClose={() => setSelectedBooking(null)} />}
      </AnimatePresence>
    </div>
  );
}
