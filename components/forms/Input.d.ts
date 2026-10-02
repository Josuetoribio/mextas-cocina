import * as React from 'react';
/** Hairline-bordered text field with uppercase label. Gold border on focus, terracotta on error. */
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'style'> {
  label?: string;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  error?: string;
  hint?: string;
  /** Trailing icon (e.g. calendar). */
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}
export function Input(props: InputProps): JSX.Element;
