type TConfig = {
  x: number;
  width: number;
  count: number;
};
export const resolveMarkerIndex = ({
  x,
  width,
  count,
}: TConfig) => Math.round((x * count) / -width) + 1;
