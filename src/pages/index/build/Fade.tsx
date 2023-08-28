import { FadeDown } from '@components/vertical-fade/FadeDown';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { useViewport as useViewportContext } from '@context/viewport';

export const Fade = () => {
  const { isVertical } = useViewportContext();

  return (
    <>
      {isVertical && (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full opacity-80 z-0'>
          <FadeUp
            classValue='bottom-full left-0'
            style={{ height: 800 }}
          />
          <FadeDown
            classValue='top-full left-0'
            style={{ height: 800 }}
          />
        </div>
      )}
    </>
  );
};
