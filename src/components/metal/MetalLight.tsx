import styled from '@emotion/styled';
import { metalRadialLightCss } from '@css/metal';
import type { FC } from 'react';
import { motion } from 'framer-motion';
import { Metal, TRootProps } from '.';

const Root = styled(motion.div)`
  ${metalRadialLightCss}
`;

export const MetalLight: FC<TRootProps> = ({ ...props }) => (
  <Metal Root={Root} {...props} />
);
