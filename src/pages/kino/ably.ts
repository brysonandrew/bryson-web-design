import * as Ably from 'ably';
import 'ably/ably.d.ts';

export const OPTIONS: Ably.Types.ClientOptions = {
  key: 'foo',
};
export const CLIENT = new Ably.Realtime(
  OPTIONS,
); /* inferred type Ably.Realtime */
export const CHANNEL =
  CLIENT.channels.get(
    'feed',
  ); /* inferred type Ably.Types.RealtimeChannel */
