import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from './context/types';
import { Box } from './box';
import { resolveInteractiveLabels } from '@brysonandrew/lib/utils/attributes/resolveInteractiveLabels';
import { TInputMotionProps } from '@brysonandrew/lib/types/dom';

const Input = styled(motion.input)``;

type TProps = TInputMotionProps & TBaseInputProps;
export const Text: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  return (
    <Box<HTMLInputElement>
      name={name}
      isDisabled={disabled}
    >
      {({ ref, inputProps }) => (
        <Input
          ref={ref}
          className='input'
          type='text'
          autoComplete='off'
          name={name}
          disabled={disabled}
          {...resolveInteractiveLabels(name)}
          {...inputProps}
          {...props}
        />
      )}
    </Box>
  );
};
