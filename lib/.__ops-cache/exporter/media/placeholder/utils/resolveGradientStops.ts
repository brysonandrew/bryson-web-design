export const resolveGradientStops = (
  count = 4,
  colors: string[],
) => {
  return [...Array(count)]
    .map((_, index) => {
      const color = colors[index % colors.length];
      const fraction = (100 * index) / (count - 1);
      return `${color} ${fraction}%` as const;
    })
    .join(', ');
};
