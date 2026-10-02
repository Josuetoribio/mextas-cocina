import React from 'react';
const labelStyle = (onDark) => ({ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)' });
const controlStyle = (onDark, focus, error) => ({ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 400, color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)', background: onDark ? 'rgba(243,238,231,.03)' : 'rgba(255,255,255,.35)', border: '1px solid ' + (error ? 'var(--mx-error)' : focus ? 'var(--mx-gold)' : (onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)')), borderRadius: 0, padding: '14px 16px', outline: 'none', transition: 'border-color var(--dur-base) var(--ease-out)', colorScheme: onDark ? 'dark' : 'light' });
const Msg = ({ error, hint, onDark }) => (error || hint) ? <span role={error ? 'alert' : undefined} style={{ fontSize: 12, color: error ? 'var(--mx-error)' : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)') }}>{error || hint}</span> : null;
export function Select({ label, id, tone = 'dark', error, hint, options = [], placeholder, style, ...rest }) {
  const [f, setF] = React.useState(false);
  const onDark = tone === 'dark';
  const fid = id || (label ? 'sel-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style }}>
      {label && <span style={labelStyle(onDark)}>{label}</span>}
      <span style={{ position: 'relative', display: 'block' }}>
        <select id={fid} aria-invalid={!!error || undefined} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ ...controlStyle(onDark, f, error), appearance: 'none', WebkitAppearance: 'none', paddingRight: 40, cursor: 'pointer' }} {...rest}>
          {placeholder && <option value="">{placeholder}</option>}
          {options.map((o) => { const v = typeof o === 'string' ? o : o.value; const l = typeof o === 'string' ? o : o.label; return <option key={v} value={v} style={{ color: '#1A1814' }}>{l}</option>; })}
        </select>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" style={{ position: 'absolute', right: 16, top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)' }}><path d="m6 9 6 6 6-6" /></svg>
      </span>
      <Msg error={error} hint={hint} onDark={onDark} />
    </label>
  );
}
