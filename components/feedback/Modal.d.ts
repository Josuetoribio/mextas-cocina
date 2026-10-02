import * as React from 'react';
/** Blurred overlay + square panel that scales in. Esc / backdrop click closes; locks body scroll. */
export interface ModalProps {
  open: boolean;
  onClose?: () => void;
  children: React.ReactNode;
  /** max-width px. @default 960 */
  width?: number;
  /** @default 'dark' */
  tone?: 'dark' | 'light';
  label?: string;
  style?: React.CSSProperties;
}
export function Modal(props: ModalProps): JSX.Element | null;
