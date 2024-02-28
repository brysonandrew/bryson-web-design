import {
  ITEMS,
  UPWORK_BASE,
} from '@pages/_dev/work/config/constants';
import { GlobalCss } from '@shell/global/Css';
import { withProviders } from '@shell/providers/withProviders';
import { Item } from './item';

export const Work = withProviders(() => {
  return (
    <div className='bg-main w-full min-h-screen'>
      <GlobalCss />
      <div className='column'>
        <div className='py-6' />
        <h4 className='text-4xl text-white-8'>
          Upwork links
        </h4>
        <div className='py-2' />
        <div className='py-2' />
        <div>
          <ul className='column-stretch gap-4'>
            <li>
              <h3 className='text-xl text-gray text-left w-full'>
                {UPWORK_BASE}?
              </h3>
            </li>
            {ITEMS.map((item, index) => (
              <Item key={`${index}`} {...item} />
            ))}
          </ul>
        </div>
      </div>
      <div className='py-24' />
    </div>
  );
});
