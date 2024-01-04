import { MOBILE_SIZE, TABLET_SIZE } from '../config';
import { Focus } from '../Focus';
import { Basic as Header } from './header/Basic';
import { Basic as Headline } from './headline/Basic';
import { TextLines } from './parts/TextLines';
import { View } from './wrappers/View';

export const Mobile = () => {
  return (
    <div className='relative w-1/4 h-full'>
      <View classValue='overflow-hidden'>
        <div className='column gap-2 mx-4 overflow-hidden'>
          <Header />
          <TextLines gap='gap-0.5' height='h-0.5' />
          <Headline />
        </div>
      </View>
      <Focus>{MOBILE_SIZE}</Focus>
    </div>
  );
};
