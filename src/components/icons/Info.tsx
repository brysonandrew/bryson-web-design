import styled from '@emotion/styled';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGSVGElement> & {
  classValue?: ClassValue;
};
export const Info: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    xmlns='http://www.w3.org/2000/svg'
    className={clsx(classValue)}
    viewBox='0 0 24 24'
    width='24'
    height='24'
    fill='currentColor'
    {...props}
  >
    <path d='M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z' />
  </Root>
);
