import { Basic } from './header/Basic';
import { View } from './wrappers/View';

export const Tablet = () => {
  return (
    <div className='w-3/4 h-full'>
      <View>
        <div className='px-8'>
          <Basic />
        </div>
      </View>
    </div>
  );
};
