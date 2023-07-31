import { MetalDark } from '@components/metal/MetalDark';
import { Space12 } from '@components/spaces/Space12';
import { Space4 } from '@components/spaces/Space4';
import { Title } from '@components/text/title';
import type { FC } from 'react';

export const Offline: FC = () => {
  return (
    <div className='relative column'>
      <Space12 />
      <div className='column w-core'>
        <Title>
          You are <strong>offline</strong>
        </Title>
        <Space4 />
        <div className='relative px-4 py-2'>
          <MetalDark />
          <h2 className='relative text-2xl text-center z-10'>
            Please check your network connection.
          </h2>
        </div>
      </div>
    </div>
  );
};
