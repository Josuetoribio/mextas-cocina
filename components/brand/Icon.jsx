import React from 'react';
const pascal = (n) => n.replace(/(^|-)([a-z0-9])/g, (_, __, c) => c.toUpperCase());
export function Icon({ name, size = 18, strokeWidth = 1.25, color = 'currentColor', style, title }) {
  const lib = typeof window !== 'undefined' && window.lucide && window.lucide.icons;
  let node = lib ? lib[pascal(name)] || lib[name] : null;
  if (node && node[0] === 'svg') node = node[2];
  const kids = Array.isArray(node) ? node.map(([tag, attrs], i) => React.createElement(tag, { key: i, ...attrs })) : null;
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" aria-hidden={title ? undefined : true} role={title ? 'img' : undefined} style={{ flex: 'none', display: 'block', ...style }}>
      {title && <title>{title}</title>}{kids}
    </svg>
  );
}
