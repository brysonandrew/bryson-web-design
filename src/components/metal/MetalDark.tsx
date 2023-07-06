import { metalRadialDarkCss } from '@css/metal';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import type { FC } from 'react';
import { TRootProps, Metal } from '.';

const Root = styled(motion.div)`
  ${metalRadialDarkCss}
`;

export const MetalDark: FC<TRootProps> = ({ ...props }) => (
  <Metal Root={Root} {...props} />
);
