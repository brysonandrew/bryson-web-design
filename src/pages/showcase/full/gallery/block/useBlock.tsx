import { useThree } from "@react-three/fiber";
import { useContext } from "../state/Context";

export const useBlock = () => {
  const { size } = useThree();
  const { zoom, items, parentOffset } = useContext();
  const count = items.length + 1;
  const viewportWidth = size.width;
  const canvasWidth = size.width / zoom;
  const mobile = size.width < 700;
  const contentMaxWidth =
    canvasWidth * (mobile ? 0.7 : 0.5);
  const sectionWidth =
    canvasWidth * ((items.length - 1) / (count - 1));
  const offsetFactor = (parentOffset + 1.0) / count;
  return {
    parentOffset,
    viewportWidth,
    contentMaxWidth,
    sectionWidth,
    offsetFactor,
  };
};
