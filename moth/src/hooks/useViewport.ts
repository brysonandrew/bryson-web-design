import { RootState, useThree } from '@react-three/fiber';

export const useViewport = () => {
  const viewport = useThree(
    (state: RootState) => state.viewport,
  );
  return viewport;
};
