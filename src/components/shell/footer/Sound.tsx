import { Glow } from '@components/glow';
import { VolumeOff } from '@components/icons/VolumeOff';
import { VolumeOn } from '@components/icons/VolumeOn';
import { Metal } from '@components/metal';
import {
  GLOW_BOX_SHADOW,
  PARENT_GLOW_PROPS,
} from '@constants/colors';
import styled from '@emotion/styled';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const SHARED_CLASS = 'rounded-full';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;
const Background = styled(motion.div)``;

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  return (
    <Root
      className={clsx(
        'absolute bottom-4 right-4 p-0.25 z-50',
        SHARED_CLASS,
        GLOW_BOX_SHADOW,
      )}
      {...PARENT_GLOW_PROPS}
    >
      <Glow classValue={SHARED_CLASS} drop={0.5}>
        <Metal classValue={SHARED_CLASS} />
      </Glow>
      <Button
        aria-label='sound'
        className='relative p-3 cursor-pointer text-baby-blue'
        onTap={handleTap}
      >
        <Background variants={{ hover: { scale: 1.15 } }}>
          {isSound ? <VolumeOn /> : <VolumeOff />}
        </Background>
      </Button>
    </Root>
  );
};
