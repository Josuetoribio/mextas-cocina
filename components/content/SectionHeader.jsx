import React from 'react';
export function SectionHeader({ eyebrow, title, description, align = 'left', tone = 'light', as = 'h2', style }) {
  const onDark = tone === 'dark';
  const H = as;
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: align === 'center' ? 'center' : 'flex-start', textAlign: align, maxWidth: align === 'center' ? 720 : 620, marginInline: align === 'center' ? 'auto' : undefined, ...style }}>
      {eyebrow && <span style={{ fontFamily: 'var(--font-sans)', fontSize: 'var(--type-eyebrow)', fontWeight: 500, letterSpacing: 'var(--tracking-eyebrow)', textTransform: 'uppercase', color: onDark ? 'var(--text-accent)' : 'var(--text-on-light)' }}>{eyebrow}</span>}
      <H style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 'var(--type-display-m)', lineHeight: 1.08, letterSpacing: 'var(--tracking-display)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)', textWrap: 'balance' }}>{title}</H>
      {description && <p style={{ margin: 0, fontSize: 'var(--type-body)', lineHeight: 'var(--leading-body)', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)', textWrap: 'pretty' }}>{description}</p>}
    </div>
  );
}
