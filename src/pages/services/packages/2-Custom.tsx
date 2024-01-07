import { TickList } from '@components/text/TickList';
import { Package } from '../layout/Package';
import { resolveCopyArray } from './resolveCopyArray';

const [price, ...items] = resolveCopyArray(`
Custom Quote: Tailored to Your Needs
For unique and specialized projects
In-depth consultation and planning
Unlimited features and customization
Ongoing support and maintenance
Integration of cutting-edge technologies (AI, 3D rendering, IoT)
`);

export const Custom = () => {
  return (
    <Package
      title='Bespoke'
      color='bg-bespoke'
      price={price}
    >
      <TickList items={items} color='text-bespoke' />
    </Package>
  );
};
