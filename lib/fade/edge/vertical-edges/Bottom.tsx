import { FadeUpPair } from '@brysonandrew/fade-edge/pairs/FadeUpPair';
import { TDivProps } from '@brysonandrew/config-types';
import { cx } from 'class-variance-authority';
import { FC } from 'react';

type TProps = TDivProps;
export const Bottom: FC<TProps> = ({
  classValue,
  style,
  ...props
}) => (
  <div
    className={cx(
      'fixed bottom-0 w-full z-0 pointer-events-none',
      classValue,
    )}
    style={{ height: '16vh', ...style }}
    {...props}
  >
    <FadeUpPair />
  </div>
);
