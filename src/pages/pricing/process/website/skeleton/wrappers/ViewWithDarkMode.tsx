import { Invert } from '@brysonandrew/filter-animate/Invert';
import { TClassValueProps } from '@brysonandrew/config-types/dom/main';
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
    <div className={clsx('border-white border-1',classValue)}>
      <Invert value={isDarkMode ? 100 : 0}>
        <View classValue={viewClassValue}>{children}</View>
      </Invert>
    </div>
  );
};
