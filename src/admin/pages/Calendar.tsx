import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight, X, Lock, Unlock, Calendar as CalIcon } from 'lucide-react';
import { calendarEvents, type CalendarEvent } from '../data/mockData';

const GOLD = '#C8A97E';
const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const DAYS = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];

function EventPopover({ event, date, onClose, onBlock }: {
  event?: CalendarEvent;
  date: string;
  onClose: () => void;
  onBlock: (date: string, block: boolean) => void;
}) {
  const isBlocked = event?.type === 'blocked';
  const dateObj = new Date(date);

  return (
    <>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}
        style={{ position: 'fixed', inset: 0, zIndex: 50 }} />
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 8 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9 }}
        style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 340, backgroundColor: '#FFFFFF', borderRadius: 18, zIndex: 60, boxShadow: '0 20px 60px rgba(44,44,44,0.18)', overflow: 'hidden' }}
      >
        <div style={{ backgroundColor: '#1A1A1A', padding: '20px 22px', position: 'relative' }}>
          <button onClick={onClose} style={{ position: 'absolute', right: 14, top: 14, width: 28, height: 28, borderRadius: 8, border: 'none', backgroundColor: 'rgba(248,245,242,0.1)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <X size={13} color="rgba(248,245,242,0.7)" />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, backgroundColor: isBlocked ? 'rgba(244,63,94,0.15)' : 'rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <CalIcon size={20} color={isBlocked ? '#F43F5E' : GOLD} strokeWidth={1.5} />
            </div>
            <div>
              <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 11, color: 'rgba(248,245,242,0.5)', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 500 }}>
                {isBlocked ? 'Unavailable' : event?.type === 'trial' ? 'Trial Session' : 'Wedding Day'}
              </p>
              <p style={{ margin: '2px 0 0', fontFamily: "'Playfair Display', serif", fontSize: 17, color: '#F8F5F2', fontWeight: 600 }}>
                {dateObj.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
              </p>
            </div>
          </div>
        </div>
        <div style={{ padding: '18px 22px 20px' }}>
          {event && !isBlocked && (
            <>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E', margin: '0 0 4px' }}>Client</p>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 17, fontWeight: 600, color: '#2C2C2C', margin: '0 0 12px' }}>{event.clientName}</p>
              {event.package && (
                <>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#8A7A6E', margin: '0 0 4px' }}>Package</p>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#2C2C2C', margin: '0 0 18px' }}>{event.package}</p>
                </>
              )}
            </>
          )}
          {isBlocked && (
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#8A7A6E', margin: '0 0 18px', lineHeight: 1.5 }}>This date is blocked as unavailable.</p>
          )}
          <div style={{ display: 'flex', gap: 10 }}>
            {!event || event.type !== 'booked' ? (
              <button onClick={() => { onBlock(date, !isBlocked); onClose(); }}
                style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, padding: '10px', backgroundColor: isBlocked ? '#22C55E' : '#F43F5E', color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13.5, fontWeight: 500 }}>
                {isBlocked ? <><Unlock size={14} /> Unblock</> : <><Lock size={14} /> Block Date</>}
              </button>
            ) : (
              <button style={{ flex: 1, padding: '10px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13.5, fontWeight: 500 }}>
                View Booking
              </button>
            )}
            <button onClick={onClose} style={{ padding: '10px 18px', backgroundColor: 'transparent', color: '#8A7A6E', border: '1px solid rgba(200,169,126,0.25)', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13.5 }}>
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}

