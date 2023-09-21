const BROADCAST_CHANNEL_KEY = 'kinoBroadcast';
export const SIGNALING = new BroadcastChannel(
  BROADCAST_CHANNEL_KEY,
);
SIGNALING.onmessage = console.log;
SIGNALING.onmessageerror = console.error;
