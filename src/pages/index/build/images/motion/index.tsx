import { MotionValue, useScroll } from 'framer-motion';
import { type FC } from 'react';
import { useDispersion } from './hooks/useDispersion';
import { useResistance } from './hooks/useResistance';
import { useVisibility } from './hooks/useVisibility';

export type TChildrenProps = {
  y: MotionValue;
  rotateX: MotionValue;
  filter: MotionValue<string>;
};
type TProps = {
  children(props: TChildrenProps): void;
};
export const Motion: FC<TProps> = ({ children }) => {
  const { scrollY } = useScroll();

  const dispersion = useDispersion({ scrollY });
  const resistance = useResistance({ scrollY });
  const visibility = useVisibility({ scrollY });

  return (
    <>
      {children({
        y: resistance,
        rotateX: dispersion,
        filter: visibility,
      })}
    </>
  );
};
