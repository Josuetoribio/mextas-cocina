import React from 'react';
export function ChoiceChip({ children, selected = false, disabled = false, tone = 'dark', onClick, style }) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)';
  return (
    <button type="button" aria-pressed={selected} disabled={disabled} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ fontFamily: 'var(--font-sans)', fontSize: 14, fontWeight: 400, letterSpacing: '.04em', padding: '11px 16px', minWidth: 72, borderRadius: 0, cursor: disabled ? 'not-allowed' : 'pointer', textDecoration: disabled ? 'line-through' : 'none', opacity: disabled ? .35 : 1, background: selected ? 'var(--mx-gold)' : 'transparent', color: selected ? 'var(--action-primary-fg)' : (onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)'), border: '1px solid ' + (selected || (h && !disabled) ? 'var(--mx-gold)' : line), transition: 'all var(--dur-base) var(--ease-out)', ...style }}>
      {children}
    </button>
  );
}
