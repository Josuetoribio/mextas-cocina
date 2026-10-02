/**
 * Menu dish card on cream: photo (16:10), serif name, description, price; lifts + zooms on hover.
 * @startingPoint section="Menu" subtitle="Dish card with favorite toggle" viewport="700x420"
 */
export interface DishCardProps {
  /** Omit for typographic (photo-less) cards — cocktails, wines. */
  image?: string;
  name: string;
  description: string;
  /** Pre-formatted, e.g. "$220" */
  price: string;
  tag?: string;
  favorite?: boolean;
  /** Shows heart toggle when provided. */
  onFavorite?: () => void;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export function DishCard(props: DishCardProps): JSX.Element;
