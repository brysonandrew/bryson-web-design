import { useCv } from '@brysonandrew/cv/CvProvider';

export const Description = () => {
  const { descriptionParagraphs } = useCv();
  return (
    <ul className='column'>
      {descriptionParagraphs.map((paragraph) => (
        <li className='relative' key={paragraph}>
          <div className='absolute -inset-4 bg-black-1 rounded-md' />
          <p className='relative'>{paragraph}</p>
        </li>
      ))}
    </ul>
  );
};
