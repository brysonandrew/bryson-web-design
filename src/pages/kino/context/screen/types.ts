export type TActiveStream = MediaStream | null;

export type TContext = {
  activeStream: TActiveStream;
  onUpdateActiveStream(activeStream: TActiveStream): void;
};
