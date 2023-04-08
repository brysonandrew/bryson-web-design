import { useMoveSound } from "./useMoveSound";

export const useDirections = () => {
  const playMoveSound = useMoveSound();
  return {
    Move: playMoveSound,
  };
};

export type TDirectionsSounds = ReturnType<
  typeof useDirections
>;
