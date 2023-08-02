import { Codewars } from '@components/icons/links/Codewars';
import { Email } from '@components/icons/links/Email';
import { Github } from '@components/icons/links/Github';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC, Fragment } from 'react';
import { TLinks } from './config';
import { Link } from './Link';

const Root = styled(motion.ul)``;
const Item = styled.li``;

type TProps = HTMLMotionProps<'ul'>;
export const Links: FC<TProps> = (props) => {
  const ITEMS: TLinks = [
    {
      title: 'mail',
      subTitle: 'andrewbryson12@gmail.com',
      href: 'mailto:andrewbryson12@gmail.com',
      Icon: Email,
    },
    {
      title: 'codewars',
      subTitle: 'brysonandrew',
      href: 'https://www.codewars.com/users/brysonandrew',
      Icon: Codewars,
    },
    {
      title: 'github',
      subTitle: 'brysonandrew',
      href: 'https://github.com/brysonandrew',
      Icon: Github,
    },
  ];
  return (
    <Root
      className='absolute left-0 bottom-0 column-start w-0 px-8 py-6 z-10'
      {...props}
    >
      {ITEMS.map((item, index) => (
        <Item key={item.title}>
          {index !== 0 && <div className='py-1' />}
          <Link {...item} />
        </Item>
      ))}
    </Root>
  );
};
