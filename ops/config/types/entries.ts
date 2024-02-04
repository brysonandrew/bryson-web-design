export type TPath = {
  full: string;
  parent: string;
  name: string;
};

export type TPathRecord = Record<string, TPath>;
