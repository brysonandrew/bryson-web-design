import { useContext } from '@state/Context';
import { Sight } from './Sight';
import { OpenInNew } from '@components/icons/OpenInNew';

export const Switch = () => {
  const { cursorKey } = useContext();
  switch (cursorKey) {
    case 'open-in-new': {
      return (
        <Sight>
          <OpenInNew classValue='text-black' />
        </Sight>
      );
    }
    case 'none': {
      return <Sight animate={{ opacity: 0 }} />;
    }
    default:
      return <Sight />;
  }
};
