const MXToastCtx = React.createContext(() => {});
function useToast() { return React.useContext(MXToastCtx); }
function ToastHost({ children }) {
  const [list, setList] = React.useState([]);
  const push = React.useCallback((t) => {
    const id = Math.random().toString(36).slice(2);
    setList((l) => [...l.slice(-2), { id, ...t }]);
    setTimeout(() => setList((l) => l.filter((x) => x.id !== id)), t.duration || 4200);
  }, []);
  const { Toast } = window.MX;
  return (
    <MXToastCtx.Provider value={push}>
      {children}
      <div className="toasts">{list.map((t) => <Toast key={t.id} title={t.title} message={t.message} tone={t.tone} onClose={() => setList((l) => l.filter((x) => x.id !== t.id))} />)}</div>
    </MXToastCtx.Provider>
  );
}
function Reveal({ as = 'div', delay = 0, className = '', style, children, ...rest }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { el.classList.add('in'); io.disconnect(); } }, { rootMargin: '0px 0px -8% 0px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  const T = as;
  return <T ref={ref} className={'reveal ' + className} style={{ transitionDelay: delay + 'ms', ...style }} {...rest}>{children}</T>;
}
function scrollToId(id) {
  const el = document.getElementById(id); if (!el) return;
  window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 60, behavior: 'smooth' });
}
const fmtPrice = (n) => '$' + n.toLocaleString('es-MX');
function openStatus(now = new Date()) {
  const H = window.MX_DATA.openingHours;
  const d = now.getDay(); const m = now.getHours() * 60 + now.getMinutes();
  const today = H.find((h) => h.days.includes(d));
  const fmt = (min) => String(Math.floor(min / 60) % 24).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
  if (today && m >= today.open && m < today.close) {
    const left = today.close - m;
    return { status: left <= 60 ? 'soon' : 'open', label: left <= 60 ? 'Cierra pronto · ' + fmt(today.close) : 'Abierto ahora', detail: 'Hoy hasta las ' + fmt(today.close), today };
  }
  let next = today && m < today.open ? 'Hoy a las ' + fmt(today.open) : 'Mañana a las 13:00';
  return { status: 'closed', label: 'Cerrado ahora', detail: 'Abrimos ' + next.charAt(0).toLowerCase() + next.slice(1), today };
}
function useOpenStatus() {
  const [s, setS] = React.useState(() => openStatus());
  React.useEffect(() => { const t = setInterval(() => setS(openStatus()), 60000); return () => clearInterval(t); }, []);
  return s;
}
const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = (v) => v.replace(/\D/g, '').length >= 10;
const wait = (ms) => new Promise((r) => setTimeout(r, ms));
Object.assign(window, { ToastHost, useToast, Reveal, scrollToId, fmtPrice, openStatus, useOpenStatus, isEmail, isPhone, wait });
