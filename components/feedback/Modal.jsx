import React from 'react';
export function Modal({ open, onClose, children, width = 960, tone = 'dark', label = 'Diálogo', style }) {
  React.useEffect(() => {
    if (!open) return;
    const k = (e) => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    const prev = document.body.style.overflow; document.body.style.overflow = 'hidden';
    return () => { window.removeEventListener('keydown', k); document.body.style.overflow = prev; };
  }, [open]);
  if (!open) return null;
  const onDark = tone === 'dark';
  return (
    <div role="dialog" aria-modal="true" aria-label={label} onClick={onClose}
      style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 'clamp(0px,3vw,40px)', background: 'var(--surface-overlay)', backdropFilter: 'blur(6px)', animation: 'mx-fade var(--dur-base) var(--ease-out)' }}>
      <div onClick={(e) => e.stopPropagation()}
        style={{ position: 'relative', width: '100%', maxWidth: width, maxHeight: '100%', overflowY: 'auto', background: onDark ? 'var(--surface-dark)' : 'var(--surface-light-raised)', color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)', border: '1px solid ' + (onDark ? 'var(--line-dark)' : 'var(--line-light)'), boxShadow: 'var(--shadow-modal)', animation: 'mx-scale-in var(--dur-slow) var(--ease-editorial)', ...style }}>
        <button type="button" aria-label="Cerrar" onClick={onClose}
          style={{ position: 'absolute', top: 14, right: 14, zIndex: 2, width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%', cursor: 'pointer', border: 'none', background: 'rgba(10,10,9,.55)', backdropFilter: 'blur(8px)', color: 'var(--text-on-dark)' }}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M18 6 6 18M6 6l12 12" /></svg>
        </button>
        {children}
      </div>
    </div>
  );
}
