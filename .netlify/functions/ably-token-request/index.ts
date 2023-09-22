import * as dotenv from 'dotenv';
import * as Ably from 'ably/promises';
import {
  HandlerEvent,
  HandlerContext,
} from '@netlify/functions';

dotenv.config();

export async function handler(
  event: HandlerEvent,
  context: HandlerContext,
) {
  console.log(process.env);
  if (!process.env.ABLY_API_KEY) {
    return {
      statusCode: 500,
      headers: { 'content-type': 'text/plain' },
      body: JSON.stringify(
        `Missing ABLY_API_KEY environment variable. If you're running locally, please ensure you have a ./.env file with a value for ABLY_API_KEY=your-key. If you're running in Netlify, make sure you've configured env variable ABLY_API_KEY.`,
      ),
    };
  }
  console.log(event, context);

  const clientId =
    event.queryStringParameters?.['clientId'] ||
    process.env.DEFAULT_CLIENT_ID ||
    'NO_CLIENT_ID';

  const client = new Ably.Rest(process.env.ABLY_API_KEY);
  console.log(clientId, client);

  const tokenRequestData =
    await client.auth.createTokenRequest({
      clientId,
    });

  return {
    statusCode: 200,
    headers: { 'content-type': 'text/plain' },
    body: JSON.stringify(tokenRequestData),
  };
}
