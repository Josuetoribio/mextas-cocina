import React from 'react';
export function DishCard({ image, name, description, price, tag, favorite = false, onFavorite, onClick, style }) {
  const [h, setH] = React.useState(false);
  return (
    <article onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ position: 'relative', display: 'flex', flexDirection: 'column', background: 'var(--surface-card-light)', cursor: onClick ? 'pointer' : 'default', transition: 'transform var(--dur-slow) var(--ease-editorial), box-shadow var(--dur-slow) var(--ease-editorial)', transform: h ? 'translateY(-4px)' : 'none', boxShadow: h ? 'var(--shadow-card)' : 'none', ...style }}>
      <button type="button" onClick={onClick} aria-label={'Ver detalle de ' + name} style={{ all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column', flex: 1 }}>
        {image ? (
          <span style={{ display: 'block', aspectRatio: '16 / 10', overflow: 'hidden', background: 'var(--mx-charcoal)' }}>
            <img src={image} alt={name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 1.2s var(--ease-editorial)', transform: h ? 'scale(1.05)' : 'scale(1)' }} />
          </span>
        ) : null}
        <span style={{ display: 'flex', flexDirection: 'column', gap: 10, padding: '20px 22px 22px', flex: 1 }}>
          {tag && <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: 'var(--text-accent-on-light)' }}>{tag}</span>}
          <span style={{ fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 500, lineHeight: 1.15, color: 'var(--text-on-light)' }}>{name}</span>
          <span style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--text-on-light-muted)', textWrap: 'pretty' }}>{description}</span>
          <span style={{ marginTop: 'auto', paddingTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <span style={{ fontSize: 15, fontWeight: 500, color: 'var(--text-on-light)', letterSpacing: '.02em' }}>{price}</span>
            <span style={{ fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--text-accent-on-light)', opacity: h ? 1 : 0, transform: h ? 'none' : 'translateX(-6px)', transition: 'all var(--dur-base) var(--ease-out)' }}>Ver detalle →</span>
          </span>
        </span>
      </button>
      {onFavorite && (
        <button type="button" aria-label={favorite ? 'Quitar de favoritos' : 'Agregar a favoritos'} aria-pressed={favorite} onClick={(e) => { e.stopPropagation(); onFavorite(); }}
          style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none', borderRadius: '50%', cursor: 'pointer', background: 'rgba(10,10,9,.5)', backdropFilter: 'blur(8px)', color: favorite ? 'var(--mx-gold)' : 'var(--text-on-dark)', transition: 'transform var(--dur-fast) var(--ease-out)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill={favorite ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.4"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
        </button>
      )}
    </article>
  );
}
