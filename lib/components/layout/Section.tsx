import styled from '@emotion/styled';
import type { FC } from 'react';
import { Title } from '@lib/components/layout/typography/title';
import { TChildren, TDivProps } from '@lib/types/dom';
import clsx, { ClassValue } from 'clsx';
import { P16Y } from '@lib/components/layout/space/P16Y';

const Root = styled.div``;

type TProps = Omit<TDivProps, 'title'> & {
  title: TChildren;
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
      className={clsx(
        'relative column',
        classValue ?? 'z-10',
      )}
      {...props}
    >
      <Title>{title}</Title>
      <P16Y />
      {children}
    </Root>
  );
};
