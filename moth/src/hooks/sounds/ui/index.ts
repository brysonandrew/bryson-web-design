import { useCoinDropSound } from "./useCoinDropSound";
import { useFocusSound } from "./useFocusSound";
import { useMoveSound } from "./useMoveSound";
import { useOffSound } from "./useOffSound";
import { useOnSound } from "./useOnSound";

export const useUi = () => {
  const playCoinDropSound = useCoinDropSound();
  const playFocusSound = useFocusSound();
  const playOffSound = useOffSound();
  const playOnSound = useOnSound();

  return {
    CoinDrop: playCoinDropSound,
    Focus: playFocusSound,
    Off: playOffSound,
    On: playOnSound,
  };
};

export type TUiSounds = ReturnType<typeof useUi>;
