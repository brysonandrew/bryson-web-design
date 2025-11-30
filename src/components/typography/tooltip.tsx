import type { FC, PropsWithChildren } from "react";

export const TypographyTooltip: FC<PropsWithChildren> = ({children}) => {
  return (
      <div className='title-header text-base tracking-wide py-1'>{children}</div>
  );
};