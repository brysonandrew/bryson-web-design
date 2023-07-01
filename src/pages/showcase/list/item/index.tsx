import styled from '@emotion/styled';
import { useOnSound } from '@hooks/sounds/useOnSound';
import {
  IMG_KEY,
  SELECTED_KEY,
  TSlugProps,
} from '@pages/showcase/config';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import {
  Link as InternalLink,
  useLocation,
} from 'react-router-dom';
import { Content } from './content';
import { APP_ITEMS_RECORD } from '@constants/apps';

const Root = styled(motion.li)``;

type TProps = TSlugProps;
export const Item: FC<TProps> = ({ slug, ...props }) => {
  const { pathname } = useLocation();
  const handleOnSound = useOnSound();

  const item = APP_ITEMS_RECORD[slug];

  return (
    <Root>
      <InternalLink
        to={
          item.altTo
            ? item.altTo
            : `${pathname}?${SELECTED_KEY}=${slug}&${IMG_KEY}=${1}`
        }
        onClick={handleOnSound}
      >
        <Content {...item} />
      </InternalLink>
    </Root>
  );
};
