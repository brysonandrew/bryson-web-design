import { useDelayCallback1 } from '@brysonandrew/hooks/window/useDelayCallback1';
import { useState } from 'react';
 
type THandlerConfig = {
  title: string;
  value: any;
};
export type TCopying = THandlerConfig | 'pending';

export const useClipboardContext = () => {
  const [copying, setCopying] = useState<TCopying | null>(
    null,
  );

  const endCopying = () => setCopying(null);

  const delayCopiedNull = useDelayCallback1(
    endCopying,
    1200,
  );

  const handler = async ({
    title,
    value,
  }: THandlerConfig) => {
    setCopying('pending');

    if (typeof value === 'number') {
      value = value.toString();
    }

    if (typeof value === 'string') {
      await navigator.clipboard.writeText(value);
    } else {
      console.log('Not a string to clipboard ', value);
      // await navigator.clipboard.write(
      //   value,
      // );
    }

    setCopying({ title, value });
    delayCopiedNull();
  };

  return {
    copying,
    handler,
    onEnd: endCopying,
  };
};
export type TClipboardContext = ReturnType<
  typeof useClipboardContext
>;
