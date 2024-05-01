export type TTCamelToKebab<
  T extends string,
  A extends string = ''
> = T extends `${infer F}${infer R}`
  ? TTCamelToKebab<
      R,
      `${A}${F extends Lowercase<F>
        ? ''
        : '-'}${Lowercase<F>}`
    >
  : A;

export type TTPascalToKebab<T extends string> =
T extends `${infer F} ${infer R}`
  ? `${Capitalize<F>}${TTPascalToKebab<R>}`
  : Capitalize<T>;

export type TTKebabKeys<T> = {
  [K in keyof T as K extends string
    ? TTCamelToKebab<K>
    : K]: T[K];
};
