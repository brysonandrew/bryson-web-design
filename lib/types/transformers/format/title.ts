export type TTKebabToTitle<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? TTKebabToTitle<
      F extends '-' ? ` ${Capitalize<F>}` : R,
      `${A extends '' ? Capitalize<F> : A}${F extends `-`
        ? ''
        : A extends ''
        ? ''
        : F}`
    >
  : A;
