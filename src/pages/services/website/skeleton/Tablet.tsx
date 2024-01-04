import { TABLET_SIZE } from '../config';
import { Focus } from '../Focus';
import { Basic as Header } from './header/Basic';
import { Headline } from './headline';
import { View } from './wrappers/View';

export const Tablet = () => {
  return (
    <div className='relative w-3/4 h-full'>
      <View classValue='overflow-hidden'>
        <div className='column gap-4 px-8'>
          <Header />
          <Headline />
        </div>
      </View>
      <Focus>{TABLET_SIZE}</Focus>
    </div>
  );
};
