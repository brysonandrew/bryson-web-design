import { TDivProps } from '@brysonandrew/config-types/dom';
import type { FC } from 'react';

type TProps = TDivProps;
export const Visit: FC<TProps> = ({ children }) => {
  return (
    <>
      Visit <span className="italics">{children}</span>
    </>
  );
};
