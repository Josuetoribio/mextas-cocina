function VisitSection() {
  const { SectionHeader, StatusBadge, Button, Icon } = window.MX;
  const { openingHours, contact } = window.MX_DATA;
  const st = useOpenStatus();
  const today = new Date().getDay();
  const [mapOpen, setMapOpen] = React.useState(false);
  const toast = useToast();
  const copy = () => { try { navigator.clipboard.writeText(contact.address1 + ', ' + contact.address2); } catch (e) {} toast({ tone: 'info', title: 'Dirección copiada', message: 'Pégala en tu app de mapas favorita.' }); };
  return (
    <section id="contacto" className="sec bg-cream" data-screen-label="Visítanos">
      <div className="wrap">
        <Reveal style={{ marginBottom: 52 }}><SectionHeader eyebrow="Visítanos" title="Te esperamos en San Pedro" /></Reveal>
        <div className="visit">
          <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            <div>
              <div className="eyebrow muted-l" style={{ fontSize: 11, marginBottom: 12 }}>Dirección</div>
              <p className="serif" style={{ margin: 0, fontSize: 24, lineHeight: 1.3 }}>{contact.address1}<br />{contact.address2}</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12, fontSize: 15 }}>
              <a href={contact.phoneHref} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="phone" size={16} color="var(--mx-gold-deep)" />{contact.phone}</a>
              <a href={'mailto:' + contact.email} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="mail" size={16} color="var(--mx-gold-deep)" />{contact.email}</a>
              <span style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="car" size={16} color="var(--mx-gold-deep)" />Valet parking de cortesía</span>
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button tone="light" variant="outline" size="s" onClick={() => setMapOpen(true)} iconRight={<Icon name="arrow-up-right" size={13} />}>Ver en mapa</Button>
              <Button tone="light" variant="link" size="s" onClick={copy}>Copiar dirección</Button>
            </div>
          </Reveal>
          <Reveal delay={100} className="map" role="img" aria-label="Mapa estilizado de la ubicación de MEXTAS">
            <span style={{ position: 'absolute', left: '14%', top: '20%', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8C8375' }}>Calzada del Valle</span>
            <span style={{ position: 'absolute', right: '10%', bottom: '18%', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8C8375' }}>Parque Rufino Tamayo</span>
            <span style={{ position: 'absolute', left: '8%', bottom: '10%', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: '#8C8375' }}>Av. Vasconcelos</span>
            <div style={{ position: 'absolute', left: '52%', top: '46%', transform: 'translate(-50%,-100%)', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <span style={{ background: 'var(--mx-black)', color: 'var(--text-on-dark)', padding: '10px 14px', fontFamily: 'var(--font-display)', fontSize: 16, letterSpacing: '.3em', whiteSpace: 'nowrap' }}>MEXTAS</span>
              <span style={{ width: 1, height: 22, background: 'var(--mx-black)' }} />
              <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--mx-gold)', boxShadow: '0 0 0 8px rgba(201,160,106,.25)', animation: 'mx-pulse 2.4s infinite' }} />
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, marginBottom: 6, flexWrap: 'wrap' }}>
              <span className="eyebrow muted-l" style={{ fontSize: 11 }}>Horarios</span>
              <StatusBadge status={st.status} label={st.label} tone="light" />
            </div>
            {openingHours.map((h) => { const on = h.days.includes(today); return (
              <div key={h.label} className="hours-row" style={{ fontWeight: on ? 500 : 400 }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>{on && <span style={{ width: 5, height: 5, background: 'var(--mx-gold-deep)', borderRadius: '50%' }} />}{h.label}</span>
                <span className={on ? '' : 'muted-l'}>{h.text}</span>
              </div>
            ); })}
            <p className="muted-l" style={{ fontSize: 13, margin: '16px 0 0' }}>{st.detail}. Cocina abierta hasta una hora antes del cierre.</p>
          </Reveal>
        </div>
      </div>
      <MapModal open={mapOpen} onClose={() => setMapOpen(false)} />
    </section>
  );
}
function MapModal({ open, onClose }) {
  const { Modal, Button, Icon } = window.MX;
  const { contact } = window.MX_DATA;
  return (
    <Modal open={open} onClose={onClose} label="Cómo llegar" width={560}>
      <div style={{ padding: 'clamp(28px,5vw,48px)', display: 'flex', flexDirection: 'column', gap: 18 }}>
        <span className="eyebrow gold">Cómo llegar</span>
        <h3 className="serif" style={{ margin: 0, fontSize: 34 }}>Abrir en tu app de mapas</h3>
        <p className="muted-d" style={{ margin: 0 }}>{contact.address1}, {contact.address2}</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 8 }}>
          {['Google Maps', 'Apple Maps', 'Waze'].map((m) => <Button key={m} variant="ghost" fullWidth onClick={onClose} iconRight={<Icon name="arrow-up-right" size={13} />} style={{ justifyContent: 'space-between' }}>{m}</Button>)}
        </div>
        <p className="muted-d" style={{ margin: 0, fontSize: 12 }}>Demostración: los enlaces externos están deshabilitados.</p>
      </div>
    </Modal>
  );
}
const MOTIVOS = ['Reservación', 'Evento privado', 'Cena corporativa', 'Información', 'Prensa', 'Otro'];
function ContactSection() {
  const { SectionHeader, Input, Select, Textarea, Button, Icon } = window.MX;
  const { contact } = window.MX_DATA;
  const empty = { name: '', email: '', phone: '', reason: '', message: '' };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [state, setState] = React.useState('idle');
  const set = (k) => (e) => { setF((x) => ({ ...x, [k]: e.target.value })); setErr((x) => ({ ...x, [k]: undefined })); if (state === 'error') setState('idle'); };
  const submit = async (ev) => {
    ev.preventDefault();
    const e = {};
    if (!f.name.trim()) e.name = 'Escribe tu nombre';
    if (!isEmail(f.email)) e.email = 'Ingresa un correo válido';
    if (f.phone && !isPhone(f.phone)) e.phone = 'Teléfono incompleto';
    if (!f.reason) e.reason = 'Selecciona un motivo';
    if (f.message.trim().length < 10) e.message = 'Cuéntanos un poco más (mín. 10 caracteres)';
    setErr(e);
    if (Object.keys(e).length) { setState('error'); return; }
    setState('loading'); await wait(1400); setState('success');
  };
  return (
    <section className="sec bg-char" data-screen-label="Contacto">
      <div className="wrap contact">
        <Reveal style={{ display: 'flex', flexDirection: 'column', gap: 30 }}>
          <SectionHeader tone="dark" eyebrow="Contacto" title="Estamos para ti" description="Para reservaciones del mismo día, llámanos directamente. Para todo lo demás, escríbenos." />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14, fontSize: 15 }}>
            <a href={contact.phoneHref} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="phone" size={16} color="var(--mx-gold)" />{contact.phone}</a>
            <a href={'mailto:' + contact.email} style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="mail" size={16} color="var(--mx-gold)" />{contact.email}</a>
            <span className="muted-d" style={{ display: 'flex', gap: 12, alignItems: 'center' }}><Icon name="clock" size={16} color="var(--mx-gold)" />Respondemos en menos de 24 horas</span>
          </div>
        </Reveal>
        <Reveal delay={120}>
          {state === 'success' ? (
            <div style={{ minHeight: 420, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 18, borderTop: '1px solid var(--mx-gold)', paddingTop: 36, animation: 'mx-fade-up .7s var(--ease-editorial)' }}>
              <Icon name="mail-check" size={34} strokeWidth={1} color="var(--mx-gold)" />
              <h3 className="serif" style={{ margin: 0, fontSize: 40 }}>Gracias, {f.name.split(' ')[0]}.</h3>
              <p className="muted-d" style={{ margin: 0, lineHeight: 1.6, maxWidth: 440 }}>Recibimos tu mensaje sobre <span style={{ color: 'var(--text-on-dark)' }}>{f.reason.toLowerCase()}</span>. Te responderemos a {f.email}.</p>
              <div><Button variant="ghost" onClick={() => { setF(empty); setState('idle'); }}>Enviar otro mensaje</Button></div>
            </div>
          ) : (
            <form onSubmit={submit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div className="grid2">
                <Input label="Nombre" value={f.name} onChange={set('name')} error={err.name} autoComplete="name" />
                <Input label="Email" type="email" value={f.email} onChange={set('email')} error={err.email} autoComplete="email" />
              </div>
              <div className="grid2">
                <Input label="Teléfono (opcional)" type="tel" value={f.phone} onChange={set('phone')} error={err.phone} autoComplete="tel" />
                <Select label="Motivo" placeholder="Selecciona" value={f.reason} onChange={set('reason')} error={err.reason} options={MOTIVOS} />
              </div>
              <Textarea label="Mensaje" rows={5} value={f.message} onChange={set('message')} error={err.message} />
              {state === 'error' && <div role="alert" style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 13, color: 'var(--mx-error)', animation: 'mx-fade .4s' }}><Icon name="circle-alert" size={15} />Revisa los campos marcados antes de enviar.</div>}
              <div><Button type="submit" size="l" loading={state === 'loading'} iconRight={<Icon name="send" size={14} />}>{state === 'loading' ? 'Enviando' : 'Enviar mensaje'}</Button></div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
Object.assign(window, { VisitSection, ContactSection, MapModal });
