import { useMothContext } from "@moth-state/Context";
import { useRef, type MutableRefObject } from "react";
import type {
  TCurrent,
  TShopNumberEntry,
} from "../../types";
import type { TSounds } from "../useKeyControl";
import { useSpeech } from "@moth-components/speech/useSpeech";
import { pascalToTitle } from "@utils/format";

type TConfig = {
  keyRef: MutableRefObject<TCurrent>;
};
export const useSpecials = ({ keyRef }: TConfig) => {
  const { controls, mothRef, dispatch } = useMothContext();
  const timeoutRef = useRef<ReturnType<
    typeof setTimeout
  > | null>(null);
  const speech = useSpeech();

  const handler = (key: string, sounds: TSounds) => {
    if (key === controls.specials.CycleUp) {
      sounds.CoinDrop.play();
      dispatch({ type: "cycle-special-up", value: null });
      return;
    }
    if (key === controls.specials.CycleDown) {
      sounds.CoinDrop.play();
      dispatch({ type: "cycle-special-down", value: null });
      return;
    }
    if (key === controls.specials.Use) {
      sounds.Fire.play();
      const entries = Object.entries(
        keyRef.current.inventory,
      ) as TShopNumberEntry[];
      const next = entries.find(
        (_, index) =>
          index === keyRef.current.activeSpecial,
      );
      if (!next) return;
      const [key, value] = next as TShopNumberEntry;
      if (value < 1) return;
      speech.play(`${pascalToTitle(key)} Incoming`);
      mothRef.current.specials[key] = 1;
      timeoutRef.current = setTimeout(() => {
        dispatch({ type: "special-end", value: key });
        mothRef.current.specials[key] = 0;
      }, 1000);
      dispatch({ type: "special-use", value: next });
      return;
    }
  };
  return handler;
};
