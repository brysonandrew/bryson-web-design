import { TextLines } from '../parts/TextLines';

export const Text = () => {
  return (
    <ul className='column grow gap-3 w-1/2'>
      <div className='h-8 mt-4 w-full px-2 bg-black rounded-md'></div>
      <TextLines />
    </ul>
  );
};
