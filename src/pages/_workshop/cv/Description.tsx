import { DESCRIPTION_PARAGRAPHS } from '@app/copy';

export const Description = () => {
  return (
    <ul className='column'>
      {DESCRIPTION_PARAGRAPHS.map((paragraph) => (
        <li className='relative' key={paragraph}>
          <div className='absolute -inset-4 bg-black-1 rounded-md' />
          <p className='relative'>{paragraph}</p>
        </li>
      ))}
    </ul>
  );
};
