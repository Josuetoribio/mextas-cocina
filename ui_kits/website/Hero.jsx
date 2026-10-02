function Hero({ onReserve }) {
  const { Button, Icon } = window.MX;
  const ref = React.useRef(null);
  const st = useOpenStatus();
  React.useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => { const y = window.scrollY; if (ref.current && y < window.innerHeight * 1.2) ref.current.style.transform = 'translate3d(0,' + y * 0.14 + 'px,0)'; }); };
    window.addEventListener('scroll', on, { passive: true }); return () => window.removeEventListener('scroll', on);
  }, []);
  return (
    <section id="inicio" className="hero" data-screen-label="Hero">
      <div className="hero-img" ref={ref}><img src={window.MX_DATA.IMG + 'hero-rib-eye.jpg'} alt="Filete sellado con hongos silvestres sobre plato de gres oscuro" fetchpriority="high" /></div>
      <div className="hero-shade" />
      <div className="wrap hero-content">
        <span className="eyebrow gold fu" style={{ animationDelay: '.5s' }}>Cocina que inspira</span>
        <h1 className="serif fu" style={{ color: 'var(--text-on-dark)', animationDelay: '.65s' }}>Sabores que trascienden.</h1>
        <p className="fu" style={{ margin: 0, fontSize: 'var(--type-body-l)', lineHeight: 1.6, color: 'var(--text-on-dark)', maxWidth: 400, opacity: 0, animationDelay: '.8s' }}>Una experiencia culinaria única donde cada detalle está pensado para ti.</p>
        <div className="fu" style={{ display: 'flex', gap: 14, flexWrap: 'wrap', marginTop: 38, animationDelay: '.95s' }}>
          <Button size="l" onClick={onReserve} iconRight={<Icon name="arrow-right" size={15} />}>Reservar mesa</Button>
          <Button size="l" variant="ghost" onClick={() => scrollToId('menu')}>Explorar menú</Button>
        </div>
      </div>
      <div className="hero-meta fu" style={{ animationDelay: '1.3s' }}>
        <div className="wrap">
          <div style={{ display: 'flex', gap: 'clamp(20px,4vw,48px)', flexWrap: 'wrap', fontSize: 13, color: 'var(--text-on-dark-muted)' }}>
            <a href="#contacto" onClick={(e) => { e.preventDefault(); scrollToId('contacto'); }} style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Icon name="map-pin" size={16} color="var(--mx-gold)" />San Pedro Garza García, N.L.</a>
            <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: st.status === 'closed' ? 'var(--mx-error)' : 'var(--mx-success)', animation: st.status !== 'closed' ? 'mx-pulse 2.4s infinite' : 'none' }} />
              {st.label} · {st.detail}
            </span>
          </div>
          <button className="scroll" onClick={() => scrollToId('menu')} aria-label="Desplazarse al menú" style={{ all: 'unset', cursor: 'pointer', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, color: 'var(--text-on-dark-muted)' }}>
            <span className="eyebrow" style={{ fontSize: 10, writingMode: 'vertical-rl' }}>Scroll</span>
            <span style={{ width: 1, height: 56, background: 'var(--line-dark-strong)', overflow: 'hidden', position: 'relative' }}><span style={{ position: 'absolute', inset: 0, background: 'var(--mx-gold)', animation: 'mx-scroll-cue 2.2s var(--ease-in-out) infinite' }} /></span>
          </button>
        </div>
      </div>
    </section>
  );
}
function ValueBand() {
  const { ValueProp, Icon } = window.MX;
  const items = [
    ['leaf', 'Ingredientes locales', 'Productos frescos y de temporada.'],
    ['flame', 'Técnica y pasión', 'Cocina contemporánea.'],
    ['wine', 'Ambiente exclusivo', 'Espacios diseñados para disfrutar.'],
    ['hand-heart', 'Atención personalizada', 'Cada visita es única.']
  ];
  return (
    <section className="bg-char" style={{ borderBottom: '1px solid var(--line-dark)' }} aria-label="Nuestra propuesta">
      <div className="wrap vband">
        {items.map(([ic, t, d], i) => <Reveal key={t} delay={i * 90}><ValueProp icon={<Icon name={ic} size={30} strokeWidth={1} />} title={t} text={d} /></Reveal>)}
      </div>
    </section>
  );
}
Object.assign(window, { Hero, ValueBand });
