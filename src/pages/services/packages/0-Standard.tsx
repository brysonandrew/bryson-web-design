import { Package } from '../layout/Package';
import { TickList } from '@components/text/TickList';
import { resolveCopyArray } from './resolveCopyArray';

const [price, ...items] = resolveCopyArray(`
799
Perfect for small businesses and startups
Responsive and user-friendly website
SEO optimization
2 x content sections
Quick turnaround: Get online in no time!
`);

export const Standard = () => {
  return (
    <Package
      title='Standard'
      color='bg-standard'
      price={price}
    >
      <TickList items={items} color='text-standard' />
    </Package>
  );
};
