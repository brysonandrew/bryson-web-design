import type { FC } from 'react';
import { useDarkMode } from '@lib/hooks/dark-mode/useDarkMode';
import { useCurrName } from '@pages/projects/gallery/hooks/params/useCurrName';
import { MetalGlow } from './MetalGlow';

export const MetalGlowCircle: FC = () => {
  const { isDarkMode } = useDarkMode();
  const name = useCurrName();
  const isGallery = Boolean(name);
  return (
    <MetalGlow
      drop={4}
      isDarkest
      color={
        isGallery && isDarkMode ? 'accent' : 'secondary'
      }
      classValue='rounded-full'
    />
  );
};
