import { TMedia } from '@pages/showcase/config';
import { FC } from 'react';
import { Button } from './Button';

type TProps = {
  itemWidth: number;
  items: TMedia[];
};
export const Items: FC<TProps> = ({ items, itemWidth }) => {
  return (
    <>
      {items
        .sort((a, b) => {
          const an = +a.img;
          const bn = +b.img;

          if (an < bn) {
            return -1;
          }
          if (bn < an) {
            return 1;
          }
          return 0;
        })
        .map((media: TMedia) => (
          <Button width={itemWidth} {...media} />
        ))}
    </>
  );
};
