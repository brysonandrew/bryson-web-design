import { Email } from '@components/icons/Email';
import { Github } from '@components/icons/Github';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

const Root = styled.ul``;

export const Left = () => (
  <Root className='absolute left-0 bottom-0 column items-start px-4 py-6 md:px-6 md:py-6 z-10'>
    {[
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
    ].map(({ title, subTitle, href, Icon }, index) => (
      <Fragment key={title}>
        {index !== 0 && <li className='py-0.5' />}
        <motion.li
          initial={false}
          animate='animate'
          whileHover='hover'
        >
          <a
            className='row pt-0.5 cursor-pointer'
            href={href}
            target='_blank'
          >
            <Icon classValue='text-color h-5 w-5' />
            <div className='p-1' />
            <div className='row items-end'>
              <h5 className='text-color-1 text-sm italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.5'>
                {title}
              </h5>
              <div className='p-1' />
              <motion.h6
                className='uppercase italic text-xs text-color hidden sm:flex'
                variants={{
                  animate: { opacity: 0.6 },
                  hover: { opacity: 1 },
                }}
              >
                {subTitle}
              </motion.h6>
            </div>
          </a>
        </motion.li>
      </Fragment>
    ))}
  </Root>
);
