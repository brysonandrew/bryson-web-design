import { TextLines } from '@pages/process/skeleton/TextLines';

export const TextList = () => {
  return (
    <div className='row items-stretch gap-2'>
      <ul className='column grow gap-3 w-1/12'>
        <div className='h-8 mt-4 w-full px-2 bg-main rounded-md'></div>
        <TextLines />
      </ul>
      <ul className='column grow gap-3 w-11/12'>
        <div className='h-8 mt-4 w-full px-2 bg-main rounded-md'></div>
        <TextLines />
      </ul>
    </div>
  );
};
