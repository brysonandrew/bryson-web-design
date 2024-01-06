import { Package } from '../layout/Package';
import { TickList } from '@components/text/TickList';
import { resolveCopyArray } from './resolveCopyArray';

const [title, price, ...items] = resolveCopyArray(`
Standard
799
Perfect for small businesses and startups
Responsive and user-friendly website
SEO optimization
2 x content sections
Quick turnaround: Get online in no time!
`);

export const Standard = () => {
  return (
    <Package title={title} price={price} color='bg-blue'>
      <TickList items={items} color='text-blue' />
    </Package>
  );
};
