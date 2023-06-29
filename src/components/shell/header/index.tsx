import { useContext } from '@state/Context';
import { Decoration } from './Decoration';
import { Root } from './Root';
import { Top } from './Top';
import { INIT_ANIMATION } from './constants';

export const Header = () => {
  const { isInit, isScrollStart } = useContext();

  return (
    <Root
      {...(isInit || isScrollStart ? INIT_ANIMATION : {})}
    >
      <Decoration />
      <Top />
    </Root>
  );
};
