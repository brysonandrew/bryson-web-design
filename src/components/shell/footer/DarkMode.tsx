import { Circle } from '@components/buttons/Circle';
import { Dark } from '@components/icons/Dark';
import { Light } from '@components/icons/Light';
import { useContext } from '@state/Context';

export const DarkMode = () => {
  const { darkMode } = useContext();

  const handleTap = () => {
    darkMode.toggle();
  };

  return (
    <Circle aria-label='dark-mode' onTap={handleTap}>
      {darkMode.isDarkMode ? <Dark /> : <Light />}
    </Circle>
  );
};
