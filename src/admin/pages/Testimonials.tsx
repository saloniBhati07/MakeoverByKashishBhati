import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, Eye, EyeOff, CheckCircle, XCircle, Gem } from 'lucide-react';
import { testimonials, type Testimonial } from '../data/mockData';

const GOLD = '#C8A97E';

const sourceLabels: Record<string, { label: string; color: string }> = {
  google:   { label: 'Google', color: '#4285F4' },
  instagram:{ label: 'Instagram', color: '#E1306C' },
  direct:   { label: 'Direct', color: '#8A7A6E' },
  referral: { label: 'Referral', color: '#22C55E' },
};

function StarRating({ rating, size = 14 }: { rating: number; size?: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {[1,2,3,4,5].map(i => (
        <Star key={i} size={size} color={i <= rating ? GOLD : '#E0D8D0'} fill={i <= rating ? GOLD : 'none'} strokeWidth={i <= rating ? 0 : 1.5} />
      ))}
    </div>
  );
}

type FilterTab = 'all' | 'pending' | 'approved' | 'featured';

export function Testimonials() {
  const [reviews, setReviews] = useState<Testimonial[]>(testimonials);
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = reviews.filter(r => {
    if (activeTab === 'pending') return !r.isApproved;
    if (activeTab === 'approved') return r.isApproved;
    if (activeTab === 'featured') return r.isFeatured;
    return true;
  });

  const toggleApproved = (id: string) => setReviews(prev => prev.map(r => r.id === id ? { ...r, isApproved: !r.isApproved } : r));
  const toggleFeatured = (id: string) => setReviews(prev => prev.map(r => r.id === id ? { ...r, isFeatured: !r.isFeatured } : r));

  const tabs: { key: FilterTab; label: string; count: number }[] = [
    { key: 'all', label: 'All Reviews', count: reviews.length },
    { key: 'pending', label: 'Pending', count: reviews.filter(r => !r.isApproved).length },
    { key: 'approved', label: 'Approved', count: reviews.filter(r => r.isApproved).length },
    { key: 'featured', label: 'Featured', count: reviews.filter(r => r.isFeatured).length },
  ];

  return (
    <div>
      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Testimonials</h1>
        <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>
          Average rating: <span style={{ color: GOLD, fontWeight: 600 }}>
            {(reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)} ★
          </span>
        </p>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: 6, marginBottom: 24, borderBottom: '1px solid rgba(200,169,126,0.15)', paddingBottom: 0 }}>
        {tabs.map(tab => (
          <button key={tab.key} onClick={() => setActiveTab(tab.key)}
            style={{ padding: '10px 18px', border: 'none', backgroundColor: 'transparent', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13.5, fontWeight: activeTab === tab.key ? 600 : 400, color: activeTab === tab.key ? '#2C2C2C' : '#8A7A6E', borderBottom: activeTab === tab.key ? `2px solid ${GOLD}` : '2px solid transparent', marginBottom: -1, transition: 'all 0.2s', position: 'relative', top: 1 }}>
            {tab.label}
            <span style={{ marginLeft: 6, backgroundColor: activeTab === tab.key ? 'rgba(200,169,126,0.15)' : '#F0EBE4', color: activeTab === tab.key ? '#8A6A3E' : '#8A7A6E', padding: '1px 7px', borderRadius: 10, fontSize: 11 }}>
              {tab.count}
            </span>
          </button>
        ))}
      </div>

      {/* Review cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(360px, 1fr))', gap: 16 }}>
        {filtered.map((review, i) => {
          const isExpanded = expanded === review.id;
          const src = sourceLabels[review.source];
          return (
            <motion.div key={review.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              layout
              style={{ backgroundColor: '#FFFFFF', borderRadius: 16, border: `1px solid ${review.isApproved ? 'rgba(200,169,126,0.15)' : 'rgba(245,158,11,0.2)'}`, boxShadow: '0 2px 10px rgba(44,44,44,0.04)', overflow: 'hidden' }}
            >
              <div style={{ padding: '20px 22px 16px' }}>
                {/* Header */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: `linear-gradient(135deg, ${GOLD}, #A07850)`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#FFF', fontWeight: 600, flexShrink: 0 }}>
                      {review.avatar}
                    </div>
                    <div>
                      <p style={{ margin: 0, fontFamily: "'Playfair Display', serif", fontSize: 15, fontWeight: 600, color: '#2C2C2C' }}>{review.clientName}</p>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 3 }}>
                        <StarRating rating={review.rating} size={12} />
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#B0A8A0' }}>·</span>
                        <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: '#8A7A6E' }}>{new Date(review.weddingDate).toLocaleDateString('en-GB', { month: 'short', year: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                    <span style={{ backgroundColor: `${src.color}15`, color: src.color, padding: '2px 8px', borderRadius: 10, fontSize: 10.5, fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
                      {src.label}
                    </span>
                    {!review.isApproved && (
                      <span style={{ backgroundColor: '#FFFBEB', color: '#92620A', padding: '2px 8px', borderRadius: 10, fontSize: 10, fontFamily: "'Jost', sans-serif", fontWeight: 500 }}>
                        Pending
                      </span>
                    )}
                  </div>
                </div>

                {/* Review text */}
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13.5, color: '#4A4040', lineHeight: 1.65, margin: 0, fontStyle: 'italic' }}>
                  "{isExpanded ? review.review : review.review.length > 140 ? review.review.slice(0, 140) + '…' : review.review}"
                </p>
                {review.review.length > 140 && (
                  <button onClick={() => setExpanded(isExpanded ? null : review.id)} style={{ background: 'none', border: 'none', padding: 0, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12, color: GOLD, marginTop: 4 }}>
                    {isExpanded ? 'Show less' : 'Read more'}
                  </button>
                )}
              </div>

              {/* Actions */}
              <div style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '12px 22px', display: 'flex', gap: 8, backgroundColor: '#FAFAF8' }}>
                <button onClick={() => toggleApproved(review.id)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', border: `1px solid ${review.isApproved ? 'rgba(244,63,94,0.25)' : 'rgba(34,197,94,0.3)'}`, borderRadius: 9, backgroundColor: review.isApproved ? 'rgba(244,63,94,0.05)' : 'rgba(34,197,94,0.05)', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: review.isApproved ? '#F43F5E' : '#16A34A', fontWeight: 500 }}>
                  {review.isApproved ? <><EyeOff size={13} /> Hide</> : <><CheckCircle size={13} /> Approve</>}
                </button>
                <button onClick={() => toggleFeatured(review.id)}
                  style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '8px', border: `1px solid ${review.isFeatured ? `${GOLD}60` : 'rgba(200,169,126,0.25)'}`, borderRadius: 9, backgroundColor: review.isFeatured ? 'rgba(200,169,126,0.1)' : 'transparent', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 12.5, color: review.isFeatured ? '#8A6A3E' : '#8A7A6E', fontWeight: review.isFeatured ? 500 : 400 }}>
                  <Gem size={13} color={review.isFeatured ? GOLD : '#8A7A6E'} /> {review.isFeatured ? 'Unfeature' : 'Feature'}
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>

      {filtered.length === 0 && (
        <div style={{ textAlign: 'center', padding: '60px 24px' }}>
          <Star size={40} color="#E0D8D0" style={{ display: 'block', margin: '0 auto 12px' }} />
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#8A7A6E' }}>No reviews in this category</p>
        </div>
      )}
    </div>
  );
}
