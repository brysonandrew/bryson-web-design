import { Player } from '@components/Player';
import { motion } from 'framer-motion';
import type { FC } from 'react';

export const Video: FC = () => {
  return (
    <motion.div initial={{opacity: 0}} animate={{opacity:1}} transition={{duration:1}} className="center w-full pt-[140px]">
      <div className="column gap-4">
        <div className="column gap-2">
          <h1>14-second intro</h1>
          <h2>Andrew Bryson</h2>
          <a
            href="https://brysona.dev/"
            target="_blank"
            rel="noreferrer"
          >
            brysona.dev
          </a>
        </div>
        <Player />
      </div>
    </motion.div>
  );
};
