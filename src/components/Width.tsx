import { WIDTH_CLASS } from '@constants/styles';
import { TChildren } from '@t/index';
import { FC } from 'react';

export const Width: FC<{ children: TChildren }> = ({
  children,
}) => <div className={WIDTH_CLASS}>{children}</div>;
