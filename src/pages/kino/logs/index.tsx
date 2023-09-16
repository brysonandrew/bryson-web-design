import { P1 } from '@components/space/P1';
import { useProjector } from '../context/projector';
import { FadeDown } from '@components/vertical-fade/FadeDown';
import { Subtitle } from '../components/Subtitle';

export const Logs = () => {
  const { logs } = useProjector();
  return (
    <div className='relative h-44 overflow-auto'>
      <div className='sticky top-0 p-1'>
        <FadeDown classValue='h-full' />
        <Subtitle classValue='relative z-20'>Logs</Subtitle>
        <P1 />
      </div>
      <ul>
        {logs.map(([id, text]) => (
          <li key={id}>
            <samp>{text}</samp>
          </li>
        ))}
      </ul>
    </div>
  );
};
