import { Glow } from '@components/filter-animate/Glow';
import { Metal } from '.';

export const MetalGlow = () => {
  return (
    <Glow drop={2}>
      <Metal />
    </Glow>
  );
};
