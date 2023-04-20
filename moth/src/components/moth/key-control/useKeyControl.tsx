import { useKey } from "@moth-hooks/useKey";
import { useAnimationFrame } from "framer-motion";

import { useAbilities as useAbilitiesOff } from "./off/useAbilities";
import { useDirections as useDirectionsOff } from "./off/useDirections";
import { useSpecials as useSpecialsOff } from "./off/useSpecials";

import { useAbilities as useAbilitiesOn } from "./on/useAbilities";
import { useDirections as useDirectionsOn } from "./on/useDirections";
import { useSpecials as useSpecialsOn } from "./on/useSpecials";

import { useAbilities as useAbilitiesRun } from "./run/useAbilities";
import { useDirections as useDirectionsRun } from "./run/useDirections";
import { useSpecials as useSpecialsRun } from "./run/useSpecials";

import { useRef } from "react";
import { useSpeech } from "@moth-components/speech/useSpeech";
import type { TDirectionsSounds } from "@moth-hooks/sounds/directions";
import { useDirections as useSoundDirections } from "@moth-hooks/sounds/directions";
import type { TAbilitiesSounds } from "@moth-hooks/sounds/abilities";
import { useAbilities as useSoundAbilities } from "@moth-hooks/sounds/abilities";
import type { TUiSounds } from "@moth-hooks/sounds/ui";
import { useUi as useSoundUi } from "@moth-hooks/sounds/ui";
import type { TCurrent } from "../types";
import { usePlay } from "@moth-hooks/sounds/ost/tracks/eukaryotchii/usePlay";
import { useMothContext } from "@moth-state/Context";

export type TSounds = TDirectionsSounds &
  TAbilitiesSounds &
  TUiSounds;

export const useKeyControl = () => {
  const {
    moth,
    spots,
    meshes,
    level,
    blades,
    controls,
    inventory,
    activeSpecial,
    specials,
    isSound,
    note,
  } = useMothContext();
  const current: TCurrent = {
    moth,
    spots,
    meshes,
    level,
    blades,
    controls,
    inventory,
    activeSpecial,
    specials,
    isSound,
    note,
  };
  const { dispatch } = useMothContext();
  const keyRef = useRef<TCurrent>(current);
  keyRef.current = current;

  const loopRef = useRef(false);
  const { play } = usePlay();
  const handleDirectionsOn = useDirectionsOn({ keyRef });
  const handleAbilitiesOn = useAbilitiesOn({ keyRef });
  const handleSpecialsOn = useSpecialsOn({ keyRef });

  const handleDirectionsOff = useDirectionsOff({ keyRef });
  const handleAbilitiesOff = useAbilitiesOff({ keyRef });
  const handleSpecialsOff = useSpecialsOff({ keyRef });

  const handleDirectionsRun = useDirectionsRun({ keyRef });
  const handleAbilitiesRun = useAbilitiesRun({ keyRef });
  const handleSpecialsRun = useSpecialsRun({ keyRef });

  const abilitiesSounds = useSoundAbilities();
  const uiSounds = useSoundUi();
  const directionsSounds = useSoundDirections();

  const sounds: TSounds = {
    ...directionsSounds,
    ...abilitiesSounds,
    ...uiSounds,
  };

  const speech = useSpeech({ text: "Good luck" });

  useKey({
    handlers: {
      onKeyDown: (event: KeyboardEvent) => {
        if (event.repeat) return;
        if (!loopRef.current && keyRef.current.isSound) {
          loopRef.current = true;
          play();
          speech.play();
        }
        if (keyRef.current.note) {
          dispatch({
            type: "clear-note",
            value: null,
          });
        }
        handleDirectionsOn(event.key, sounds);
        const key = event.key.toLowerCase();
        handleAbilitiesOn(key, sounds);
        handleSpecialsOn(key, sounds);
      },
      onKeyUp: (event: KeyboardEvent) => {
        if (event.repeat) return;
        handleDirectionsOff(event.key, sounds);
        const key = event.key.toLowerCase();
        handleAbilitiesOff(key, sounds);
        handleSpecialsOff(key, sounds);
      },
    },
    isActive: true,
  });

  useAnimationFrame(() => {
    handleDirectionsRun();
    handleAbilitiesRun();
    handleSpecialsRun();
  });
};
