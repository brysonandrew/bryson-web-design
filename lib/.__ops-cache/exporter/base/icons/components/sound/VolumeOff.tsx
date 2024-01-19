import styled from '@emotion/styled';
import { TClassValueProps } from '@brysonandrew/base/types/dom/main';
import clsx from 'clsx';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGElement> & TClassValueProps;
export const VolumeOff: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    className={clsx(classValue)}
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
    {...props}
  >
    <path d='M12,4L9.91,6.09L12,8.18M4.27,3L3,4.27L7.73,9H3V15H7L12,20V13.27L16.25,17.53C15.58,18.04 14.83,18.46 14,18.7V20.77C15.38,20.45 16.63,19.82 17.68,18.96L19.73,21L21,19.73L12,10.73M19,12C19,12.94 18.8,13.82 18.46,14.64L19.97,16.15C20.62,14.91 21,13.5 21,12C21,7.72 18,4.14 14,3.23V5.29C16.89,6.15 19,8.83 19,12M16.5,12C16.5,10.23 15.5,8.71 14,7.97V10.18L16.45,12.63C16.5,12.43 16.5,12.21 16.5,12Z' />
  </Root>
);
