function GallerySection() {
  const { SectionHeader, IconButton, Icon } = window.MX;
  const { galleryItems } = window.MX_DATA;
  const [idx, setIdx] = React.useState(null);
  const n = galleryItems.length;
  const go = (d) => setIdx((i) => (i + d + n) % n);
  React.useEffect(() => {
    if (idx === null) return;
    const k = (e) => { if (e.key === 'Escape') setIdx(null); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1); };
    window.addEventListener('keydown', k); document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = ''; };
  }, [idx]);
  const touch = React.useRef(0);
  const cur = idx !== null ? galleryItems[idx] : null;
  return (
    <section id="galeria" className="sec bg-black" data-screen-label="Galería">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 44 }}>
          <Reveal><SectionHeader tone="dark" eyebrow="Galería" title="Dentro de MEXTAS" /></Reveal>
          <Reveal delay={100}><span className="muted-d" style={{ fontSize: 13 }}>{String(n).padStart(2, '0')} fotografías · Toca para ampliar</span></Reveal>
        </div>
        <div className="masonry">
          {galleryItems.map((g, i) => (
            <Reveal as="button" key={i} delay={(i % 4) * 80} className={'gi ' + g.size} onClick={() => setIdx(i)} aria-label={'Ampliar: ' + g.caption}>
              <img src={g.src} alt={g.alt} loading="lazy" style={{ objectPosition: g.pos }} />
              <span className="cap"><span className="serif" style={{ fontSize: 20 }}>{g.caption}</span><span style={{ fontSize: 11, letterSpacing: '.14em' }}>{String(i + 1).padStart(2, '0')}</span></span>
            </Reveal>
          ))}
        </div>
      </div>
      {cur && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Galería ampliada" onTouchStart={(e) => { touch.current = e.touches[0].clientX; }} onTouchEnd={(e) => { const dx = e.changedTouches[0].clientX - touch.current; if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1); }}>
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: 76, maxWidth: 'none', color: 'var(--text-on-dark)' }}>
            <span className="eyebrow" style={{ fontSize: 11 }}><span className="gold">{String(idx + 1).padStart(2, '0')}</span> / {String(n).padStart(2, '0')}</span>
            <IconButton label="Cerrar galería" onClick={() => setIdx(null)}><Icon name="x" size={18} /></IconButton>
          </div>
          <div className="lb-stage" onClick={(e) => e.target === e.currentTarget && setIdx(null)} style={{ position: 'relative' }}>
            <img key={idx} src={cur.src} alt={cur.alt} style={{ objectPosition: cur.pos }} />
          </div>
          <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, minHeight: 96, maxWidth: 'none', color: 'var(--text-on-dark)' }}>
            <IconButton label="Anterior" onClick={() => go(-1)}><Icon name="arrow-left" size={18} /></IconButton>
            <div style={{ textAlign: 'center' }}>
              <div className="serif" style={{ fontSize: 24 }}>{cur.caption}</div>
              <div style={{ display: 'flex', gap: 6, justifyContent: 'center', marginTop: 12 }}>{galleryItems.map((_, i) => <button key={i} aria-label={'Foto ' + (i + 1)} onClick={() => setIdx(i)} style={{ all: 'unset', cursor: 'pointer', width: i === idx ? 22 : 8, height: 2, background: i === idx ? 'var(--mx-gold)' : 'var(--line-dark-strong)', transition: 'all .4s var(--ease-editorial)' }} />)}</div>
            </div>
            <IconButton label="Siguiente" onClick={() => go(1)}><Icon name="arrow-right" size={18} /></IconButton>
          </div>
        </div>
      )}
    </section>
  );
}
function TestimonialsSection() {
  const { IconButton, Icon } = window.MX;
  const { testimonials } = window.MX_DATA;
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = testimonials.length;
  React.useEffect(() => { if (paused) return; const t = setTimeout(() => setI((x) => (x + 1) % n), 7000); return () => clearTimeout(t); }, [i, paused]);
  const t = testimonials[i];
  return (
    <section className="sec bg-ivory" data-screen-label="Testimonios" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 48, alignItems: 'end' }}>
        <div style={{ gridColumn: '1 / -1', display: 'flex', flexDirection: 'column', gap: 34 }}>
          <span className="eyebrow" style={{ color: 'var(--text-accent-on-light)' }}>Lo que dicen nuestros invitados</span>
          <div aria-live="polite" style={{ minHeight: 'clamp(150px,18vw,200px)' }}>
            <blockquote key={i} className="quote serif">“{t.quote}”</blockquote>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 24, flexWrap: 'wrap', paddingTop: 26, borderTop: '1px solid var(--line-light)' }}>
            <div key={'a' + i} style={{ animation: 'mx-fade .8s var(--ease-out)' }}>
              <div style={{ fontSize: 14, fontWeight: 500, letterSpacing: '.06em' }}>{t.name}</div>
              <div className="muted-l" style={{ fontSize: 13, marginTop: 4 }}>{t.context}</div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
              <span className="serif" style={{ fontSize: 18 }}><span style={{ color: 'var(--text-accent-on-light)' }}>{String(i + 1).padStart(2, '0')}</span> <span className="muted-l">/ {String(n).padStart(2, '0')}</span></span>
              <IconButton tone="light" label="Testimonio anterior" onClick={() => setI((i - 1 + n) % n)}><Icon name="arrow-left" size={16} /></IconButton>
              <IconButton tone="light" label="Siguiente testimonio" onClick={() => setI((i + 1) % n)}><Icon name="arrow-right" size={16} /></IconButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { GallerySection, TestimonialsSection });
