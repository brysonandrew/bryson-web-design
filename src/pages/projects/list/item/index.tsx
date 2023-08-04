import styled from '@emotion/styled';
import {
  NAME_KEY,
  PROJECT_KEY,
  TSlugProps,
} from '@pages/projects/config';
import { motion } from 'framer-motion';
import { Fragment, type FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Content } from './content';
import { PROJECT_ITEMS_RECORD } from '@constants/projects';
import { Time } from './content/Time';
import { useMediaFromKey } from '@hooks/media/useMediaFromKey';
import { PARENT_GLOW_PROPS } from '@constants/colors';
import { useHoverKey } from '@hooks/useHoverKey';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { resolvePresence } from '@utils/animation';
import { Space } from '@components/spaces/Space';
import { Space2 } from '@components/spaces/Space2';
import { Gallery } from '@components/icons/Gallery';
import { OpenInNew } from '@components/icons/OpenInNew';
import { Circle } from '@components/buttons/circle';
import { Anchor } from '@components/buttons/circle/Anchor';
import { Space3 } from '@components/spaces/Space3';

const InternalLink = styled(motion(Link))``;

type TProps = TSlugProps;
export const Item: FC<TProps> = ({ slug }) => {
  const { pathname } = useLocation();
  const { isHover, ...handlers } = useHoverKey('big', slug);
  const item = PROJECT_ITEMS_RECORD[slug];
  const handleLoadMedia = useMediaFromKey();
  const handleHoverStart = () => {
    handleLoadMedia(slug);
    if (!handlers.onHoverStart) return;
    handlers.onHoverStart();
  };
  const handleOnSound = useOnSound();

  return (
    <motion.li
      layout='size'
      {...handlers}
      onClick={handleOnSound}
      onHoverStart={handleHoverStart}
      {...PARENT_GLOW_PROPS}
      transition={{ duration: 1, delay: 0 }}
    >
      <Content {...item}>
        <Time time={item.time} />
      </Content>

      {isHover && (
        <>
          <Space2 />
          <motion.div
            className='font-mono text-xl px-10 pt-8 pb-6 background-color-2'
            layout='position'
            {...resolvePresence(
              { opacity: 0 },
              {
                opacity: 1,
                transition: { duration: 1, delay: 0 },
              },
            )}
            transition={{ duration: 0 }}
          >
            {item.paragraphs && (
              <div>
                <ul>
                  {item.paragraphs.map(
                    (paragraph, index) => (
                      <li key={`index-${index}`}>
                        <p>{paragraph}</p>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            )}
            {item.tags && (
              <>
                <Space3 />
                <div className='row'>
                  <h4>Tech</h4>
                  <Space />
                  <ul className='column-end md:row w-full flex-wrap'>
                    {item.tags.map((tag, index) => {
                      return (
                        <Fragment key={`index-${index}`}>
                          {index !== 0 && (
                            <li className='px-1 py-6' />
                          )}
                          <li>
                            <code className='px-2 py-1 background-color-3 text-color-4 rounded-sm whitespace-nowrap'>
                              {tag}
                            </code>
                          </li>
                        </Fragment>
                      );
                    })}
                  </ul>
                </div>
              </>
            )}
            <Space3 />
            <div className='row-space'>
              <ul className='column-start w-full md:row'>
                <li className='row-space w-full md:w-auto md:row'>
                  <h3 className='text-color-1'>
                    Screenshots
                  </h3>
                  <Space />
                  <Circle>
                    <InternalLink
                      to={
                        item.altTo
                          ? item.altTo
                          : `${pathname}?${PROJECT_KEY}=${slug}&${NAME_KEY}=${1}`
                      }
                      className='circle-interactive cursor-zoom-in'
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
                    <Anchor
                      href={item.href}
                      target='_blank'
                    >
                      <OpenInNew />
                    </Anchor>
                  </Circle>
                </li>
              </ul>
            </div>
          </motion.div>
        </>
      )}
    </motion.li>
  );
};
