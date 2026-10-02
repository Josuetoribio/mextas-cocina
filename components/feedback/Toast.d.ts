/** Charcoal notification with coloured top hairline + dot. Stack bottom-right. */
export interface ToastProps {
  message: string;
  title?: string;
  /** @default 'success' */
  tone?: 'success' | 'error' | 'info';
  visible?: boolean;
  onClose?: () => void;
  style?: React.CSSProperties;
}
export function Toast(props: ToastProps): JSX.Element | null;
