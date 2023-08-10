import styled from '@emotion/styled';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { Space } from '@components/spaces/Space';
import { Space3 } from '@components/spaces/Space3';
import { Gallery } from '@components/icons/Gallery';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Circle } from '@components/buttons/circle';
import { Anchor } from '@components/buttons/circle/Anchor';
import { TItem } from '@t/projects';
import { motion } from 'framer-motion';
import { useTo } from '@hooks/media/nav/useTo';

const Root = styled.div``;
const InternalLink = styled(motion(Link))``;

type TProps = TItem & {
  onClose?(): void;
};
export const Buttons: FC<TProps> = ({
  href,
  slug,
  onClose,
}) => {
  const to = useTo({ project: slug, next: 1 });

  return (
    <Root className='row-space'>
      <ul className='column-start w-full md:row'>
        <li className='row-space w-full md:w-auto md:row'>
          <h3 className='text-color-1'>Screenshots</h3>
          <Space />
          <Circle classValue='relative'>
            <InternalLink
              to={to}
              onClick={onClose}
              className='circle-interactive'
            >
              <Gallery />
            </InternalLink>
          </Circle>
        </li>
        <Space3 element='li' />
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
