import { useFreezeScrollBar } from '@hooks/useFreezeScroll';
import type { FC } from 'react';
import { Close } from './Close';
import { Container } from './Container';
import { Gallery } from './gallery';
import { Mark, resolveLayoutId } from '../Mark';
import { TextSm } from '@components/text/TextSm';
import { kebabToTitle } from '@utils/format';

type TProps = {
  selectedPath: string;
};
export const Full: FC<TProps> = ({ selectedPath }) => {
  useFreezeScrollBar();
  return (
    <Container
      layoutId={selectedPath}
      classValue='fixed inset-0 screen-width screen-height text-teal-bright'
    >
      <div className='absolute left-9 top-10 pl-8 z-10 lg:left-18'>
        <Mark layoutId={resolveLayoutId(selectedPath)} />
        <TextSm>{kebabToTitle(selectedPath)}</TextSm>
      </div>
      <Close />
      <Gallery selectedPath={selectedPath} />
    </Container>
  );
};
