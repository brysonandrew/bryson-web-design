import { type FC } from 'react';
import { Box } from './Box';
import { useImages } from './useImages';

export const Build: FC = () => {
  const images = useImages();
  return (
    <group>
      {images.map((image, index, { length }) => (
        <Box
          key={image.default}
          url={image.default}
          index={index}
          count={length}
        />
      ))}
    </group>
  );
};
