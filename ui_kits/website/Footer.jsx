function Newsletter() {
  const { Button, Icon } = window.MX;
  const toast = useToast();
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle');
  const [err, setErr] = React.useState('');
  const submit = async (e) => {
    e.preventDefault();
    if (!isEmail(email)) { setErr('Ingresa un correo válido'); return; }
    setErr(''); setState('loading'); await wait(1100); setState('done');
    toast({ title: 'Suscripción confirmada', message: 'Bienvenido a la mesa de MEXTAS.' });
  };
  return (
    <section className="bg-black" style={{ padding: 'clamp(64px,8vw,110px) 0', borderTop: '1px solid var(--line-dark)' }} aria-label="Newsletter">
      <div className="wrap news">
        <Reveal>
          <span className="eyebrow gold">Newsletter</span>
          <h2 className="serif" style={{ margin: '18px 0 14px', fontSize: 'var(--type-display-m)', lineHeight: 1.08, color: 'var(--text-on-dark)', textWrap: 'balance' }}>Una mesa siempre empieza con una invitación.</h2>
          <p className="muted-d" style={{ margin: 0 }}>Recibe novedades, experiencias especiales y eventos de MEXTAS.</p>
        </Reveal>
        <Reveal delay={120}>
          {state === 'done' ? (
            <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '18px 0', borderBottom: '1px solid var(--mx-gold)', color: 'var(--text-on-dark)', animation: 'mx-fade-up .6s var(--ease-editorial)' }}>
              <Icon name="check" size={18} color="var(--mx-gold)" /> Listo. La próxima invitación llegará a <span className="gold">{email}</span>.
            </div>
          ) : (
            <form onSubmit={submit} noValidate>
              <label style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                <span className="sr" style={{ position: 'absolute', width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)' }}>Correo electrónico</span>
                <input type="email" value={email} onChange={(e) => { setEmail(e.target.value); setErr(''); }} placeholder="tu@correo.com" aria-invalid={!!err}
                  style={{ font: 'inherit', fontSize: 16, background: 'transparent', color: 'var(--text-on-dark)', border: 'none', borderBottom: '1px solid ' + (err ? 'var(--mx-error)' : 'var(--line-dark-strong)'), padding: '16px 0', outline: 'none' }} />
              </label>
              <Button type="submit" loading={state === 'loading'} style={{ alignSelf: 'flex-end' }}>Suscribirme</Button>
            </form>
          )}
          {err && <span role="alert" style={{ display: 'block', marginTop: 8, fontSize: 12, color: 'var(--mx-error)' }}>{err}</span>}
          <p className="muted-d" style={{ fontSize: 12, margin: '14px 0 0' }}>Un correo al mes. Puedes darte de baja cuando quieras.</p>
        </Reveal>
      </div>
    </section>
  );
}
function Footer({ onLegal }) {
  const { Wordmark, IconButton, Icon, StatusBadge } = window.MX;
  const { contact, openingHours } = window.MX_DATA;
  const st = useOpenStatus();
  const links = [['inicio', 'Inicio'], ['menu', 'Menú'], ['nosotros', 'Nosotros'], ['experiencias', 'Experiencias'], ['reservaciones', 'Reservaciones'], ['galeria', 'Galería'], ['contacto', 'Contacto']];
  return (
    <footer className="bg-black" style={{ borderTop: '1px solid var(--line-dark)', paddingTop: 80 }}>
      <div className="wrap foot">
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <Wordmark size="l" />
          <p className="serif" style={{ margin: 0, fontSize: 22, fontStyle: 'italic', color: 'var(--text-on-dark)', maxWidth: 280 }}>Cocina contemporánea con esencia local.</p>
          <div style={{ display: 'flex', gap: 10 }}>
            {[['instagram', 'Instagram'], ['facebook', 'Facebook'], ['twitter', 'X']].map(([n, l]) => <IconButton key={n} label={l} variant="round" size={40}><Icon name={n} size={15} /></IconButton>)}
          </div>
        </div>
        <div><h4>Explorar</h4><ul>{links.map(([id, l]) => <li key={id}><a href={'#' + id} className="mx-u muted-d" onClick={(e) => { e.preventDefault(); scrollToId(id); }}>{l}</a></li>)}</ul></div>
        <div><h4>Información</h4><ul className="muted-d">
          <li>{contact.address1}</li><li>{contact.address2}</li>
          <li><a href={contact.phoneHref} className="mx-u">{contact.phone}</a></li>
          <li><a href={'mailto:' + contact.email} className="mx-u">{contact.email}</a></li>
        </ul></div>
        <div><h4>Horarios</h4><ul className="muted-d">{openingHours.map((h) => <li key={h.label} style={{ display: 'flex', flexDirection: 'column', gap: 2 }}><span style={{ color: 'var(--text-on-dark)' }}>{h.label}</span>{h.text}</li>)}</ul>
          <StatusBadge status={st.status} label={st.label} style={{ marginTop: 18 }} /></div>
        <div><h4>Legal</h4><ul className="muted-d">{['Aviso de privacidad', 'Términos', 'Política de reservaciones'].map((l) => <li key={l}><button className="fl mx-u" onClick={() => onLegal(l)}>{l}</button></li>)}</ul></div>
      </div>
      <div className="wrap" style={{ display: 'flex', justifyContent: 'space-between', gap: 16, flexWrap: 'wrap', marginTop: 72, padding: '24px var(--gutter) 28px', borderTop: '1px solid var(--line-dark)', fontSize: 12, color: 'var(--mx-ink-500)' }}>
        <span>© {new Date().getFullYear()} MEXTAS Cocina Contemporánea. Todos los derechos reservados.</span>
        <span style={{ opacity: .7 }}>Diseño y desarrollo · Mextas</span>
      </div>
    </footer>
  );
}
const LEGAL = {
  'Aviso de privacidad': ['Tus datos personales se utilizan únicamente para gestionar reservaciones, eventos y comunicaciones que hayas solicitado.', 'Puedes ejercer tus derechos ARCO escribiendo a privacidad@mextasrestaurante.mx.'],
  'Términos': ['El uso de este sitio implica la aceptación de estos términos.', 'Precios en pesos mexicanos, IVA incluido. Sujetos a cambio sin previo aviso.'],
  'Política de reservaciones': ['Mantenemos tu mesa durante 15 minutos después de la hora reservada.', 'Cancelaciones sin costo hasta 24 horas antes. Grupos de 8 o más requieren garantía con tarjeta.', 'Cena degustación y mesa del chef requieren confirmación 48 horas antes.']
};
function LegalModal({ doc, onClose }) {
  const { Modal } = window.MX;
  return (
    <Modal open={!!doc} onClose={onClose} label={doc || ''} width={620}>
      {doc && <div style={{ padding: 'clamp(28px,5vw,52px)' }}>
        <span className="eyebrow gold">Legal</span>
        <h3 className="serif" style={{ margin: '14px 0 24px', fontSize: 36 }}>{doc}</h3>
        {LEGAL[doc].map((p, i) => <p key={i} className="muted-d" style={{ lineHeight: 1.7, margin: '0 0 14px' }}>{p}</p>)}
        <p style={{ fontSize: 12, color: 'var(--mx-ink-500)', marginTop: 24 }}>Última actualización: septiembre 2026</p>
      </div>}
    </Modal>
  );
}
Object.assign(window, { Newsletter, Footer, LegalModal });
