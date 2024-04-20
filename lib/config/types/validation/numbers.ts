export type TPositive<N extends number> = number extends N
  ? N
  : `${N}` extends `-${string}`
  ? never
  : N;

export type TNegative<N extends number> = number extends N
  ? N
  : `${N}` extends `-${string}`
  ? N
  : never;
