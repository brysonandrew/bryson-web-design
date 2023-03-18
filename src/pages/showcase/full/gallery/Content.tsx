import { useTexture } from "@react-three/drei";
import { Block } from "./heads-up-display/block";
import { Image } from "./heads-up-display/Image";
import { FC } from "react";
import { useContext } from "./state/Context";
import { Texture } from "three";

export const Content: FC = () => {
  const { items } = useContext();

  const images: Texture[] = useTexture([
    ...items.map(
      ({ name, file }) => `/screens/${name}/${file}`,
    ),
  ]);

  return (
    <>
      {images.map((img, index) => (
        <Block key={`${index}`} factor={1} index={index}>
          <Image key={`${index}`} index={index} img={img} />
        </Block>
      ))}
    </>
  );
};
