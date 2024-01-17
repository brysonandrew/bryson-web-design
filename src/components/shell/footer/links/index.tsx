import { Codewars } from '@components/layout/icon/Codewars';
import { Email } from '@components/layout/icon/Email';
import { Github } from '@components/layout/icon/Github';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FC, Fragment } from 'react';
import { TLinks } from './config';
import { Link } from './Link';
import { TUlMotionProps } from '@lib/types/dom/motion';

const Root = styled(motion.ul)``;
const Item = styled.li``;

type TProps = TUlMotionProps;
export const Links: FC<TProps> = (props) => {
  const ITEMS: TLinks = [
    {
      title: 'mail',
      subTitle: 'andrewbryson12@gmail.com',
      href: 'mailto:andrewbryson12@gmail.com',
      Icon: Email,
    },
    {
      title: 'github',
      subTitle: 'brysonandrew',
      href: 'https://github.com/brysonandrew',
      Icon: Github,
    },
    {
      title: 'codewars',
      subTitle: 'brysonandrew',
      href: 'https://www.codewars.com/users/brysonandrew',
      Icon: Codewars,
    },
  ];
  return (
    <Root
      className='absolute left-0 bottom-0 column-start w-0 px-8 py-6 z-10'
      {...props}
    >
      {ITEMS.map((item, index) => (
        <Fragment key={item.title}>
          {index !== 0 && <Item className='py-1' />}
          <Item>
            <Link {...item} />
          </Item>
        </Fragment>
      ))}
    </Root>
  );
};
