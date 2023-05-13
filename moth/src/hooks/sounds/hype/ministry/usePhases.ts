import { useIntro } from "./intro";

export const usePhases = () => {
  const intro = useIntro();

  return [
    {
      sounds: [[intro]],
    },
    // {
    //   sounds: [[phase1, phase0], [drums]],
    // },
  ];
};
