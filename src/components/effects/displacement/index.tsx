import type { FC } from "react";
import type { TFilterChildrenProps } from "../types";
import { Filter } from "./Filter";
import type { TDisplacementProps } from "./config";

export const ID = "DisplacementId";
type TChildrenProps = TFilterChildrenProps<typeof ID>;
type TProps = TChildrenProps & TDisplacementProps;
export const Displacement: FC<TProps> = ({
  external,
  children,
  filterId = ID,
  ...props
}) => (
  <>
    <filter
      id={filterId}
      x="-50%"
      y="-50%"
      height="200%"
      width="200%"
    >
      <Filter
        {...props}
        id={filterId}
        source="SourceGraphic"
      />
      {children && children(ID)}
    </filter>
    {external && external(ID)}
  </>
);
