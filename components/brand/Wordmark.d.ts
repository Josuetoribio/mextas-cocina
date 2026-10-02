import * as React from 'react';
/** MEXTAS typographic wordmark (there is no drawn logo). */
export interface WordmarkProps {
  /** Background it sits on. @default 'dark' */
  tone?: 'dark' | 'light';
  size?: 's' | 'm' | 'l';
  /** Show "COCINA CONTEMPORÁNEA" line. @default true */
  subtitle?: boolean;
  name?: string;
  tagline?: string;
  style?: React.CSSProperties;
}
export function Wordmark(props: WordmarkProps): JSX.Element;
