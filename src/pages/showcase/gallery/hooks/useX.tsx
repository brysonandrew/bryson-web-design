import { useSearchParams } from 'react-router-dom';
import type { TMedia } from '@pages/showcase/config';
import {
  IMG_KEY,
  SELECTED_KEY,
} from '@pages/showcase/config';
import { resolveX } from './resolveX';

type TConfig = {
  items: TMedia[];
  width: number;
};
export const useX = ({ items, width }: TConfig) => {
  const [searchParams] = useSearchParams();
  const selected = searchParams.get(SELECTED_KEY);
  const img = searchParams.get(IMG_KEY);

  const activeIndex = Math.max(
    items.findIndex(
      ({ key }) => `${selected}-${img}` === key,
    ),
    0,
  );

  const x = resolveX({
    activeIndex,
    width,
    count: items.length,
  });
  return x;
};
