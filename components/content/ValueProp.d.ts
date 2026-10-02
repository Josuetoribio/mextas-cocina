import * as React from 'react';
/** Icon + gold uppercase title + muted line; sits in the dark band under the hero. */
export interface ValuePropProps {
  icon: React.ReactNode;
  title: string;
  text: string;
  style?: React.CSSProperties;
}
export function ValueProp(props: ValuePropProps): JSX.Element;
