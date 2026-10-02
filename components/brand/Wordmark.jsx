import React from 'react';
const SIZES = { s: [18, 8], m: [26, 9], l: [44, 12] };
export function Wordmark({ tone = 'dark', size = 'm', subtitle = true, name = 'MEXTAS', tagline = 'Cocina contemporánea', style }) {
  const [fs, ts] = SIZES[size] || SIZES.m;
  const color = tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)';
  return (
    <span style={{ display: 'inline-flex', flexDirection: 'column', gap: size === 'l' ? 10 : 5, color, lineHeight: 1, ...style }}>
      <span style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: fs, letterSpacing: 'var(--tracking-wordmark)', marginRight: '-.42em' }}>{name}</span>
      {subtitle && <span style={{ fontFamily: 'var(--font-sans)', fontSize: ts, fontWeight: 500, letterSpacing: '.3em', textTransform: 'uppercase', opacity: .8 }}>{tagline}</span>}
    </span>
  );
}
