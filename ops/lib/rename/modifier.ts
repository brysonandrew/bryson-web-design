export type TTPascalToKebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? TTPascalToKebab<
      R,
      `${A}${F extends `${Uppercase<F>}`
        ? A extends ''
          ? Lowercase<F>
          : `-${Lowercase<F>}`
        : Lowercase<F>}`
    >
  : A;

const pascalToKebab = <T extends string>(value: T) =>
  value
    .replace(/([a-z0–9])([A-Z])/g, '$1-$2')
    .toLowerCase() as TTPascalToKebab<T>;

export const renameModifier = pascalToKebab;
