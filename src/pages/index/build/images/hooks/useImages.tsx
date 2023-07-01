import { Text as _Text } from '@components/text/Text';
import { useEffect, useState } from 'react';
import { resolveRandom } from './resolveRandom';
import { TModule } from '@t/index';

export const useImages = () => {
  const [images, setImages] = useState<TModule[]>([]);
  useEffect(() => {
    const init = async () => {
      const randoms = await resolveRandom();
      setImages(randoms);
    };
    init();
  }, []);

  console.log(images);
  return images;
};
