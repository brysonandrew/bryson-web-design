import { type FC } from 'react';
import { Box } from './Box';
import { useContext } from '@state/Context';

export const Build: FC = () => {
  const { images } = useContext();
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
