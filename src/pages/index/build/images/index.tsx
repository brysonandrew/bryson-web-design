import { motion } from "framer-motion";
import { type FC } from "react";
import type { TChildrenProps } from "../Motion";
import { useImages } from "./useImages";
import { Box } from "./Box";
import clsx from "clsx";

const GRID = "grid grid-cols-3 gap-1";
const ROW = "flex";

type TProps = Partial<TChildrenProps>;
export const Images: FC<TProps> = () => {
  const images = useImages();
  console.log("🚀 ~ file: index.tsx:14 ~ images:", images);
  console.log(
    "🚀 ~ file: index.tsx:14 ~ x:",
    images.map((v) => v.default),
  );

  return (
    <motion.ul
      className={clsx(
        ROW,
        "absolute left-0 bottom-0 w-full",
      )}
      style={{ width: "200%" }}
    >
      {images.map((image, index, { length }) => (
        <Box
          key={`${image.default}-${index}`}
          src={image.default}
          index={index}
          count={length}
        />
      ))}
    </motion.ul>
  );
};
