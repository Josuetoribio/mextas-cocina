import React from 'react';
export function Stat({ value, label, tone = 'light', style }) {
  const onDark = tone === 'dark';
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8, ...style }}>
      <span style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem,4vw,3.5rem)', fontWeight: 400, lineHeight: 1, color: onDark ? 'var(--mx-gold)' : 'var(--text-accent-on-light)' }}>{value}</span>
      <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)' }}>{label}</span>
    </div>
  );
}
