import { Price } from '../website/breakdown/Price';
import { ParagraphLines } from '../website/layouts/ParagraphLines';
import { DarkMode as Skeleton } from '../website/skeleton/variants/DarkMode';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { DARK_MODE_COST } from '../website/config';
import { Annotations } from '../website/layouts/Annotations';
import { Section } from '../Section';

export const DarkMode = () => {
  const [isDarkMode, setDarkMode] = useState(false);
  return (
    <Section title="Upgrade: Dark Mode">
      <div className='column items-stretch gap-6'>
        <ParagraphLines
          lines={[
            `Save on eyestrain and electricity by introducing
dark mode.`,
          ]}
        />
      </div>
      <Annotations
        breakdown={<Price>{DARK_MODE_COST}</Price>}
        diagram={
          <motion.button
            className='relative w-full'
            onTap={() => setDarkMode((prev) => !prev)}
          >
            <Skeleton
              classValue='mask-diagonal-tl relative'
              isDarkMode={isDarkMode}
            />
            <Skeleton
              classValue='mask-diagonal-br absolute inset-0'
              isDarkMode={!isDarkMode}
            />
          </motion.button>
        }
      />
    </Section>
  );
};
