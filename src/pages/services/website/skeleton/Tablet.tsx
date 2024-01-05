import { Header } from './header';
import { Headline } from './headline';
import { View } from './wrappers/View';

export const Tablet = () => {
  return (
    <div className='relative w-100 h-full overflow-hidden'>
      <View>
        <div className='column gap-4 px-8 h-52 overflow-hidden'>
          <Header />
          <Headline />
        </div>
      </View>
    </div>
  );
};
