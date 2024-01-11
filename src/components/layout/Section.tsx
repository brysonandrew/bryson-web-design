import styled from '@emotion/styled';
import type { FC } from 'react';
import { Title } from '@components/typography/title';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { TDivProps } from '@t/dom';
import { TContent } from '../typography/title/config';
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
