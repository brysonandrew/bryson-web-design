import { useSkeletonC } from '../context/useSkeletonC';
import { Logo } from './Logo';

export const Left = () => {
  const { isSplashScreen } = useSkeletonC();
  return (
    <div className='relative row gap-4 z-10'>
      {!isSplashScreen && <Logo />}
      <div className='column-start gap-1 w-full'>
        <div className='h-2 w-full bg-main-inverted' />
        <div className='h-1 w-full bg-main-inverted' />
      </div>
    </div>
  );
};
