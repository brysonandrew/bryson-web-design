import { FC, PropsWithChildren } from 'react';
import { Viewless } from './variants/Viewless';
import { View } from './wrappers/View';

type TProps = PropsWithChildren;
export const Skeleton: FC<TProps> = ({ children }) => {
  return (
    <View>
      <Viewless>{children}</Viewless>
    </View>
  );
};
