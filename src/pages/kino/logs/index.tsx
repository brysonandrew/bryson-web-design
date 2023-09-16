import { P1 } from '@components/space/P1';
import { useKino } from '../context';
import { FadeDown } from '@components/vertical-fade/FadeDown';

export const Logs = () => {
  const { logs } = useKino();
  return (
    <div className='relative h-44 overflow-auto'>
      <div className='sticky top-0 p-1'>
        <FadeDown classValue='h-full' />
        <kbd className='relative z-20'>Logs:</kbd>
      </div>
      <P1 />
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
