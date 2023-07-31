import styled from '@emotion/styled';
import {
  NAME_KEY,
  PROJECT_KEY,
  TSlugProps,
} from '@pages/projects/config';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { PARENT_GLOW_PROPS } from '@constants/colors';

const InternalLink = styled(motion(Link))``;

type TProps = TSlugProps;
export const Item: FC<TProps> = ({ slug }) => {
  const { pathname } = useLocation();

  const item = PROJECT_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleMouseEnter = () => {
    handleLoadMedia(slug);
  };
  return (
    <InternalLink
      onMouseEnter={handleMouseEnter}
      to={
        item.altTo
          ? item.altTo
          : `${pathname}?${PROJECT_KEY}=${slug}&${NAME_KEY}=${1}`
      }
      {...PARENT_GLOW_PROPS}
    >
      <Content {...item}>
        <Time time={item.time} />
      </Content>
    </InternalLink>
  );
};
