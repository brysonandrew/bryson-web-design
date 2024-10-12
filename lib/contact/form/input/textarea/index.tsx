import { motion } from 'framer-motion';
import { type FC } from 'react';
import { Input } from '..';
import {
  TClassValueProps,
  TTextareaMotionProps,
} from '@brysonandrew/config-types/dom';
import { Autosize } from './autosize';
import { resolveAccessibilityTitles } from '@brysonandrew/utils-attributes/resolveAccessibilityTitles';
import { TBaseInputProps } from '@brysonandrew/contact/config/types';
import { TFormChildrenProps } from '@brysonandrew/contact/form';
import { TMotionProps } from '@brysonandrew/motion';

type TProps = TFormChildrenProps &
  TTextareaMotionProps &
  TBaseInputProps & {
    LabelBack?: FC<TMotionProps & TClassValueProps>;
  };
export const Textarea: FC<TProps> = ({
  name,
  isDisabled,
  inputHandlers,
  LabelBack: _LabelBack,
  ...props
}) => {
  const LabelBack = _LabelBack ?? motion.div;
  return (
    <Input<HTMLTextAreaElement>
      name={name}
      renderLabelBack={
        <LabelBack
          layout
          classValue="_contact_label-back"
        />
      }
    >
      {({ input, resolveRef, ...inputProps }) => (
        <Autosize textarea={input} {...inputProps}>
          {() => (
            <motion.textarea
              layout
              transition={{ duration: 0 }}
              ref={resolveRef}
              className="_contact_input-textarea"
              autoComplete="off"
              rows={1}
              name={name}
              disabled={isDisabled}
              {...resolveAccessibilityTitles(name)}
              {...inputHandlers}
              {...props}
              {...inputProps}
            />
          )}
        </Autosize>
      )}
    </Input>
  );
};
