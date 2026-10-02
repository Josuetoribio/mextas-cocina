import * as React from 'react';
/** Native select styled like Input (hairline, square, chevron). */
export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'style'> {
  label?: string;
  tone?: 'dark' | 'light';
  error?: string;
  hint?: string;
  options: Array<string | { value: string; label: string }>;
  /** Empty first option text. */
  placeholder?: string;
  style?: React.CSSProperties;
}
export function Select(props: SelectProps): JSX.Element;
