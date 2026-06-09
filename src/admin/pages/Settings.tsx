import { useState } from 'react';
import { motion } from 'motion/react';
import { Save, Building2, Phone, Mail, Globe, Instagram, Facebook, Bell, Clock, CalendarCheck, ToggleLeft, ToggleRight } from 'lucide-react';

const GOLD = '#C8A97E';

function SectionCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', boxShadow: '0 2px 10px rgba(44,44,44,0.04)', overflow: 'hidden', marginBottom: 20 }}>
      <div style={{ padding: '18px 24px 14px', borderBottom: '1px solid rgba(200,169,126,0.1)' }}>
        <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>{title}</h3>
      </div>
      <div style={{ padding: '20px 24px' }}>{children}</div>
    </div>
  );
}

function Field({ label, children, half = false }: { label: string; children: React.ReactNode; half?: boolean }) {
  return (
    <div style={{ width: half ? 'calc(50% - 8px)' : '100%', marginBottom: 16 }}>
      <label style={{ display: 'block', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 500, marginBottom: 7 }}>{label}</label>
      {children}
    </div>
  );
}

function Input({ value, onChange, placeholder, type = 'text', icon }: { value: string; onChange: (v: string) => void; placeholder?: string; type?: string; icon?: React.ReactNode }) {
  return (
    <div style={{ position: 'relative' }}>
      {icon && <div style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>{icon}</div>}
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        style={{ width: '100%', height: 42, border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, padding: `0 14px 0 ${icon ? 38 : 14}px`, fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C', outline: 'none', backgroundColor: '#FAFAF8', boxSizing: 'border-box', transition: 'border-color 0.2s' }}
        onFocus={e => (e.target.style.borderColor = GOLD)}
        onBlur={e => (e.target.style.borderColor = 'rgba(200,169,126,0.25)')}
      />
    </div>
  );
}

function Toggle({ enabled, onChange, label, description }: { enabled: boolean; onChange: (v: boolean) => void; label: string; description?: string }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '14px 0', borderBottom: '1px solid rgba(200,169,126,0.08)' }}>
      <div>
        <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, color: '#2C2C2C' }}>{label}</p>
        {description && <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E' }}>{description}</p>}
      </div>
      <button onClick={() => onChange(!enabled)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
        {enabled ? <ToggleRight size={32} color={GOLD} strokeWidth={1.5} /> : <ToggleLeft size={32} color="#C0B8B0" strokeWidth={1.5} />}
      </button>
    </div>
  );
}

