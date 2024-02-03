import { type FC } from 'react';
import { isMobile } from 'react-device-detect';
import { InView, TInViewProps } from '@brysonandrew/in-view';
import { TChildren } from '@brysonandrew/config/types/dom';

type TProps = {
  Space: FC;
  children: TChildren;
} & Omit<TInViewProps, 'children'>;
export const Replacer: FC<TProps> = ({
  Space,
  options,
  children,
  ...props
}) => {
  if (isMobile) {
    return <>{children}</>;
  }
  return (
    <InView
      options={{
        rootMargin: '-20px',
        triggerOnce: true,
        ...options,
      }}
      {...props}
    >
      {({ inView }) => {
        if (inView) {
          return <>{children}</>;
        }
        return <Space />;
      }}
    </InView>
  );
};
