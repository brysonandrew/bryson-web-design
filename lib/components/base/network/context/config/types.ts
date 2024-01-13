export type TContext = {
  isOffline: boolean;
  onOffline(): void;
  onOnline(): void;
};
