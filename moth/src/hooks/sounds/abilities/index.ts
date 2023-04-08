import { useCloakSound } from "./useCloakSound";
import { useFireSound } from "./useFireSound";
import { useHyperdriveSound } from "./useHyperdriveSound";
import { useMeleeSound } from "./useMeleeSound";

export { useCloakSound } from "./useCloakSound";
export { useFireSound } from "./useFireSound";
export { useHyperdriveSound } from "./useHyperdriveSound";
export { useMeleeSound } from "./useMeleeSound";

export const useAbilities = () => {
  const playMeleeSound = useMeleeSound();
  const playFireSound = useFireSound();
  const playHyperdriveSound = useHyperdriveSound();
  const playCloakSound = useCloakSound();

  return {
    Melee: playMeleeSound,
    Fire: playFireSound,
    Hyperdrive: playHyperdriveSound,
    Cloak: playCloakSound,
  } as const;
};

export type TAbilitiesSounds = ReturnType<
  typeof useAbilities
>;
export type TAbilitiesSoundsKey = keyof TAbilitiesSounds;
