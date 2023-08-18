import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../config';
import { Name } from './name';
import { Box } from './box';
import { useInput } from './useInput';
import { resolveInteractiveLabels } from '@utils/attributes/resolveInteractiveLabels';

const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  const { ref, boxInputs, inputProps } =
    useInput<HTMLTextAreaElement>({ name });

  return (
    <Box name={name} isDisabled={disabled} {...boxInputs}>
      <div className='pt-0.75 w-full md:w-auto'>
        <Name title={name} />
      </div>
      <div className='flex grow'>
        <Input
          ref={ref}
          className='input-textarea'
          autoComplete='off'
          name={name}
          disabled={disabled}
          {...resolveInteractiveLabels(name)}
          {...inputProps}
          {...props}
        />
      </div>
    </Box>
  );
};
