import { Shape } from "@moth-components/shapes/Shape";
import type { TBaseTagmataProps } from "@moth-components/tagmata/types";
import { useShape } from "@moth-hooks/shape/useShape";
import type { FC } from "react";
 
const HOLLOW_HEAD =
  "M148.1 325c34.5-61.4-38.6-163.3-38.6-163.3s37.3 38 138.4 59.5l7.9 134.5 8-134.5c101.1-21.5 138.8-59.5 138.8-59.5S329.1 263.6 363.5 325l-86.1 62.7 108.3-47.6 62.9 25.9c-8 131.8-180.8 51.8-180.8 120.8h-24c0-69-172.37 11-180.77-120.8l62.87-25.9 108.4 47.6zM248.3 25.84l-1.7 85.86-11.4-65.26c-74 7.39-109.9 55.96-119.6 71.66l-7.6-.5c-3.5-.2-6.8 1.8-8.07 5-1.4 3.2-.7 7 1.77 9.4 0 0 50.8 48.9 152.5 67.1.5.1 1.1.1 1.6.1.6 0 1.1 0 1.6-.1C359.1 180.9 409.6 132 409.6 132c3-2.4 4-6.2 2-9.4-1-3.2-4-5.2-8-5l-7.5.5c-9.7-15.7-45.7-64.27-119.6-71.66l-11.4 65.26-1.7-85.86c-2.3-2.21-4.7-3.15-7.4-3.15-2.8 0-6.2 1.36-7.7 3.15zm94.9 88.86-4.3 28z";

type TProps = TBaseTagmataProps;
export const Elite: FC<TProps> = (props) => {
  const shape = useShape(HOLLOW_HEAD); 
  if (!shape) return null;
  return <Shape shape={shape} size={512} {...props} />;
};
