import { Price } from '../website/breakdown/Price';
import { Basic as Skeleton } from '../website/skeleton/Basic';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { Provider } from '../website/skeleton/context/Provider';
import { motion } from 'framer-motion';
import { useState } from 'react';

export const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className='column items-stretch gap-6'>
        <ParagraphLines
          lines={[
            `Save on eyestrain and electricity by introducing
dark mode.`,
          ]}
        />
      </div>
      <div className='row items-stretch gap-8'>
        <Provider isDarkMode={isDarkMode}>
          <Skeleton />
        </Provider>
        <Provider isDarkMode={!isDarkMode}>
          <motion.div
            className='w-full'
            initial={false}
            animate={{ filter: 'invert(100%)' }}
          >
            <Skeleton />
          </motion.div>
        </Provider>
      </div>
      <div className='column items-stretch gap-4'>
        <Price>{120}</Price>
      </div>
    </>
  );
};
