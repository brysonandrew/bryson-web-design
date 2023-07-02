import styled from '@emotion/styled';
import { useOnSound } from '@hooks/sounds/useOnSound';
import {
  IMG_KEY,
  SELECTED_KEY,
  TSlugProps,
} from '@pages/showcase/config';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Content } from './content';
import { APP_ITEMS_RECORD } from '@constants/apps';
import { Time } from './content/Time';
import { useMediaFromKey } from '@pages/showcase/gallery/hooks/useMediaFromKey';
import { HOVER_TEAL_OUTER_GLOW_PROPS_SM } from '@pages/index/constants';

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
            : `${pathname}?${SELECTED_KEY}=${slug}&${IMG_KEY}=${1}`
        }
        className='shadow-teal-02-sm'
        onTap={handleOnSound}
        {...HOVER_TEAL_OUTER_GLOW_PROPS_SM}
      >
        <Content {...item}>
          <Time time={item.time} />
        </Content>
      </InternalLink> 
    </Root>
  ); 
};
