import { FadeDown } from '@components/vertical-fade/FadeDown';
import { FadeUp } from '@components/vertical-fade/FadeUp';
import { useContext as useViewportContext } from '@context/viewport/Context';

export const Fade = () => {
  const { isFlipped } = useViewportContext();

  return (
    <>
      {isFlipped && (
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
