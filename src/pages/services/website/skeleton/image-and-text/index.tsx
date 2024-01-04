import { useServices } from '@context/domains/services';
import { ADDITIONAL_SECTION, SECTION } from '../../config';
import { Focus } from '../../Focus';
import { Normal } from './Normal';
import { Reversed } from './Reversed';

export const ImageAndText = () => {
  const { extras } = useServices();
  const ARR = [...Array(1 + ~~extras[ADDITIONAL_SECTION])];
  return (
    <>
      {ARR.map((_, index) => {
        const Item = index % 2 === 0 ? Normal : Reversed;
        return (
          <div key={`${index}`} className='relative w-full'>
            <Item />
            <Focus>
              {index > 0 ? ADDITIONAL_SECTION : SECTION}
            </Focus>
          </div>
        );
      })}
    </>
  );
};
