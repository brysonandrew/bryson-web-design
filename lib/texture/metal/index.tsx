import type { FC } from 'react';
import styled from '@emotion/styled';
import {
  metalRadialDarkCss,
  metalRadialLightCss,
} from '@brysonandrew/texture-metal/css';
import { cx } from 'class-variance-authority';
import { BackFill } from '@brysonandrew/layout-back';
import { TDivProps } from '@brysonandrew/config-types';

const Dark = styled.div`
  ${metalRadialDarkCss}
`;

const Light = styled.div`
  ${metalRadialLightCss}
`;

type TProps = TDivProps;
export const TextureMetal: FC<TProps> = ({
  classValue,
  children,
  ...rest
}) => {
  const sharedClassValue = cx('fill', classValue);
  return (
    <div className={sharedClassValue} {...rest}>
      <BackFill {...rest} />
      <Dark
        className={cx('opacity-dark', sharedClassValue)}
        {...rest}
      />
      <Light
        className={cx('opacity-light', sharedClassValue)}
        {...rest}
      />
    </div>
  );
}; 

export * from './center';
export * from './conical';
export * from './css';
export * from './diamond';
export * from './linear';
export * from './motion';