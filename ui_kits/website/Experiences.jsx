function ExperiencesSection({ onReserve }) {
  const { SectionHeader, Icon, Wordmark } = window.MX;
  const { experiences } = window.MX_DATA;
  return (
    <section id="experiencias" className="sec bg-black" data-screen-label="Experiencias">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 32, flexWrap: 'wrap', marginBottom: 48 }}>
          <Reveal><SectionHeader tone="dark" eyebrow="Experiencias" title="Momentos diseñados alrededor de la mesa" /></Reveal>
          <Reveal delay={120}><p className="muted-d" style={{ margin: 0, maxWidth: 380, lineHeight: 1.7 }}>Cada experiencia puede reservarse directamente. Nuestro equipo te contactará para afinar los detalles.</p></Reveal>
        </div>
        <div className="exp-grid">
          {experiences.map((x, i) => (
            <Reveal key={x.id} delay={i * 90} as="article" className="xcard">
              {x.image ? <img src={x.image} alt="" loading="lazy" /> : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 35%, #3B2A1D 0%, #121210 72%)' }}><Icon name="wine" size={88} strokeWidth={.6} color="rgba(201,160,106,.5)" /></div>}
              <div className="xb">
                <span className="eyebrow gold" style={{ fontSize: 10 }}>{x.meta}</span>
                <h3 className="serif" style={{ margin: '12px 0 10px', fontSize: 32, lineHeight: 1.05, color: 'var(--text-on-dark)' }}>{x.title}</h3>
                <p style={{ margin: 0, fontSize: 14, lineHeight: 1.55, color: 'var(--text-on-dark-muted)' }}>{x.text}</p>
                <div className="xmore"><div>
                  <ul style={{ listStyle: 'none', padding: 0, margin: '18px 0 0', display: 'flex', flexDirection: 'column', gap: 8, fontSize: 13, color: 'var(--text-on-dark)' }}>
                    {x.points.map((p) => <li key={p} style={{ display: 'flex', gap: 10, alignItems: 'center' }}><span style={{ width: 14, height: 1, background: 'var(--mx-gold)' }} />{p}</li>)}
                  </ul>
                </div></div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 20, paddingTop: 16, borderTop: '1px solid var(--line-dark)' }}>
                  <span style={{ fontSize: 13, color: 'var(--text-on-dark)' }}>{x.price}</span>
                  <button onClick={() => x.id === 'privados' ? scrollToId('eventos') : onReserve({ type: x.resType, note: x.title })} className="mx-u" style={{ all: 'unset', cursor: 'pointer', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--mx-gold)', display: 'flex', gap: 8, alignItems: 'center' }}>
                    {x.id === 'privados' ? 'Cotizar' : 'Reservar'} <Icon name="arrow-right" size={13} />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
const EVENT_TYPES = ['Cena corporativa', 'Networking', 'Presentación de producto', 'Celebración empresarial', 'Reunión privada'];
const BUDGETS = ['Menos de $30,000', '$30,000 – $60,000', '$60,000 – $120,000', 'Más de $120,000'];
function GroupsSection() {
  const { SectionHeader, Button, Icon } = window.MX;
  const { groupOptions } = window.MX_DATA;
  const [open, setOpen] = React.useState(null);
  return (
    <section id="eventos" className="sec bg-cream" data-screen-label="Grupos y empresas">
      <div className="wrap">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 40, alignItems: 'end', marginBottom: 56 }}>
          <Reveal><SectionHeader eyebrow="Grupos y empresas" title="Más que una cena. Una experiencia para compartir." /></Reveal>
          <Reveal delay={120} style={{ display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
            <p className="muted-l" style={{ margin: 0, lineHeight: 1.7, maxWidth: 440 }}>Salón privado para hasta 80 invitados, menús a la medida, maridaje y un coordinador dedicado desde la primera llamada hasta el último brindis.</p>
            <Button tone="light" onClick={() => setOpen('Cena corporativa')} iconRight={<Icon name="arrow-right" size={14} />}>Planear un evento</Button>
          </Reveal>
        </div>
        <Reveal className="groups">
          {groupOptions.map((g, i) => (
            <button key={g.id} onClick={() => setOpen(g.eventType)} aria-label={'Planear: ' + g.title}>
              <span style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span className="serif" style={{ fontSize: 15, color: 'var(--text-accent-on-light)' }}>0{i + 1}</span>
                <Icon name={g.icon} size={24} strokeWidth={1} color="var(--mx-gold-deep)" />
              </span>
              <span className="serif" style={{ fontSize: 32, lineHeight: 1.05, marginTop: 28 }}>{g.title}</span>
              <span className="muted-l" style={{ fontSize: 14, lineHeight: 1.55 }}>{g.text}</span>
              <span style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12, fontSize: 12, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase' }}>
                <span className="muted-l">{g.capacity}</span><span style={{ color: 'var(--text-accent-on-light)', display: 'flex', gap: 6, alignItems: 'center' }}>Cotizar <Icon name="arrow-up-right" size={13} /></span>
              </span>
            </button>
          ))}
        </Reveal>
      </div>
      <EventModal open={!!open} initialType={open} onClose={() => setOpen(null)} />
    </section>
  );
}
function EventModal({ open, initialType, onClose }) {
  const { Modal, Input, Select, Textarea, Button, ChoiceChip, Icon } = window.MX;
  const toast = useToast();
  const empty = { company: '', contact: '', email: '', guests: '', date: '', type: 'Cena corporativa', budget: '', comments: '' };
  const [step, setStep] = React.useState(0);
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  React.useEffect(() => { if (open) { setStep(0); setErr({}); setF((x) => ({ ...empty, type: initialType || x.type })); } }, [open]);
  const set = (k) => (e) => { const v = e.target ? e.target.value : e; setF((x) => ({ ...x, [k]: v })); setErr((x) => ({ ...x, [k]: undefined })); };
  const v0 = () => { const e = {}; if (!f.company.trim()) e.company = 'Requerido'; if (!f.contact.trim()) e.contact = 'Requerido'; if (!isEmail(f.email)) e.email = 'Correo no válido'; setErr(e); return !Object.keys(e).length; };
  const v1 = () => { const e = {}; const g = Number(f.guests); if (!g || g < 8) e.guests = 'Mínimo 8 asistentes'; else if (g > 80) e.guests = 'Capacidad máxima: 80'; if (!f.date) e.date = 'Elige una fecha tentativa'; if (!f.budget) e.budget = 'Selecciona un rango'; setErr(e); return !Object.keys(e).length; };
  const next = async () => {
    if (step === 0 && v0()) setStep(1);
    else if (step === 1 && v1()) { setBusy(true); await wait(1500); setBusy(false); setStep(2); toast({ title: 'Solicitud enviada', message: 'Nuestro equipo de eventos te contactará en 24 horas.' }); }
  };
  const labels = ['Empresa', 'Evento', 'Confirmación'];
  return (
    <Modal open={open} onClose={onClose} label="Planear un evento" width={720}>
      <div style={{ padding: 'clamp(28px,5vw,52px)' }}>
        <div className="steps" style={{ marginBottom: 30 }}>
          {labels.map((l, i) => (
            <React.Fragment key={l}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: i <= step ? 'var(--mx-gold)' : 'var(--text-on-dark-muted)' }}>
                <span style={{ width: 22, height: 22, borderRadius: '50%', border: '1px solid currentColor', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10 }}>{i < step ? '✓' : i + 1}</span>{l}
              </span>
              {i < 2 && <span style={{ flex: 1, height: 1, background: i < step ? 'var(--mx-gold)' : 'var(--line-dark)' }} />}
            </React.Fragment>
          ))}
        </div>
        {step < 2 && <h3 className="serif" style={{ margin: '0 0 8px', fontSize: 36, lineHeight: 1.05 }}>{step === 0 ? 'Cuéntanos de tu empresa' : 'Detalles del evento'}</h3>}
        {step < 2 && <p className="muted-d" style={{ margin: '0 0 28px', fontSize: 14 }}>Respuesta de nuestro coordinador de eventos en menos de 24 horas hábiles.</p>}
        {step === 0 && (
          <div key="s0" style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'mx-fade-up .5s var(--ease-editorial)' }}>
            <Input label="Nombre de empresa" value={f.company} onChange={set('company')} error={err.company} placeholder="Empresa S.A. de C.V." />
            <div className="grid2">
              <Input label="Nombre de contacto" value={f.contact} onChange={set('contact')} error={err.contact} />
              <Input label="Correo" type="email" value={f.email} onChange={set('email')} error={err.email} placeholder="contacto@empresa.com" />
            </div>
          </div>
        )}
        {step === 1 && (
          <div key="s1" style={{ display: 'flex', flexDirection: 'column', gap: 16, animation: 'mx-fade-up .5s var(--ease-editorial)' }}>
            <div>
              <div className="eyebrow muted-d" style={{ fontSize: 11, marginBottom: 10 }}>Tipo de evento</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{EVENT_TYPES.map((t) => <ChoiceChip key={t} selected={f.type === t} onClick={() => set('type')(t)} style={{ fontSize: 13 }}>{t}</ChoiceChip>)}</div>
            </div>
            <div className="grid3">
              <Input label="Asistentes" type="number" min="8" max="80" value={f.guests} onChange={set('guests')} error={err.guests} placeholder="8 – 80" />
              <Input label="Fecha tentativa" type="date" min={todayISO()} value={f.date} onChange={set('date')} error={err.date} />
              <Select label="Presupuesto" placeholder="Rango" value={f.budget} onChange={set('budget')} error={err.budget} options={BUDGETS} />
            </div>
            <Textarea label="Comentarios" rows={3} value={f.comments} onChange={set('comments')} placeholder="Formato, audiovisual, menú, restricciones…" />
          </div>
        )}
        {step === 2 && (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 18, padding: '10px 0', animation: 'mx-scale-in .6s var(--ease-editorial)' }}>
            <span style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--mx-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mx-gold)' }}><Icon name="calendar-check" size={26} strokeWidth={1.1} /></span>
            <h3 className="serif" style={{ margin: 0, fontSize: 38 }}>Tu evento está en marcha</h3>
            <p className="muted-d" style={{ margin: 0, lineHeight: 1.6, maxWidth: 420 }}>Recibimos la solicitud de <span style={{ color: 'var(--text-on-dark)' }}>{f.company}</span> para una {f.type.toLowerCase()} de {f.guests} asistentes. Enviaremos una propuesta a {f.email}.</p>
            <Button variant="outline" onClick={onClose}>Cerrar</Button>
          </div>
        )}
        {step < 2 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 30, gap: 12 }}>
            {step === 1 ? <Button variant="link" onClick={() => setStep(0)} iconLeft={<Icon name="arrow-left" size={14} />}>Atrás</Button> : <span />}
            <Button onClick={next} loading={busy} iconRight={<Icon name="arrow-right" size={14} />}>{step === 0 ? 'Continuar' : busy ? 'Enviando' : 'Enviar solicitud'}</Button>
          </div>
        )}
      </div>
    </Modal>
  );
}
Object.assign(window, { ExperiencesSection, GroupsSection, EventModal });
