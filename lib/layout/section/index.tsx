import type { FC } from 'react';
import { Title as DefaultTitle } from '@brysonandrew/layout-typography/title';
import {
  TChildren,
  TChildrenString,
  TDivProps,
} from '@brysonandrew/config-types/dom';
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
      <div className="h-44 flex lg:hidden" />
      <Title>{title}</Title>
      <div className="h-32 flex lg:h-24" />
      {children}
    </div>
  );
};
