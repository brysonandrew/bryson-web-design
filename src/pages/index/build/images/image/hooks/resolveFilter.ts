type TConfig = {
  blur: number;
  brightness: number;
};
export const resolveFilter = ({ blur, brightness }: TConfig) => `brightness(${brightness}%) blur(${blur}px)`;