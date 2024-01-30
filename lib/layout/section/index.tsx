import styled from '@emotion/styled';
import type { FC } from 'react';
import { Title as DefaultTitle } from '@brysonandrew/layout/typography/title';
import {
  TChildren,
  TChildrenString,
  TDivProps,
} from '@brysonandrew/types/dom';
import clsx, { ClassValue } from 'clsx';
import { P16Y } from '@brysonandrew/space/P16Y';

const Root = styled.div``;

type TProps = Omit<TDivProps, 'title'> & {
  title: string;
  Title?: FC<TChildrenString>;
  classValue?: ClassValue;
  children: TChildren;
};
export const Section: FC<TProps> = ({
  title,
  Title = DefaultTitle,
  classValue,
  children,
  ...props
}) => {
  return (
    <Root
      className={clsx('relative column z-0', classValue)}
      id={title}
      {...props}
    >
      <Title>{title}</Title>
      <P16Y />
      {children}
    </Root>
  );
};