export function SettingsPage() {
  const [saved, setSaved] = useState(false);

  const [business, setBusiness] = useState({
    name: 'Sophia Belle Luxury Bridal Makeup',
    tagline: 'Creating Timeless Beauty for Your Most Precious Day',
    email: 'hello@sophiabelle.co.uk',
    phone: '+44 7700 900000',
    address: 'London, United Kingdom',
    website: 'www.sophiabelle.co.uk',
  });

  const [social, setSocial] = useState({
    instagram: '@sophiabellemakeup',
    facebook: 'SophiaBelleMakeup',
    pinterest: 'sophiabelle',
    tiktok: '@sophiabellemakeup',
  });

  const [booking, setBooking] = useState({
    minNotice: '8',
    depositPercent: '25',
    maxParty: '10',
    trialRequired: true,
    autoConfirm: false,
  });

  const [notifications, setNotifications] = useState({
    newInquiry: true,
    bookingConfirmed: true,
    paymentReceived: true,
    reviewSubmitted: true,
    weeklyReport: false,
    trialReminder: true,
    weddingReminder: true,
  });

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 28 }}>
        <div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Settings</h1>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>Manage your business profile and preferences</p>
        </div>
        <motion.button
          whileTap={{ scale: 0.97 }}
          onClick={handleSave}
          style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 20px', backgroundColor: saved ? '#22C55E' : GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500, transition: 'background-color 0.3s' }}>
          <Save size={16} /> {saved ? 'Saved ✓' : 'Save Changes'}
        </motion.button>
      </div>

      {/* Business Info */}
      <SectionCard title="Business Information">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          <div style={{ width: '100%' }}>
            <Field label="Business Name">
              <Input value={business.name} onChange={v => setBusiness(b => ({ ...b, name: v }))} icon={<Building2 size={14} color="#8A7A6E" />} />
            </Field>
          </div>
          <div style={{ width: '100%' }}>
            <Field label="Tagline">
              <Input value={business.tagline} onChange={v => setBusiness(b => ({ ...b, tagline: v }))} placeholder="Your brand tagline..." />
            </Field>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <Field label="Email Address">
              <Input value={business.email} onChange={v => setBusiness(b => ({ ...b, email: v }))} type="email" icon={<Mail size={14} color="#8A7A6E" />} />
            </Field>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <Field label="Phone Number">
              <Input value={business.phone} onChange={v => setBusiness(b => ({ ...b, phone: v }))} icon={<Phone size={14} color="#8A7A6E" />} />
            </Field>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <Field label="Location / City">
              <Input value={business.address} onChange={v => setBusiness(b => ({ ...b, address: v }))} />
            </Field>
          </div>
          <div style={{ flex: '1 1 200px' }}>
            <Field label="Website">
              <Input value={business.website} onChange={v => setBusiness(b => ({ ...b, website: v }))} icon={<Globe size={14} color="#8A7A6E" />} />
            </Field>
          </div>
        </div>
      </SectionCard>

      {/* Social Media */}
      <SectionCard title="Social Media Links">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
          {[
            { key: 'instagram', label: 'Instagram Handle', icon: <Instagram size={14} color="#E1306C" />, prefix: '@' },
            { key: 'facebook', label: 'Facebook Page', icon: <Facebook size={14} color="#4267B2" /> },
            { key: 'pinterest', label: 'Pinterest', icon: <Globe size={14} color="#E60023" /> },
            { key: 'tiktok', label: 'TikTok Handle', icon: <Globe size={14} color="#8A7A6E" /> },
          ].map(({ key, label, icon }) => (
            <div key={key} style={{ flex: '1 1 200px' }}>
              <Field label={label}>
                <Input value={social[key as keyof typeof social]} onChange={v => setSocial(s => ({ ...s, [key]: v }))} icon={icon} />
              </Field>
            </div>
          ))}
        </div>
      </SectionCard>

      {/* Booking Preferences */}
      <SectionCard title="Booking Preferences">
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16, marginBottom: 20 }}>
          {[
            { key: 'minNotice', label: 'Min. Notice (weeks)', icon: <Clock size={14} color="#8A7A6E" /> },
            { key: 'depositPercent', label: 'Deposit Required (%)', icon: <CalendarCheck size={14} color="#8A7A6E" /> },
            { key: 'maxParty', label: 'Max Bridal Party Size', icon: <CalendarCheck size={14} color="#8A7A6E" /> },
          ].map(({ key, label, icon }) => (
            <div key={key} style={{ flex: '1 1 140px' }}>
              <Field label={label}>
                <Input value={booking[key as keyof typeof booking] as string} onChange={v => setBooking(b => ({ ...b, [key]: v }))} type="number" icon={icon} />
              </Field>
            </div>
          ))}
        </div>
        <Toggle enabled={booking.trialRequired} onChange={v => setBooking(b => ({ ...b, trialRequired: v }))} label="Require Trial Session" description="Mandatory trial booking for all bridal packages" />
        <Toggle enabled={booking.autoConfirm} onChange={v => setBooking(b => ({ ...b, autoConfirm: v }))} label="Auto-confirm Bookings" description="Automatically confirm when deposit is received" />
      </SectionCard>

      {/* Notifications */}
      <SectionCard title="Notification Settings">
        <Toggle enabled={notifications.newInquiry} onChange={v => setNotifications(n => ({ ...n, newInquiry: v }))} label="New Inquiry Received" description="Alert when a potential client submits an enquiry" />
        <Toggle enabled={notifications.bookingConfirmed} onChange={v => setNotifications(n => ({ ...n, bookingConfirmed: v }))} label="Booking Confirmed" description="Notify when a booking is confirmed" />
        <Toggle enabled={notifications.paymentReceived} onChange={v => setNotifications(n => ({ ...n, paymentReceived: v }))} label="Payment Received" description="Alert when a deposit or balance payment is made" />
        <Toggle enabled={notifications.reviewSubmitted} onChange={v => setNotifications(n => ({ ...n, reviewSubmitted: v }))} label="New Review Submitted" description="Notify when a client leaves a testimonial" />
        <Toggle enabled={notifications.trialReminder} onChange={v => setNotifications(n => ({ ...n, trialReminder: v }))} label="Trial Reminders" description="48-hour reminder before scheduled trial sessions" />
        <Toggle enabled={notifications.weddingReminder} onChange={v => setNotifications(n => ({ ...n, weddingReminder: v }))} label="Wedding Day Reminders" description="48-hour reminder before booked wedding dates" />
        <Toggle enabled={notifications.weeklyReport} onChange={v => setNotifications(n => ({ ...n, weeklyReport: v }))} label="Weekly Business Report" description="Summary of bookings, revenue, and inquiries every Monday" />
      </SectionCard>
    </div>
  );
}
