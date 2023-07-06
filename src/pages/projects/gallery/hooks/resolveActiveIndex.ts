type TConfig = {
  x: number, width: number, count: number;
};
export const resolveActiveIndex = ({ x, width, count }: TConfig) => (Math.round((x * count) / -width) + 1)
