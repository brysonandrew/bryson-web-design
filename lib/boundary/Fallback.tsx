import type { FC } from 'react';

export type TFallbackProps = {
  error: Error;
  reset: () => void;
};
export const Fallback: FC<TFallbackProps> = () => (
  <section className='w-full' role='alert'>
    <div className='column'>
      <h1 className='text-l'>Something went wrong</h1>
    </div>
  </section>
);
