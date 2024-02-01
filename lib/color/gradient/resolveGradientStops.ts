type TConfig = {
  colors: string[];
  count?: number;
};
export const resolveGradientStops = ({
  colors,
  count = colors.length,
}: TConfig) => {
  return [...Array(count)]
    .map((_, index) => {
      const color = colors[index % colors.length];
      const fraction = (100 * index) / (count - 1);
      return `${color} ${fraction}%` as const;
    })
    .join(', ');
};
