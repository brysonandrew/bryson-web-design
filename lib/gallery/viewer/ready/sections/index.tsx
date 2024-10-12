import { useState, type FC } from 'react';
import { motion, useTransform } from 'framer-motion';
import { TBaseProps } from '@brysonandrew/gallery';
import { Control } from './Control';
import {
  useHover,
  NONE_CURSOR_KEY,
} from '@brysonandrew/motion-cursor';
import { useViewport } from '@brysonandrew/viewport';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { PRESENCE_OPACITY_UP_Y } from '@brysonandrew/motion-config-constants';

type TProps = TBaseProps;
export const Sections: FC<TProps> = (props) => {
  const vp = useViewport();
  const viewportWidth = vp.isDimensions ? vp.width : 0;
  const { count, width, mediaRecords } = props;
  const [container, setContainer] =
    useState<HTMLElement | null>(null);
  const { isHover, handlers } =
    useHover(NONE_CURSOR_KEY);
  const left = useTransform(
    props.motionX,
    (v) =>
      v * count * (viewportWidth / width) +
      viewportWidth * 0.5 * (count - 1)
  );

  return (
    <div className="h-full grow">
      <motion.ul
        className="flex relative h-full w-0"
        style={{ left, width: viewportWidth * count }}
        ref={(instance) => {
          if (instance && !container) {
            setContainer(instance);
          }
        }}
        {...PRESENCE_OPACITY_UP_Y}
        {...handlers}
      >
        {mediaRecords.map(
          (mediaRecord: TMediaRecord, index: number) => (
            <li
              key={mediaRecord.src}
              className="relative flex justify-center"
              style={{ width: viewportWidth }}
            >
              {container && (
                <Control
                  key={mediaRecord.src}
                  index={index}
                  container={container}
                  viewportWidth={viewportWidth}
                  mediaRecord={mediaRecord}
                  isHover={isHover}
                  {...props}
                />
              )}
            </li>
          )
        )}
      </motion.ul>
    </div>
  );
};
