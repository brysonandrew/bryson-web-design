import styled from '@emotion/styled';
import { type FC } from 'react';
import { Link } from 'react-router-dom';
import { P1 } from '@lib/components/layout/space/P1';
import { P3 } from '@lib/components/layout/space/P3';
import { Gallery } from '@pages/projects/gallery/icons/Gallery';
import { OpenInNew } from '@components/decoration/icon/links/OpenInNew';
import { Circle } from '@lib/components/interactive/circle';
import { Anchor } from '@lib/components/interactive/circle/Anchor';
import { TItem } from '@pages/projects/config/types';
import { motion } from 'framer-motion';
import { useTo } from '@pages/projects/gallery/hooks/nav/useTo';

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
          <h3 className='text-g-bb'>Screenshots</h3>
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
          <h3 className='text-g-bb'>Link</h3>
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
