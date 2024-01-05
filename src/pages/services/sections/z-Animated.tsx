import { Price } from '../website/breakdown/Price';
import { ParagraphLines } from '../website/layouts/ParagraphLines';

export const Animated = () => {
  return (
    <>
      <ParagraphLines
        lines={[
          ` Bring your web presence to life with animations
            that respond to your users' interactions`,
        ]}
      />
      <div className='column items-stretch gap-4'>
        <Price>{0}</Price>
      </div>
    </>
  );
};
