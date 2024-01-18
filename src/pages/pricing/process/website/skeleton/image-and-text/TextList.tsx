import { useApp } from 'lib/context/app/useApp';
import { TextLines } from '@pages/pricing/process/skeleton/TextLines';

export const TextList = () => {
  const { BORDER_RADIUS } = useApp();

  return (
    <div className='row-stretch gap-2'>
      <ul className='column grow gap-3 w-1/12'>
        <div
          className='h-8 mt-4 w-full px-2 bg-main'
          style={{ borderRadius: BORDER_RADIUS.MD }}
        />
        <TextLines />
      </ul>
      <ul className='column grow gap-3 w-11/12'>
        <div
          className='h-8 mt-4 w-full px-2 bg-main'
          style={{ borderRadius: BORDER_RADIUS.MD }}
        />
        <TextLines />
      </ul>
    </div>
  );
};
