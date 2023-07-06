import { VolumeOff } from '@components/icons/VolumeOff';
import { VolumeOn } from '@components/icons/VolumeOn';
import { Metal } from '@components/metal';
import { GlitchPorsalin } from '@components/text/glitch-porsalin';
import styled from '@emotion/styled';
import { resolveTealGlow } from '@pages/index/constants';
import { useContext } from '@state/Context';
import clsx from 'clsx';
import { motion } from 'framer-motion';

const Root = styled(motion.div)``;
const Button = styled(motion.button)``;
const Background = styled(motion.div)``;

export const Sound = () => {
  const { isSound, dispatch } = useContext();

  const handleTap = () => {
    dispatch({ type: 'toggle-sound', value: null });
  };

  const rootPropsWithTealGlow = resolveTealGlow({
    classValue: clsx(
      'absolute bottom-4 right-4 rounded-full z-50',
    ),
  });

  return (
    <Root {...rootPropsWithTealGlow}>
      <Metal classValue='rounded-full'/>
      <Button
        className='relative p-3 cursor-pointer'
        onTap={handleTap}
      >
        <GlitchPorsalin
          offset={2.8}
          tag='div'
          classValue='uppercase'
        >
          <Background variants={{ hover: { scale: 1.15 } }}>
            {isSound ? <VolumeOn /> : <VolumeOff />}
          </Background>
        </GlitchPorsalin>
      </Button>
    </Root>
  );
};
