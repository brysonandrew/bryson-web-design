type TConfig = {
  blur: number;
  brightness: number;
  grayscale: number;
};
export const resolveFilter = ({ blur, brightness, grayscale }: TConfig) => `brightness(${brightness}%) blur(${blur}px) grayscale(${grayscale}%)`;