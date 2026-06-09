import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Plus, Phone, Mail, MapPin, Calendar, StickyNote, X, Gem } from 'lucide-react';
import { clients, type Client } from '../data/mockData';

const GOLD = '#C8A97E';

const packageColors: Record<string, string> = {
  'Bridal Radiance Collection': '#E8D4B4',
  'Eternal Glow Package': '#D4E8D4',
  'Maharani Bridal Suite': '#D4D4E8',
  'Blush & Bloom Duo': '#E8D4D4',
};

function ClientModal({ client, onClose }: { client: Client; onClose: () => void }) {
  const [notes, setNotes] = useState(client.notes);
  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(28,28,28,0.4)', backdropFilter: 'blur(3px)', zIndex: 50 }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95, y: 20 }}
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 520, maxHeight: '85vh', backgroundColor: '#FFFFFF', borderRadius: 20, zIndex: 60, boxShadow: '0 24px 64px rgba(44,44,44,0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        {/* Modal header with avatar */}
        <div style={{ background: `linear-gradient(135deg, #1A1A1A, #2C2C2C)`, padding: '28px 28px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -20, right: -20, width: 120, height: 120, borderRadius: '50%', backgroundColor: GOLD, opacity: 0.08, filter: 'blur(30px)' }} />
          <button onClick={onClose} style={{ position: 'absolute', right: 20, top: 20, width: 32, height: 32, borderRadius: 8, border: '1px solid rgba(248,245,242,0.2)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={14} color="rgba(248,245,242,0.6)" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 22, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
              {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
            <div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 600, color: '#F8F5F2', margin: '0 0 4px' }}>{client.name}</h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: 'rgba(248,245,242,0.5)', margin: 0 }}>& {client.partnerName}</p>
            </div>
          </div>
        </div>

        <div style={{ padding: '24px 28px', overflowY: 'auto', flex: 1 }}>
          {/* Package tag */}
          <span style={{ backgroundColor: packageColors[client.package] || 'rgba(200,169,126,0.1)', color: '#2C2C2C', padding: '4px 12px', borderRadius: 20, fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 500, display: 'inline-block', marginBottom: 20 }}>
            {client.package}
          </span>

          {/* Details grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 20 }}>
            {[
              { icon: Phone, label: 'Phone', value: client.phone },
              { icon: Mail, label: 'Email', value: client.email },
              { icon: Calendar, label: 'Wedding Date', value: new Date(client.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }) },
              { icon: MapPin, label: 'City', value: client.city },
              { icon: MapPin, label: 'Venue', value: client.venue },
              { icon: Gem, label: 'Total Spend', value: `£${client.totalSpend.toLocaleString()}` },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} style={{ backgroundColor: '#FAFAF8', borderRadius: 10, padding: '12px 14px', border: '1px solid rgba(200,169,126,0.1)' }}>
                <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                  <Icon size={12} color={GOLD} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>{label}</span>
                </div>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', fontWeight: 500 }}>{value}</p>
              </div>
            ))}
          </div>

          {/* Notes */}
          <div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 8 }}>
              <StickyNote size={13} color={GOLD} />
              <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500 }}>Notes</span>
            </div>
            <textarea
              value={notes} onChange={e => setNotes(e.target.value)} rows={3}
              style={{ width: '100%', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 10, padding: '10px 12px', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', outline: 'none', resize: 'vertical', backgroundColor: '#FAFAF8', boxSizing: 'border-box' }}
            />
          </div>
        </div>
        <div style={{ padding: '14px 28px', borderTop: '1px solid rgba(200,169,126,0.1)', display: 'flex', gap: 10 }}>
          <button style={{ flex: 1, padding: '10px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
            Save Changes
          </button>
          <button onClick={onClose} style={{ padding: '10px 20px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>
            Close
          </button>
        </div>
      </motion.div>
    </>
  );
}

export function Clients() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState<Client | null>(null);
  const [view, setView] = useState<'grid' | 'list'>('grid');

  const filtered = clients.filter(c =>
    search === '' || c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Clients</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>{clients.length} clients in your portfolio</p>
        </div>
        <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
          <Plus size={16} /> Add Client
        </button>
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', gap: 12, marginBottom: 20 }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <Search size={15} color="#8A7A6E" style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }} />
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search clients..."
            style={{ width: '100%', height: 40, paddingLeft: 36, paddingRight: 12, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, backgroundColor: '#FFFFFF', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', outline: 'none', boxSizing: 'border-box' }} />
        </div>
        <div style={{ display: 'flex', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, overflow: 'hidden' }}>
          {(['grid', 'list'] as const).map(v => (
            <button key={v} onClick={() => setView(v)} style={{ padding: '0 16px', height: 40, border: 'none', cursor: 'pointer', backgroundColor: view === v ? 'rgba(200,169,126,0.12)' : '#FFF', fontFamily: "'Jost', sans-serif", fontSize: 12, color: view === v ? '#2C2C2C' : '#8A7A6E', textTransform: 'capitalize', fontWeight: view === v ? 500 : 400 }}>
              {v}
            </button>
          ))}
        </div>
      </div>

      {view === 'grid' ? (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
          {filtered.map((client, i) => (
            <motion.div key={client.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, boxShadow: '0 12px 32px rgba(44,44,44,0.1)' }}
              onClick={() => setSelected(client)}
              style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', boxShadow: '0 2px 10px rgba(44,44,44,0.04)', padding: '24px', cursor: 'pointer', transition: 'box-shadow 0.2s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontSize: 17, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
                  {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>{client.name}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', margin: '2px 0 0' }}>& {client.partnerName}</p>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {[
                  { icon: Calendar, text: new Date(client.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }) },
                  { icon: MapPin, text: client.city },
                  { icon: Mail, text: client.email },
                ].map(({ icon: Icon, text }) => (
                  <div key={text} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                    <Icon size={12} color={GOLD} strokeWidth={1.8} />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{text}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid rgba(200,169,126,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ backgroundColor: packageColors[client.package] || '#F0EBE4', color: '#2C2C2C', padding: '3px 9px', borderRadius: 20, fontFamily: "'Jost', sans-serif", fontSize: 10.5, fontWeight: 500 }}>
                  {client.package.split(' ').slice(0, 2).join(' ')}
                </span>
                <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C' }}>£{client.totalSpend.toLocaleString()}</span>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', overflow: 'hidden' }}>
          {filtered.map((client, i) => (
            <div key={client.id}
              onClick={() => setSelected(client)}
              style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '16px 24px', borderBottom: i < filtered.length - 1 ? '1px solid rgba(200,169,126,0.07)' : 'none', cursor: 'pointer' }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#FAFAF8')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
                {client.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
              </div>
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, color: '#2C2C2C' }}>{client.name} <span style={{ color: '#8A7A6E', fontWeight: 400 }}>& {client.partnerName}</span></p>
                <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E' }}>{client.email} · {client.city}</p>
              </div>
              <div style={{ textAlign: 'right' }}>
                <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C' }}>{new Date(client.weddingDate).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}</p>
                <p style={{ margin: '2px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 14, fontWeight: 600, color: GOLD }}>£{client.totalSpend.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      <AnimatePresence>
        {selected && <ClientModal client={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </div>
  );
}
