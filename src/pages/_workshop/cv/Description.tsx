import { useApp } from '@brysonandrew/lib/context/app/useApp';
import { DESCRIPTION_PARAGRAPHS } from './copy';

export const Description = () => {
  const { BORDER_RADIUS } = useApp();
  return (
    <ul className='column'>
      {DESCRIPTION_PARAGRAPHS.map((paragraph) => (
        <li className='relative' key={paragraph}>
          <div
            className='absolute -inset-4 bg-black-1'
            style={{ borderRadius: BORDER_RADIUS.SM }}
          />
          <p className='relative'>{paragraph}</p>
        </li>
      ))}
    </ul>
  );
};
