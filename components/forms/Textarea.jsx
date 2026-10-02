import React from 'react';
const labelStyle = (onDark) => ({ fontFamily: 'var(--font-sans)', fontSize: 11, fontWeight: 500, letterSpacing: 'var(--tracking-label)', textTransform: 'uppercase', color: onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)' });
const controlStyle = (onDark, focus, error) => ({ width: '100%', boxSizing: 'border-box', fontFamily: 'var(--font-sans)', fontSize: 15, fontWeight: 400, color: onDark ? 'var(--text-on-dark)' : 'var(--text-on-light)', background: onDark ? 'rgba(243,238,231,.03)' : 'rgba(255,255,255,.35)', border: '1px solid ' + (error ? 'var(--mx-error)' : focus ? 'var(--mx-gold)' : (onDark ? 'var(--line-dark-strong)' : 'var(--line-light-strong)')), borderRadius: 0, padding: '14px 16px', outline: 'none', transition: 'border-color var(--dur-base) var(--ease-out)', colorScheme: onDark ? 'dark' : 'light' });
const Msg = ({ error, hint, onDark }) => (error || hint) ? <span role={error ? 'alert' : undefined} style={{ fontSize: 12, color: error ? 'var(--mx-error)' : (onDark ? 'var(--text-on-dark-muted)' : 'var(--text-on-light-muted)') }}>{error || hint}</span> : null;
export function Textarea({ label, id, tone = 'dark', error, hint, rows = 4, style, ...rest }) {
  const [f, setF] = React.useState(false);
  const onDark = tone === 'dark';
  const fid = id || (label ? 'ta-' + label.toLowerCase().replace(/[^a-z0-9]+/g, '-') : undefined);
  return (
    <label htmlFor={fid} style={{ display: 'flex', flexDirection: 'column', gap: 8, minWidth: 0, ...style }}>
      {label && <span style={labelStyle(onDark)}>{label}</span>}
      <textarea id={fid} rows={rows} aria-invalid={!!error || undefined} onFocus={() => setF(true)} onBlur={() => setF(false)} style={{ ...controlStyle(onDark, f, error), resize: 'vertical', lineHeight: 1.5 }} {...rest} />
      <Msg error={error} hint={hint} onDark={onDark} />
    </label>
  );
}
