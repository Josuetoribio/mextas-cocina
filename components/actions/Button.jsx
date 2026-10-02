import React from 'react';
const PAD = { s: '10px 18px', m: '14px 26px', l: '18px 34px' };
const FS = { s: 11, m: 12, l: 13 };
export function Button({ children, variant = 'primary', tone = 'dark', size = 'm', iconRight, iconLeft, loading = false, disabled = false, fullWidth = false, type = 'button', href, onClick, style, ...rest }) {
  const [h, setH] = React.useState(false);
  const [p, setP] = React.useState(false);
  const onDark = tone === 'dark';
  const base = onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  const v = {
    primary: { background: h ? 'var(--action-primary-bg-hover)' : 'var(--action-primary-bg)', color: 'var(--action-primary-fg)', border: '1px solid transparent' },
    outline: { background: h ? 'var(--mx-gold)' : 'transparent', color: h ? 'var(--action-primary-fg)' : (onDark ? 'var(--mx-gold)' : 'var(--text-on-light)'), border: '1px solid ' + (onDark ? 'var(--mx-gold)' : 'var(--line-light-strong)') },
    ghost: { background: h ? (onDark ? 'rgba(243,238,231,.06)' : 'rgba(26,24,20,.05)') : 'transparent', color: base, border: '1px solid ' + (onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)') },
    link: { background: 'transparent', color: h ? 'var(--mx-gold)' : base, border: '1px solid transparent', padding: '6px 0' },
  }[variant];
  const off = disabled || loading;
  const Tag = href ? 'a' : 'button';
  return (
    <Tag href={href} type={href ? undefined : type} disabled={href ? undefined : off} aria-busy={loading || undefined} onClick={off ? undefined : onClick}
      onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }} onMouseDown={() => setP(true)} onMouseUp={() => setP(false)}
      style={{ display: fullWidth ? 'flex' : 'inline-flex', width: fullWidth ? '100%' : undefined, alignItems: 'center', justifyContent: 'center', gap: 12, padding: PAD[size], fontFamily: 'var(--font-sans)', fontSize: FS[size], fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', lineHeight: 1, borderRadius: 'var(--radius-0)', cursor: off ? 'not-allowed' : 'pointer', opacity: disabled ? .45 : 1, transition: 'background var(--dur-base) var(--ease-out), color var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)', transform: p && !off ? 'scale(.98)' : 'none', textDecoration: 'none', boxSizing: 'border-box', whiteSpace: 'nowrap', ...v, ...style }} {...rest}>
      {loading && <span aria-hidden="true" style={{ width: 12, height: 12, border: '1px solid currentColor', borderRightColor: 'transparent', borderRadius: '50%', animation: 'mx-spin .8s linear infinite' }} />}
      {!loading && iconLeft}
      <span>{children}</span>
      {!loading && iconRight && <span style={{ display: 'inline-flex', transition: 'transform var(--dur-base) var(--ease-editorial)', transform: h ? 'translateX(4px)' : 'none' }}>{iconRight}</span>}
    </Tag>
  );
}
