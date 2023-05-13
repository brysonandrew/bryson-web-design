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
      x="-600%"
      y="-600%"
      height="1300%"
      width="1300%"
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
