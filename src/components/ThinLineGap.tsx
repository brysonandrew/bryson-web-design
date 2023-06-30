import clsx from 'clsx';
import { Space4 } from './spaces/Space4';

export const THIN_LINE_CLASS = 'flex w-full h-px bg-white-02';

export const ThinLineGap = () => (
  <>
    <Space4 />
    <hr className={clsx('flex w-3/4', THIN_LINE_CLASS)} />
    <Space4 />
  </>
);
