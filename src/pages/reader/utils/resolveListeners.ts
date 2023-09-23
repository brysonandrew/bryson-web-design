export const resolveListeners = (
  utterance: SpeechSynthesisUtterance,
  listeners: [
    handler:
      | 'onstart'
      | 'onpause'
      | 'onresume'
      | 'onerror'
      | 'onend',
    returnValue?: boolean | null,
  ][],
  setter?: (nextValue: boolean | null) => void,
) => {
  for (const [handler, returnValue] of listeners) {
    if (setter) {
      utterance[handler] = () => {
        setter(returnValue ?? null);
      };
    } else {
      utterance[handler] = () => null;
    }
  }
};