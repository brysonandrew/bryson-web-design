import { type FC } from 'react';
import { Pole } from './Pole';
import { Panel } from './Panel';
import { useNavigate } from 'react-router';

type TProps = any;
export const Sign: FC<TProps> = () => {
  const navigate = useNavigate();
  return (
    <group position-y={-20} position-z={10}>
      <Pole>
        <Panel
          positionX={-50}
          positionY={0}
          rotationY={Math.PI * 0.25}
          onPointerDown={() => navigate('/')}
        >
          Home
        </Panel>
        <Panel
          positionY={20}
          rotationY={Math.PI * 0.5}
          onPointerDown={() => navigate('/showcase')}
        >
          Showcase
        </Panel>
        <Panel
          positionY={40}
          rotationY={Math.PI * 1.5}
          onPointerDown={() => navigate('/contact')}
        >
          Contact
        </Panel>
      </Pole>
    </group>
  );
};
