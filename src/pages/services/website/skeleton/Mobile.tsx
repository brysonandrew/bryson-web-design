import { TextLines } from '../../../../components/skeleton/TextLines';
import { View } from './wrappers/View';
import { Headline } from './headline';
import { Header } from './header';

export const Mobile = () => {
  return (
    <div className='relative w-30 h-full'>
      <View>
        <div className='column gap-2 mx-4 h-52'>
          <Header />
          <TextLines gap='gap-0.5' height='h-0.5' />
          <Headline />
        </div>
      </View>
    </div>
  );
};
