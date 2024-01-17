import type { FC } from 'react';
import { Head } from '@lib/head';
import { Filters } from '@lib/filters';
import { ClipPath } from '@lib/media/placeholder/ClipPath';
import { Variables } from '@css/Variables';

export const Global: FC = () => {
  return (
    <>
      <Head />
      <ClipPath />
      <Filters />
      <Variables />
    </>
  );
};
