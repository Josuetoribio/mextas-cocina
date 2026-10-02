function ChefSection() {
  const { Stat, Button, Icon } = window.MX;
  const IMG = window.MX_DATA.IMG;
  return (
    <section id="nosotros" className="sec bg-ivory" data-screen-label="Nosotros">
      <div className="wrap chef">
        <Reveal className="chef-ph img-zoom">
          <img src={IMG + 'pulpo.jpg'} alt="Pulpo al olivo emplatado" loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          <div style={{ position: 'absolute', left: 0, bottom: 0, background: 'var(--mx-black)', color: 'var(--text-on-dark)', padding: '22px 26px', maxWidth: 280 }}>
            <div className="eyebrow gold" style={{ fontSize: 10, marginBottom: 8 }}>Chef ejecutivo</div>
            <div className="serif" style={{ fontSize: 24 }}>Emilio Garza</div>
            <div className="muted-d" style={{ fontSize: 12, marginTop: 4 }}>Formado en San Sebastián y Ciudad de México</div>
          </div>
        </Reveal>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 26 }}>
          <Reveal><span className="eyebrow" style={{ color: 'var(--text-accent-on-light)' }}>Nuestra filosofía</span></Reveal>
          <Reveal delay={80}><h2 className="serif" style={{ margin: 0, fontSize: 'var(--type-display-l)', lineHeight: 1.02 }}>Una cocina con <i>identidad</i></h2></Reveal>
          <Reveal delay={160}><p className="serif" style={{ margin: 0, fontSize: 24, lineHeight: 1.35 }}>No cocinamos solamente para alimentar.</p></Reveal>
          <Reveal delay={220}><p className="muted-l" style={{ margin: 0, lineHeight: 1.7, maxWidth: 520 }}>Diseñamos experiencias alrededor del producto, la técnica y el momento. Trabajamos con productores del noreste, respetamos las temporadas y dejamos que cada ingrediente cuente su propia historia en el plato.</p></Reveal>
          <Reveal delay={280} className="chef-stats">
            <Stat value="12+" label="Años de experiencia" />
            <Stat value="38" label="Ingredientes locales" />
            <Stat value="7" label="Experiencias gastronómicas" />
          </Reveal>
          <Reveal delay={340}><Button variant="link" tone="light" onClick={() => scrollToId('experiencias')} iconRight={<Icon name="arrow-right" size={14} />}>Conoce nuestras experiencias</Button></Reveal>
        </div>
      </div>
    </section>
  );
}
function StorySection() {
  const { SectionHeader } = window.MX;
  const IMG = window.MX_DATA.IMG;
  const items = [
    { k: 's1', n: '01', t: 'Producto', d: 'Ingredientes seleccionados diariamente con productores de la región.', img: IMG + 'burrata.jpg' },
    { k: 's2', n: '02', t: 'Técnica', d: 'Métodos contemporáneos combinados con técnicas tradicionales.', img: IMG + 'rib-eye.jpg' },
    { k: 's3', n: '03', t: 'Ambiente', d: 'Un espacio pensado para cenas especiales.', img: IMG + 'interior.jpg' },
    { k: 's4', n: '04', t: 'Servicio', d: 'Atención personalizada, de la bienvenida a la sobremesa. Recordamos tus preferencias para que cada visita se sienta tuya.' }
  ];
  return (
    <section className="sec bg-black" data-screen-label="Nuestra experiencia">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 48 }}>
          <Reveal><SectionHeader tone="dark" eyebrow="Nuestra experiencia" title="Cuatro pilares, una misma mesa" /></Reveal>
          <Reveal delay={120}><p className="muted-d" style={{ margin: 0, maxWidth: 380, lineHeight: 1.7 }}>Lo que sucede antes de que el plato llegue a la mesa es tan importante como el plato mismo.</p></Reveal>
        </div>
        <div className="story">
          {items.map((s, i) => (
            <Reveal key={s.k} delay={i * 100} className={'st img-zoom ' + s.k} style={s.img ? null : { background: 'var(--mx-charcoal-2)', border: '1px solid var(--line-dark)' }}>
              {s.img && <img src={s.img} alt={s.t} loading="lazy" />}
              <div style={s.img ? null : { display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 'clamp(20px,5vw,80px)', alignItems: 'end' }}>
                <span className="serif gold" style={{ fontSize: s.img ? 18 : 64, lineHeight: 1 }}>{s.n}</span>
                <div>
                  <h3 className="serif" style={{ margin: s.img ? '10px 0 8px' : '0 0 10px', fontSize: s.k === 's1' ? 44 : 32, color: 'var(--text-on-dark)' }}>{s.t}</h3>
                  <p style={{ margin: 0, color: 'var(--text-on-dark-muted)', lineHeight: 1.6, maxWidth: 460 }}>{s.d}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { ChefSection, StorySection });
