import { useEffect, useState } from "react";
import { useBlock } from "./block/useBlock";
import { Rect } from "./Rect";
import { useContext } from "./state/Context";

export const Dot = () => {
  const [hovered, set] = useState(false);
  const { posRef, zoom } = useContext();

  const { parentOffset, sectionWidth } = useBlock();
  useEffect(
    () =>
      void (document.body.style.cursor = hovered
        ? "pointer"
        : "auto"),
    [hovered],
  );
  return (
    <Rect
      scale={0.15}
      onPointerOver={() => set(true)}
      onPointerOut={() => set(false)}
      onClick={() => {
        posRef.current.left =
          parentOffset * sectionWidth * zoom;
      }}
    />
  );
};
