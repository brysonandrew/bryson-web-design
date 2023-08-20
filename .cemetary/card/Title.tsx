import { Sub } from '@components/text/Sub';

const ICON_SIZE = {
  width: 120,
  height: 120,
};

export const Title = () => (
  <>
    <div className='flex items-center justify-center'>
      <div className='p-2' />
      <div className='flex flex-col items-center'>
        <h1 style={{ fontSize: 42, lineHeight: 1 }}>
          Andrew Bryson
        </h1>
        <Sub
          classValue='uppercase'
          style={{
            fontSize: 28,
            letterSpacing: 5,
            color: 'white',
          }}
        >
          Web Development
        </Sub>
      </div>
    </div>
  </>
);
