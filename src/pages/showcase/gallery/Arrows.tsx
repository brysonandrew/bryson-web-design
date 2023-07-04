import { type FC } from 'react';
import { AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <Left
        key='GALLERY_LEFT'
        classValue={clsx(BASE_NAV_BUTTON_CLASS, 'left-4')}
        {...props}
      />
      <Right
        key='GALLERY_RIGHT'
        classValue={clsx(BASE_NAV_BUTTON_CLASS, 'right-4')}
        {...props}
      />
    </AnimatePresence>
  );
};
