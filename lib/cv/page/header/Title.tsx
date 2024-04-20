import { Sub } from '@brysonandrew/layout-typography/Sub';
import { useCv } from '@brysonandrew/cv/CvProvider';

export const Title = () => {
  const { name, jobTitle } = useCv();

  return (
    <div className="column-start whitespace-nowrap text-white-5">
      <h2 style={{ fontSize: 42, lineHeight: 1 }}>
        {name}
      </h2>
      <Sub
        className="whitespace-nowrap"
        style={{
          fontSize: 21,
          textTransform: 'uppercase',
          letterSpacing: 0.25,
        }}
      >
        {jobTitle}
      </Sub>
    </div>
  );
};
