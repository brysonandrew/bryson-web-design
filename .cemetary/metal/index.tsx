import styled from '@emotion/styled';
import { metalRadialDarkCss } from '@components/decoration/metal/css';
import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { TClassValueProps, TDivProps } from '@lib/types/dom';
import { TPartialGlowConfigOptions } from '@lib/animation/components/filter-animate/utils/glow';

import { Glow } from '@lib/animation/components/filter-animate/Glow';
import { STYLE } from '@app/style';
import { arrToNest } from '@lib/components/utils/arrToNest';
import { arrToNestWithProps } from '@lib/components/utils/arrToNestWithProps';

const DefaultRoot = styled.div`
  background-color: var(--white-9);
  html.dark & {
    ${metalRadialDarkCss}
  }
`;

export type TElementProps = Omit<TDivProps, 'color'>;
export type TProps = TClassValueProps &
  TElementProps & {
    isDarkest?: boolean;
    glow?: TPartialGlowConfigOptions;
  };
export const Metal: FC<TProps> = ({
  isDarkest,
  classValue,
  glow,
  ...props
}) => {
  const Root =  DefaultRoot;
  const children  = arrToNestWithProps<PropsWithChildren>(
    [
      glow ? [glow, Glow] : null,
    ],
    <Root
    className={clsx(`absolute inset-0`, classValue)}
    {...props}
  />,
  props,
  );
  return (
    <>{children}</>
  );
  
}