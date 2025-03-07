import type { FC } from 'react';
import { Title as DefaultTitle } from '@brysonandrew/layout-typography/title';
import {
  TChildren,
  TChildrenString,
  TDivProps,
} from '@brysonandrew/config-types/dom';
import { P16Y, P6 } from '@brysonandrew/space';
import { P12Y } from '@brysonandrew/space/P12Y';
import { cx } from 'class-variance-authority';
import { ClassValue } from 'class-variance-authority/dist/types';

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
    <div
      className={cx('column', classValue)}
      id={title}
      {...props}
    >
      <P6 classValue='flex lg:hidden' />
      <Title>{title}</Title>
      <P12Y classValue='flex lg:hidden' />
      <P16Y classValue='hidden lg:flex' />
      {children}
    </div>
  );
};




































































































































































































































































































