import type { FC } from 'react';
import { motion } from 'framer-motion';
import { RANGE_WIDTH } from '@pages/_dev/work/config/constants';
import {
  FiltersSlider,
  TFiltersSliderProps,
} from '@pages/_dev/work/filters/slider';
import { useHoverKeyBasic } from '@brysonandrew/hooks-dom/useHoverKeyBasic';

type TProps = TFiltersSliderProps & {
  x: string;
  prefix: string;
};
export const WorkFiltersHourly: FC<TProps> = ({
  title,
  x,
  prefix,
  ...props
}) => {
  const { isHover, handlers } = useHoverKeyBasic();
  return (
    <motion.label
      className="relative row gap-0.5 bg-black-2 pl-4 pr-5 rounded-lg py-2 sm:gap-2"
      {...handlers}
    >
      <h3 className="capitalize">{prefix}</h3>
      <motion.div
        className="relative"
        layout="size"
        initial={false}
        animate={{ width: isHover ? RANGE_WIDTH : 20 }}
      >
        <motion.div
          className="row-start absolute bottom-full left-0 gap-0.25 text-blue"
          initial={false}
          animate={{
            x: isHover ? x : 0,
            y: isHover ? 0 : '100%',
          }}
        >
          <span className="text-xs mt-0.25">$</span>
          {props.value}
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            opacity: isHover ? 1 : 0,
            transition: {
              delay: isHover ? 0.28 : 0,
              duration: isHover ? 1 : 0,
            },
          }}
        >
          <FiltersSlider
            classValue={
              isHover
                ? 'pointer-events-auto'
                : 'pointer-events-none'
            }
            {...props}
          />
        </motion.div>
      </motion.div>
    </motion.label>
  );
};
