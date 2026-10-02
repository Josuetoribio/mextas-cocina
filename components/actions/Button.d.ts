import * as React from 'react';
/**
 * Square-cornered uppercase CTA. Gold fill for the primary action, gold outline for secondary.
 * @startingPoint section="Actions" subtitle="Primary / outline / ghost / link buttons" viewport="700x260"
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** @default 'primary' */
  variant?: 'primary' | 'outline' | 'ghost' | 'link';
  /** Surface it sits on. @default 'dark' */
  tone?: 'dark' | 'light';
  /** @default 'm' */
  size?: 's' | 'm' | 'l';
  iconLeft?: React.ReactNode;
  /** Nudges right on hover. */
  iconRight?: React.ReactNode;
  loading?: boolean;
  disabled?: boolean;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export function Button(props: ButtonProps): JSX.Element;
