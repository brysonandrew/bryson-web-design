export type TKeyStr<T extends object> = Extract<
  keyof T,
  string
>;
