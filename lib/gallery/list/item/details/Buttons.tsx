import styled from '@emotion/styled';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { P1 } from '@brysonandrew/base/components/layout/space/P1';
import { P3 } from '@brysonandrew/base/components/layout/space/P3';
import { Gallery } from '@brysonandrew/gallery/viewer/icons/Gallery';
import { Circle } from '@brysonandrew/base/components/interactive/circle';
import { Anchor } from '@brysonandrew/base/components/interactive/circle/Anchor';
import { TItem } from '@brysonandrew/gallery/config/types';
import { motion } from 'framer-motion';
import { useTo } from '@brysonandrew/gallery/viewer/hooks/nav/useTo';
import { OpenInNew } from '@components/icons/OpenInNew';

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
          <h3>Screenshots</h3>
          <P1 />
          <Circle>
            <InternalLink
              to={to}
              onClick={onClose}
              className='circle-interactive'
            >
              <Gallery />
            </InternalLink>
          </Circle>
        </li>
        <P3 element='li' />
        <li className='row-space w-full md:w-auto md:row'>
          <h3>Link</h3>
          <P1 />
          <Circle>
            <Anchor
              href={href}
              title='Open in new'
              target='_blank'
            >
              <OpenInNew />
            </Anchor>
          </Circle>
        </li>
      </ul>
    </Root>
  );
};
