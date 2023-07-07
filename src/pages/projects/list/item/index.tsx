import styled from '@emotion/styled';
import { useOnSound } from '@hooks/sounds/useOnSound';
import {
  NAME_KEY,
  SOURCE_KEY,
  TSlugProps,
} from '@pages/projects/config';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Content } from './content';
import { APP_ITEMS_RECORD } from '@constants/apps';
import { Time } from './content/Time';
import { useMediaFromKey } from '@pages/projects/gallery/hooks/useMediaFromKey';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { Box } from '@components/glow/Box';

const Root = styled(motion.li)``;
const InternalLink = styled(motion(Link))``;

type TProps = TSlugProps;
export const Item: FC<TProps> = ({ slug }) => {
  const { pathname } = useLocation();
  const handleOnSound = useOnSound();

  const item = APP_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleMouseEnter = () => {
    handleLoadMedia(slug);
  };
  return (
    <Root onMouseEnter={handleMouseEnter}>
      <InternalLink
        to={
          item.altTo
            ? item.altTo
            : `${pathname}?${SOURCE_KEY}=${slug}&${NAME_KEY}=${1}`
        }
        onTap={handleOnSound}
        {...PARENT_GLOW_PROPS}
      >
        <Content {...item}>
          <Time time={item.time} />
        </Content>
      </InternalLink>
    </Root>
  );
};
