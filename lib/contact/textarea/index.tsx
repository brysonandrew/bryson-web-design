import { motion } from 'framer-motion';
import { type FC } from 'react';
import { TBaseInputProps } from '../config/types';
import { Box } from '../box';
import { resolveInteractiveLabels } from '@lib/utils/attributes/resolveInteractiveLabels';
import { TTextareaMotionProps } from '@lib/types/dom';
import { Autosize } from './autosize';

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
                className='relative left-0 top-0 block m-0 input'
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
