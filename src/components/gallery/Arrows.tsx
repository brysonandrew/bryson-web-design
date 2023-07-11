import { type FC } from 'react';
import { Left } from './buttons/Left';
import { Right } from './buttons/Right';
import clsx from 'clsx';

const BASE_NAV_BUTTON_CLASS =
  'absolute bottom-4 translate-y-0 md:bottom-1/2 md:translate-y-1/2';

type TProps = {
  max: number;
};
export const Arrows: FC<TProps> = (props) => {
  return (
    <>
      <Left
        classValue={clsx(BASE_NAV_BUTTON_CLASS, 'left-4 md:left-6')}
        {...props}
      />
      <Right
        classValue={clsx(BASE_NAV_BUTTON_CLASS, 'right-4 md:right-6')}
        {...props}
      /> 
    </>
  );
};
