import styled from '@emotion/styled';
import type { FC } from 'react';
import { Title } from '@components/text/title';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { P6 } from './space/P6';
import { TDivProps } from '@t/dom';
import { TContent } from './text/title/config';
import { P16Y } from './space/P16Y';

const Root = styled.div``;

type TProps = Omit<TDivProps, 'title'> & {
  title: TContent;
  classValue?: ClassValue;
  children: TChildren;
};
export const Section: FC<TProps> = ({
  title,
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx('relative column z-10', classValue)}
      {...props}
    >
      <Title>{title}</Title>
      <P16Y />
      {children}
    </Root>
  );
};
