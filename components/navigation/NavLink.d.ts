import * as React from 'react';
/** Uppercase nav link with animated hairline underline (requires styles.css .mx-u). */
export interface NavLinkProps {
  children: React.ReactNode;
  href?: string;
  active?: boolean;
  tone?: 'dark' | 'light';
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function NavLink(props: NavLinkProps): JSX.Element;
