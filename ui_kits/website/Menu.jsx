function useFavorites() {
  const [favs, setFavs] = React.useState(() => { try { return JSON.parse(localStorage.getItem('mx-favs') || '[]'); } catch (e) { return []; } });
  React.useEffect(() => { try { localStorage.setItem('mx-favs', JSON.stringify(favs)); } catch (e) {} }, [favs]);
  const toggle = (id) => setFavs((f) => f.includes(id) ? f.filter((x) => x !== id) : [...f, id]);
  return [favs, toggle];
}
function MenuSection({ onReserve }) {
  const { Tabs, DishCard, SectionHeader, Button, ChoiceChip, Icon } = window.MX;
  const { categories, menuItems } = window.MX_DATA;
  const toast = useToast();
  const [cat, setCat] = React.useState('entradas');
  const [onlyFavs, setOnlyFavs] = React.useState(false);
  const [favs, toggleFav] = useFavorites();
  const [dish, setDish] = React.useState(null);
  const items = onlyFavs ? menuItems.filter((m) => favs.includes(m.id)) : menuItems.filter((m) => m.cat === cat);
  const fav = (m) => { const was = favs.includes(m.id); toggleFav(m.id); toast({ tone: 'info', title: 'Favoritos', message: m.name + (was ? ' se quitó de tus favoritos.' : ' se agregó a tus favoritos.') }); };
  const catLabel = (id) => categories.find((c) => c.id === id).label;
  return (
    <section id="menu" className="sec bg-cream" data-screen-label="Menú">
      <div className="wrap">
        <Reveal><SectionHeader align="center" eyebrow="Nuestro menú" title="Descubre una selección excepcional" description="Una carta que cambia con las estaciones. Toca cualquier platillo para conocer su historia." /></Reveal>
        <Reveal delay={120} style={{ marginTop: 44 }}>
          <Tabs items={categories} value={onlyFavs ? '' : cat} onChange={(id) => { setOnlyFavs(false); setCat(id); }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', margin: '22px 0 26px' }}>
            <span className="muted-l" style={{ fontSize: 13 }} aria-live="polite">{onlyFavs ? 'Tus favoritos' : catLabel(cat)} · {items.length} {items.length === 1 ? 'platillo' : 'platillos'}</span>
            <ChoiceChip tone="light" selected={onlyFavs} onClick={() => setOnlyFavs(!onlyFavs)} style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontSize: 12, padding: '9px 14px' }}>
              <Icon name="heart" size={14} /> Favoritos ({favs.length})
            </ChoiceChip>
          </div>
        </Reveal>
        <div className="menu-grid" key={onlyFavs ? 'favs' : cat}>
          {items.map((m, i) => (
            <DishCard key={m.id} image={m.image} tag={m.tag || (m.image ? null : catLabel(m.cat))} name={m.name} description={m.description} price={fmtPrice(m.price) + (m.unit ? ' · ' + m.unit : '')}
              favorite={favs.includes(m.id)} onFavorite={() => fav(m)} onClick={() => setDish(m)} style={{ animationDelay: i * 70 + 'ms', minHeight: m.image ? undefined : 230 }} />
          ))}
          {items.length === 0 && (
            <div style={{ gridColumn: '1/-1', padding: '56px 0', textAlign: 'center' }} className="muted-l">
              <p className="serif" style={{ fontSize: 26, margin: '0 0 8px', color: 'var(--text-on-light)' }}>Aún no tienes favoritos</p>
              <p style={{ margin: 0, fontSize: 14 }}>Toca el corazón de cualquier platillo para guardarlo aquí.</p>
            </div>
          )}
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 44 }}>
          <Button variant="outline" tone="light" onClick={() => { const i = categories.findIndex((c) => c.id === cat); setOnlyFavs(false); setCat(categories[(i + 1) % categories.length].id); }} iconRight={<Icon name="arrow-right" size={14} />}>
            Siguiente: {catLabel(categories[(categories.findIndex((c) => c.id === cat) + 1) % categories.length].id)}
          </Button>
        </div>
      </div>
      <DishModal dish={dish} onClose={() => setDish(null)} fav={dish && favs.includes(dish.id)} onFav={() => dish && fav(dish)} onReserve={() => { setDish(null); onReserve(); }} catLabel={catLabel} />
    </section>
  );
}
function DishModal({ dish, onClose, fav, onFav, onReserve, catLabel }) {
  const { Modal, Button, IconButton, Icon, Wordmark } = window.MX;
  if (!dish) return null;
  return (
    <Modal open={!!dish} onClose={onClose} label={dish.name} width={1080}>
      <div className="dish-modal">
        <div className="ph" style={{ background: 'var(--mx-black)', overflow: 'hidden' }}>
          {dish.image ? <img src={dish.image} alt={dish.name} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            : <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'radial-gradient(ellipse at 50% 40%, #2a241c 0%, #0A0A09 70%)' }}><Wordmark size="l" /></div>}
        </div>
        <div style={{ padding: 'clamp(28px,4vw,52px)', display: 'flex', flexDirection: 'column', gap: 22 }}>
          <span className="eyebrow gold">{catLabel(dish.cat)}{dish.tag ? ' · ' + dish.tag : ''}</span>
          <h3 className="serif" style={{ margin: 0, fontSize: 'clamp(32px,3.6vw,46px)', lineHeight: 1.05 }}>{dish.name}</h3>
          <p style={{ margin: 0, lineHeight: 1.65, color: 'var(--text-on-dark-muted)' }}>{dish.long}</p>
          <div>
            <div className="eyebrow muted-d" style={{ fontSize: 11, marginBottom: 12 }}>Ingredientes principales</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>{dish.ingredients.map((x) => <span key={x} className="pill">{x}</span>)}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div><div className="eyebrow muted-d" style={{ fontSize: 11, marginBottom: 8 }}>Alérgenos</div><div style={{ fontSize: 14 }}>{dish.allergens.length ? dish.allergens.join(', ') : 'Sin alérgenos declarados'}</div></div>
            <div><div className="eyebrow muted-d" style={{ fontSize: 11, marginBottom: 8 }}>Precio</div><div className="serif" style={{ fontSize: 28, color: 'var(--mx-gold)' }}>{fmtPrice(dish.price)}{dish.unit ? <span style={{ fontSize: 14, fontFamily: 'var(--font-sans)' }} className="muted-d"> / {dish.unit}</span> : null}</div></div>
          </div>
          <div style={{ display: 'flex', gap: 14, padding: '18px 0', borderTop: '1px solid var(--line-dark)', borderBottom: '1px solid var(--line-dark)' }}>
            <Icon name="chef-hat" size={22} color="var(--mx-gold)" strokeWidth={1.1} />
            <div><div className="eyebrow gold" style={{ fontSize: 10, marginBottom: 6 }}>Recomendación del chef</div><div className="serif" style={{ fontSize: 19, fontStyle: 'italic', lineHeight: 1.35 }}>{dish.chef}</div></div>
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 'auto' }}>
            <Button onClick={onReserve} style={{ flex: 1 }} iconRight={<Icon name="arrow-right" size={14} />}>Reservar mesa</Button>
            <IconButton label={fav ? 'Quitar de favoritos' : 'Agregar a favoritos'} active={fav} onClick={onFav} size={46}><Icon name="heart" size={17} /></IconButton>
          </div>
          <p style={{ margin: 0, fontSize: 11 }} className="muted-d">Informa a tu mesero sobre cualquier alergia o restricción alimentaria.</p>
        </div>
      </div>
    </Modal>
  );
}
Object.assign(window, { MenuSection, DishModal });
