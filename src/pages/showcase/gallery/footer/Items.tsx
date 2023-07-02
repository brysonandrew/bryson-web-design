import {
  TMedia,
  resolveEmptyMedia,
} from '@pages/showcase/config';
import { FC } from 'react';
import { Button } from './button';
import { resolveTo } from '../hooks/resolveTo';
import { useLocation } from 'react-router';
import { Empty } from './button/Empty';

type TProps = {
  itemWidth: number;
  items: TMedia[];
};
export const Items: FC<TProps> = ({ items, itemWidth }) => {
  const { pathname } = useLocation();

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
        .map(({ key, name, img }: TMedia) => {
          return (
            <div
              key={key}
              className='relative h-full m-0.75 z-10'
              style={{
                width: itemWidth,
              }}
            >
              {name ? (
                <Button
                  to={resolveTo({ img, name, pathname })}
                >
                  {img}
                </Button>
              ) : (
                <Empty>{img}</Empty>
              )}
            </div>
          );
        })}
    </>
  );
};
