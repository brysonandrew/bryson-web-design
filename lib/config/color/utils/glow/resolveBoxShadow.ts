export const resolveBoxShadow = <V extends string>(
  color: V,
  blur = 1,
) => `0 0 ${blur}px ${color}` as const;

export type TBoxShadow<V extends string> = ReturnType<
  typeof resolveBoxShadow<V>
>;
