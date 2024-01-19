import { CLIENT } from '@pages/_workshop/kino/config/ably-client-signaling';
// import * as Ably from 'ably/promises';
// import { useMemo } from 'react';
export const CLIENT_ID = 'client-id';

export const useClient = () => {
  // const client = useMemo(() => {
  //   const result = new Ably.Realtime.Promise({
  //     authUrl: `.netlify/functions/ably-token-request?clientId=${CLIENT_ID}`,
  //   });
  //   return result;
  // }, []);

  return CLIENT;
};
