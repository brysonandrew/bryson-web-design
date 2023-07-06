import { VolumeOff } from '@components/icons/VolumeOff';
import { VolumeOn } from '@components/icons/VolumeOn';
import { Metal } from '@components/metal';
import styled from '@emotion/styled';
import { resolveTealGlow } from '@constants/colors';
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
      <Metal classValue='rounded-full' />
      <Button
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
