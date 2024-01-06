type TConfig = string;
export const resolveCopyArray = (config: TConfig) =>
  config.split('\n').filter((v) => Boolean(v.trim()));
