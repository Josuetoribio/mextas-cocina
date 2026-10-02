import * as React from 'react';
/** Eyebrow + serif title + optional lead. The standard opener for every section. */
export interface SectionHeaderProps {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  /** @default 'light' */
  tone?: 'dark' | 'light';
  as?: 'h1' | 'h2' | 'h3';
  style?: React.CSSProperties;
}
export function SectionHeader(props: SectionHeaderProps): JSX.Element;
