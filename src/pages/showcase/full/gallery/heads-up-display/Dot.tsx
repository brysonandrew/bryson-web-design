import { useEffect, useState } from "react";
import { useBlock } from "./block/useBlock";
import { Rect } from "../Rect";
import { useContext } from "../state/Context";

export const Dot = () => {
  const [isHovered, setHovered] = useState(false);
  const { posRef, zoom } = useContext();
  const { offset, sectionWidth } = useBlock();

  useEffect(
    () =>
      void (document.body.style.cursor = isHovered
        ? "pointer"
        : "auto"),
    [isHovered],
  );

  return (
    <Rect
      scale={0.15}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      onTap={() => {
        const x = offset * sectionWidth * zoom;
        posRef.current.left = x;
      }}
    />
  );
};
