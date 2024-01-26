import { TUseInput, useInput } from '../hooks/useInput';
import { TBaseInputProps } from '../config/types';
import { Name } from './Name';
import { Shell, TShellProps } from './Shell';
import { TBaseChildren } from '@brysonandrew/types/dom';

type TProps<T extends HTMLElement> = TBaseInputProps &
  Pick<TShellProps<T>, 'isDisabled'> & {
    children(
      props: Pick<
        TUseInput<T>,
        'setInput' | 'input' | 'inputProps'
      >,
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
        <Name title={name} />
        {children(props)}
      </>
    </Shell>
  );
};
