import { Basic } from './header/Basic';
import { View } from './wrappers/View';

export const Mobile = () => {
  return (
    <div className='w-1/4 h-full'>
      <View>
        <div className='px-8 overflow-hidden'>
          <Basic />
        </div>
      </View>
    </div>
  );
};
