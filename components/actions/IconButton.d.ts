import * as React from 'react';
/** Square/round icon-only button for close, carousel arrows, favorites, socials. */
export interface IconButtonProps {
  children: React.ReactNode;
  /** Accessible label (required). */
  label: string;
  tone?: 'dark' | 'light';
  /** @default 'outline' */
  variant?: 'outline' | 'round' | 'solid' | 'plain';
  /** px. @default 44 */
  size?: number;
  /** Gold active state (e.g. favorited). */
  active?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function IconButton(props: IconButtonProps): JSX.Element;
