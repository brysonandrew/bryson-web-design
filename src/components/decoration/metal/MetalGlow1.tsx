import { useDarkMode } from '@lib/hooks/dark-mode/useDarkMode';
import { MetalGlow } from './MetalGlow';

export const MetalGlow1 = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <MetalGlow
      classValue='rounded-md'
      color={isDarkMode ? 'accent' : 'secondary'}
      drop={1}
    />
  );
};
