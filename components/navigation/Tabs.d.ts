/** Uppercase underline tabs with a gold indicator; used for menu categories. */
export interface TabsProps {
  items: Array<string | { id: string; label: string }>;
  value: string;
  onChange?: (id: string) => void;
  /** @default 'light' */
  tone?: 'dark' | 'light';
  align?: 'center' | 'start';
  style?: React.CSSProperties;
}
export function Tabs(props: TabsProps): JSX.Element;
