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
        
        .map((media: TMedia) => (
          <Button width={itemWidth} {...media} />
        ))}
    </>
  );
};
