import { Codewars } from '@components/icons/links/Codewars';
import { Email } from '@components/icons/links/Email';
import { Github } from '@components/icons/links/Github';
import { MetalGlow } from '@components/metal/MetalGlow';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import styled from '@emotion/styled';
import { HTMLMotionProps, motion } from 'framer-motion';
import { FC, Fragment } from 'react';

const Root = styled(motion.ul)``;

type TProps = HTMLMotionProps<'ul'>;
export const Links: FC<TProps> = (props) => (
  <Root
    className='absolute left-0 bottom-0 column-start w-0 px-8 py-6 z-10'
    {...props}
  >
    {[
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
    ].map(({ title, subTitle, href, Icon }, index) => (
      <Fragment key={title}>
        {index !== 0 && <li className='py-1' />}
        <motion.li
          className='relative -left-1.5 glow-interactive'
          {...PARENT_GLOW_PROPS}
        >
          <MetalGlow />
          <a
            className='relative row pt-0.75 pb-1 pl-1.5 pr-2 rounded-sm cursor-pointer'
            href={href}
            target='_blank'
          >
            <div className='column-start w-5'>
              <Icon classValue='text-color' />
            </div>
            <div className='p-1' />
            <div className='row items-end'>
              <h5 className='text-color-1 text-sm italic uppercase -ml-0.5 mt-0'>
                {title}
              </h5>
              <div className='hidden sm:flex row'>
                <div className='p-1' />
                <motion.h6
                  className='uppercase italic text-xs text-color'
                  variants={{
                    animate: { opacity: 0.6 },
                    hover: { opacity: 1 },
                  }}
                >
                  {subTitle}
                </motion.h6>
              </div>
            </div>
          </a>
        </motion.li>
      </Fragment>
    ))}
  </Root>
);
