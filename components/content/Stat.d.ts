/** Big serif figure + uppercase caption (chef section stats). */
export interface StatProps {
  value: string;
  label: string;
  tone?: 'dark' | 'light';
  style?: React.CSSProperties;
}
export function Stat(props: StatProps): JSX.Element;
