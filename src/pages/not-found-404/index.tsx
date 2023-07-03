import { Shell } from '@components/shell';
import { Shell as MainShell } from '@main/Shell';
import { Space } from '@components/spaces/Space';
import { resolveUrlId } from '@utils/resolveUrlId';
import clsx from 'clsx';
import { DISPLACEMENT_ID } from '@components/effects/displacement';

export const NotFound404 = () => (
  <MainShell>
    <Shell>
      <div
        className={clsx('flex flex-col items-center')}
        style={{ filter: resolveUrlId(DISPLACEMENT_ID) }}
      >
        <h5 className='text-teal-bright text-left tracking-wide px-1 text-7xl lg:text-10xl'>
          404
        </h5>
        <Space />
        <h6 className='italic uppercase text-teal-bright text-left tracking-wide px-1 text-xl lg:text-3xl'>
          Nothing Here
        </h6>
      </div>
    </Shell>
  </MainShell>
);
