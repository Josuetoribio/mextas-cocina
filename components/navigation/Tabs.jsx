import React from 'react';
export function Tabs({ items = [], value, onChange, tone = 'light', align = 'center', style }) {
  const onDark = tone === 'dark';
  return (
    <div role="tablist" style={{ display: 'flex', gap: 'clamp(18px,3vw,44px)', justifyContent: align === 'center' ? 'center' : 'flex-start', overflowX: 'auto', scrollbarWidth: 'none', borderBottom: '1px solid ' + (onDark ? 'var(--line-dark)' : 'var(--line-light)'), ...style }}>
      {items.map((it) => { const id = typeof it === 'string' ? it : it.id; const label = typeof it === 'string' ? it : it.label; const on = id === value;
        return (
          <button key={id} role="tab" aria-selected={on} onClick={() => onChange && onChange(id)}
            style={{ position: 'relative', flex: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '14px 0 16px', fontFamily: 'var(--font-sans)', fontSize: 12, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: on ? (onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)') : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)'), transition: 'color var(--dur-base) var(--ease-out)' }}>
            {label}
            <span aria-hidden="true" style={{ position: 'absolute', left: 0, right: 0, bottom: -1, height: 1, background: 'var(--mx-gold)', transform: on ? 'scaleX(1)' : 'scaleX(0)', transition: 'transform var(--dur-slow) var(--ease-editorial)' }} />
          </button>
        ); })}
    </div>
  );
}
