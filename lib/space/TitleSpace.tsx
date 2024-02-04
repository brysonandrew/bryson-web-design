import { TChildrenProps } from '@brysonandrew/config-types/dom/main';
import { FC } from 'react';

export const TITLE_HEIGHT = 88;
type TProps = Partial<TChildrenProps>;
export const TitleSpace: FC<TProps> = ({ children }) => (
  <div
    className='column gap-4 w-core'
    style={{ height: TITLE_HEIGHT }}
  >
    {children}
  </div>
);
