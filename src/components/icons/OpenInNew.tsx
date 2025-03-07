import { TClassValue } from '@brysonandrew/config-types';
import styled from '@emotion/styled';
import { cx } from 'class-variance-authority';
import type { FC, SVGAttributes } from 'react';

const Root = styled.svg``;

type TProps = SVGAttributes<SVGSVGElement> & {
  classValue?: TClassValue;
};
export const OpenInNew: FC<TProps> = ({
  classValue,
  ...props
}) => (
  <Root
    xmlns="http://www.w3.org/2000/svg"
    className={cx(classValue)}
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="currentColor"
    {...props}
  >
    <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
  </Root>
);
