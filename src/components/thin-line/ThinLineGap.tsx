import clsx from 'clsx';
import { THIN_LINE_CLASS } from '.';
import { Space4 } from '@components/spaces/Space4';

export const ThinLineGap = () => (
  <>
    <Space4 />
    <hr className={clsx('flex w-3/4', THIN_LINE_CLASS)} />
    <Space4 />
  </>
);
