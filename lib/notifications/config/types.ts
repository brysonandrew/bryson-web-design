export type TNotificationsConfig<
  T extends string = string,
> = {
  notifications: T[];
  onNotificationsRemove(next: T[]): void;
};
