import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Title } from '@components/text/Title';
import { TitleOffset } from '@components/spaces/TitleOffset';
import { TChildren } from '@t/index';
import clsx, { ClassValue } from 'clsx';

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
      className={clsx(
        'flex flex-col items-center',
        classValue,
      )}
      layout='position'
    >
      <Title>{title}</Title>
      <TitleOffset />
      {children}
    </Root>
  );
};
