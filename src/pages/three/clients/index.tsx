import { Shell } from './Shell';

export const Clients = () => {
  return (
    <div
      className='absolute'
      style={{
        top: 'calc(250vh)',
        left: '50vw',
        transform: "translateX(-50%)"
      }}
    >
      <Shell />
    </div>
  );
};
