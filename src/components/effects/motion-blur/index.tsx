import { MOTION_BLUR_ID } from '@components/gallery/sections/constants';
import { TChildren, TChildrenProps } from '@t/index';
import { resolveUrlId } from '@utils/attributes/resolveUrlId';
import { CSSProperties, FC } from 'react';
import {
  isSafari,
  isBrowser,
  isDesktop,
} from 'react-device-detect';
import { Filter } from './Filter';
import { MotionValue } from 'framer-motion';

const isMotionBlur = !(isSafari && isBrowser);

type TProps = {
  isOn: boolean;
  motionValue: MotionValue;
  children(
    filterProps: Partial<Pick<CSSProperties, 'filter'>>,
  ): TChildren;
};
export const MotionBlur: FC<TProps> = ({
  isOn,
  motionValue,
  children,
}) => {
  if (!isMotionBlur || !isOn || !isDesktop)
    return children({});
  return (
    <>
      <Filter motionValue={motionValue} />
      {children({
        filter: resolveUrlId(MOTION_BLUR_ID),
      })}
    </>
  );
};
