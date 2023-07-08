import { type FC } from 'react';
import { isMobile } from 'react-device-detect';
import clsx from 'clsx';
import { InView } from '@components/InView';
import { WIDTH_CLASS } from '@constants/styles';
import type { TChildren } from '@t/index';
import { Content } from './Content';

const ROOT_PROPS = {
  className: clsx(
    'flex flex-col items-center',
    WIDTH_CLASS,
  ),
};
type TProps = { children: TChildren };
export const Title: FC<TProps> = ({ children }) => {
  return ((content) => {
    if (isMobile) {
      return <div {...ROOT_PROPS}>{content}</div>;
    }
    return (
      <InView {...ROOT_PROPS} margin='400px' once>
        {(isInView) => isInView && content}
      </InView>
    );
  })(<Content>{children}</Content>);
};
 