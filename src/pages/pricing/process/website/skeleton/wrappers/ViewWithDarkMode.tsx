import { Invert } from '@brysonandrew/layout-effects/Invert';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
import { FC, PropsWithChildren } from 'react';
import { useSkeletonC } from '../context/useSkeletonC';
import { View } from './View';
import { cx } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/dist/types';

export const ViewWithDarkMode: FC<
  PropsWithChildren &
    TClassValueProps & { viewClassValue?: ClassValue }
> = ({ classValue, viewClassValue, children }) => {
  const { isDarkMode } = useSkeletonC();
  return (
    <div className={cx('border-white border-1',classValue)}>
      <Invert value={isDarkMode ? 100 : 0}>
        <View classValue={viewClassValue}>{children}</View>
      </Invert>
    </div>
  );
};
