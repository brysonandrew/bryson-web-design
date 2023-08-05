import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Title } from '@components/text/title';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';
import { useContext } from '@state/Context';
import { Space12 } from './spaces/Space12';
import { Space8 } from './spaces/Space8';

const Root = styled(motion.section)``;

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
      layout='position'
    >
      <Title>{title}</Title>
      <Space8/>

      {children}
    </Root>
  );
};
