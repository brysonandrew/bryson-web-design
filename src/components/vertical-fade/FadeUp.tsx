import clsx from 'clsx';
import { FC } from 'react';
import { TBaseProps, VerticalFade } from '.';
import { PRESENCE_OPACITY } from '@constants/animation';

type TProps = TBaseProps;
export const FadeUp: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <VerticalFade
    classValue={clsx(
      'bg-gradient-to-t bottom-0',
      classValue,
    )}
    {...PRESENCE_OPACITY}
    {...props}
  />
);
