import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { Upload, Star, Trash2, GripVertical, Plus } from 'lucide-react';
import { portfolioImages, type PortfolioImage } from '../data/mockData';

const GOLD = '#C8A97E';
const CATEGORIES = ['All', 'Bridal', 'Editorial', 'Engagement', 'Party', 'Mehndi'] as const;
type Category = typeof CATEGORIES[number];
const ITEM_TYPE = 'PORTFOLIO_IMAGE';

function DraggableImage({ image, index, onMove, onToggleFeatured, onDelete }: {
  image: PortfolioImage;
  index: number;
  onMove: (from: number, to: number) => void;
  onToggleFeatured: (id: string) => void;
  onDelete: (id: string) => void;
}) {
  const [hovered, setHovered] = useState(false);

  const [{ isDragging }, drag, preview] = useDrag({
    type: ITEM_TYPE,
    item: { id: image.id, index },
    collect: monitor => ({ isDragging: monitor.isDragging() }),
  });

  const [{ isOver }, drop] = useDrop({
    accept: ITEM_TYPE,
    drop: (item: { index: number }) => { if (item.index !== index) onMove(item.index, index); },
    collect: monitor => ({ isOver: monitor.isOver() }),
  });

  return (
    <div ref={node => { preview(node); drop(node); }}
      onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)}
      style={{ position: 'relative', borderRadius: 14, overflow: 'hidden', aspectRatio: '3/4', opacity: isDragging ? 0.4 : 1, border: isOver ? `2px solid ${GOLD}` : '2px solid transparent', transition: 'border-color 0.2s, opacity 0.2s', cursor: 'grab', backgroundColor: '#F0EBE4' }}
    >
      <img src={image.url} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />

      {/* Overlay on hover */}
      <AnimatePresence>
        {hovered && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.15 }}
            style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(28,28,28,0.75) 0%, transparent 50%)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', padding: 12 }}>
            {/* Top controls */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div ref={drag} style={{ cursor: 'grab', padding: 4, backgroundColor: 'rgba(255,255,255,0.15)', borderRadius: 7 }}>
                <GripVertical size={16} color="#FFF" />
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button onClick={() => onToggleFeatured(image.id)}
                  style={{ width: 30, height: 30, borderRadius: 8, border: 'none', backgroundColor: image.isFeatured ? GOLD : 'rgba(255,255,255,0.15)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Star size={14} color="#FFF" fill={image.isFeatured ? '#FFF' : 'none'} />
                </button>
                <button onClick={() => onDelete(image.id)}
                  style={{ width: 30, height: 30, borderRadius: 8, border: 'none', backgroundColor: 'rgba(244, 63, 94, 0.7)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Trash2 size={13} color="#FFF" />
                </button>
              </div>
            </div>
            {/* Bottom info */}
            <div>
              <p style={{ margin: 0, fontFamily: "'Jost', sans-serif", fontSize: 12, color: 'rgba(255,255,255,0.9)', fontWeight: 500 }}>{image.alt}</p>
              {image.isFeatured && (
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, backgroundColor: 'rgba(200,169,126,0.9)', color: '#FFF', padding: '2px 7px', borderRadius: 10, fontSize: 10, fontFamily: "'Jost', sans-serif", fontWeight: 500, marginTop: 4 }}>
                  <Star size={9} fill="#FFF" /> Featured
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Category tag */}
      <div style={{ position: 'absolute', top: 10, left: 10 }}>
        <span style={{ backgroundColor: 'rgba(255,255,255,0.9)', color: '#2C2C2C', padding: '2px 8px', borderRadius: 20, fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500 }}>
          {image.category}
        </span>
      </div>
    </div>
  );
}

export function Portfolio() {
  const [images, setImages] = useState<PortfolioImage[]>(portfolioImages);
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const moveImage = useCallback((from: number, to: number) => {
    setImages(prev => {
      const updated = [...prev];
      const [removed] = updated.splice(from, 1);
      updated.splice(to, 0, removed);
      return updated.map((img, i) => ({ ...img, order: i + 1 }));
    });
  }, []);

  const toggleFeatured = useCallback((id: string) => {
    setImages(prev => prev.map(img => img.id === id ? { ...img, isFeatured: !img.isFeatured } : img));
  }, []);

  const deleteImage = useCallback((id: string) => {
    setImages(prev => prev.filter(img => img.id !== id));
  }, []);

  const filtered = activeCategory === 'All' ? images : images.filter(img => img.category === activeCategory);
  const featuredCount = images.filter(img => img.isFeatured).length;

  return (
    <DndProvider backend={HTML5Backend}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 24 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 26, fontWeight: 600, color: '#2C2C2C', margin: '0 0 4px' }}>Portfolio</h1>
            <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, color: '#8A7A6E', margin: 0 }}>
              {images.length} images · <span style={{ color: GOLD }}>{featuredCount} featured</span> · Drag to reorder
            </p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 18px', backgroundColor: GOLD, color: '#FFF', border: 'none', borderRadius: 10, cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500 }}>
            <Upload size={16} /> Upload Images
            <input type="file" multiple accept="image/*" style={{ display: 'none' }} />
          </label>
        </div>

        {/* Category tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 24, flexWrap: 'wrap' }}>
          {CATEGORIES.map(cat => (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              style={{ padding: '7px 16px', borderRadius: 20, border: '1px solid rgba(200,169,126,0.25)', backgroundColor: activeCategory === cat ? '#1A1A1A' : '#FFF', color: activeCategory === cat ? '#F8F5F2' : '#8A7A6E', cursor: 'pointer', fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: activeCategory === cat ? 500 : 400, transition: 'all 0.2s' }}>
              {cat} {cat !== 'All' && <span style={{ color: activeCategory === cat ? GOLD : '#B0A8A0', marginLeft: 4 }}>{images.filter(i => i.category === cat).length}</span>}
            </button>
          ))}
        </div>

        {/* Upload zone */}
        <label style={{ display: 'block', border: '2px dashed rgba(200,169,126,0.35)', borderRadius: 14, padding: '28px 24px', textAlign: 'center', cursor: 'pointer', marginBottom: 24, backgroundColor: 'rgba(200,169,126,0.03)', transition: 'all 0.2s' }}
          onMouseEnter={e => { e.currentTarget.style.borderColor = GOLD; e.currentTarget.style.backgroundColor = 'rgba(200,169,126,0.06)'; }}
          onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(200,169,126,0.35)'; e.currentTarget.style.backgroundColor = 'rgba(200,169,126,0.03)'; }}>
          <input type="file" multiple accept="image/*" style={{ display: 'none' }} />
          <Plus size={28} color={GOLD} strokeWidth={1.5} style={{ display: 'block', margin: '0 auto 10px' }} />
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#2C2C2C', margin: '0 0 4px' }}>Drop images here or click to upload</p>
          <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: '#8A7A6E', margin: 0 }}>Supports JPG, PNG, WEBP · Max 10MB per image</p>
        </label>

        {/* Image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: 16 }}>
          {filtered.map((image, index) => (
            <DraggableImage
              key={image.id}
              image={image}
              index={index}
              onMove={moveImage}
              onToggleFeatured={toggleFeatured}
              onDelete={deleteImage}
            />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 24px' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, color: '#8A7A6E' }}>No images in this category</p>
          </div>
        )}
      </div>
    </DndProvider>
  );
}
