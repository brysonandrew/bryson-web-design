import { TFadeProps } from '@brysonandrew/fade';
import { FadeDown } from '@brysonandrew/fade/FadeDown';
import clsx from 'clsx';
import { FC } from 'react';

type TProps = TFadeProps;
export const FadeDownPair: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <>
    <FadeDown
      classValue={clsx('h-full opacity-dark', classValue)}
      from='from-black-05'
      {...props}
    />
    <FadeDown
      classValue={clsx('h-full opacity-light', classValue)}
      from='from-white-05'
      {...props}
    />
  </>
);
