import * as React from 'react';
/** Lucide icon renderer. Requires the Lucide UMD script on the page (window.lucide). */
export interface IconProps {
  /** Lucide name, kebab or Pascal: 'arrow-right' | 'ArrowRight' */
  name: string;
  /** @default 18 */
  size?: number;
  /** Thin strokes match the brand. @default 1.25 */
  strokeWidth?: number;
  color?: string;
  title?: string;
  style?: React.CSSProperties;
}
export function Icon(props: IconProps): JSX.Element;
