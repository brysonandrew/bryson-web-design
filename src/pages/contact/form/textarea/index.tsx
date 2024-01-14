import styled from '@emotion/styled';
import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../../config';
import { Name } from '../name';
import { Box } from '../box';
import { useInput } from '../useInput';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { useAutosize } from './useAutosize';
import { useViewport } from '@lib/context/viewport';

const Input = styled(motion.textarea)``;

type TProps = HTMLMotionProps<'textarea'> & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  const { ref, boxInputs, inputProps } =
    useInput<HTMLTextAreaElement>({ name });
  const { isResizing } = useViewport();

  const isInit = useAutosize({
    textarea: ref.current,
    value: inputProps.value,
    isResizing,
  });

  return (
    <Box name={name} isDisabled={disabled} {...boxInputs}>
      <div className='pt-0.75 w-full md:w-auto'>
        <Name title={name} />
      </div>
      <div className='flex grow'>
        <Input
          layout={isInit}
          ref={ref}
          className='input'
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
