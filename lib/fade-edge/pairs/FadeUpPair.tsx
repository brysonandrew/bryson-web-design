import { TFadeProps } from '@brysonandrew/fade';
import { FadeUp } from '@brysonandrew/fade/FadeUp';
import { FC } from 'react';

type TProps = TFadeProps;
export const FadeUpPair: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <>
    <FadeUp
      classValue='h-full opacity-dark'
      from='from-black-05'
      {...props}
    />
    <FadeUp
      classValue='h-full opacity-light'
      from='from-white-05'
      {...props}
    />
  </>
);
