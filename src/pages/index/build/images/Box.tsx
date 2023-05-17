import { MOTION_CONFIG } from "@constants/animation";
import { HTMLMotionProps, motion } from "framer-motion";
import { useState, type FC } from "react";

type TProps = HTMLMotionProps<"img"> & {
  index: number;
  count: number;
};
export const Box: FC<TProps> = ({
  index,
  count,
  ...props
}) => {
  const [isLoaded, setLoaded] = useState(false);
  const handleLoad = () => {
    setTimeout(() => {
      setLoaded(true);
    }, 0);
  };

  return (
    <motion.li
      className="relative"
      style={{
        flex: 1,
        zIndex: index,
        maxHeight: 100,
        x: `-${50 * index}%`,
        y:
          -Math.sin(((index + 0.5) / count) * Math.PI) * 20,
        originX: "50%",
        originY: "100%",
      }}
      whileHover={{
        y: -20,
        scale: 1.4,
      }}
    >
      <motion.img
        animate={{ y: isLoaded ? "0%" : "100%" }}
        transition={{
          ...MOTION_CONFIG,
          duration: 1,
          ease: "easeIn",
        }}
        onLoad={handleLoad}
        onLoadedData={handleLoad}
        {...props}
      />
    </motion.li>
  );
};
