import React from 'react';
export function Toast({ message, title, tone = 'success', visible = true, onClose, style }) {
  if (!visible) return null;
  const c = tone === 'error' ? 'var(--mx-error)' : tone === 'info' ? 'var(--mx-gold)' : 'var(--mx-success)';
  return (
    <div role="status" aria-live="polite"
      style={{ display: 'flex', alignItems: 'flex-start', gap: 14, minWidth: 280, maxWidth: 380, padding: '16px 18px', background: 'var(--mx-charcoal-2)', color: 'var(--text-on-dark)', border: '1px solid var(--line-dark)', borderTop: '1px solid ' + c, boxShadow: 'var(--shadow-modal)', animation: 'mx-slide-in-right var(--dur-slow) var(--ease-editorial)', ...style }}>
      <span aria-hidden="true" style={{ width: 6, height: 6, marginTop: 7, borderRadius: '50%', background: c, flex: 'none' }} />
      <span style={{ display: 'flex', flexDirection: 'column', gap: 3, flex: 1 }}>
        {title && <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: c }}>{title}</span>}
        <span style={{ fontSize: 14, lineHeight: 1.45 }}>{message}</span>
      </span>
      {onClose && <button type="button" aria-label="Cerrar" onClick={onClose} style={{ background: 'none', border: 'none', color: 'var(--text-on-dark-muted)', cursor: 'pointer', padding: 2, fontSize: 16, lineHeight: 1 }}>×</button>}
    </div>
  );
}
