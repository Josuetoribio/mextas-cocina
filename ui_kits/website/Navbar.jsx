function Navbar({ onReserve }) {
  const { Wordmark, NavLink, Button, IconButton, Icon } = window.MX;
  const { nav, contact } = window.MX_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('inicio');
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on(); window.addEventListener('scroll', on, { passive: true });
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-45% 0px -50% 0px' });
    nav.forEach((n) => { const el = document.getElementById(n.id); el && io.observe(el); });
    return () => { window.removeEventListener('scroll', on); io.disconnect(); };
  }, []);
  React.useEffect(() => { document.body.style.overflow = open ? 'hidden' : ''; }, [open]);
  const go = (id) => (e) => { e.preventDefault(); setOpen(false); setTimeout(() => scrollToId(id), open ? 60 : 0); };
  return (
    <>
      <header className={'nav' + (scrolled ? ' scrolled' : '')}>
        <div className="wrap nav-in">
          <a href="#inicio" onClick={go('inicio')} aria-label="MEXTAS, inicio"><Wordmark size="m" /></a>
          <nav className="nav-links" aria-label="Principal">
            {nav.map((n) => <NavLink key={n.id} href={'#' + n.id} active={active === n.id} onClick={go(n.id)}>{n.label}</NavLink>)}
          </nav>
          <div className="nav-cta"><Button variant="outline" size="s" onClick={onReserve}>Reservar mesa</Button></div>
          <div className="nav-burger"><IconButton label="Abrir menú" variant="plain" onClick={() => setOpen(true)}><Icon name="menu" size={24} /></IconButton></div>
        </div>
      </header>
      {open && (
        <div className="drawer" role="dialog" aria-modal="true" aria-label="Menú">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Wordmark size="m" />
            <IconButton label="Cerrar menú" variant="plain" onClick={() => setOpen(false)}><Icon name="x" size={24} /></IconButton>
          </div>
          <nav style={{ display: 'flex', flexDirection: 'column', marginTop: 44, flex: 1 }}>
            {nav.map((n, i) => <a key={n.id} className="dl" href={'#' + n.id} onClick={go(n.id)} style={{ animationDelay: 80 + i * 55 + 'ms', color: active === n.id ? 'var(--mx-gold)' : undefined }}>{n.label}</a>)}
          </nav>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <Button fullWidth size="l" onClick={() => { setOpen(false); onReserve(); }} iconRight={<Icon name="arrow-right" size={14} />}>Reservar mesa</Button>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13 }} className="muted-d"><a href={contact.phoneHref}>{contact.phone}</a><span>San Pedro Garza García</span></div>
          </div>
        </div>
      )}
    </>
  );
}
window.Navbar = Navbar;
