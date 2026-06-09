import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Edit3, Trash2, Check, X, Clock, PoundSterling, ToggleLeft, ToggleRight, Sparkles } from 'lucide-react';
import { services, type Service } from '../data/mockData';

const GOLD = '#C8A97E';

const categoryColors: Record<string, { bg: string; text: string }> = {
  'Bridal': { bg: 'rgba(200,169,126,0.12)', text: '#8A6A3E' },
  'Editorial': { bg: 'rgba(138,164,200,0.12)', text: '#3E5A8A' },
  'Special Event': { bg: 'rgba(168,200,160,0.12)', text: '#3E6A3E' },
};

function ServiceModal({ service, onClose, onSave }: {
  service: Service | null;
  onClose: () => void;
  onSave: (s: Service) => void;
}) {
  const isNew = !service;
  const [form, setForm] = useState<Service>(service ?? {
    id: `SV${Date.now()}`, name: '', description: '', price: 0, duration: '',
    category: 'Bridal', isActive: true, includes: [''],
  });

  const updateField = (field: keyof Service, value: unknown) => setForm(f => ({ ...f, [field]: value }));
  const updateInclude = (i: number, val: string) => setForm(f => ({ ...f, includes: f.includes.map((item, idx) => idx === i ? val : item) }));
  const addInclude = () => setForm(f => ({ ...f, includes: [...f.includes, ''] }));
  const removeInclude = (i: number) => setForm(f => ({ ...f, includes: f.includes.filter((_, idx) => idx !== i) }));

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(28,28,28,0.4)', backdropFilter: 'blur(3px)', zIndex: 50 }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 520, maxHeight: '88vh', backgroundColor: '#FFFFFF', borderRadius: 20, zIndex: 60, boxShadow: '0 24px 64px rgba(44,44,44,0.2)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
      >
        <div style={{ padding: '24px 28px', borderBottom: '1px solid rgba(200,169,126,0.15)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>
            {isNew ? 'Add New Service' : 'Edit Service'}
          </h2>
          <button onClick={onClose} style={{ width: 34, height: 34, border: '1px solid rgba(200,169,126,0.2)', borderRadius: 9, backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={15} color="#8A7A6E" />
          </button>
        </div>
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px 28px' }}>
          {/* Name */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 6 }}>Service Name</label>
            <input value={form.name} onChange={e => updateField('name', e.target.value)}
              style={{ width: '100%', height: 40, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, padding: '0 12px', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C', outline: 'none', boxSizing: 'border-box' }} />
          </div>
          {/* Description */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 6 }}>Description</label>
            <textarea value={form.description} onChange={e => updateField('description', e.target.value)} rows={3}
              style={{ width: '100%', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, padding: '10px 12px', fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#2C2C2C', outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
          </div>
          {/* Price / Duration / Category */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12, marginBottom: 16 }}>
            {[
              { label: 'Price (£)', field: 'price' as keyof Service, type: 'number', value: form.price },
              { label: 'Duration', field: 'duration' as keyof Service, type: 'text', value: form.duration },
            ].map(({ label, field, type, value }) => (
              <div key={label}>
                <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 6 }}>{label}</label>
                <input type={type} value={String(value)} onChange={e => updateField(field, type === 'number' ? Number(e.target.value) : e.target.value)}
                  style={{ width: '100%', height: 40, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, padding: '0 12px', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C', outline: 'none', boxSizing: 'border-box' }} />
              </div>
            ))}
            <div>
              <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 6 }}>Category</label>
              <select value={form.category} onChange={e => updateField('category', e.target.value)}
                style={{ width: '100%', height: 40, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, padding: '0 12px', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C', outline: 'none', appearance: 'none', boxSizing: 'border-box' }}>
                <option>Bridal</option><option>Editorial</option><option>Special Event</option>
              </select>
            </div>
          </div>
          {/* Includes */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 10 }}>What's Included</label>
            {form.includes.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 8, marginBottom: 8 }}>
                <input value={item} onChange={e => updateInclude(i, e.target.value)}
                  style={{ flex: 1, height: 38, border: '1px solid rgba(200,169,126,0.2)', borderRadius: 9, padding: '0 12px', fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C', outline: 'none' }} />
                <button onClick={() => removeInclude(i)} style={{ width: 38, height: 38, border: '1px solid rgba(244,63,94,0.25)', borderRadius: 9, backgroundColor: 'rgba(244,63,94,0.05)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X size={13} color="#F43F5E" />
                </button>
              </div>
            ))}
            <button onClick={addInclude} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', border: '1px dashed rgba(200,169,126,0.4)', borderRadius: 9, backgroundColor: 'transparent', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13, color: GOLD }}>
              <Plus size={13} /> Add item
            </button>
          </div>
        </div>
        <div style={{ padding: '14px 28px', borderTop: '1px solid rgba(200,169,126,0.1)', display: 'flex', gap: 10 }}>
          <button onClick={() => onSave(form)} style={{ flex: 1, padding: '11px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
            {isNew ? 'Add Service' : 'Save Changes'}
          </button>
          <button onClick={onClose} style={{ padding: '11px 20px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>
            Cancel
          </button>
        </div>
      </motion.div>
    </>
  );
}

export function Services() {
  const [svcs, setSvcs] = useState<Service[]>(services);
  const [editing, setEditing] = useState<Service | null | 'new'>('none' as unknown as null);
  const [deleteConfirm, setDeleteConfirm] = useState<string | null>(null);

  const showModal = editing !== 'none' as unknown as boolean;

  const toggleActive = (id: string) => setSvcs(prev => prev.map(s => s.id === id ? { ...s, isActive: !s.isActive } : s));
  const deleteService = (id: string) => { setSvcs(prev => prev.filter(s => s.id !== id)); setDeleteConfirm(null); };
  const saveService = (svc: Service) => {
    setSvcs(prev => prev.some(s => s.id === svc.id) ? prev.map(s => s.id === svc.id ? svc : s) : [...prev, svc]);
    setEditing('none' as unknown as null);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Services</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>{svcs.filter(s => s.isActive).length} active · {svcs.filter(s => !s.isActive).length} inactive</p>
        </div>
        <button onClick={() => setEditing(null)}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
          <Plus size={16} /> Add Service
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: 16 }}>
        {svcs.map((svc, i) => {
          const cat = categoryColors[svc.category] || categoryColors['Bridal'];
          return (
            <motion.div key={svc.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: `1px solid ${svc.isActive ? 'rgba(200,169,126,0.15)' : 'rgba(200,169,126,0.08)'}`, boxShadow: '0 2px 10px rgba(44,44,44,0.04)', overflow: 'hidden', opacity: svc.isActive ? 1 : 0.65 }}
            >
              <div style={{ padding: '22px 22px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                    <div style={{ width: 40, height: 40, borderRadius: 11, backgroundColor: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Sparkles size={18} color={GOLD} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 600, color: '#2C2C2C', margin: 0, lineHeight: 1.3 }}>{svc.name}</h3>
                      <span style={{ backgroundColor: cat.bg, color: cat.text, padding: '1px 7px', borderRadius: 10, fontSize: 10, fontFamily: "'Jost', sans-serif", fontWeight: 500, marginTop: 2, display: 'inline-block' }}>
                        {svc.category}
                      </span>
                    </div>
                  </div>
                  <button onClick={() => toggleActive(svc.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                    {svc.isActive
                      ? <ToggleRight size={28} color={GOLD} strokeWidth={1.5} />
                      : <ToggleLeft size={28} color="#B0A8A0" strokeWidth={1.5} />}
                  </button>
                </div>

                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E', margin: '0 0 16px', lineHeight: 1.6 }}>
                  {svc.description.length > 100 ? svc.description.slice(0, 100) + '…' : svc.description}
                </p>

                <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <PoundSterling size={14} color={GOLD} />
                    <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 700, color: '#2C2C2C' }}>{svc.price.toLocaleString()}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Clock size={13} color="#8A7A6E" />
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E' }}>{svc.duration}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {svc.includes.slice(0, 3).map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
                      <Check size={11} color={GOLD} strokeWidth={2.5} />
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E' }}>{item}</span>
                    </div>
                  ))}
                  {svc.includes.length > 3 && (
                    <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: GOLD, marginLeft: 19, marginTop: 2 }}>+{svc.includes.length - 3} more</span>
                  )}
                </div>
              </div>

              <div style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '12px 22px', display: 'flex', gap: 8 }}>
                <button onClick={() => setEditing(svc)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 9, backgroundColor: 'transparent', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: '#2C2C2C' }}>
                  <Edit3 size={13} /> Edit
                </button>
                <button onClick={() => setDeleteConfirm(svc.id)}
                  style={{ width: 36, height: 36, border: '1px solid rgba(244,63,94,0.2)', borderRadius: 9, backgroundColor: 'rgba(244,63,94,0.04)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Trash2 size={13} color="#F43F5E" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Delete confirm */}
      <AnimatePresence>
        {deleteConfirm && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setDeleteConfirm(null)}
              style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(28,28,28,0.4)', backdropFilter: 'blur(3px)', zIndex: 50 }} />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }}
              style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 380, backgroundColor: '#FFFFFF', borderRadius: 18, padding: 28, zIndex: 60, boxShadow: '0 24px 64px rgba(44,44,44,0.18)', textAlign: 'center' }}>
              <div style={{ width: 52, height: 52, borderRadius: '50%', backgroundColor: 'rgba(244,63,94,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                <Trash2 size={22} color="#F43F5E" />
              </div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: '#2C2C2C', margin: '0 0 8px' }}>Delete Service?</h3>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#8A7A6E', margin: '0 0 24px', lineHeight: 1.5 }}>This action cannot be undone. The service will be permanently removed.</p>
              <div style={{ display: 'flex', gap: 10 }}>
                <button onClick={() => deleteService(deleteConfirm)} style={{ flex: 1, padding: '11px', backgroundColor: '#F43F5E', color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>Delete</button>
                <button onClick={() => setDeleteConfirm(null)} style={{ flex: 1, padding: '11px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14 }}>Cancel</button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {(editing === null || (editing && editing !== 'none' as unknown)) && (
          <ServiceModal
            service={editing === null ? null : editing as Service}
            onClose={() => setEditing('none' as unknown as null)}
            onSave={saveService}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
