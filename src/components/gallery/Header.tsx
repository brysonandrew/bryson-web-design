import { type FC } from 'react';
import { HTMLMotionProps } from 'framer-motion';
import { Close } from './buttons/Close';
import styled from '@emotion/styled';
import { Content } from '../../pages/projects/list/item/content';
import { TSlugProps } from '../../pages/projects/config';

const Root = styled.header``;

type TProps = HTMLMotionProps<'div'> & TSlugProps;
export const Header: FC<TProps> = ({ slug, ...props }) => {
  return (
    <Root className='relative left-0 top-0 flex items-center w-full z-30'>
      <Content isHeader slug={slug} {...props}>
        <Close />
      </Content>
    </Root>
  );
};
