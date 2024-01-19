import { Button } from '../../../components/Button';
import { useProjector } from '../../context';

export const Stop = () => {
  const { connection } = useProjector();
  const isDisabled = false;

  const handleStop = () => {
    connection
      .getSenders()
      .forEach((sender) => connection.removeTrack(sender));
  };

  return (
    <Button disabled={isDisabled} onClick={handleStop}>
      Stop
    </Button>
  );
};
