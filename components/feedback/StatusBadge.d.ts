/** Live open/closed indicator with pulsing dot. */
export interface StatusBadgeProps {
  /** @default 'open' */
  status?: 'open' | 'soon' | 'closed';
  label?: string;
  tone?: 'dark' | 'light';
  style?: React.CSSProperties;
}
export function StatusBadge(props: StatusBadgeProps): JSX.Element;
