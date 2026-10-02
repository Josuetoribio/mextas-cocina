import React from 'react';
export function NavLink({ children, href = '#', active = false, tone = 'dark', onClick, style }) {
  const onDark = tone === 'dark';
  return (
    <a href={href} onClick={onClick} className="mx-u" aria-current={active ? 'true' : undefined}
      style={{ fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: active ? 'var(--mx-gold)' : (onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)'), textDecoration: 'none', transition: 'color var(--dur-base) var(--ease-out)', ...style }}>
      {children}
    </a>
  );
}
