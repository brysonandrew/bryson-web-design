import { FC, useEffect, useState } from "react";
import { useBlock } from "../../block/useBlock";
import { Rect } from "../../Rect";
import { useContext } from "../../state/Context";

type TProps = { index: number };
export const Dot: FC<TProps> = ({ index }) => {
  const [isHovered, setHovered] = useState(false);
  const { posRef, zoom } = useContext();
  const { sectionWidth } = useBlock();

  useEffect(() => {
    document.body.style.cursor = isHovered
      ? "pointer"
      : "auto";
  }, [isHovered]);

  return (
    <Rect
      scale={0.15}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onClick={() => {
        const x = index * sectionWidth * zoom;
        posRef.current.top = x;
      }}
    />
  );
};
