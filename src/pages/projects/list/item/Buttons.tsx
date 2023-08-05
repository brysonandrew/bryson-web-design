import styled from '@emotion/styled';
import {
  NAME_KEY,
  PROJECT_KEY,
} from '@pages/projects/config';
import { type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Space } from '@components/spaces/Space';
import { Space2 } from '@components/spaces/Space2';
import { Gallery } from '@components/icons/Gallery';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Circle } from '@components/buttons/circle';
import { Anchor } from '@components/buttons/circle/Anchor';
import { TItem } from '@t/projects';
import { motion } from 'framer-motion';
import { useTo } from '@hooks/media/nav/useTo';

const Root = styled.div``;
const InternalLink = styled(motion(Link))``;

type TProps = TItem;
export const Buttons: FC<TProps> = ({ href, slug }) => {
  const to = useTo({ project: slug, next: 1 });

  return (
    <Root className='row-space'>
      <ul className='column-start w-full md:row'>
        <li className='row-space w-full md:w-auto md:row'>
          <h3 className='text-color-1'>Screenshots</h3>
          <Space />
          <Circle>
            <InternalLink
              to={to}
              className='circle-interactive'
            >
              <Gallery />
            </InternalLink>
          </Circle>
        </li>
        <Space2 element='li' />
        <li className='row-space w-full md:w-auto md:row'>
          <h3 className='text-color-1'>Link</h3>
          <Space />
          <Circle>
            <Anchor href={href} target='_blank'>
              <OpenInNew />
            </Anchor>
          </Circle>
        </li>
      </ul>
    </Root>
  );
};
