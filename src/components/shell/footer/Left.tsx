import { Email } from '@components/icons/Email';
import { Github } from '@components/icons/Github';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;

export const Left = () => (
  <Root className='absolute left-0 bottom-0 column items-start px-4 py-6 md:px-6 md:py-6 z-20'
  >
    <div>
      <a
        className='row'
        href='https://github.com/brysonandrew'
        target='_blank'
      >
        <Github classValue='text-teal-bright h-5 w-5' />
        <div className='p-1' />
        <div className='row items-end'>
          <h5 className='text-baby-blue text-sm italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.5'>
            github
          </h5>
          <div className='p-1' />
          <h6 className='uppercase italic text-xs text-teal-bright'>brysonandrew</h6>
        </div>
      </a>
    </div>
    <div className='py-0.5' />
    <div>
      <a
        className='row'
        href='mailto:andrewbryson12@gmail.com'
        target='_blank'
      >
        <Email classValue='text-teal-bright h-5 w-5' />
        <div className='p-1' />
        <div className='row items-end'>
          <h5 className='text-baby-blue text-sm italic uppercase -ml-0.5 mt-0 md:ml-0 md:mt-0.25'>
            mail
          </h5>
          <div className='p-1' />
          <h6 className='text-teal-bright italic uppercase text-xs'>andrewbryson12@gmail.com</h6>
        </div>
      </a>
    </div>
  </Root>
);
