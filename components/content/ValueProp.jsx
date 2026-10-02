import React from 'react';
export function ValueProp({ icon, title, text, style }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 16, ...style }}>
      <span style={{ color: 'var(--mx-gold)', display: 'flex', flex: 'none' }}>{icon}</span>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: 'var(--mx-gold)' }}>{title}</span>
        <span style={{ fontSize: 13, color: 'var(--text-on-dark-muted)' }}>{text}</span>
      </span>
    </div>
  );
}
