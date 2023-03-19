import { useThree } from "@react-three/fiber";
import { useContext as useMainContext } from "../state/Context";

export const useBlock = () => {
  const { count, pageCount, zoom, posRef, offset } =
    useMainContext();

  const { size } = useThree();
  const viewportWidth = size.width;
  const canvasWidth = size.width / zoom;
  const mobile = size.width < 700;
  const contentMaxWidth =
    canvasWidth * (mobile ? 0.7 : 0.5);
  const sectionWidth =
    canvasWidth * ((pageCount - 1) / (count - 1));
  const offsetFactor = (offset + 0.5) / count;

  return {
    zoom,
    offset,
    viewportWidth,
    contentMaxWidth,
    sectionWidth,
    offsetFactor,
  };
};
