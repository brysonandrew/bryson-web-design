import { useSkeletonC } from '../context/useSkeletonC';
import { Logo } from './logo';
import { SKELETON_LOGO_LAYOUT_ID } from './logo/constants';

export const Left = () => {
  const { isSplashScreen, isDarkMode } = useSkeletonC();
  return (
    <div className='relative row gap-4 z-10'>
      {!isSplashScreen && (
        <Logo
          className={isDarkMode ? 'text-bg-main' : 'text-bg-main-inverted'}
          {...(isSplashScreen === false
            ? { layoutId: SKELETON_LOGO_LAYOUT_ID }
            : {})}
        />
      )}
      <div className='column-start gap-1 w-full'>
        <div className='h-2 w-full bg-main-inverted' />
        <div className='h-1 w-full bg-main-inverted' />
      </div>
    </div>
  );
};
