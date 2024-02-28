type TSortValue = 'recency';
type TLocationValue = 'Australia and New Zealand';
type TBaseConfig = {
  q?: string;
  nbs?: `${number}`;
  t?: `${number}`;
  sort?: TSortValue;
  location?: TLocationValue;
};
export type TUpworkFilterConfig = TBaseConfig & {
  isIntermediate?: boolean;
  isExpert?: boolean;
  hourly?: { min?: number; max?: number };
};
export type TUpworkFilterConfigs = TUpworkFilterConfig[];
export type TContractorTierValue = '2,3' | '2' | '3';
export type THourlyValue =
  | `${number}-${number}`
  | `-${number}`;
export type TUpworkParams = TBaseConfig & {
  contractor_tier?: TContractorTierValue;
  hourly_rate?: THourlyValue;
};
