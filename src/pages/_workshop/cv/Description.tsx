import { DESCRIPTION_PARAGRAPHS } from './copy';

export const Description = () => (
  <ul className='column'>
    {DESCRIPTION_PARAGRAPHS.map((paragraph) => (
      <li className='relative' key={paragraph}>
        <div className='absolute -inset-4 bg-black-1 rounded-sm' />
        <p className='relative'>{paragraph}</p>
      </li>
    ))}
  </ul>
);
