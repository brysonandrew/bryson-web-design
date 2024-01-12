import { Invert } from '@components/animation/filter-animate/Invert';
import { TClassValueProps } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { FC, PropsWithChildren } from 'react';
import { useSkeletonC } from '../context/useSkeletonC';
import { View } from './View';

export const ViewWithDarkMode: FC<
  PropsWithChildren &
    TClassValueProps & { viewClassValue?: ClassValue }
> = ({ classValue, viewClassValue, children }) => {
  const { isDarkMode } = useSkeletonC();
  return (
    <div className={clsx(classValue)}>
      <Invert value={isDarkMode ? 100 : 0}>
        <View classValue={viewClassValue}>{children}</View>
      </Invert>
    </div>
  );
};
