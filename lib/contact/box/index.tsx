import { TUseInput, useInput } from '../useInput';
import { TBaseInputProps } from '../context/types';
import { Name } from './Name';
import { Shell, TShellProps } from './Shell';
import { TBaseChildren } from '@brysonandrew/base/types/dom';
import { motion } from 'framer-motion';

type TProps<T extends HTMLElement> = TBaseInputProps &
  Pick<TShellProps<T>, 'isDisabled'> & {
    children(
      props: Pick<TUseInput<T>, 'ref' | 'inputProps'>,
    ): TBaseChildren;
  };
export const Box = <T extends HTMLElement>({
  name,
  isDisabled,
  children,
}: TProps<T>) => {
  const { boxInputs, ...props } = useInput<T>({
    name,
  });
  return (
    <Shell<T>
      name={name}
      isDisabled={isDisabled}
      {...boxInputs}
    >
      <>
        <motion.div
          layout
          className='pt-1 w-full md:w-auto'
        >
          <Name title={name} />
        </motion.div>
        {children(props)}
      </>
    </Shell>
  );
};
