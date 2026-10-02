import React from 'react';
export function StatusBadge({ status = 'open', label, tone = 'dark', style }) {
  const c = status === 'open' ? 'var(--mx-success)' : status === 'soon' ? 'var(--mx-gold)' : 'var(--mx-error)';
  const text = label || (status === 'open' ? 'Abierto ahora' : status === 'soon' ? 'Cierra pronto' : 'Cerrado');
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 12px', border: '1px solid ' + (tone === 'dark' ? 'var(--line-dark-strong)' : 'var(--line-light-strong)'), fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: tone === 'dark' ? 'var(--text-on-dark)' : 'var(--text-on-light)', ...style }}>
      <span aria-hidden="true" style={{ width: 7, height: 7, borderRadius: '50%', background: c, animation: status === 'open' ? 'mx-pulse 2.4s ease-in-out infinite' : 'none' }} />{text}
    </span>
  );
}
