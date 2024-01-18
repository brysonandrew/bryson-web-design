import styled from '@emotion/styled';
import { TClassValueProps } from '@brysonandrew/lib/types/dom/main';
import clsx from 'clsx';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGElement> & TClassValueProps;
export const Offline: FC<TProps> = ({
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
    <path d='M11.5,20L16.36,10.27H13V4L8,13.73H11.5V20M12,2C14.75,2 17.1,3 19.05,4.95C21,6.9 22,9.25 22,12C22,14.75 21,17.1 19.05,19.05C17.1,21 14.75,22 12,22C9.25,22 6.9,21 4.95,19.05C3,17.1 2,14.75 2,12C2,9.25 3,6.9 4.95,4.95C6.9,3 9.25,2 12,2Z' />
  </Root>
);
