import React from 'react';
export function IconButton({ children, label, tone = 'dark', variant = 'outline', size = 44, active = false, onClick, style }) {
  const [h, setH] = React.useState(false);
  const onDark = tone === 'dark';
  const line = onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)';
  const fg = active ? 'var(--mx-gold)' : (onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)');
  return (
    <button type="button" aria-label={label} aria-pressed={active || undefined} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
      style={{ width: size, height: size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center', padding: 0, cursor: 'pointer', borderRadius: variant === 'round' ? '50%' : 0, color: h ? 'var(--mx-gold)' : fg, background: variant === 'solid' ? (onDark ? 'rgba(10,10,9,.55)' : 'rgba(246,242,235,.85)') : 'transparent', backdropFilter: variant === 'solid' ? 'blur(8px)' : undefined, border: variant === 'plain' ? 'none' : '1px solid ' + (h ? 'var(--mx-gold)' : line), transition: 'color var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)', ...style }}>
      {children}
    </button>
  );
}
