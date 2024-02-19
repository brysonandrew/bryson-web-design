export type TSoundRecord = {
  move?(): void;
  on?(): void;
  off?(): void;
};

export type TSoundConfig = {
  sounds?: Partial<TSoundRecord>;
};
