import { TUDivProps } from "@brysonandrew/config-types";
import clsx from "clsx";

export const markerProps = <T extends TUDivProps>({
  style,
  classValue,
  ...props
}: T) => ({
  className: clsx(
    'absolute left-0 top-0 bottom-0 -mr-1 -mb-1 pointer-events-none',
    classValue,
  ),
  style: {
    width: `calc(0.5rem + 4px)`,
    height: '100%',
    ...style,
  },
  ...props,
});