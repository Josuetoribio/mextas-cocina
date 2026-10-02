import * as React from 'react';
/** Selectable square chip — time slots, party size, filters. */
export interface ChoiceChipProps {
  children: React.ReactNode;
  selected?: boolean;
  /** Unavailable slot — struck through. */
  disabled?: boolean;
  tone?: 'dark' | 'light';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function ChoiceChip(props: ChoiceChipProps): JSX.Element;
