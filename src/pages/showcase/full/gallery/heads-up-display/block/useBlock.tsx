import { useThree } from "@react-three/fiber";
import { useContext as useMainContext } from "../../state/Context";
import { createContext, useContext } from "react";

export const OffsetContext = createContext(0);

export const useBlock = () => {
  const { pageCount, count, zoom, posRef } =
    useMainContext();
  const offset = useContext(OffsetContext);

  const { size } = useThree();
  const viewportWidth = size.width;
  const canvasWidth = size.width / zoom;
  const mobile = size.width < 700;
  const contentMaxWidth =
    canvasWidth * (mobile ? 0.7 : 0.5);
  const sectionWidth =
    canvasWidth * ((pageCount - 1) / (count - 1));
  const offsetFactor = (offset + 1.0) / count;

  return {
    zoom,
    top: posRef.current.top,
    offset,
    viewportWidth,
    contentMaxWidth,
    sectionWidth,
    offsetFactor,
  };
};
