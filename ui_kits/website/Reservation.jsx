const RES_TYPES = ['Cena', 'Celebración', 'Cena romántica', 'Evento privado', 'Comida de negocios', 'Experiencia gastronómica'];
const toMin = (t) => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
const toHHMM = (m) => String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
function buildSlots(date, pref, people) {
  const d = new Date(date + 'T12:00:00').getDay();
  const h = window.MX_DATA.openingHours.find((x) => x.days.includes(d));
  const all = []; for (let m = h.open; m <= h.close - 90; m += 30) all.push(m);
  const p = toMin(pref);
  const near = all.slice().sort((a, b) => Math.abs(a - p) - Math.abs(b - p)).slice(0, 7).sort((a, b) => a - b);
  let seed = [...(date + pref + people)].reduce((a, c) => a + c.charCodeAt(0), 0);
  return near.map((m, i) => ({ t: toHHMM(m), free: ((seed + i * 7 + Number(people)) % 5) !== 0, pref: m === p }));
}
function todayISO() { const d = new Date(); d.setMinutes(d.getMinutes() - d.getTimezoneOffset()); return d.toISOString().slice(0, 10); }
function Reservation({ preset }) {
  const { SectionHeader, Input, Select, Textarea, Button, ChoiceChip, Modal, Wordmark, Icon } = window.MX;
  const toast = useToast();
  const empty = { name: '', email: '', phone: '', date: '', time: '', people: '', type: 'Cena', comments: '' };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [slots, setSlots] = React.useState(null);
  const [slot, setSlot] = React.useState('');
  const [phase, setPhase] = React.useState('idle');
  const [done, setDone] = React.useState(null);
  React.useEffect(() => { if (preset && preset.type) setF((x) => ({ ...x, type: preset.type })); }, [preset]);
  const set = (k) => (e) => { const v = e.target.value; setF((x) => ({ ...x, [k]: v })); setErr((x) => ({ ...x, [k]: undefined })); if (['date', 'time', 'people'].includes(k)) { setSlots(null); setSlot(''); } };
  const ready = f.date && f.time && f.people;
  const check = async () => {
    const e = {}; if (!f.date) e.date = 'Elige una fecha'; if (!f.time) e.time = 'Elige una hora'; if (!f.people) e.people = 'Indica cuántas personas';
    setErr(e); if (Object.keys(e).length) return;
    setPhase('checking'); setSlots(null); await wait(900);
    const s = buildSlots(f.date, f.time, f.people); setSlots(s);
    const pref = s.find((x) => x.pref && x.free); setSlot(pref ? pref.t : '');
    setPhase('idle');
  };
  React.useEffect(() => { if (ready) check(); }, [f.date, f.time, f.people]);
  const submit = async (ev) => {
    ev.preventDefault();
    if (!slots) return check();
    const e = {};
    if (!f.name.trim()) e.name = 'Escribe tu nombre';
    if (!isEmail(f.email)) e.email = 'Ingresa un correo válido';
    if (!isPhone(f.phone)) e.phone = 'Ingresa un teléfono de 10 dígitos';
    if (!slot) e.slot = 'Selecciona un horario disponible';
    setErr(e);
    if (Object.keys(e).length) { toast({ tone: 'error', title: 'Revisa tu solicitud', message: 'Hay ' + Object.keys(e).length + ' campo(s) por completar.' }); return; }
    setPhase('submitting'); await wait(1400);
    setDone({ ...f, slot, folio: 'MX-' + Math.floor(100000 + Math.random() * 899999) }); setPhase('idle');
  };
  const reset = () => { setDone(null); setF(empty); setSlots(null); setSlot(''); };
  const hours = []; for (let m = 13 * 60; m <= 22 * 60 + 30; m += 30) hours.push(toHHMM(m));
  const people = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map((n) => ({ value: n, label: n + (n === '1' ? ' persona' : ' personas') }));
  const niceDate = (iso) => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', { weekday: 'long', day: 'numeric', month: 'long' });
  return (
    <section id="reservaciones" className="bg-char" data-screen-label="Reservaciones">
      <div className="res">
        <div className="res-ph img-zoom">
          <img src={window.MX_DATA.IMG + 'interior.jpg'} alt="Salón de MEXTAS con luz cálida" loading="lazy" />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(18,18,16,0) 60%, rgba(18,18,16,.9))' }} />
        </div>
        <div className="res-form">
          <Reveal><SectionHeader tone="dark" eyebrow="Reserva tu mesa" title="Vive una experiencia inolvidable" description="Elige fecha, hora y número de invitados para ver la disponibilidad en tiempo real." /></Reveal>
          <form onSubmit={submit} noValidate style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 640 }}>
            <div className="grid2">
              <Input label="Nombre" value={f.name} onChange={set('name')} error={err.name} autoComplete="name" placeholder="Nombre y apellido" />
              <Input label="Correo electrónico" type="email" value={f.email} onChange={set('email')} error={err.email} autoComplete="email" placeholder="tu@correo.com" />
            </div>
            <div className="grid2">
              <Input label="Teléfono" type="tel" value={f.phone} onChange={set('phone')} error={err.phone} autoComplete="tel" placeholder="81 1234 5678" />
              <Select label="Tipo de experiencia" value={f.type} onChange={set('type')} options={RES_TYPES} />
            </div>
            <div className="grid3">
              <Input label="Fecha" type="date" min={todayISO()} value={f.date} onChange={set('date')} error={err.date} />
              <Select label="Hora" placeholder="Hora" value={f.time} onChange={set('time')} error={err.time} options={hours} />
              <Select label="Personas" placeholder="Personas" value={f.people} onChange={set('people')} error={err.people} options={people} />
            </div>
            <div aria-live="polite" style={{ minHeight: 20 }}>
              {phase === 'checking' && <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{[0, 1, 2, 3, 4].map((i) => <span key={i} className="shimmer" />)}</div>}
              {slots && phase !== 'checking' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, animation: 'mx-fade-up .6s var(--ease-editorial)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13 }}>
                    <span style={{ width: 7, height: 7, borderRadius: '50%', background: slots.some((s) => s.free) ? 'var(--mx-success)' : 'var(--mx-error)' }} />
                    <span>{slots.some((s) => s.free) ? 'Disponible · ' + niceDate(f.date) : 'Sin disponibilidad para esa fecha'}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{slots.map((s) => <ChoiceChip key={s.t} selected={slot === s.t} disabled={!s.free} onClick={() => { setSlot(s.t); setErr((x) => ({ ...x, slot: undefined })); }}>{s.t}</ChoiceChip>)}</div>
                  {err.slot && <span role="alert" style={{ fontSize: 12, color: 'var(--mx-error)' }}>{err.slot}</span>}
                  {Number(f.people) >= 8 && <span className="muted-d" style={{ fontSize: 12 }}>¿Más de 10 invitados? <a href="#experiencias" className="gold" onClick={(e) => { e.preventDefault(); scrollToId('eventos'); }}>Planea un evento privado</a>.</span>}
                </div>
              )}
            </div>
            <Textarea label="Comentarios especiales" rows={3} value={f.comments} onChange={set('comments')} placeholder="Alergias, celebraciones, preferencias de mesa…" />
            <div style={{ display: 'flex', alignItems: 'center', gap: 22, flexWrap: 'wrap', marginTop: 6 }}>
              <Button type="submit" size="l" loading={phase !== 'idle'} iconRight={<Icon name="arrow-right" size={14} />}>
                {phase === 'checking' ? 'Consultando' : phase === 'submitting' ? 'Enviando solicitud' : slots ? (slot ? 'Solicitar reservación · ' + slot : 'Selecciona un horario') : 'Consultar disponibilidad'}
              </Button>
              <span className="muted-d" style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13 }}><Icon name="circle-check" size={15} color="var(--mx-gold)" />Confirmación en menos de 2 horas</span>
            </div>
          </form>
        </div>
      </div>
      <Modal open={!!done} onClose={reset} label="Solicitud recibida" width={560}>
        {done && (
          <div style={{ padding: 'clamp(36px,6vw,60px)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: 20 }}>
            <span style={{ width: 64, height: 64, borderRadius: '50%', border: '1px solid var(--mx-gold)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--mx-gold)' }}><Icon name="check" size={26} strokeWidth={1.2} /></span>
            <span className="eyebrow gold">Folio {done.folio}</span>
            <h3 className="serif" style={{ margin: 0, fontSize: 40, lineHeight: 1.05 }}>Solicitud recibida</h3>
            <p className="muted-d" style={{ margin: 0, lineHeight: 1.6 }}>Tu solicitud de reservación ha sido registrada.</p>
            <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)', padding: '18px 0', fontSize: 13 }}>
              <div><div className="muted-d eyebrow" style={{ fontSize: 10 }}>Fecha</div><div style={{ marginTop: 6, textTransform: 'capitalize' }}>{niceDate(done.date)}</div></div>
              <div><div className="muted-d eyebrow" style={{ fontSize: 10 }}>Hora</div><div style={{ marginTop: 6 }}>{done.slot}</div></div>
              <div><div className="muted-d eyebrow" style={{ fontSize: 10 }}>Mesa</div><div style={{ marginTop: 6 }}>{done.people} {done.people === '1' ? 'persona' : 'personas'}</div></div>
            </div>
            <Wordmark size="s" />
            <p className="muted-d" style={{ margin: 0, fontSize: 14 }}>Te enviaremos una confirmación a <span style={{ color: 'var(--text-on-dark)' }}>{done.email}</span>.</p>
            <Button variant="outline" onClick={reset}>Entendido</Button>
          </div>
        )}
      </Modal>
    </section>
  );
}
window.Reservation = Reservation;
