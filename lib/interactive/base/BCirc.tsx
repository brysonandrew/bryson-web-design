import { I } from '@brysonandrew/icons-i';
import { TIconValue } from '@brysonandrew/icons-keys';
import { FC } from 'react';
import { B, TBProps } from './B';

type TProps = TBProps & {
  icon: TIconValue;
};
export const BCirc: FC<TProps> = ({
  icon,
  shape = 'interactive-circ-sm',
  children,
  ...props
}) => {
  return (
    <B look='interactive-circ' shape={shape} {...props}>
      <I classValue='relative w-full h-full' icon={icon} />
    </B>
  );
};
