import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../../context/types';
import { Box } from '..';
import { TTextareaMotionProps } from '@brysonandrew/base/types/dom';
import { Autosize } from './autosize';
import { resolveInteractiveLabels } from '@brysonandrew/base/utils/attributes/resolveInteractiveLabels';

type TProps = TTextareaMotionProps & TBaseInputProps;
export const Textarea: FC<TProps> = ({
  name,
  disabled,
  ...props
}) => {
  return (
    <Box<HTMLTextAreaElement>
      name={name}
      isDisabled={disabled}
    >
      {({ ref, inputProps }) => (
        <>
          <Autosize
            textarea={ref.current}
            value={inputProps.value}
          >
            {(isInit) => (
              <motion.textarea
                key={`${isInit}`}
                layout
                transition={{ duration: 0 }}
                ref={ref}
                className='input-textarea'
                autoComplete='off'
                rows={1}
                name={name}
                disabled={disabled}
                {...resolveInteractiveLabels(name)}
                {...inputProps}
                {...props}
              />
            )}
          </Autosize>
        </>
      )}
    </Box>
  );
};
