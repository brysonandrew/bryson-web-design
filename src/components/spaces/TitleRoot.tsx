import { TChildrenProps } from '@t/index';
import clsx from 'clsx';
import { FC } from 'react';

export const TITLE_HEIGHT = 88;
type TProps = Partial<TChildrenProps>;
export const TitleRoot: FC<TProps> = ({ children }) => (
  <div
    className={clsx('column w-core')}
    style={{ height: TITLE_HEIGHT }}
  >
    {children}
  </div>
);
