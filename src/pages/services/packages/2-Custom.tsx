import { TickList } from '@components/text/TickList';
import { Package } from '../layout/Package';
import { resolveCopyArray } from './resolveCopyArray';

const [title, price, ...items] = resolveCopyArray(`
Bespoke
Custom Quote: Tailored to Your Needs
For unique and specialized projects
In-depth consultation and planning
Unlimited features and customization
Ongoing support and maintenance
Integration of cutting-edge technologies (AI, 3D rendering, IoT)
`);

const COLOR = 'bg-purple';

export const Custom = () => {
  return (
    <Package title={title} price={price} color={COLOR}>
      <TickList items={items} color='text-purple' />
    </Package>
  );
};