export function Calendar() {
  const [year, setYear] = useState(2025);
  const [month, setMonth] = useState(5); // June (0-indexed)
  const [events, setEvents] = useState<CalendarEvent[]>(calendarEvents);
  const [selected, setSelected] = useState<string | null>(null);

  const eventMap = new Map(events.map(e => [e.date, e]));

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); };

  const toggleBlock = (date: string, block: boolean) => {
    if (block) {
      setEvents(prev => [...prev.filter(e => e.date !== date), { date, type: 'blocked' }]);
    } else {
      setEvents(prev => prev.filter(e => e.date !== date));
    }
  };

  const today = new Date();
  const todayStr = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2,'0')}-${String(today.getDate()).padStart(2,'0')}`;

  const selectedEvent = selected ? eventMap.get(selected) : undefined;

  const eventColors: Record<string, { bg: string; dot: string; text: string }> = {
    booked:  { bg: 'rgba(200,169,126,0.15)', dot: GOLD, text: '#8A6A3E' },
    trial:   { bg: 'rgba(138,164,200,0.15)', dot: '#8AA4C8', text: '#3E5A8A' },
    blocked: { bg: 'rgba(244,63,94,0.1)', dot: '#F43F5E', text: '#881337' },
  };

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Calendar</h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>Manage your availability and appointments</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 280px', gap: 20, alignItems: 'start' }}>
        {/* Calendar grid */}
        <div style={{ backgroundColor: '#FFFFFF', borderRadius: 18, border: '1px solid rgba(200,169,126,0.15)', boxShadow: '0 2px 12px rgba(44,44,44,0.04)', overflow: 'hidden' }}>
          {/* Month navigation */}
          <div style={{ padding: '20px 24px', borderBottom: '1px solid rgba(200,169,126,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button onClick={prevMonth} style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid rgba(200,169,126,0.2)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronLeft size={16} color="#8A7A6E" />
            </button>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>
              {MONTHS[month]} {year}
            </h2>
            <button onClick={nextMonth} style={{ width: 36, height: 36, borderRadius: 10, border: '1px solid rgba(200,169,126,0.2)', backgroundColor: 'transparent', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <ChevronRight size={16} color="#8A7A6E" />
            </button>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '12px 16px 4px' }}>
            {DAYS.map(d => (
              <div key={d} style={{ textAlign: 'center', fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 600, color: '#8A7A6E', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '6px 0' }}>{d}</div>
            ))}
          </div>

          {/* Calendar cells */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', padding: '4px 16px 20px', gap: 2 }}>
            {Array.from({ length: firstDay }).map((_, i) => <div key={`empty-${i}`} />)}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const day = i + 1;
              const dateStr = `${year}-${String(month + 1).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
              const event = eventMap.get(dateStr);
              const isToday = dateStr === todayStr;
              const isSelected = selected === dateStr;
              const ec = event ? eventColors[event.type] : null;

              return (
                <motion.button key={day}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelected(dateStr)}
                  style={{
                    height: 52, borderRadius: 10, border: `1px solid ${isSelected ? GOLD : ec ? `${ec.dot}40` : 'transparent'}`,
                    backgroundColor: isToday ? '#1A1A1A' : ec ? ec.bg : isSelected ? 'rgba(200,169,126,0.1)' : 'transparent',
                    cursor: 'pointer', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 3,
                    transition: 'all 0.15s',
                  }}
                >
                  <span style={{ fontFamily: isToday ? "'Playfair Display', serif" : "'Jost', sans-serif", fontSize: isToday ? 15 : 14, fontWeight: isToday ? 700 : ec ? 600 : 400, color: isToday ? '#F8F5F2' : ec ? ec.text : '#2C2C2C' }}>
                    {day}
                  </span>
                  {event && (
                    <div style={{ width: 5, height: 5, borderRadius: '50%', backgroundColor: ec!.dot }} />
                  )}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Sidebar info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {/* Legend */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', padding: '18px 20px' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C', margin: '0 0 14px' }}>Legend</h3>
            {[
              { type: 'booked', label: 'Wedding / Booking' },
              { type: 'trial', label: 'Trial Session' },
              { type: 'blocked', label: 'Blocked / Unavailable' },
            ].map(({ type, label }) => {
              const ec = eventColors[type];
              return (
                <div key={type} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                  <div style={{ width: 10, height: 10, borderRadius: '50%', backgroundColor: ec.dot }} />
                  <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: '#2C2C2C' }}>{label}</span>
                </div>
              );
            })}
          </div>

          {/* Upcoming events */}
          <div style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: '1px solid rgba(200,169,126,0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '16px 20px 12px', borderBottom: '1px solid rgba(200,169,126,0.1)' }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C', margin: 0 }}>Upcoming</h3>
            </div>
            <div style={{ padding: '8px 0' }}>
              {events.filter(e => e.type !== 'blocked').slice(0, 5).map((e, i) => {
                const ec = eventColors[e.type];
                return (
                  <div key={e.date + i} style={{ padding: '10px 20px', display: 'flex', gap: 10, alignItems: 'flex-start', borderBottom: '1px solid rgba(200,169,126,0.07)' }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: ec.dot, marginTop: 5, flexShrink: 0 }} />
                    <div>
                      <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12.5, fontWeight: 500, color: '#2C2C2C' }}>{e.clientName}</p>
                      <p style={{ margin: '2px 0 0', fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E' }}>
                        {new Date(e.date).toLocaleDateString('en-GB', { day: 'numeric', month: 'short' })} · {e.type === 'trial' ? 'Trial' : 'Wedding'}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Event popover */}
      <AnimatePresence>
        {selected && (
          <EventPopover
            event={selectedEvent}
            date={selected}
            onClose={() => setSelected(null)}
            onBlock={toggleBlock}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
