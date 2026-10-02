/* @ds-bundle: {"format":4,"namespace":"MextasDesignSystem_ce1b9d","components":[{"name":"Button","sourcePath":"components/actions/Button.jsx"},{"name":"IconButton","sourcePath":"components/actions/IconButton.jsx"},{"name":"Icon","sourcePath":"components/brand/Icon.jsx"},{"name":"Wordmark","sourcePath":"components/brand/Wordmark.jsx"},{"name":"DishCard","sourcePath":"components/content/DishCard.jsx"},{"name":"SectionHeader","sourcePath":"components/content/SectionHeader.jsx"},{"name":"Stat","sourcePath":"components/content/Stat.jsx"},{"name":"ValueProp","sourcePath":"components/content/ValueProp.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"StatusBadge","sourcePath":"components/feedback/StatusBadge.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ChoiceChip","sourcePath":"components/forms/ChoiceChip.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"NavLink","sourcePath":"components/navigation/NavLink.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/actions/Button.jsx":"edb245b7f917","components/actions/IconButton.jsx":"5eec40a2f817","components/brand/Icon.jsx":"30dc923f6e52","components/brand/Wordmark.jsx":"48b2824193a0","components/content/DishCard.jsx":"a3a7efe5f1f9","components/content/SectionHeader.jsx":"dbfbbfc012c1","components/content/Stat.jsx":"a4cb7afde7bd","components/content/ValueProp.jsx":"804061c08fb0","components/feedback/Modal.jsx":"6f2c80e6e477","components/feedback/StatusBadge.jsx":"b30be6aaa311","components/feedback/Toast.jsx":"6340f7fff7fe","components/forms/ChoiceChip.jsx":"d9af8aa5fab4","components/forms/Input.jsx":"52907696b012","components/forms/Select.jsx":"e05e3179173f","components/forms/Textarea.jsx":"f3390d65961c","components/navigation/NavLink.jsx":"8730cb7d7c75","components/navigation/Tabs.jsx":"504f9b1bb0a1","ui_kits/website/Chef.jsx":"c59ad3b07c1d","ui_kits/website/Experiences.jsx":"bb00c6824263","ui_kits/website/Footer.jsx":"cbdeb153d44e","ui_kits/website/Gallery.jsx":"4f53a3457611","ui_kits/website/Hero.jsx":"11e906f3b401","ui_kits/website/Menu.jsx":"7a2ae5b52acc","ui_kits/website/Navbar.jsx":"cf1fba41dcb3","ui_kits/website/Reservation.jsx":"ed01f4dfc3f0","ui_kits/website/Shared.jsx":"6e61aa3887ea","ui_kits/website/Visit.jsx":"64d7636d1fe0","ui_kits/website/data.js":"110de6f1418d","ui_kits/website/ds-loader.js":"d6226dbde677"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MextasDesignSystem_ce1b9d = window.MextasDesignSystem_ce1b9d || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/actions/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const PAD = {
  s: '10px 18px',
  m: '14px 26px',
  l: '18px 34px'
};
const FS = {
  s: 11,
  m: 12,
  l: 13
};
function Button({
  children,
  variant = 'primary',
  tone = 'dark',
  size = 'm',
  iconRight,
  iconLeft,
  loading = false,
  disabled = false,
  fullWidth = false,
  type = 'button',
  href,
  onClick,
  style,
  ...rest
}) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const onDark = tone === 'dark';
  const base = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const v = {
    primary: {
      background: h ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)',
      color: 'var(--action-primary-fg)',
      border: '1px solid transparent'
    },
    outline: {
      background: h ? 'var(--mx-gold)' : 'transparent',
      color: h ? 'var(--action-primary-fg)' : onDark ? 'var(--mx-gold)' : 'var(--text-on-light)',
      border: '1px solid ' + (onDark ? 'var(--mx-gold)' : 'var(--line-light-strong)')
    },
    ghost: {
      background: h ? onDark ? 'rgba(243,238,231,.06)' : 'rgba(26,24,20,.05)' : 'transparent',
      color: base,
      border: '1px solid ' + (onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)')
    },
    link: {
      background: 'transparent',
      color: h ? 'var(--mx-gold)' : base,
      border: '1px solid transparent',
      padding: '6px 0'
    }
  }[variant];
  const off = disabled || loading;
  const Tag = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Tag, _extends({
    href: href,
    type: href ? undefined : type,
    disabled: href ? undefined : off,
    "aria-busy": loading || undefined,
    onClick: off ? undefined : onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: fullWidth ? 'flex' : 'inline-flex',
      width: fullWidth ? '100%' : undefined,
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      padding: PAD[size],
      fontFamily: 'var(--font-sans)',
      fontSize: FS[size],
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      lineHeight: 1,
      borderRadius: 'var(--radius-0)',
      cursor: off ? 'not-allowed' : 'pointer',
      opacity: disabled ? .45 : 1,
      transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
      transform: p && !off ? 'scale(.98)' : 'none',
      textDecoration: 'none',
      boxSizing: 'border-box',
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), loading && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 12,
      height: 12,
      border: '1px solid currentColor',
      borderRightColor: 'transparent',
      borderRadius: '50%',
      animation: 'mx-spin .8s linear infinite'
    }
  }), !loading && iconLeft, /*#__PURE__*/React.createElement("span", null, children), !loading && iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      transition: 'transform var(--dur-base) var(--ease-editorial)',
      transform: h ? 'translateX(4px)' : 'none'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/Button.jsx", error: String((e && e.message) || e) }); }

// components/actions/IconButton.jsx
try { (() => {
function IconButton({
  children,
  label,
  tone = 'dark',
  variant = 'outline',
  size = 44,
  active = false,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)';
  const fg = active ? 'var(--mx-gold)' : onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    "aria-pressed": active || undefined,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: size,
      height: size,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 0,
      cursor: 'pointer',
      borderRadius: variant === 'round' ? '50%' : 0,
      color: h ? 'var(--mx-gold)' : fg,
      background: variant === 'solid' ? onDark ? 'rgba(10,10,9,.55)' : 'rgba(246,242,235,.85)' : 'transparent',
      backdropFilter: variant === 'solid' ? 'blur(8px)' : undefined,
      border: variant === 'plain' ? 'none' : '1px solid ' + (h ? 'var(--mx-gold)' : line),
      transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/actions/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/brand/Icon.jsx
try { (() => {
const pascal = n => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
function Icon({
  name,
  size = 18,
  strokeWidth = 1.25,
  color = 'currentColor',
  style,
  title
}) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? lib[pascal(name)] || lib[name] : null;
  if (node && node[0] === 'svg') node = node[2];
  const kids = Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, {
    key: i,
    ...attrs
  })) : null;
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth: strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": title ? undefined : true,
    role: title ? 'img' : undefined,
    style: {
      flex: 'none',
      display: 'block',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("title", null, title), kids);
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Icon.jsx", error: String((e && e.message) || e) }); }

// components/brand/Wordmark.jsx
try { (() => {
const SIZES = {
  s: [18, 8],
  m: [26, 9],
  l: [44, 12]
};
function Wordmark({
  tone = 'dark',
  size = 'm',
  subtitle = true,
  name = 'MEXTAS',
  tagline = 'Cocina contemporánea',
  style
}) {
  const [fs, ts] = SIZES[size] || SIZES.m;
  const color = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      flexDirection: 'column',
      gap: size === 'l' ? 10 : 5,
      color,
      lineHeight: 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 500,
      fontSize: fs,
      letterSpacing: 'var(--tracking-wordmark)',
      marginRight: '-.42em'
    }
  }, name), subtitle && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: ts,
      fontWeight: 500,
      letterSpacing: '.3em',
      textTransform: 'uppercase',
      opacity: .8
    }
  }, tagline));
}
Object.assign(__ds_scope, { Wordmark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/brand/Wordmark.jsx", error: String((e && e.message) || e) }); }

// components/content/DishCard.jsx
try { (() => {
function DishCard({
  image,
  name,
  description,
  price,
  tag,
  favorite = false,
  onFavorite,
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("article", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-card-light)',
      cursor: onClick ? 'pointer' : 'default',
      transition: 'transform var(--dur-slow) var(--ease-editorial), box-shadow var(--dur-slow) var(--ease-editorial)',
      transform: h ? 'translateY(-4px)' : 'none',
      boxShadow: h ? 'var(--shadow-card)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    "aria-label": 'Ver detalle de ' + name,
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      flex: 1
    }
  }, image ? /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'block',
      aspectRatio: '16 / 10',
      overflow: 'hidden',
      background: 'var(--mx-charcoal)'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: image,
    alt: name,
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block',
      transition: 'transform 1.2s var(--ease-editorial)',
      transform: h ? 'scale(1.05)' : 'scale(1)'
    }
  })) : null, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      padding: '20px 22px 22px',
      flex: 1
    }
  }, tag && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: 'var(--text-accent-on-light)'
    }
  }, tag), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 22,
      fontWeight: 500,
      lineHeight: 1.15,
      color: 'var(--text-on-light)'
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13.5,
      lineHeight: 1.55,
      color: 'var(--text-on-light-muted)',
      textWrap: 'pretty'
    }
  }, description), /*#__PURE__*/React.createElement("span", {
    style: {
      marginTop: 'auto',
      paddingTop: 10,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      fontWeight: 500,
      color: 'var(--text-on-light)',
      letterSpacing: '.02em'
    }
  }, price), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-accent-on-light)',
      opacity: h ? 1 : 0,
      transform: h ? 'none' : 'translateX(-6px)',
      transition: 'all var(--dur-base) var(--ease-out)'
    }
  }, "Ver detalle \u2192")))), onFavorite && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": favorite ? 'Quitar de favoritos' : 'Agregar a favoritos',
    "aria-pressed": favorite,
    onClick: e => {
      e.stopPropagation();
      onFavorite();
    },
    style: {
      position: 'absolute',
      top: 12,
      right: 12,
      width: 36,
      height: 36,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 'none',
      borderRadius: '50%',
      cursor: 'pointer',
      background: 'rgba(10,10,9,.5)',
      backdropFilter: 'blur(8px)',
      color: favorite ? 'var(--mx-gold)' : 'var(--text-on-dark)',
      transition: 'transform var(--dur-fast) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: favorite ? 'currentColor' : 'none',
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"
  }))));
}
Object.assign(__ds_scope, { DishCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/DishCard.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionHeader.jsx
try { (() => {
function SectionHeader({
  eyebrow,
  title,
  description,
  align = 'left',
  tone = 'light',
  as = 'h2',
  style
}) {
  const onDark = tone === 'dark';
  const H = as;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18,
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      maxWidth: align === 'center' ? 720 : 620,
      marginInline: align === 'center' ? 'auto' : undefined,
      ...style
    }
  }, eyebrow && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--type-eyebrow)',
      fontWeight: 500,
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-accent)' : 'var(--text-on-light)'
    }
  }, eyebrow), /*#__PURE__*/React.createElement(H, {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontWeight: 400,
      fontSize: 'var(--type-display-m)',
      lineHeight: 1.08,
      letterSpacing: 'var(--tracking-display)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      textWrap: 'balance'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 'var(--type-body)',
      lineHeight: 'var(--leading-body)',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)',
      textWrap: 'pretty'
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionHeader.jsx", error: String((e && e.message) || e) }); }

// components/content/Stat.jsx
try { (() => {
function Stat({
  value,
  label,
  tone = 'light',
  style
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'clamp(2.5rem,4vw,3.5rem)',
      fontWeight: 400,
      lineHeight: 1,
      color: onDark ? 'var(--mx-gold)' : 'var(--text-accent-on-light)'
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Stat.jsx", error: String((e && e.message) || e) }); }

// components/content/ValueProp.jsx
try { (() => {
function ValueProp({
  icon,
  title,
  text,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 16,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--mx-gold)',
      display: 'flex',
      flex: 'none'
    }
  }, icon), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 5
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--mx-gold)'
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, text)));
}
Object.assign(__ds_scope, { ValueProp });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/ValueProp.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open,
  onClose,
  children,
  width = 960,
  tone = 'dark',
  label = 'Diálogo',
  style
}) {
  React.useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', k);
      document.body.style.overflow = prev;
    };
  }, [open]);
  if (!open) return null;
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": label,
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'clamp(0px,3vw,40px)',
      background: 'var(--surface-overlay)',
      backdropFilter: 'blur(6px)',
      animation: 'mx-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      position: 'relative',
      width: '100%',
      maxWidth: width,
      maxHeight: '100%',
      overflowY: 'auto',
      background: onDark ? 'var(--surface-dark)' : 'var(--surface-light-raised)',
      color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      border: '1px solid ' + (onDark ? 'var(--line-dark)' : 'var(--line-light)'),
      boxShadow: 'var(--shadow-modal)',
      animation: 'mx-scale-in var(--dur-slow) var(--ease-editorial)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      position: 'absolute',
      top: 14,
      right: 14,
      zIndex: 2,
      width: 40,
      height: 40,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: '50%',
      cursor: 'pointer',
      border: 'none',
      background: 'rgba(10,10,9,.55)',
      backdropFilter: 'blur(8px)',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.4"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))), children));
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/StatusBadge.jsx
try { (() => {
function StatusBadge({
  status = 'open',
  label,
  tone = 'dark',
  style
}) {
  const c = status === 'open' ? 'var(--mx-success)' : status === 'soon' ? 'var(--mx-gold)' : 'var(--mx-error)';
  const text = label || (status === 'open' ? 'Abierto ahora' : status === 'soon' ? 'Cierra pronto' : 'Cerrado');
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      padding: '6px 12px',
      border: '1px solid ' + (tone === 'dark' ? 'var(--line-dark-strong)' : 'var(--line-light-strong)'),
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: c,
      animation: status === 'open' ? 'mx-pulse 2.4s ease-in-out infinite' : 'none'
    }
  }), text);
}
Object.assign(__ds_scope, { StatusBadge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/StatusBadge.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function Toast({
  message,
  title,
  tone = 'success',
  visible = true,
  onClose,
  style
}) {
  if (!visible) return null;
  const c = tone === 'error' ? 'var(--mx-error)' : tone === 'info' ? 'var(--mx-gold)' : 'var(--mx-success)';
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    "aria-live": "polite",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 14,
      minWidth: 280,
      maxWidth: 380,
      padding: '16px 18px',
      background: 'var(--mx-charcoal-2)',
      color: 'var(--text-on-dark)',
      border: '1px solid var(--line-dark)',
      borderTop: '1px solid ' + c,
      boxShadow: 'var(--shadow-modal)',
      animation: 'mx-slide-in-right var(--dur-slow) var(--ease-editorial)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 6,
      height: 6,
      marginTop: 7,
      borderRadius: '50%',
      background: c,
      flex: 'none'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: c
    }
  }, title), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      lineHeight: 1.45
    }
  }, message)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Cerrar",
    onClick: onClose,
    style: {
      background: 'none',
      border: 'none',
      color: 'var(--text-on-dark-muted)',
      cursor: 'pointer',
      padding: 2,
      fontSize: 16,
      lineHeight: 1
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/forms/ChoiceChip.jsx
try { (() => {
function ChoiceChip({
  children,
  selected = false,
  disabled = false,
  tone = 'dark',
  onClick,
  style
}) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-pressed": selected,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: '.04em',
      padding: '11px 16px',
      minWidth: 72,
      borderRadius: 0,
      cursor: disabled ? 'not-allowed' : 'pointer',
      textDecoration: disabled ? 'line-through' : 'none',
      opacity: disabled ? .35 : 1,
      background: selected ? 'var(--mx-gold)' : 'transparent',
      color: selected ? 'var(--action-primary-fg)' : onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      border: '1px solid ' + (selected || h && !disabled ? 'var(--mx-gold)' : line),
      transition: 'all var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { ChoiceChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/ChoiceChip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = onDark => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase',
  color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
});
const controlStyle = (onDark, focus, error) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  fontWeight: 400,
  color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
  background: onDark ? 'rgba(243,238,231,.03)' : 'rgba(255,255,255,.35)',
  border: '1px solid ' + (error ? 'var(--mx-error)' : focus ? 'var(--mx-gold)' : onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)'),
  borderRadius: 0,
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color var(--dur-base) var(--ease-out)',
  colorScheme: onDark ? 'dark' : 'light'
});
const Msg = ({
  error,
  hint,
  onDark
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  role: error ? 'alert' : undefined,
  style: {
    fontSize: 12,
    color: error ? 'var(--mx-error)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
  }
}, error || hint) : null;
function Input({
  label,
  id,
  tone = 'dark',
  error,
  hint,
  type = 'text',
  icon,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const onDark = tone === 'dark';
  const fid = id || (label ? 'in-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle(onDark)
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    id: fid,
    type: type,
    "aria-invalid": !!error || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...controlStyle(onDark, f, error),
      paddingRight: icon ? 44 : 16
    }
  }, rest)), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: 14,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'var(--mx-gold)',
      pointerEvents: 'none',
      display: 'flex'
    }
  }, icon)), /*#__PURE__*/React.createElement(Msg, {
    error: error,
    hint: hint,
    onDark: onDark
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = onDark => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase',
  color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
});
const controlStyle = (onDark, focus, error) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  fontWeight: 400,
  color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
  background: onDark ? 'rgba(243,238,231,.03)' : 'rgba(255,255,255,.35)',
  border: '1px solid ' + (error ? 'var(--mx-error)' : focus ? 'var(--mx-gold)' : onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)'),
  borderRadius: 0,
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color var(--dur-base) var(--ease-out)',
  colorScheme: onDark ? 'dark' : 'light'
});
const Msg = ({
  error,
  hint,
  onDark
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  role: error ? 'alert' : undefined,
  style: {
    fontSize: 12,
    color: error ? 'var(--mx-error)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
  }
}, error || hint) : null;
function Select({
  label,
  id,
  tone = 'dark',
  error,
  hint,
  options = [],
  placeholder,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const onDark = tone === 'dark';
  const fid = id || (label ? 'sel-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle(onDark)
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'block'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: fid,
    "aria-invalid": !!error || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...controlStyle(onDark, f, error),
      appearance: 'none',
      WebkitAppearance: 'none',
      paddingRight: 40,
      cursor: 'pointer'
    }
  }, rest), placeholder && /*#__PURE__*/React.createElement("option", {
    value: ""
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v,
      style: {
        color: '#1A1814'
      }
    }, l);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.5",
    style: {
      position: 'absolute',
      right: 16,
      top: '50%',
      transform: 'translateY(-50%)',
      pointerEvents: 'none',
      color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), /*#__PURE__*/React.createElement(Msg, {
    error: error,
    hint: hint,
    onDark: onDark
  }));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const labelStyle = onDark => ({
  fontFamily: 'var(--font-sans)',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: 'var(--tracking-label)',
  textTransform: 'uppercase',
  color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
});
const controlStyle = (onDark, focus, error) => ({
  width: '100%',
  boxSizing: 'border-box',
  fontFamily: 'var(--font-sans)',
  fontSize: 15,
  fontWeight: 400,
  color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
  background: onDark ? 'rgba(243,238,231,.03)' : 'rgba(255,255,255,.35)',
  border: '1px solid ' + (error ? 'var(--mx-error)' : focus ? 'var(--mx-gold)' : onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)'),
  borderRadius: 0,
  padding: '14px 16px',
  outline: 'none',
  transition: 'border-color var(--dur-base) var(--ease-out)',
  colorScheme: onDark ? 'dark' : 'light'
});
const Msg = ({
  error,
  hint,
  onDark
}) => error || hint ? /*#__PURE__*/React.createElement("span", {
  role: error ? 'alert' : undefined,
  style: {
    fontSize: 12,
    color: error ? 'var(--mx-error)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'
  }
}, error || hint) : null;
function Textarea({
  label,
  id,
  tone = 'dark',
  error,
  hint,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = React.useState(false);
  const onDark = tone === 'dark';
  const fid = id || (label ? 'ta-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: labelStyle(onDark)
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: fid,
    rows: rows,
    "aria-invalid": !!error || undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      ...controlStyle(onDark, f, error),
      resize: 'vertical',
      lineHeight: 1.5
    }
  }, rest)), /*#__PURE__*/React.createElement(Msg, {
    error: error,
    hint: hint,
    onDark: onDark
  }));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavLink.jsx
