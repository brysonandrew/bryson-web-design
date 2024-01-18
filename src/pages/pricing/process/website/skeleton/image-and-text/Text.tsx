import { useApp } from '@lib/context/app/useApp';
import { TextLines } from '@pages/pricing/process/skeleton/TextLines';

export const Text = () => {
  const { BORDER_RADIUS } = useApp();
  return (
    <ul className='column grow gap-3 w-1/2'>
      <div
        className='h-8 mt-4 w-full px-2 bg-main'
        style={{ borderRadius: BORDER_RADIUS.MD }}
      ></div>
      <TextLines />
    </ul>
  );
};
