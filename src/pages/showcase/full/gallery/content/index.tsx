import { useTexture } from "@react-three/drei";
import { Block } from "../block";
import { Image } from "./Image";
import { FC } from "react";
import { useContext } from "../state/Context";
import { Texture } from "three";

export const Content: FC = () => {
  const { items } = useContext();

  const textures: Texture[] = useTexture([
    ...items.map(
      ({ name, file }) =>
        `../../../../../../src/screens/${name}/${file}`,
    ),
  ]);
  
  return (
    <>
      {textures.map((texture, index) => (
        <Block key={texture.uuid} factor={1} index={index}>
          <Image key={texture.uuid} texture={texture} index={index} />
        </Block>
      ))}
    </>
  );
};
