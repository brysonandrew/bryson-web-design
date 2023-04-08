import type { VOICE_KEY_NAME } from "./settings/config";
import { useController } from "./useController";
import { useState } from "./useState";
type TConfig = {
  text: string;
  [VOICE_KEY_NAME]?: string;
};
export const useSpeech = (config?: TConfig) => {
  const speech = useState(config);
  const speechController = useController({
    state: speech.state,
    onUpdateState: (u) => {
      speech.updateState(u);
    },
  });

  const handlePlay = (text?: string) => {
    speechController.cancel();
    speechController.play(text);
  };

  return {
    ...speechController,
    play: handlePlay,
  };
};
