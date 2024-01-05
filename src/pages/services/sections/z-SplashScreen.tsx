import { Price } from '../website/breakdown/Price';
import { Basic as Skeleton } from '../website/skeleton/Basic';
import { ParagraphLines } from '../website/layouts/ParagraphLines';

export const DarkMode = () => {
  return (
    <>
      <ParagraphLines
          lines={[
            ``,
          ]}
        />
      <div className='row gap-8'>
        <Skeleton />
        <div className='dark w-full glow-interactive'>
          <Skeleton />
        </div>
      </div>
      <div className='column items-stretch gap-4'>
        <Price>{120}</Price>
      </div>
    </>
  );
};
