import styled from '@emotion/styled';
import type { FC } from 'react';
import { Title } from '@components/text/title';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { P6 } from './space/P6';

const Root = styled.div``;

type TProps = {
  title: string;
  classValue?: ClassValue;
  children: TChildren;
};
export const Section: FC<TProps> = ({
  title,
  classValue,
  children,
}) => {
  return (
    <Root
      className={clsx('relative column z-10', classValue)}
    >
      <Title>{title}</Title>
      <P6 />
      {children}
    </Root>
  );
};
