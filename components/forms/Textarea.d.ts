import * as React from 'react';
/** Multi-line field matching Input. */
export interface TextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'style'> {
  label?: string;
  tone?: 'dark' | 'light';
  error?: string;
  hint?: string;
  rows?: number;
  style?: React.CSSProperties;
}
export function Textarea(props: TextareaProps): JSX.Element;
