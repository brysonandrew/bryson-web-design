import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@brysonandrew/texture/metal/css';
import clsx from 'clsx';
import { BackFill } from '@brysonandrew/layout';
import { TDivProps } from '@brysonandrew/config-types';

const Dark = styled.div`
  ${metalRadialDarkCss}
`;

const Light = styled.div`
  ${metalRadialLightCss}
`;

type TProps = TDivProps;
export const Metal: FC<TProps> = ({
  classValue,
  children,
  ...rest
}) => {
  const sharedClassValue = clsx('fill', classValue);
  return (
    <div className={sharedClassValue} {...rest}>
      <BackFill {...rest} />
      <Dark
        className={clsx('opacity-dark', sharedClassValue)}
        {...rest}
      />
      <Light
        className={clsx('opacity-light', sharedClassValue)}
        {...rest}
      />
    </div>
  );
}; 

export * from './css';
export * from './motion';