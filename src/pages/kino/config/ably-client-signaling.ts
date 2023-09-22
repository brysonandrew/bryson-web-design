import * as Ably from 'ably';
import 'ably/ably.d.ts';
// TODO replace with .netlify hook

export const CLIENT_ID = 'client-id';

export const OPTIONS: Ably.Types.ClientOptions = {
  key: import.meta.env.VITE_ABLY_API_KEY,
  clientId: CLIENT_ID,
};

export const CLIENT = new Ably.Realtime.Promise(OPTIONS);