try { (() => {
function NavLink({
  children,
  href = '#',
  active = false,
  tone = 'dark',
  onClick,
  style
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onClick: onClick,
    className: "mx-u",
    "aria-current": active ? 'true' : undefined,
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 12,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: active ? 'var(--mx-gold)' : onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)',
      textDecoration: 'none',
      transition: 'color var(--dur-base) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { NavLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavLink.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  tone = 'light',
  align = 'center',
  style
}) {
  const onDark = tone === 'dark';
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 'clamp(18px,3vw,44px)',
      justifyContent: align === 'center' ? 'center' : 'flex-start',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      borderBottom: '1px solid ' + (onDark ? 'var(--line-dark)' : 'var(--line-light)'),
      ...style
    }
  }, items.map(it => {
    const id = typeof it === 'string' ? it : it.id;
    const label = typeof it === 'string' ? it : it.label;
    const on = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(id),
      style: {
        position: 'relative',
        flex: 'none',
        background: 'none',
        border: 'none',
        cursor: 'pointer',
        padding: '14px 0 16px',
        fontFamily: 'var(--font-sans)',
        fontSize: 12,
        fontWeight: 500,
        letterSpacing: 'var(--tracking-label)',
        textTransform: 'uppercase',
        color: on ? onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)' : onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)',
        transition: 'color var(--dur-base) var(--ease-out)'
      }
    }, label, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": "true",
      style: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: -1,
        height: 1,
        background: 'var(--mx-gold)',
        transform: on ? 'scaleX(1)' : 'scaleX(0)',
        transition: 'transform var(--dur-slow) var(--ease-editorial)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chef.jsx
try { (() => {
function ChefSection() {
  const {
    Stat,
    Button,
    Icon
  } = window.MX;
  const IMG = window.MX_DATA.IMG;
  return /*#__PURE__*/React.createElement("section", {
    id: "nosotros",
    className: "sec bg-ivory",
    "data-screen-label": "Nosotros"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap chef"
  }, /*#__PURE__*/React.createElement(Reveal, {
    className: "chef-ph img-zoom"
  }, /*#__PURE__*/React.createElement("img", {
    src: IMG + 'pulpo.jpg',
    alt: "Pulpo al olivo emplatado",
    loading: "lazy",
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      display: 'block'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      bottom: 0,
      background: 'var(--mx-black)',
      color: 'var(--text-on-dark)',
      padding: '22px 26px',
      maxWidth: 280
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold",
    style: {
      fontSize: 10,
      marginBottom: 8
    }
  }, "Chef ejecutivo"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 24
    }
  }, "Emilio Garza"), /*#__PURE__*/React.createElement("div", {
    className: "muted-d",
    style: {
      fontSize: 12,
      marginTop: 4
    }
  }, "Formado en San Sebasti\xE1n y Ciudad de M\xE9xico"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 26
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--text-accent-on-light)'
    }
  }, "Nuestra filosof\xEDa")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 80
  }, /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 'var(--type-display-l)',
      lineHeight: 1.02
    }
  }, "Una cocina con ", /*#__PURE__*/React.createElement("i", null, "identidad"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 160
  }, /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 24,
      lineHeight: 1.35
    }
  }, "No cocinamos solamente para alimentar.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 220
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted-l",
    style: {
      margin: 0,
      lineHeight: 1.7,
      maxWidth: 520
    }
  }, "Dise\xF1amos experiencias alrededor del producto, la t\xE9cnica y el momento. Trabajamos con productores del noreste, respetamos las temporadas y dejamos que cada ingrediente cuente su propia historia en el plato.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 280,
    className: "chef-stats"
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "12+",
    label: "A\xF1os de experiencia"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "38",
    label: "Ingredientes locales"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "7",
    label: "Experiencias gastron\xF3micas"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 340
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    tone: "light",
    onClick: () => scrollToId('experiencias'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Conoce nuestras experiencias")))));
}
function StorySection() {
  const {
    SectionHeader
  } = window.MX;
  const IMG = window.MX_DATA.IMG;
  const items = [{
    k: 's1',
    n: '01',
    t: 'Producto',
    d: 'Ingredientes seleccionados diariamente con productores de la región.',
    img: IMG + 'burrata.jpg'
  }, {
    k: 's2',
    n: '02',
    t: 'Técnica',
    d: 'Métodos contemporáneos combinados con técnicas tradicionales.',
    img: IMG + 'rib-eye.jpg'
  }, {
    k: 's3',
    n: '03',
    t: 'Ambiente',
    d: 'Un espacio pensado para cenas especiales.',
    img: IMG + 'interior.jpg'
  }, {
    k: 's4',
    n: '04',
    t: 'Servicio',
    d: 'Atención personalizada, de la bienvenida a la sobremesa. Recordamos tus preferencias para que cada visita se sienta tuya.'
  }];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec bg-black",
    "data-screen-label": "Nuestra experiencia"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Nuestra experiencia",
    title: "Cuatro pilares, una misma mesa"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      maxWidth: 380,
      lineHeight: 1.7
    }
  }, "Lo que sucede antes de que el plato llegue a la mesa es tan importante como el plato mismo."))), /*#__PURE__*/React.createElement("div", {
    className: "story"
  }, items.map((s, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: s.k,
    delay: i * 100,
    className: 'st img-zoom ' + s.k,
    style: s.img ? null : {
      background: 'var(--mx-charcoal-2)',
      border: '1px solid var(--line-dark)'
    }
  }, s.img && /*#__PURE__*/React.createElement("img", {
    src: s.img,
    alt: s.t,
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    style: s.img ? null : {
      display: 'grid',
      gridTemplateColumns: 'auto 1fr',
      gap: 'clamp(20px,5vw,80px)',
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif gold",
    style: {
      fontSize: s.img ? 18 : 64,
      lineHeight: 1
    }
  }, s.n), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: s.img ? '10px 0 8px' : '0 0 10px',
      fontSize: s.k === 's1' ? 44 : 32,
      color: 'var(--text-on-dark)'
    }
  }, s.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-on-dark-muted)',
      lineHeight: 1.6,
      maxWidth: 460
    }
  }, s.d))))))));
}
Object.assign(window, {
  ChefSection,
  StorySection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chef.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Experiences.jsx
try { (() => {
function ExperiencesSection({
  onReserve
}) {
  const {
    SectionHeader,
    Icon,
    Wordmark
  } = window.MX;
  const {
    experiences
  } = window.MX_DATA;
  return /*#__PURE__*/React.createElement("section", {
    id: "experiencias",
    className: "sec bg-black",
    "data-screen-label": "Experiencias"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 48
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Experiencias",
    title: "Momentos dise\xF1ados alrededor de la mesa"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      maxWidth: 380,
      lineHeight: 1.7
    }
  }, "Cada experiencia puede reservarse directamente. Nuestro equipo te contactar\xE1 para afinar los detalles."))), /*#__PURE__*/React.createElement("div", {
    className: "exp-grid"
  }, experiences.map((x, i) => /*#__PURE__*/React.createElement(Reveal, {
    key: x.id,
    delay: i * 90,
    as: "article",
    className: "xcard"
  }, x.image ? /*#__PURE__*/React.createElement("img", {
    src: x.image,
    alt: "",
    loading: "lazy"
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 35%, #3B2A1D 0%, #121210 72%)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "wine",
    size: 88,
    strokeWidth: .6,
    color: "rgba(201,160,106,.5)"
  })), /*#__PURE__*/React.createElement("div", {
    className: "xb"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold",
    style: {
      fontSize: 10
    }
  }, x.meta), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: '12px 0 10px',
      fontSize: 32,
      lineHeight: 1.05,
      color: 'var(--text-on-dark)'
    }
  }, x.title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      lineHeight: 1.55,
      color: 'var(--text-on-dark-muted)'
    }
  }, x.text), /*#__PURE__*/React.createElement("div", {
    className: "xmore"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      padding: 0,
      margin: '18px 0 0',
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      fontSize: 13,
      color: 'var(--text-on-dark)'
    }
  }, x.points.map(p => /*#__PURE__*/React.createElement("li", {
    key: p,
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 1,
      background: 'var(--mx-gold)'
    }
  }), p))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 20,
      paddingTop: 16,
      borderTop: '1px solid var(--line-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--text-on-dark)'
    }
  }, x.price), /*#__PURE__*/React.createElement("button", {
    onClick: () => x.id === 'privados' ? scrollToId('eventos') : onReserve({
      type: x.resType,
      note: x.title
    }),
    className: "mx-u",
    style: {
      all: 'unset',
      cursor: 'pointer',
      fontSize: 11,
      fontWeight: 500,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--mx-gold)',
      display: 'flex',
      gap: 8,
      alignItems: 'center'
    }
  }, x.id === 'privados' ? 'Cotizar' : 'Reservar', " ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 13
  })))))))));
}
const EVENT_TYPES = ['Cena corporativa', 'Networking', 'Presentación de producto', 'Celebración empresarial', 'Reunión privada'];
const BUDGETS = ['Menos de $30,000', '$30,000 – $60,000', '$60,000 – $120,000', 'Más de $120,000'];
function GroupsSection() {
  const {
    SectionHeader,
    Button,
    Icon
  } = window.MX;
  const {
    groupOptions
  } = window.MX_DATA;
  const [open, setOpen] = React.useState(null);
  return /*#__PURE__*/React.createElement("section", {
    id: "eventos",
    className: "sec bg-cream",
    "data-screen-label": "Grupos y empresas"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
      gap: 40,
      alignItems: 'end',
      marginBottom: 56
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Grupos y empresas",
    title: "M\xE1s que una cena. Una experiencia para compartir."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24,
      alignItems: 'flex-start'
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "muted-l",
    style: {
      margin: 0,
      lineHeight: 1.7,
      maxWidth: 440
    }
  }, "Sal\xF3n privado para hasta 80 invitados, men\xFAs a la medida, maridaje y un coordinador dedicado desde la primera llamada hasta el \xFAltimo brindis."), /*#__PURE__*/React.createElement(Button, {
    tone: "light",
    onClick: () => setOpen('Cena corporativa'),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Planear un evento"))), /*#__PURE__*/React.createElement(Reveal, {
    className: "groups"
  }, groupOptions.map((g, i) => /*#__PURE__*/React.createElement("button", {
    key: g.id,
    onClick: () => setOpen(g.eventType),
    "aria-label": 'Planear: ' + g.title
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 15,
      color: 'var(--text-accent-on-light)'
    }
  }, "0", i + 1), /*#__PURE__*/React.createElement(Icon, {
    name: g.icon,
    size: 24,
    strokeWidth: 1,
    color: "var(--mx-gold-deep)"
  })), /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 32,
      lineHeight: 1.05,
      marginTop: 28
    }
  }, g.title), /*#__PURE__*/React.createElement("span", {
    className: "muted-l",
    style: {
      fontSize: 14,
      lineHeight: 1.55
    }
  }, g.text), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 12,
      fontSize: 12,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted-l"
  }, g.capacity), /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent-on-light)',
      display: 'flex',
      gap: 6,
      alignItems: 'center'
    }
  }, "Cotizar ", /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right",
    size: 13
  }))))))), /*#__PURE__*/React.createElement(EventModal, {
    open: !!open,
    initialType: open,
    onClose: () => setOpen(null)
  }));
}
function EventModal({
  open,
  initialType,
  onClose
}) {
  const {
    Modal,
    Input,
    Select,
    Textarea,
    Button,
    ChoiceChip,
    Icon
  } = window.MX;
  const toast = useToast();
  const empty = {
    company: '',
    contact: '',
    email: '',
    guests: '',
    date: '',
    type: 'Cena corporativa',
    budget: '',
    comments: ''
  };
  const [step, setStep] = React.useState(0);
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [busy, setBusy] = React.useState(false);
  React.useEffect(() => {
    if (open) {
      setStep(0);
      setErr({});
      setF(x => ({
        ...empty,
        type: initialType || x.type
      }));
    }
  }, [open]);
  const set = k => e => {
    const v = e.target ? e.target.value : e;
    setF(x => ({
      ...x,
      [k]: v
    }));
    setErr(x => ({
      ...x,
      [k]: undefined
    }));
  };
  const v0 = () => {
    const e = {};
    if (!f.company.trim()) e.company = 'Requerido';
    if (!f.contact.trim()) e.contact = 'Requerido';
    if (!isEmail(f.email)) e.email = 'Correo no válido';
    setErr(e);
    return !Object.keys(e).length;
  };
  const v1 = () => {
    const e = {};
    const g = Number(f.guests);
    if (!g || g < 8) e.guests = 'Mínimo 8 asistentes';else if (g > 80) e.guests = 'Capacidad máxima: 80';
    if (!f.date) e.date = 'Elige una fecha tentativa';
    if (!f.budget) e.budget = 'Selecciona un rango';
    setErr(e);
    return !Object.keys(e).length;
  };
  const next = async () => {
    if (step === 0 && v0()) setStep(1);else if (step === 1 && v1()) {
      setBusy(true);
      await wait(1500);
      setBusy(false);
      setStep(2);
      toast({
        title: 'Solicitud enviada',
        message: 'Nuestro equipo de eventos te contactará en 24 horas.'
      });
    }
  };
  const labels = ['Empresa', 'Evento', 'Confirmación'];
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    label: "Planear un evento",
    width: 720
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,5vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "steps",
    style: {
      marginBottom: 30
    }
  }, labels.map((l, i) => /*#__PURE__*/React.createElement(React.Fragment, {
    key: l
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 11,
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: i <= step ? 'var(--mx-gold)' : 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: '50%',
      border: '1px solid currentColor',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: 10
    }
  }, i < step ? '✓' : i + 1), l), i < 2 && /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      height: 1,
      background: i < step ? 'var(--mx-gold)' : 'var(--line-dark)'
    }
  })))), step < 2 && /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: '0 0 8px',
      fontSize: 36,
      lineHeight: 1.05
    }
  }, step === 0 ? 'Cuéntanos de tu empresa' : 'Detalles del evento'), step < 2 && /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: '0 0 28px',
      fontSize: 14
    }
  }, "Respuesta de nuestro coordinador de eventos en menos de 24 horas h\xE1biles."), step === 0 && /*#__PURE__*/React.createElement("div", {
    key: "s0",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      animation: 'mx-fade-up .5s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre de empresa",
    value: f.company,
    onChange: set('company'),
    error: err.company,
    placeholder: "Empresa S.A. de C.V."
  }), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre de contacto",
    value: f.contact,
    onChange: set('contact'),
    error: err.contact
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo",
    type: "email",
    value: f.email,
    onChange: set('email'),
    error: err.email,
    placeholder: "contacto@empresa.com"
  }))), step === 1 && /*#__PURE__*/React.createElement("div", {
    key: "s1",
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      animation: 'mx-fade-up .5s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow muted-d",
    style: {
      fontSize: 11,
      marginBottom: 10
    }
  }, "Tipo de evento"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, EVENT_TYPES.map(t => /*#__PURE__*/React.createElement(ChoiceChip, {
    key: t,
    selected: f.type === t,
    onClick: () => set('type')(t),
    style: {
      fontSize: 13
    }
  }, t)))), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Asistentes",
    type: "number",
    min: "8",
    max: "80",
    value: f.guests,
    onChange: set('guests'),
    error: err.guests,
    placeholder: "8 \u2013 80"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Fecha tentativa",
    type: "date",
    min: todayISO(),
    value: f.date,
    onChange: set('date'),
    error: err.date
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Presupuesto",
    placeholder: "Rango",
    value: f.budget,
    onChange: set('budget'),
    error: err.budget,
    options: BUDGETS
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Comentarios",
    rows: 3,
    value: f.comments,
    onChange: set('comments'),
    placeholder: "Formato, audiovisual, men\xFA, restricciones\u2026"
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 18,
      padding: '10px 0',
      animation: 'mx-scale-in .6s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '1px solid var(--mx-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--mx-gold)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "calendar-check",
    size: 26,
    strokeWidth: 1.1
  })), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 38
    }
  }, "Tu evento est\xE1 en marcha"), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      lineHeight: 1.6,
      maxWidth: 420
    }
  }, "Recibimos la solicitud de ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, f.company), " para una ", f.type.toLowerCase(), " de ", f.guests, " asistentes. Enviaremos una propuesta a ", f.email, "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: onClose
  }, "Cerrar")), step < 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
      gap: 12
    }
  }, step === 1 ? /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    onClick: () => setStep(0),
    iconLeft: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-left",
      size: 14
    })
  }, "Atr\xE1s") : /*#__PURE__*/React.createElement("span", null), /*#__PURE__*/React.createElement(Button, {
    onClick: next,
    loading: busy,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, step === 0 ? 'Continuar' : busy ? 'Enviando' : 'Enviar solicitud'))));
}
Object.assign(window, {
  ExperiencesSection,
  GroupsSection,
  EventModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Experiences.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
function Newsletter() {
  const {
    Button,
    Icon
  } = window.MX;
  const toast = useToast();
  const [email, setEmail] = React.useState('');
  const [state, setState] = React.useState('idle');
  const [err, setErr] = React.useState('');
  const submit = async e => {
    e.preventDefault();
    if (!isEmail(email)) {
      setErr('Ingresa un correo válido');
      return;
    }
    setErr('');
    setState('loading');
    await wait(1100);
    setState('done');
    toast({
      title: 'Suscripción confirmada',
      message: 'Bienvenido a la mesa de MEXTAS.'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-black",
    style: {
      padding: 'clamp(64px,8vw,110px) 0',
      borderTop: '1px solid var(--line-dark)'
    },
    "aria-label": "Newsletter"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap news"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold"
  }, "Newsletter"), /*#__PURE__*/React.createElement("h2", {
    className: "serif",
    style: {
      margin: '18px 0 14px',
      fontSize: 'var(--type-display-m)',
      lineHeight: 1.08,
      color: 'var(--text-on-dark)',
      textWrap: 'balance'
    }
  }, "Una mesa siempre empieza con una invitaci\xF3n."), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0
    }
  }, "Recibe novedades, experiencias especiales y eventos de MEXTAS.")), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, state === 'done' ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center',
      padding: '18px 0',
      borderBottom: '1px solid var(--mx-gold)',
      color: 'var(--text-on-dark)',
      animation: 'mx-fade-up .6s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 18,
    color: "var(--mx-gold)"
  }), " Listo. La pr\xF3xima invitaci\xF3n llegar\xE1 a ", /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, email), ".") : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      flex: 1,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "sr",
    style: {
      position: 'absolute',
      width: 1,
      height: 1,
      overflow: 'hidden',
      clip: 'rect(0 0 0 0)'
    }
  }, "Correo electr\xF3nico"), /*#__PURE__*/React.createElement("input", {
    type: "email",
    value: email,
    onChange: e => {
      setEmail(e.target.value);
      setErr('');
    },
    placeholder: "tu@correo.com",
    "aria-invalid": !!err,
    style: {
      font: 'inherit',
      fontSize: 16,
      background: 'transparent',
      color: 'var(--text-on-dark)',
      border: 'none',
      borderBottom: '1px solid ' + (err ? 'var(--mx-error)' : 'var(--line-dark-strong)'),
      padding: '16px 0',
      outline: 'none'
    }
  })), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    loading: state === 'loading',
    style: {
      alignSelf: 'flex-end'
    }
  }, "Suscribirme")), err && /*#__PURE__*/React.createElement("span", {
    role: "alert",
    style: {
      display: 'block',
      marginTop: 8,
      fontSize: 12,
      color: 'var(--mx-error)'
    }
  }, err), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      fontSize: 12,
      margin: '14px 0 0'
    }
  }, "Un correo al mes. Puedes darte de baja cuando quieras."))));
}
function Footer({
  onLegal
}) {
  const {
    Wordmark,
    IconButton,
    Icon,
    StatusBadge
  } = window.MX;
  const {
    contact,
    openingHours
  } = window.MX_DATA;
  const st = useOpenStatus();
  const links = [['inicio', 'Inicio'], ['menu', 'Menú'], ['nosotros', 'Nosotros'], ['experiencias', 'Experiencias'], ['reservaciones', 'Reservaciones'], ['galeria', 'Galería'], ['contacto', 'Contacto']];
  return /*#__PURE__*/React.createElement("footer", {
    className: "bg-black",
    style: {
      borderTop: '1px solid var(--line-dark)',
      paddingTop: 80
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap foot"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "l"
  }), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 22,
      fontStyle: 'italic',
      color: 'var(--text-on-dark)',
      maxWidth: 280
    }
  }, "Cocina contempor\xE1nea con esencia local."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10
    }
  }, [['instagram', 'Instagram'], ['facebook', 'Facebook'], ['twitter', 'X']].map(([n, l]) => /*#__PURE__*/React.createElement(IconButton, {
    key: n,
    label: l,
    variant: "round",
    size: 40
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 15
  }))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Explorar"), /*#__PURE__*/React.createElement("ul", null, links.map(([id, l]) => /*#__PURE__*/React.createElement("li", {
    key: id
  }, /*#__PURE__*/React.createElement("a", {
    href: '#' + id,
    className: "mx-u muted-d",
    onClick: e => {
      e.preventDefault();
      scrollToId(id);
    }
  }, l))))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Informaci\xF3n"), /*#__PURE__*/React.createElement("ul", {
    className: "muted-d"
  }, /*#__PURE__*/React.createElement("li", null, contact.address1), /*#__PURE__*/React.createElement("li", null, contact.address2), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: contact.phoneHref,
    className: "mx-u"
  }, contact.phone)), /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + contact.email,
    className: "mx-u"
  }, contact.email)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Horarios"), /*#__PURE__*/React.createElement("ul", {
    className: "muted-d"
  }, openingHours.map(h => /*#__PURE__*/React.createElement("li", {
    key: h.label,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, h.label), h.text))), /*#__PURE__*/React.createElement(StatusBadge, {
    status: st.status,
    label: st.label,
    style: {
      marginTop: 18
    }
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "Legal"), /*#__PURE__*/React.createElement("ul", {
    className: "muted-d"
  }, ['Aviso de privacidad', 'Términos', 'Política de reservaciones'].map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("button", {
    className: "fl mx-u",
    onClick: () => onLegal(l)
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      flexWrap: 'wrap',
      marginTop: 72,
      padding: '24px var(--gutter) 28px',
      borderTop: '1px solid var(--line-dark)',
      fontSize: 12,
      color: 'var(--mx-ink-500)'
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 ", new Date().getFullYear(), " MEXTAS Cocina Contempor\xE1nea. Todos los derechos reservados."), /*#__PURE__*/React.createElement("span", {
    style: {
      opacity: .7
    }
  }, "Dise\xF1o y desarrollo \xB7 Mextas")));
}
const LEGAL = {
  'Aviso de privacidad': ['Tus datos personales se utilizan únicamente para gestionar reservaciones, eventos y comunicaciones que hayas solicitado.', 'Puedes ejercer tus derechos ARCO escribiendo a privacidad@mextasrestaurante.mx.'],
  'Términos': ['El uso de este sitio implica la aceptación de estos términos.', 'Precios en pesos mexicanos, IVA incluido. Sujetos a cambio sin previo aviso.'],
  'Política de reservaciones': ['Mantenemos tu mesa durante 15 minutos después de la hora reservada.', 'Cancelaciones sin costo hasta 24 horas antes. Grupos de 8 o más requieren garantía con tarjeta.', 'Cena degustación y mesa del chef requieren confirmación 48 horas antes.']
};
function LegalModal({
  doc,
  onClose
}) {
  const {
    Modal
  } = window.MX;
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!doc,
    onClose: onClose,
    label: doc || '',
    width: 620
  }, doc && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,5vw,52px)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold"
  }, "Legal"), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: '14px 0 24px',
      fontSize: 36
    }
  }, doc), LEGAL[doc].map((p, i) => /*#__PURE__*/React.createElement("p", {
    key: i,
    className: "muted-d",
    style: {
      lineHeight: 1.7,
      margin: '0 0 14px'
    }
  }, p)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      color: 'var(--mx-ink-500)',
      marginTop: 24
    }
  }, "\xDAltima actualizaci\xF3n: septiembre 2026")));
}
Object.assign(window, {
  Newsletter,
  Footer,
  LegalModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Gallery.jsx
try { (() => {
function GallerySection() {
  const {
    SectionHeader,
    IconButton,
    Icon
  } = window.MX;
  const {
    galleryItems
  } = window.MX_DATA;
  const [idx, setIdx] = React.useState(null);
  const n = galleryItems.length;
  const go = d => setIdx(i => (i + d + n) % n);
  React.useEffect(() => {
    if (idx === null) return;
    const k = e => {
      if (e.key === 'Escape') setIdx(null);
      if (e.key === 'ArrowRight') go(1);
      if (e.key === 'ArrowLeft') go(-1);
    };
    window.addEventListener('keydown', k);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', k);
      document.body.style.overflow = '';
    };
  }, [idx]);
  const touch = React.useRef(0);
  const cur = idx !== null ? galleryItems[idx] : null;
  return /*#__PURE__*/React.createElement("section", {
    id: "galeria",
    className: "sec bg-black",
    "data-screen-label": "Galer\xEDa"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 32,
      flexWrap: 'wrap',
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Galer\xEDa",
    title: "Dentro de MEXTAS"
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted-d",
    style: {
      fontSize: 13
    }
  }, String(n).padStart(2, '0'), " fotograf\xEDas \xB7 Toca para ampliar"))), /*#__PURE__*/React.createElement("div", {
    className: "masonry"
  }, galleryItems.map((g, i) => /*#__PURE__*/React.createElement(Reveal, {
    as: "button",
    key: i,
    delay: i % 4 * 80,
    className: 'gi ' + g.size,
    onClick: () => setIdx(i),
    "aria-label": 'Ampliar: ' + g.caption
  }, /*#__PURE__*/React.createElement("img", {
    src: g.src,
    alt: g.alt,
    loading: "lazy",
    style: {
      objectPosition: g.pos
    }
  }), /*#__PURE__*/React.createElement("span", {
    className: "cap"
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 20
    }
  }, g.caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 11,
      letterSpacing: '.14em'
    }
  }, String(i + 1).padStart(2, '0'))))))), cur && /*#__PURE__*/React.createElement("div", {
    className: "lightbox",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Galer\xEDa ampliada",
    onTouchStart: e => {
      touch.current = e.touches[0].clientX;
    },
    onTouchEnd: e => {
      const dx = e.changedTouches[0].clientX - touch.current;
      if (Math.abs(dx) > 50) go(dx < 0 ? 1 : -1);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: 76,
      maxWidth: 'none',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      fontSize: 11
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "gold"
  }, String(idx + 1).padStart(2, '0')), " / ", String(n).padStart(2, '0')), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cerrar galer\xEDa",
    onClick: () => setIdx(null)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    className: "lb-stage",
    onClick: e => e.target === e.currentTarget && setIdx(null),
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("img", {
    key: idx,
    src: cur.src,
    alt: cur.alt,
    style: {
      objectPosition: cur.pos
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 20,
      minHeight: 96,
      maxWidth: 'none',
      color: 'var(--text-on-dark)'
    }
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Anterior",
    onClick: () => go(-1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 18
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 24
    }
  }, cur.caption), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      justifyContent: 'center',
      marginTop: 12
    }
  }, galleryItems.map((_, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    "aria-label": 'Foto ' + (i + 1),
    onClick: () => setIdx(i),
    style: {
      all: 'unset',
      cursor: 'pointer',
      width: i === idx ? 22 : 8,
      height: 2,
      background: i === idx ? 'var(--mx-gold)' : 'var(--line-dark-strong)',
      transition: 'all .4s var(--ease-editorial)'
    }
  })))), /*#__PURE__*/React.createElement(IconButton, {
    label: "Siguiente",
    onClick: () => go(1)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 18
  })))));
}
function TestimonialsSection() {
  const {
    IconButton,
    Icon
  } = window.MX;
  const {
    testimonials
  } = window.MX_DATA;
  const [i, setI] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const n = testimonials.length;
  React.useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setI(x => (x + 1) % n), 7000);
    return () => clearTimeout(t);
  }, [i, paused]);
  const t = testimonials[i];
  return /*#__PURE__*/React.createElement("section", {
    className: "sec bg-ivory",
    "data-screen-label": "Testimonios",
    onMouseEnter: () => setPaused(true),
    onMouseLeave: () => setPaused(false)
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))',
      gap: 48,
      alignItems: 'end'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1 / -1',
      display: 'flex',
      flexDirection: 'column',
      gap: 34
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      color: 'var(--text-accent-on-light)'
    }
  }, "Lo que dicen nuestros invitados"), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      minHeight: 'clamp(150px,18vw,200px)'
    }
  }, /*#__PURE__*/React.createElement("blockquote", {
    key: i,
    className: "quote serif"
  }, "\u201C", t.quote, "\u201D")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 24,
      flexWrap: 'wrap',
      paddingTop: 26,
      borderTop: '1px solid var(--line-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    key: 'a' + i,
    style: {
      animation: 'mx-fade .8s var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14,
      fontWeight: 500,
      letterSpacing: '.06em'
    }
  }, t.name), /*#__PURE__*/React.createElement("div", {
    className: "muted-l",
    style: {
      fontSize: 13,
      marginTop: 4
    }
  }, t.context)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "serif",
    style: {
      fontSize: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-accent-on-light)'
    }
  }, String(i + 1).padStart(2, '0')), " ", /*#__PURE__*/React.createElement("span", {
    className: "muted-l"
  }, "/ ", String(n).padStart(2, '0'))), /*#__PURE__*/React.createElement(IconButton, {
    tone: "light",
    label: "Testimonio anterior",
    onClick: () => setI((i - 1 + n) % n)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-left",
    size: 16
  })), /*#__PURE__*/React.createElement(IconButton, {
    tone: "light",
    label: "Siguiente testimonio",
    onClick: () => setI((i + 1) % n)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-right",
    size: 16
  })))))));
}
Object.assign(window, {
  GallerySection,
  TestimonialsSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Gallery.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
function Hero({
  onReserve
}) {
  const {
    Button,
    Icon
  } = window.MX;
  const ref = React.useRef(null);
  const st = useOpenStatus();
  React.useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const y = window.scrollY;
        if (ref.current && y < window.innerHeight * 1.2) ref.current.style.transform = 'translate3d(0,' + y * 0.14 + 'px,0)';
      });
    };
    window.addEventListener('scroll', on, {
      passive: true
    });
    return () => window.removeEventListener('scroll', on);
  }, []);
  return /*#__PURE__*/React.createElement("section", {
    id: "inicio",
    className: "hero",
    "data-screen-label": "Hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "hero-img",
    ref: ref
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MX_DATA.IMG + 'hero-rib-eye.jpg',
    alt: "Filete sellado con hongos silvestres sobre plato de gres oscuro",
    fetchpriority: "high"
  })), /*#__PURE__*/React.createElement("div", {
    className: "hero-shade"
  }), /*#__PURE__*/React.createElement("div", {
    className: "wrap hero-content"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold fu",
    style: {
      animationDelay: '.5s'
    }
  }, "Cocina que inspira"), /*#__PURE__*/React.createElement("h1", {
    className: "serif fu",
    style: {
      color: 'var(--text-on-dark)',
      animationDelay: '.65s'
    }
  }, "Sabores que trascienden."), /*#__PURE__*/React.createElement("p", {
    className: "fu",
    style: {
      margin: 0,
      fontSize: 'var(--type-body-l)',
      lineHeight: 1.6,
      color: 'var(--text-on-dark)',
      maxWidth: 400,
      opacity: 0,
      animationDelay: '.8s'
    }
  }, "Una experiencia culinaria \xFAnica donde cada detalle est\xE1 pensado para ti."), /*#__PURE__*/React.createElement("div", {
    className: "fu",
    style: {
      display: 'flex',
      gap: 14,
      flexWrap: 'wrap',
      marginTop: 38,
      animationDelay: '.95s'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    size: "l",
    onClick: onReserve,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 15
    })
  }, "Reservar mesa"), /*#__PURE__*/React.createElement(Button, {
    size: "l",
    variant: "ghost",
    onClick: () => scrollToId('menu')
  }, "Explorar men\xFA"))), /*#__PURE__*/React.createElement("div", {
    className: "hero-meta fu",
    style: {
      animationDelay: '1.3s'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'clamp(20px,4vw,48px)',
      flexWrap: 'wrap',
      fontSize: 13,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#contacto",
    onClick: e => {
      e.preventDefault();
      scrollToId('contacto');
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 16,
    color: "var(--mx-gold)"
  }), "San Pedro Garza Garc\xEDa, N.L."), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: st.status === 'closed' ? 'var(--mx-error)' : 'var(--mx-success)',
      animation: st.status !== 'closed' ? 'mx-pulse 2.4s infinite' : 'none'
    }
  }), st.label, " \xB7 ", st.detail)), /*#__PURE__*/React.createElement("button", {
    className: "scroll",
    onClick: () => scrollToId('menu'),
    "aria-label": "Desplazarse al men\xFA",
    style: {
      all: 'unset',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      color: 'var(--text-on-dark-muted)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow",
    style: {
      fontSize: 10,
      writingMode: 'vertical-rl'
    }
  }, "Scroll"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 56,
      background: 'var(--line-dark-strong)',
      overflow: 'hidden',
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--mx-gold)',
      animation: 'mx-scroll-cue 2.2s var(--ease-in-out) infinite'
    }
  }))))));
}
function ValueBand() {
  const {
    ValueProp,
    Icon
  } = window.MX;
  const items = [['leaf', 'Ingredientes locales', 'Productos frescos y de temporada.'], ['flame', 'Técnica y pasión', 'Cocina contemporánea.'], ['wine', 'Ambiente exclusivo', 'Espacios diseñados para disfrutar.'], ['hand-heart', 'Atención personalizada', 'Cada visita es única.']];
  return /*#__PURE__*/React.createElement("section", {
    className: "bg-char",
    style: {
      borderBottom: '1px solid var(--line-dark)'
    },
    "aria-label": "Nuestra propuesta"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap vband"
  }, items.map(([ic, t, d], i) => /*#__PURE__*/React.createElement(Reveal, {
    key: t,
    delay: i * 90
  }, /*#__PURE__*/React.createElement(ValueProp, {
    icon: /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 30,
      strokeWidth: 1
    }),
    title: t,
    text: d
  })))));
}
Object.assign(window, {
  Hero,
  ValueBand
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Menu.jsx
try { (() => {
function useFavorites() {
  const [favs, setFavs] = React.useState(() => {
    try {
      return JSON.parse(localStorage.getItem('mx-favs') || '[]');
    } catch (e) {
      return [];
    }
  });
  React.useEffect(() => {
    localStorage.setItem('mx-favs', JSON.stringify(favs));
  }, [favs]);
  const toggle = id => setFavs(f => f.includes(id) ? f.filter(x => x !== id) : [...f, id]);
  return [favs, toggle];
}
function MenuSection({
  onReserve
}) {
  const {
    Tabs,
    DishCard,
    SectionHeader,
    Button,
    ChoiceChip,
    Icon
  } = window.MX;
  const {
    categories,
    menuItems
  } = window.MX_DATA;
  const toast = useToast();
  const [cat, setCat] = React.useState('entradas');
  const [onlyFavs, setOnlyFavs] = React.useState(false);
  const [favs, toggleFav] = useFavorites();
  const [dish, setDish] = React.useState(null);
  const items = onlyFavs ? menuItems.filter(m => favs.includes(m.id)) : menuItems.filter(m => m.cat === cat);
  const fav = m => {
    const was = favs.includes(m.id);
    toggleFav(m.id);
    toast({
      tone: 'info',
      title: 'Favoritos',
      message: m.name + (was ? ' se quitó de tus favoritos.' : ' se agregó a tus favoritos.')
    });
  };
  const catLabel = id => categories.find(c => c.id === id).label;
  return /*#__PURE__*/React.createElement("section", {
    id: "menu",
    className: "sec bg-cream",
    "data-screen-label": "Men\xFA"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    align: "center",
    eyebrow: "Nuestro men\xFA",
    title: "Descubre una selecci\xF3n excepcional",
    description: "Una carta que cambia con las estaciones. Toca cualquier platillo para conocer su historia."
  })), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120,
    style: {
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Tabs, {
    items: categories,
    value: onlyFavs ? '' : cat,
    onChange: id => {
      setOnlyFavs(false);
      setCat(id);
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 16,
      flexWrap: 'wrap',
      margin: '22px 0 26px'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "muted-l",
    style: {
      fontSize: 13
    },
    "aria-live": "polite"
  }, onlyFavs ? 'Tus favoritos' : catLabel(cat), " \xB7 ", items.length, " ", items.length === 1 ? 'platillo' : 'platillos'), /*#__PURE__*/React.createElement(ChoiceChip, {
    tone: "light",
    selected: onlyFavs,
    onClick: () => setOnlyFavs(!onlyFavs),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 12,
      padding: '9px 14px'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 14
  }), " Favoritos (", favs.length, ")"))), /*#__PURE__*/React.createElement("div", {
    className: "menu-grid",
    key: onlyFavs ? 'favs' : cat
  }, items.map((m, i) => /*#__PURE__*/React.createElement(DishCard, {
    key: m.id,
    image: m.image,
    tag: m.tag || (m.image ? null : catLabel(m.cat)),
    name: m.name,
    description: m.description,
    price: fmtPrice(m.price) + (m.unit ? ' · ' + m.unit : ''),
    favorite: favs.includes(m.id),
    onFavorite: () => fav(m),
    onClick: () => setDish(m),
    style: {
      animationDelay: i * 70 + 'ms',
      minHeight: m.image ? undefined : 230
    }
  })), items.length === 0 && /*#__PURE__*/React.createElement("div", {
    style: {
      gridColumn: '1/-1',
      padding: '56px 0',
      textAlign: 'center'
    },
    className: "muted-l"
  }, /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: 26,
      margin: '0 0 8px',
      color: 'var(--text-on-light)'
    }
  }, "A\xFAn no tienes favoritos"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Toca el coraz\xF3n de cualquier platillo para guardarlo aqu\xED."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 44
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    tone: "light",
    onClick: () => {
      const i = categories.findIndex(c => c.id === cat);
      setOnlyFavs(false);
      setCat(categories[(i + 1) % categories.length].id);
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Siguiente: ", catLabel(categories[(categories.findIndex(c => c.id === cat) + 1) % categories.length].id)))), /*#__PURE__*/React.createElement(DishModal, {
    dish: dish,
    onClose: () => setDish(null),
    fav: dish && favs.includes(dish.id),
    onFav: () => dish && fav(dish),
    onReserve: () => {
      setDish(null);
      onReserve();
    },
    catLabel: catLabel
  }));
}
function DishModal({
  dish,
  onClose,
  fav,
  onFav,
  onReserve,
  catLabel
}) {
  const {
    Modal,
    Button,
    IconButton,
    Icon,
    Wordmark
  } = window.MX;
  if (!dish) return null;
  return /*#__PURE__*/React.createElement(Modal, {
    open: !!dish,
    onClose: onClose,
    label: dish.name,
    width: 1080
  }, /*#__PURE__*/React.createElement("div", {
    className: "dish-modal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "ph",
    style: {
      background: 'var(--mx-black)',
      overflow: 'hidden'
    }
  }, dish.image ? /*#__PURE__*/React.createElement("img", {
    src: dish.image,
    alt: dish.name,
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'radial-gradient(ellipse at 50% 40%, #2a241c 0%, #0A0A09 70%)'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "l"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,4vw,52px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold"
  }, catLabel(dish.cat), dish.tag ? ' · ' + dish.tag : ''), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 'clamp(32px,3.6vw,46px)',
      lineHeight: 1.05
    }
  }, dish.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      lineHeight: 1.65,
      color: 'var(--text-on-dark-muted)'
    }
  }, dish.long), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow muted-d",
    style: {
      fontSize: 11,
      marginBottom: 12
    }
  }, "Ingredientes principales"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 8
    }
  }, dish.ingredients.map(x => /*#__PURE__*/React.createElement("span", {
    key: x,
    className: "pill"
  }, x)))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow muted-d",
    style: {
      fontSize: 11,
      marginBottom: 8
    }
  }, "Al\xE9rgenos"), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 14
    }
  }, dish.allergens.length ? dish.allergens.join(', ') : 'Sin alérgenos declarados')), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow muted-d",
    style: {
      fontSize: 11,
      marginBottom: 8
    }
  }, "Precio"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 28,
      color: 'var(--mx-gold)'
    }
  }, fmtPrice(dish.price), dish.unit ? /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      fontFamily: 'var(--font-sans)'
    },
    className: "muted-d"
  }, " / ", dish.unit) : null))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 14,
      padding: '18px 0',
      borderTop: '1px solid var(--line-dark)',
      borderBottom: '1px solid var(--line-dark)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "chef-hat",
    size: 22,
    color: "var(--mx-gold)",
    strokeWidth: 1.1
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow gold",
    style: {
      fontSize: 10,
      marginBottom: 6
    }
  }, "Recomendaci\xF3n del chef"), /*#__PURE__*/React.createElement("div", {
    className: "serif",
    style: {
      fontSize: 19,
      fontStyle: 'italic',
      lineHeight: 1.35
    }
  }, dish.chef))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      marginTop: 'auto'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onReserve,
    style: {
      flex: 1
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Reservar mesa"), /*#__PURE__*/React.createElement(IconButton, {
    label: fav ? 'Quitar de favoritos' : 'Agregar a favoritos',
    active: fav,
    onClick: onFav,
    size: 46
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "heart",
    size: 17
  }))), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 11
    },
    className: "muted-d"
  }, "Informa a tu mesero sobre cualquier alergia o restricci\xF3n alimentaria."))));
}
Object.assign(window, {
  MenuSection,
  DishModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Menu.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Navbar.jsx
try { (() => {
function Navbar({
  onReserve
}) {
  const {
    Wordmark,
    NavLink,
    Button,
    IconButton,
    Icon
  } = window.MX;
  const {
    nav,
    contact
  } = window.MX_DATA;
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [active, setActive] = React.useState('inicio');
  React.useEffect(() => {
    const on = () => setScrolled(window.scrollY > 40);
    on();
    window.addEventListener('scroll', on, {
      passive: true
    });
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), {
      rootMargin: '-45% 0px -50% 0px'
    });
    nav.forEach(n => {
      const el = document.getElementById(n.id);
      el && io.observe(el);
    });
    return () => {
      window.removeEventListener('scroll', on);
      io.disconnect();
    };
  }, []);
  React.useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);
  const go = id => e => {
    e.preventDefault();
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 60 : 0);
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("header", {
    className: 'nav' + (scrolled ? ' scrolled' : '')
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap nav-in"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#inicio",
    onClick: go('inicio'),
    "aria-label": "MEXTAS, inicio"
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "m"
  })), /*#__PURE__*/React.createElement("nav", {
    className: "nav-links",
    "aria-label": "Principal"
  }, nav.map(n => /*#__PURE__*/React.createElement(NavLink, {
    key: n.id,
    href: '#' + n.id,
    active: active === n.id,
    onClick: go(n.id)
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    className: "nav-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    size: "s",
    onClick: onReserve
  }, "Reservar mesa")), /*#__PURE__*/React.createElement("div", {
    className: "nav-burger"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Abrir men\xFA",
    variant: "plain",
    onClick: () => setOpen(true)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "menu",
    size: 24
  }))))), open && /*#__PURE__*/React.createElement("div", {
    className: "drawer",
    role: "dialog",
    "aria-modal": "true",
    "aria-label": "Men\xFA"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    size: "m"
  }), /*#__PURE__*/React.createElement(IconButton, {
    label: "Cerrar men\xFA",
    variant: "plain",
    onClick: () => setOpen(false)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "x",
    size: 24
  }))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 44,
      flex: 1
    }
  }, nav.map((n, i) => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    className: "dl",
    href: '#' + n.id,
    onClick: go(n.id),
    style: {
      animationDelay: 80 + i * 55 + 'ms',
      color: active === n.id ? 'var(--mx-gold)' : undefined
    }
  }, n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    size: "l",
    onClick: () => {
      setOpen(false);
      onReserve();
    },
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, "Reservar mesa"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      fontSize: 13
    },
    className: "muted-d"
  }, /*#__PURE__*/React.createElement("a", {
    href: contact.phoneHref
  }, contact.phone), /*#__PURE__*/React.createElement("span", null, "San Pedro Garza Garc\xEDa")))));
}
window.Navbar = Navbar;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Navbar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Reservation.jsx
try { (() => {
const RES_TYPES = ['Cena', 'Celebración', 'Cena romántica', 'Evento privado', 'Comida de negocios', 'Experiencia gastronómica'];
const toMin = t => {
  const [h, m] = t.split(':').map(Number);
  return h * 60 + m;
};
const toHHMM = m => String(Math.floor(m / 60) % 24).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
function buildSlots(date, pref, people) {
  const d = new Date(date + 'T12:00:00').getDay();
  const h = window.MX_DATA.openingHours.find(x => x.days.includes(d));
  const all = [];
  for (let m = h.open; m <= h.close - 90; m += 30) all.push(m);
  const p = toMin(pref);
  const near = all.slice().sort((a, b) => Math.abs(a - p) - Math.abs(b - p)).slice(0, 7).sort((a, b) => a - b);
  let seed = [...(date + pref + people)].reduce((a, c) => a + c.charCodeAt(0), 0);
  return near.map((m, i) => ({
    t: toHHMM(m),
    free: (seed + i * 7 + Number(people)) % 5 !== 0,
    pref: m === p
  }));
}
function todayISO() {
  const d = new Date();
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 10);
}
function Reservation({
  preset
}) {
  const {
    SectionHeader,
    Input,
    Select,
    Textarea,
    Button,
    ChoiceChip,
    Modal,
    Wordmark,
    Icon
  } = window.MX;
  const toast = useToast();
  const empty = {
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    people: '',
    type: 'Cena',
    comments: ''
  };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [slots, setSlots] = React.useState(null);
  const [slot, setSlot] = React.useState('');
  const [phase, setPhase] = React.useState('idle');
  const [done, setDone] = React.useState(null);
  React.useEffect(() => {
    if (preset && preset.type) setF(x => ({
      ...x,
      type: preset.type
    }));
  }, [preset]);
  const set = k => e => {
    const v = e.target.value;
    setF(x => ({
      ...x,
      [k]: v
    }));
    setErr(x => ({
      ...x,
      [k]: undefined
    }));
    if (['date', 'time', 'people'].includes(k)) {
      setSlots(null);
      setSlot('');
    }
  };
  const ready = f.date && f.time && f.people;
  const check = async () => {
    const e = {};
    if (!f.date) e.date = 'Elige una fecha';
    if (!f.time) e.time = 'Elige una hora';
    if (!f.people) e.people = 'Indica cuántas personas';
    setErr(e);
    if (Object.keys(e).length) return;
    setPhase('checking');
    setSlots(null);
    await wait(900);
    const s = buildSlots(f.date, f.time, f.people);
    setSlots(s);
    const pref = s.find(x => x.pref && x.free);
    setSlot(pref ? pref.t : '');
    setPhase('idle');
  };
  React.useEffect(() => {
    if (ready) check();
  }, [f.date, f.time, f.people]);
  const submit = async ev => {
    ev.preventDefault();
    if (!slots) return check();
    const e = {};
    if (!f.name.trim()) e.name = 'Escribe tu nombre';
    if (!isEmail(f.email)) e.email = 'Ingresa un correo válido';
    if (!isPhone(f.phone)) e.phone = 'Ingresa un teléfono de 10 dígitos';
    if (!slot) e.slot = 'Selecciona un horario disponible';
    setErr(e);
    if (Object.keys(e).length) {
      toast({
        tone: 'error',
        title: 'Revisa tu solicitud',
        message: 'Hay ' + Object.keys(e).length + ' campo(s) por completar.'
      });
      return;
    }
    setPhase('submitting');
    await wait(1400);
    setDone({
      ...f,
      slot,
      folio: 'MX-' + Math.floor(100000 + Math.random() * 899999)
    });
    setPhase('idle');
  };
  const reset = () => {
    setDone(null);
    setF(empty);
    setSlots(null);
    setSlot('');
  };
  const hours = [];
  for (let m = 13 * 60; m <= 22 * 60 + 30; m += 30) hours.push(toHHMM(m));
  const people = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'].map(n => ({
    value: n,
    label: n + (n === '1' ? ' persona' : ' personas')
  }));
  const niceDate = iso => new Date(iso + 'T12:00:00').toLocaleDateString('es-MX', {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  });
  return /*#__PURE__*/React.createElement("section", {
    id: "reservaciones",
    className: "bg-char",
    "data-screen-label": "Reservaciones"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res"
  }, /*#__PURE__*/React.createElement("div", {
    className: "res-ph img-zoom"
  }, /*#__PURE__*/React.createElement("img", {
    src: window.MX_DATA.IMG + 'interior.jpg',
    alt: "Sal\xF3n de MEXTAS con luz c\xE1lida",
    loading: "lazy"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(90deg, rgba(18,18,16,0) 60%, rgba(18,18,16,.9))'
    }
  })), /*#__PURE__*/React.createElement("div", {
    className: "res-form"
  }, /*#__PURE__*/React.createElement(Reveal, null, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Reserva tu mesa",
    title: "Vive una experiencia inolvidable",
    description: "Elige fecha, hora y n\xFAmero de invitados para ver la disponibilidad en tiempo real."
  })), /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      marginTop: 40,
      display: 'flex',
      flexDirection: 'column',
      gap: 16,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    value: f.name,
    onChange: set('name'),
    error: err.name,
    autoComplete: "name",
    placeholder: "Nombre y apellido"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Correo electr\xF3nico",
    type: "email",
    value: f.email,
    onChange: set('email'),
    error: err.email,
    autoComplete: "email",
    placeholder: "tu@correo.com"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono",
    type: "tel",
    value: f.phone,
    onChange: set('phone'),
    error: err.phone,
    autoComplete: "tel",
    placeholder: "81 1234 5678"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Tipo de experiencia",
    value: f.type,
    onChange: set('type'),
    options: RES_TYPES
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid3"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Fecha",
    type: "date",
    min: todayISO(),
    value: f.date,
    onChange: set('date'),
    error: err.date
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Hora",
    placeholder: "Hora",
    value: f.time,
    onChange: set('time'),
    error: err.time,
    options: hours
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Personas",
    placeholder: "Personas",
    value: f.people,
    onChange: set('people'),
    error: err.people,
    options: people
  })), /*#__PURE__*/React.createElement("div", {
    "aria-live": "polite",
    style: {
      minHeight: 20
    }
  }, phase === 'checking' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "shimmer"
  }))), slots && phase !== 'checking' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      animation: 'mx-fade-up .6s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: '50%',
      background: slots.some(s => s.free) ? 'var(--mx-success)' : 'var(--mx-error)'
    }
  }), /*#__PURE__*/React.createElement("span", null, slots.some(s => s.free) ? 'Disponible · ' + niceDate(f.date) : 'Sin disponibilidad para esa fecha')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, slots.map(s => /*#__PURE__*/React.createElement(ChoiceChip, {
    key: s.t,
    selected: slot === s.t,
    disabled: !s.free,
    onClick: () => {
      setSlot(s.t);
      setErr(x => ({
        ...x,
        slot: undefined
      }));
    }
  }, s.t))), err.slot && /*#__PURE__*/React.createElement("span", {
    role: "alert",
    style: {
      fontSize: 12,
      color: 'var(--mx-error)'
    }
  }, err.slot), Number(f.people) >= 8 && /*#__PURE__*/React.createElement("span", {
    className: "muted-d",
    style: {
      fontSize: 12
    }
  }, "\xBFM\xE1s de 10 invitados? ", /*#__PURE__*/React.createElement("a", {
    href: "#experiencias",
    className: "gold",
    onClick: e => {
      e.preventDefault();
      scrollToId('eventos');
    }
  }, "Planea un evento privado"), "."))), /*#__PURE__*/React.createElement(Textarea, {
    label: "Comentarios especiales",
    rows: 3,
    value: f.comments,
    onChange: set('comments'),
    placeholder: "Alergias, celebraciones, preferencias de mesa\u2026"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 22,
      flexWrap: 'wrap',
      marginTop: 6
    }
  }, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "l",
    loading: phase !== 'idle',
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right",
      size: 14
    })
  }, phase === 'checking' ? 'Consultando' : phase === 'submitting' ? 'Enviando solicitud' : slots ? slot ? 'Solicitar reservación · ' + slot : 'Selecciona un horario' : 'Consultar disponibilidad'), /*#__PURE__*/React.createElement("span", {
    className: "muted-d",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-check",
    size: 15,
    color: "var(--mx-gold)"
  }), "Confirmaci\xF3n en menos de 2 horas"))))), /*#__PURE__*/React.createElement(Modal, {
    open: !!done,
    onClose: reset,
    label: "Solicitud recibida",
    width: 560
  }, done && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(36px,6vw,60px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 64,
      height: 64,
      borderRadius: '50%',
      border: '1px solid var(--mx-gold)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'var(--mx-gold)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 26,
    strokeWidth: 1.2
  })), /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold"
  }, "Folio ", done.folio), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 40,
      lineHeight: 1.05
    }
  }, "Solicitud recibida"), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      lineHeight: 1.6
    }
  }, "Tu solicitud de reservaci\xF3n ha sido registrada."), /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr 1fr',
      borderTop: '1px solid var(--line-dark)',
      borderBottom: '1px solid var(--line-dark)',
      padding: '18px 0',
      fontSize: 13
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "muted-d eyebrow",
    style: {
      fontSize: 10
    }
  }, "Fecha"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6,
      textTransform: 'capitalize'
    }
  }, niceDate(done.date))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "muted-d eyebrow",
    style: {
      fontSize: 10
    }
  }, "Hora"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, done.slot)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "muted-d eyebrow",
    style: {
      fontSize: 10
    }
  }, "Mesa"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, done.people, " ", done.people === '1' ? 'persona' : 'personas'))), /*#__PURE__*/React.createElement(Wordmark, {
    size: "s"
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      fontSize: 14
    }
  }, "Te enviaremos una confirmaci\xF3n a ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, done.email), "."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: reset
  }, "Entendido"))));
}
window.Reservation = Reservation;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Reservation.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Shared.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const MXToastCtx = React.createContext(() => {});
function useToast() {
  return React.useContext(MXToastCtx);
}
function ToastHost({
  children
}) {
  const [list, setList] = React.useState([]);
  const push = React.useCallback(t => {
    const id = Math.random().toString(36).slice(2);
    setList(l => [...l.slice(-2), {
      id,
      ...t
    }]);
    setTimeout(() => setList(l => l.filter(x => x.id !== id)), t.duration || 4200);
  }, []);
  const {
    Toast
  } = window.MX;
  return /*#__PURE__*/React.createElement(MXToastCtx.Provider, {
    value: push
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "toasts"
  }, list.map(t => /*#__PURE__*/React.createElement(Toast, {
    key: t.id,
    title: t.title,
    message: t.message,
    tone: t.tone,
    onClose: () => setList(l => l.filter(x => x.id !== t.id))
  }))));
}
function Reveal({
  as = 'div',
  delay = 0,
  className = '',
  style,
  children,
  ...rest
}) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        el.classList.add('in');
        io.disconnect();
      }
    }, {
      rootMargin: '0px 0px -8% 0px'
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const T = as;
  return /*#__PURE__*/React.createElement(T, _extends({
    ref: ref,
    className: 'reveal ' + className,
    style: {
      transitionDelay: delay + 'ms',
      ...style
    }
  }, rest), children);
}
function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  window.scrollTo({
    top: el.getBoundingClientRect().top + window.scrollY - 60,
    behavior: 'smooth'
  });
}
const fmtPrice = n => '$' + n.toLocaleString('es-MX');
function openStatus(now = new Date()) {
  const H = window.MX_DATA.openingHours;
  const d = now.getDay();
  const m = now.getHours() * 60 + now.getMinutes();
  const today = H.find(h => h.days.includes(d));
  const fmt = min => String(Math.floor(min / 60) % 24).padStart(2, '0') + ':' + String(min % 60).padStart(2, '0');
  if (today && m >= today.open && m < today.close) {
    const left = today.close - m;
    return {
      status: left <= 60 ? 'soon' : 'open',
      label: left <= 60 ? 'Cierra pronto · ' + fmt(today.close) : 'Abierto ahora',
      detail: 'Hoy hasta las ' + fmt(today.close),
      today
    };
  }
  let next = today && m < today.open ? 'Hoy a las ' + fmt(today.open) : 'Mañana a las 13:00';
  return {
    status: 'closed',
    label: 'Cerrado ahora',
    detail: 'Abrimos ' + next.charAt(0).toLowerCase() + next.slice(1),
    today
  };
}
function useOpenStatus() {
  const [s, setS] = React.useState(() => openStatus());
  React.useEffect(() => {
    const t = setInterval(() => setS(openStatus()), 60000);
    return () => clearInterval(t);
  }, []);
  return s;
}
const isEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());
const isPhone = v => v.replace(/\D/g, '').length >= 10;
const wait = ms => new Promise(r => setTimeout(r, ms));
Object.assign(window, {
  ToastHost,
  useToast,
  Reveal,
  scrollToId,
  fmtPrice,
  openStatus,
  useOpenStatus,
  isEmail,
  isPhone,
  wait
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Shared.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Visit.jsx
try { (() => {
function VisitSection() {
  const {
    SectionHeader,
    StatusBadge,
    Button,
    Icon
  } = window.MX;
  const {
    openingHours,
    contact
  } = window.MX_DATA;
  const st = useOpenStatus();
  const today = new Date().getDay();
  const [mapOpen, setMapOpen] = React.useState(false);
  const toast = useToast();
  const copy = () => {
    try {
      navigator.clipboard.writeText(contact.address1 + ', ' + contact.address2);
    } catch (e) {}
    toast({
      tone: 'info',
      title: 'Dirección copiada',
      message: 'Pégala en tu app de mapas favorita.'
    });
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contacto",
    className: "sec bg-cream",
    "data-screen-label": "Vis\xEDtanos"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      marginBottom: 52
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    eyebrow: "Vis\xEDtanos",
    title: "Te esperamos en San Pedro"
  })), /*#__PURE__*/React.createElement("div", {
    className: "visit"
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow muted-l",
    style: {
      fontSize: 11,
      marginBottom: 12
    }
  }, "Direcci\xF3n"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 24,
      lineHeight: 1.3
    }
  }, contact.address1, /*#__PURE__*/React.createElement("br", null), contact.address2)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: contact.phoneHref,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--mx-gold-deep)"
  }), contact.phone), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + contact.email,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--mx-gold-deep)"
  }), contact.email), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "car",
    size: 16,
    color: "var(--mx-gold-deep)"
  }), "Valet parking de cortes\xEDa")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    tone: "light",
    variant: "outline",
    size: "s",
    onClick: () => setMapOpen(true),
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 13
    })
  }, "Ver en mapa"), /*#__PURE__*/React.createElement(Button, {
    tone: "light",
    variant: "link",
    size: "s",
    onClick: copy
  }, "Copiar direcci\xF3n"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 100,
    className: "map",
    role: "img",
    "aria-label": "Mapa estilizado de la ubicaci\xF3n de MEXTAS"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '14%',
      top: '20%',
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#8C8375'
    }
  }, "Calzada del Valle"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: '10%',
      bottom: '18%',
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#8C8375'
    }
  }, "Parque Rufino Tamayo"), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '8%',
      bottom: '10%',
      fontSize: 10,
      letterSpacing: '.18em',
      textTransform: 'uppercase',
      color: '#8C8375'
    }
  }, "Av. Vasconcelos"), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: '52%',
      top: '46%',
      transform: 'translate(-50%,-100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--mx-black)',
      color: 'var(--text-on-dark)',
      padding: '10px 14px',
      fontFamily: 'var(--font-display)',
      fontSize: 16,
      letterSpacing: '.3em',
      whiteSpace: 'nowrap'
    }
  }, "MEXTAS"), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 1,
      height: 22,
      background: 'var(--mx-black)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      background: 'var(--mx-gold)',
      boxShadow: '0 0 0 8px rgba(201,160,106,.25)',
      animation: 'mx-pulse 2.4s infinite'
    }
  }))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 200
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      marginBottom: 6,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow muted-l",
    style: {
      fontSize: 11
    }
  }, "Horarios"), /*#__PURE__*/React.createElement(StatusBadge, {
    status: st.status,
    label: st.label,
    tone: "light"
  })), openingHours.map(h => {
    const on = h.days.includes(today);
    return /*#__PURE__*/React.createElement("div", {
      key: h.label,
      className: "hours-row",
      style: {
        fontWeight: on ? 500 : 400
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 10
      }
    }, on && /*#__PURE__*/React.createElement("span", {
      style: {
        width: 5,
        height: 5,
        background: 'var(--mx-gold-deep)',
        borderRadius: '50%'
      }
    }), h.label), /*#__PURE__*/React.createElement("span", {
      className: on ? '' : 'muted-l'
    }, h.text));
  }), /*#__PURE__*/React.createElement("p", {
    className: "muted-l",
    style: {
      fontSize: 13,
      margin: '16px 0 0'
    }
  }, st.detail, ". Cocina abierta hasta una hora antes del cierre.")))), /*#__PURE__*/React.createElement(MapModal, {
    open: mapOpen,
    onClose: () => setMapOpen(false)
  }));
}
function MapModal({
  open,
  onClose
}) {
  const {
    Modal,
    Button,
    Icon
  } = window.MX;
  const {
    contact
  } = window.MX_DATA;
  return /*#__PURE__*/React.createElement(Modal, {
    open: open,
    onClose: onClose,
    label: "C\xF3mo llegar",
    width: 560
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 'clamp(28px,5vw,48px)',
      display: 'flex',
      flexDirection: 'column',
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "eyebrow gold"
  }, "C\xF3mo llegar"), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 34
    }
  }, "Abrir en tu app de mapas"), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0
    }
  }, contact.address1, ", ", contact.address2), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 10,
      marginTop: 8
    }
  }, ['Google Maps', 'Apple Maps', 'Waze'].map(m => /*#__PURE__*/React.createElement(Button, {
    key: m,
    variant: "ghost",
    fullWidth: true,
    onClick: onClose,
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right",
      size: 13
    }),
    style: {
      justifyContent: 'space-between'
    }
  }, m))), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      fontSize: 12
    }
  }, "Demostraci\xF3n: los enlaces externos est\xE1n deshabilitados.")));
}
const MOTIVOS = ['Reservación', 'Evento privado', 'Cena corporativa', 'Información', 'Prensa', 'Otro'];
function ContactSection() {
  const {
    SectionHeader,
    Input,
    Select,
    Textarea,
    Button,
    Icon
  } = window.MX;
  const {
    contact
  } = window.MX_DATA;
  const empty = {
    name: '',
    email: '',
    phone: '',
    reason: '',
    message: ''
  };
  const [f, setF] = React.useState(empty);
  const [err, setErr] = React.useState({});
  const [state, setState] = React.useState('idle');
  const set = k => e => {
    setF(x => ({
      ...x,
      [k]: e.target.value
    }));
    setErr(x => ({
      ...x,
      [k]: undefined
    }));
    if (state === 'error') setState('idle');
  };
  const submit = async ev => {
    ev.preventDefault();
    const e = {};
    if (!f.name.trim()) e.name = 'Escribe tu nombre';
    if (!isEmail(f.email)) e.email = 'Ingresa un correo válido';
    if (f.phone && !isPhone(f.phone)) e.phone = 'Teléfono incompleto';
    if (!f.reason) e.reason = 'Selecciona un motivo';
    if (f.message.trim().length < 10) e.message = 'Cuéntanos un poco más (mín. 10 caracteres)';
    setErr(e);
    if (Object.keys(e).length) {
      setState('error');
      return;
    }
    setState('loading');
    await wait(1400);
    setState('success');
  };
  return /*#__PURE__*/React.createElement("section", {
    className: "sec bg-char",
    "data-screen-label": "Contacto"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap contact"
  }, /*#__PURE__*/React.createElement(Reveal, {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 30
    }
  }, /*#__PURE__*/React.createElement(SectionHeader, {
    tone: "dark",
    eyebrow: "Contacto",
    title: "Estamos para ti",
    description: "Para reservaciones del mismo d\xEDa, ll\xE1manos directamente. Para todo lo dem\xE1s, escr\xEDbenos."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 14,
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: contact.phoneHref,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone",
    size: 16,
    color: "var(--mx-gold)"
  }), contact.phone), /*#__PURE__*/React.createElement("a", {
    href: 'mailto:' + contact.email,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail",
    size: 16,
    color: "var(--mx-gold)"
  }), contact.email), /*#__PURE__*/React.createElement("span", {
    className: "muted-d",
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "clock",
    size: 16,
    color: "var(--mx-gold)"
  }), "Respondemos en menos de 24 horas"))), /*#__PURE__*/React.createElement(Reveal, {
    delay: 120
  }, state === 'success' ? /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: 420,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      gap: 18,
      borderTop: '1px solid var(--mx-gold)',
      paddingTop: 36,
      animation: 'mx-fade-up .7s var(--ease-editorial)'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail-check",
    size: 34,
    strokeWidth: 1,
    color: "var(--mx-gold)"
  }), /*#__PURE__*/React.createElement("h3", {
    className: "serif",
    style: {
      margin: 0,
      fontSize: 40
    }
  }, "Gracias, ", f.name.split(' ')[0], "."), /*#__PURE__*/React.createElement("p", {
    className: "muted-d",
    style: {
      margin: 0,
      lineHeight: 1.6,
      maxWidth: 440
    }
  }, "Recibimos tu mensaje sobre ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-on-dark)'
    }
  }, f.reason.toLowerCase()), ". Te responderemos a ", f.email, "."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setF(empty);
      setState('idle');
    }
  }, "Enviar otro mensaje"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Nombre",
    value: f.name,
    onChange: set('name'),
    error: err.name,
    autoComplete: "name"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    value: f.email,
    onChange: set('email'),
    error: err.email,
    autoComplete: "email"
  })), /*#__PURE__*/React.createElement("div", {
    className: "grid2"
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Tel\xE9fono (opcional)",
    type: "tel",
    value: f.phone,
    onChange: set('phone'),
    error: err.phone,
    autoComplete: "tel"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Motivo",
    placeholder: "Selecciona",
    value: f.reason,
    onChange: set('reason'),
    error: err.reason,
    options: MOTIVOS
  })), /*#__PURE__*/React.createElement(Textarea, {
    label: "Mensaje",
    rows: 5,
    value: f.message,
    onChange: set('message'),
    error: err.message
  }), state === 'error' && /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      fontSize: 13,
      color: 'var(--mx-error)',
      animation: 'mx-fade .4s'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "circle-alert",
    size: 15
  }), "Revisa los campos marcados antes de enviar."), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    size: "l",
    loading: state === 'loading',
    iconRight: /*#__PURE__*/React.createElement(Icon, {
      name: "send",
      size: 14
    })
  }, state === 'loading' ? 'Enviando' : 'Enviar mensaje'))))));
}
Object.assign(window, {
  VisitSection,
  ContactSection,
  MapModal
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Visit.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/data.js
try { (() => {
window.MX_DATA = function () {
  var IMG = '../../assets/img/';
  var categories = [{
    id: 'entradas',
    label: 'Entradas'
  }, {
    id: 'fuertes',
    label: 'Platos fuertes'
  }, {
    id: 'mariscos',
    label: 'Mariscos'
  }, {
    id: 'pastas',
    label: 'Pastas'
  }, {
    id: 'postres',
    label: 'Postres'
  }, {
    id: 'cocteleria',
    label: 'Coctelería'
  }, {
    id: 'vinos',
    label: 'Vinos'
  }];
  var menuItems = [{
    id: 'burrata',
    cat: 'entradas',
    name: 'Burrata al Heirloom',
    price: 220,
    image: IMG + 'burrata.jpg',
    tag: 'Favorito de la casa',
    description: 'Burrata artesanal, tomates heirloom, albahaca y reducción balsámica.',
    long: 'Burrata elaborada cada mañana por un productor de Nuevo León, sobre tomates heirloom de temporada confitados a baja temperatura, aceite de albahaca y una reducción balsámica de doce años.',
    ingredients: ['Burrata artesanal', 'Tomate heirloom', 'Albahaca genovesa', 'Balsámico de Módena', 'Sal de Colima'],
    allergens: ['Lácteos'],
    chef: 'Acompáñala con una copa de Sauvignon Blanc del Valle de Guadalupe.'
  }, {
    id: 'tartar',
    cat: 'entradas',
    name: 'Tartar de Res Añejada',
    price: 290,
    tag: 'Nuevo',
    description: 'Res añejada 28 días, yema curada, alcaparra frita y pan de masa madre.',
    long: 'Corte de res añejado en seco durante 28 días, picado a cuchillo y aderezado al momento frente a la mesa.',
    ingredients: ['Res añejada', 'Yema curada', 'Alcaparra', 'Chalota', 'Masa madre'],
    allergens: ['Huevo', 'Gluten'],
    chef: 'Pídelo con el mezcal de la casa.'
  }, {
    id: 'tostada',
    cat: 'entradas',
    name: 'Tostada de Atún Aleta Azul',
    price: 260,
    description: 'Atún aleta azul, aguacate tatemado, chile serrano y aceite de ajonjolí.',
    long: 'Atún de Ensenada marinado en soya de la casa, sobre tostada de maíz nixtamalizado.',
    ingredients: ['Atún aleta azul', 'Aguacate', 'Serrano', 'Ajonjolí', 'Maíz criollo'],
    allergens: ['Pescado', 'Ajonjolí', 'Soya'],
    chef: 'Ideal para compartir al centro.'
  }, {
    id: 'ribeye',
    cat: 'fuertes',
    name: 'Rib Eye al Carbón',
    price: 580,
    image: IMG + 'rib-eye.jpg',
    tag: 'Firma del chef',
    description: 'Rib eye prime, vegetales asados y mantequilla de finas hierbas.',
    long: 'Rib eye USDA Prime de 450 g, sellado al carbón de encino y terminado con mantequilla de finas hierbas. Se sirve con vegetales de temporada asados a la brasa.',
    ingredients: ['Rib eye Prime 450 g', 'Mantequilla de hierbas', 'Zanahoria baby', 'Espárrago', 'Cebolla cambray'],
    allergens: ['Lácteos'],
    chef: 'Recomendamos término medio y un Cabernet Sauvignon de Parras.'
  }, {
    id: 'filete',
    cat: 'fuertes',
    name: 'Filete en Reducción de Hongos',
    price: 520,
    image: IMG + 'hero-rib-eye.jpg',
    description: 'Filete de res, puré de coliflor rostizada, hongos silvestres y jugo de carne.',
    long: 'Centro de filete sellado en sartén de hierro, sobre un puré sedoso de coliflor rostizada, con hongos silvestres salteados y un jugo de carne reducido durante 48 horas.',
    ingredients: ['Filete de res', 'Coliflor rostizada', 'Hongos silvestres', 'Jugo de carne', 'Brotes'],
    allergens: ['Lácteos'],
    chef: 'Un plato pensado para Malbec o Syrah.'
  }, {
    id: 'pato',
    cat: 'fuertes',
    name: 'Pato en Mole de la Casa',
    price: 480,
    description: 'Pechuga de pato, mole negro de 32 ingredientes y plátano macho.',
    long: 'Mole negro preparado en casa cada semana, con pechuga de pato de Querétaro cocinada a punto rosado.',
    ingredients: ['Pechuga de pato', 'Mole negro', 'Plátano macho', 'Ajonjolí'],
    allergens: ['Frutos secos', 'Ajonjolí'],
    chef: 'Nuestra reinterpretación del mole de la abuela del chef.'
  }, {
    id: 'pulpo',
    cat: 'mariscos',
    name: 'Pulpo al Olivo',
    price: 360,
    image: IMG + 'pulpo.jpg',
    tag: 'Temporada',
    description: 'Pulpo asado, cremoso de papa, olivas kalamata y aceite de oliva.',
    long: 'Pulpo del Golfo cocido lentamente y terminado a la brasa, sobre un cremoso de papa y salsa de olivo inspirada en la costa del Pacífico.',
    ingredients: ['Pulpo del Golfo', 'Papa cambray', 'Oliva kalamata', 'Aceite de oliva extra virgen', 'Paprika ahumada'],
    allergens: ['Moluscos', 'Lácteos'],
    chef: 'Marida con un Albariño bien frío.'
  }, {
    id: 'callo',
    cat: 'mariscos',
    name: 'Callo de Hacha Tatemado',
    price: 420,
    description: 'Callo de hacha, beurre blanc de chile guajillo y elote tierno.',
    long: 'Callo de hacha de Sonora sellado a alta temperatura con una emulsión de mantequilla y guajillo.',
    ingredients: ['Callo de hacha', 'Guajillo', 'Mantequilla', 'Elote'],
    allergens: ['Moluscos', 'Lácteos'],
    chef: 'Disponible según la pesca del día.'
  }, {
    id: 'robalo',
    cat: 'mariscos',
    name: 'Robalo a la Talla',
    price: 450,
    description: 'Robalo con adobo de chiles secos, ensalada de hinojo y cítricos.',
    long: 'Robalo fresco marinado en adobo rojo y asado a la leña.',
    ingredients: ['Robalo', 'Adobo de chiles', 'Hinojo', 'Naranja'],
    allergens: ['Pescado'],
    chef: 'Para compartir entre dos.'
  }, {
    id: 'risotto',
    cat: 'pastas',
    name: 'Risotto de Hongos y Trufa',
    price: 390,
    description: 'Arroz carnaroli, hongos silvestres, parmesano añejo y trufa negra.',
    long: 'Carnaroli cocinado al momento con fondo de hongos, terminado con parmesano de 24 meses y trufa rallada en la mesa.',
    ingredients: ['Carnaroli', 'Hongos silvestres', 'Parmesano 24 meses', 'Trufa negra'],
    allergens: ['Lácteos'],
    chef: 'Pide trufa extra en temporada.'
  }, {
    id: 'tagliatelle',
    cat: 'pastas',
    name: 'Tagliatelle al Ragú de Res',
    price: 340,
    description: 'Pasta fresca hecha en casa, ragú de costilla braseada ocho horas.',
    long: 'Pasta al huevo laminada cada mañana, con ragú de costilla de res cocinado lentamente con vino tinto.',
    ingredients: ['Pasta al huevo', 'Costilla de res', 'Vino tinto', 'Parmesano'],
    allergens: ['Gluten', 'Huevo', 'Lácteos'],
    chef: 'Un clásico que nunca sale de la carta.'
  }, {
    id: 'esfera',
    cat: 'postres',
    name: 'Esfera de Chocolate',
    price: 180,
    image: IMG + 'esfera-chocolate.jpg',
    tag: 'Firma del chef',
    description: 'Mousse de chocolate oscuro, crujiente de avellana y caramelo.',
    long: 'Esfera de chocolate oscuro 70% de Tabasco, rellena de mousse y crujiente de avellana, sobre crema de caramelo salado.',
    ingredients: ['Chocolate 70%', 'Avellana', 'Caramelo salado', 'Crema'],
    allergens: ['Lácteos', 'Frutos secos', 'Huevo'],
    chef: 'Termínala con un café de olla o un oporto.'
  }, {
    id: 'tarta',
    cat: 'postres',
    name: 'Tarta de Elote y Cajeta',
    price: 160,
    description: 'Tarta tibia de elote, cajeta de Celaya y helado de queso fresco.',
    long: 'Postre de temporada que honra los sabores del campo mexicano.',
    ingredients: ['Elote', 'Cajeta', 'Queso fresco', 'Mantequilla'],
    allergens: ['Lácteos', 'Gluten', 'Huevo'],
    chef: 'Se sirve tibia; espera cinco minutos.'
  }, {
    id: 'negroni',
    cat: 'cocteleria',
    name: 'Negroni de Cacao',
    price: 240,
    description: 'Gin, vermut rojo y bitter infusionado con nib de cacao.',
    long: 'Nuestra versión del clásico, con una infusión de 72 horas de cacao de Tabasco.',
    ingredients: ['Gin', 'Vermut rojo', 'Bitter', 'Cacao'],
    allergens: [],
    chef: 'Aperitivo ideal antes de la cena degustación.'
  }, {
    id: 'mezcalita',
    cat: 'cocteleria',
    name: 'Mezcalita de Tamarindo',
    price: 210,
    description: 'Mezcal espadín, tamarindo tatemado, chile piquín y sal de gusano.',
    long: 'Balance entre ahumado, ácido y picante.',
    ingredients: ['Mezcal espadín', 'Tamarindo', 'Piquín', 'Sal de gusano'],
    allergens: [],
    chef: 'Acompaña perfecto la tostada de atún.'
  }, {
    id: 'spritz',
    cat: 'cocteleria',
    name: 'Spritz de Jamaica',
    price: 190,
    description: 'Espumoso, aperitivo de jamaica y romero.',
    long: 'Ligero, floral y refrescante.',
    ingredients: ['Vino espumoso', 'Jamaica', 'Romero'],
    allergens: ['Sulfitos'],
    chef: 'Nuestra bebida de terraza.'
  }, {
    id: 'sb',
    cat: 'vinos',
    name: 'Sauvignon Blanc · Valle de Guadalupe',
    price: 1150,
    unit: 'botella',
    description: 'Blanco fresco, notas cítricas y minerales. Copa $260.',
    long: 'Selección de nuestra sommelier de un productor boutique de Baja California.',
    ingredients: ['Sauvignon Blanc 100%'],
    allergens: ['Sulfitos'],
    chef: 'Con la burrata o el pulpo.'
  }, {
    id: 'cab',
    cat: 'vinos',
    name: 'Cabernet Sauvignon · Parras',
    price: 1480,
    unit: 'botella',
    description: 'Tinto con cuerpo, fruta negra y taninos firmes. Copa $320.',
    long: 'De una de las bodegas más antiguas de América, en Coahuila.',
    ingredients: ['Cabernet Sauvignon 100%'],
    allergens: ['Sulfitos'],
    chef: 'El compañero natural del Rib Eye.'
  }, {
    id: 'malbec',
    cat: 'vinos',
    name: 'Malbec Reserva · Mendoza',
    price: 1690,
    unit: 'botella',
    description: 'Violetas, ciruela y roble francés 14 meses.',
    long: 'Malbec de altura con gran estructura.',
    ingredients: ['Malbec 100%'],
    allergens: ['Sulfitos'],
    chef: 'Para el filete en reducción de hongos.'
  }];
  var experiences = [{
    id: 'degustacion',
    title: 'Cena degustación',
    text: 'Una experiencia de varios tiempos diseñada por nuestro chef.',
    image: IMG + 'esfera-chocolate.jpg',
    meta: '7 tiempos · 2 h 30 min',
    price: 'Desde $1,850 p.p.',
    points: ['Menú de temporada', 'Aperitivo de bienvenida', 'Petit fours'],
    resType: 'Experiencia gastronómica'
  }, {
    id: 'maridaje',
    title: 'Maridaje',
    text: 'Selección de vinos cuidadosamente elegidos.',
    image: IMG + 'filler',
    meta: '5 copas · sommelier',
    price: '+ $980 p.p.',
    points: ['Vinos mexicanos y del mundo', 'Guía de la sommelier', 'Complemento de la degustación'],
    resType: 'Experiencia gastronómica'
  }, {
    id: 'mesa',
    title: 'Mesa del chef',
    text: 'Una experiencia cercana al proceso creativo de nuestra cocina.',
    image: IMG + 'rib-eye.jpg',
    meta: '6–8 invitados · cocina abierta',
    price: 'Desde $2,600 p.p.',
    points: ['Frente a la cocina', 'Platos fuera de carta', 'Conversación con el chef'],
    resType: 'Experiencia gastronómica'
  }, {
    id: 'privados',
    title: 'Eventos privados',
    text: 'Un espacio exclusivo para ocasiones especiales.',
    image: IMG + 'interior.jpg',
    meta: 'Hasta 80 invitados',
    price: 'Cotización a medida',
    points: ['Salón privado', 'Menú personalizado', 'Coordinador dedicado'],
    resType: 'Evento privado'
  }];
  experiences[1].image = null;
  var groupOptions = [{
    id: 'privado',
    icon: 'glass-water',
    title: 'Eventos privados',
    text: 'Celebraciones y reuniones privadas.',
    capacity: '12 – 80 invitados',
    eventType: 'Reunión privada'
  }, {
    id: 'corporativo',
    icon: 'briefcase',
    title: 'Cenas corporativas',
    text: 'Experiencias para equipos, clientes y socios.',
    capacity: '10 – 60 invitados',
    eventType: 'Cena corporativa'
  }, {
    id: 'especial',
    icon: 'sparkles',
    title: 'Eventos especiales',
    text: 'Presentaciones, aniversarios y experiencias gastronómicas.',
    capacity: 'Espacio completo',
    eventType: 'Presentación de producto'
  }];
  var testimonials = [{
    quote: 'Una de las experiencias gastronómicas más memorables que hemos tenido.',
    name: 'Mariana R.',
    context: 'Cena degustación · Aniversario'
  }, {
    quote: 'El servicio, la comida y el ambiente están perfectamente equilibrados.',
    name: 'Carlos M.',
    context: 'Cena de negocios'
  }, {
    quote: 'Organizamos la cena de fin de año de nuestro equipo y cada detalle fue impecable.',
    name: 'Lucía G.',
    context: 'Evento corporativo · 42 invitados'
  }, {
    quote: 'La mesa del chef es otra forma de entender la cocina. Volveremos pronto.',
    name: 'Andrés P.',
    context: 'Mesa del chef'
  }];
  var galleryItems = [{
    src: IMG + 'interior.jpg',
    alt: 'Salón principal de MEXTAS al anochecer',
    caption: 'El salón',
    size: 'wide',
    pos: 'center'
  }, {
    src: IMG + 'burrata.jpg',
    alt: 'Burrata al Heirloom',
    caption: 'Burrata al Heirloom',
    size: 'tall',
    pos: 'center'
  }, {
    src: IMG + 'hero-rib-eye.jpg',
    alt: 'Filete en reducción de hongos',
    caption: 'Filete en reducción de hongos',
    size: 'std',
    pos: '70% center'
  }, {
    src: IMG + 'pulpo.jpg',
    alt: 'Pulpo al Olivo',
    caption: 'Pulpo al Olivo',
    size: 'std',
    pos: 'center'
  }, {
    src: IMG + 'interior.jpg',
    alt: 'La barra y la cava',
    caption: 'La cava',
    size: 'tall',
    pos: '78% center'
  }, {
    src: IMG + 'rib-eye.jpg',
    alt: 'Rib Eye al Carbón',
    caption: 'Rib Eye al Carbón',
    size: 'wide',
    pos: 'center'
  }, {
    src: IMG + 'esfera-chocolate.jpg',
    alt: 'Esfera de Chocolate',
    caption: 'Esfera de Chocolate',
    size: 'std',
    pos: 'center'
  }];
  var openingHours = [{
    label: 'Lunes – Jueves',
    days: [1, 2, 3, 4],
    open: 13 * 60,
    close: 23 * 60,
    text: '13:00 – 23:00'
  }, {
    label: 'Viernes – Sábado',
    days: [5, 6],
    open: 13 * 60,
    close: 24 * 60,
    text: '13:00 – 00:00'
  }, {
    label: 'Domingo',
    days: [0],
    open: 13 * 60,
    close: 18 * 60,
    text: '13:00 – 18:00'
  }];
  var contact = {
    address1: 'Av. del Valle 123, Col. Del Valle',
    address2: 'San Pedro Garza García, N.L. 66220',
    phone: '(81) 1234 5678',
    phoneHref: 'tel:+528112345678',
    email: 'hola@mextasrestaurante.mx'
  };
  var nav = [{
    id: 'inicio',
    label: 'Inicio'
  }, {
    id: 'menu',
    label: 'Menú'
  }, {
    id: 'nosotros',
    label: 'Nosotros'
  }, {
    id: 'experiencias',
    label: 'Experiencia'
  }, {
    id: 'reservaciones',
    label: 'Reservaciones'
  }, {
    id: 'galeria',
    label: 'Galería'
  }, {
    id: 'contacto',
    label: 'Contacto'
  }];
  return {
    categories: categories,
    menuItems: menuItems,
    experiences: experiences,
    groupOptions: groupOptions,
    testimonials: testimonials,
    galleryItems: galleryItems,
    openingHours: openingHours,
    contact: contact,
    nav: nav,
    IMG: IMG
  };
}();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/data.js", error: String((e && e.message) || e) }); }

// ui_kits/website/ds-loader.js
try { (() => {
(function () {
  var NS = 'MextasDesignSystem_ce1b9d';
  var files = ['brand/Wordmark', 'brand/Icon', 'actions/Button', 'actions/IconButton', 'forms/Input', 'forms/Select', 'forms/Textarea', 'forms/ChoiceChip', 'navigation/Tabs', 'navigation/NavLink', 'content/SectionHeader', 'content/DishCard', 'content/Stat', 'content/ValueProp', 'feedback/Modal', 'feedback/Toast', 'feedback/StatusBadge'];
  async function fallback() {
    var ns = {};
    for (var i = 0; i < files.length; i++) {
      var src = await (await fetch('../../components/' + files[i] + '.jsx')).text();
      src = src.replace(/^import .*$/mg, '').replace(/export function (\w+)/g, 'ns.$1 = function $1');
      var out = Babel.transform(src, {
        presets: ['react']
      }).code;
      new Function('React', 'ns', out)(React, ns);
    }
    return ns;
  }
  window.MX_DS_READY = new Promise(function (res) {
    var s = document.createElement('script');
    s.src = '../../_ds_bundle.js';
    var done = function (ns) {
      window[NS] = ns;
      window.MX = ns;
      res(ns);
    };
    s.onload = function () {
      window[NS] && window[NS].Button ? done(window[NS]) : fallback().then(done);
    };
    s.onerror = function () {
      fallback().then(done);
    };
    document.head.appendChild(s);
  });
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/ds-loader.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Wordmark = __ds_scope.Wordmark;

__ds_ns.DishCard = __ds_scope.DishCard;

__ds_ns.SectionHeader = __ds_scope.SectionHeader;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.ValueProp = __ds_scope.ValueProp;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.StatusBadge = __ds_scope.StatusBadge;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ChoiceChip = __ds_scope.ChoiceChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
