type TConfig = string;
export const newlineToArr = (config: TConfig) =>
  config.split('\n').filter((v) => Boolean(v.trim()));
