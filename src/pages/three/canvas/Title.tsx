import { Line, Text } from '@react-three/drei';
import { type FC } from 'react';
import COLORS from '@windi/config-colors.json';

const LINE_SPAN = 140;
const LINE_SPAN_05 = LINE_SPAN * 0.5;
const LINE_Y = -2;

type TProps = { children: any };
export const Title: FC<TProps> = ({ children }) => {
  return (
    <group position={[0, 20, 0]}>
      <Text
        color={COLORS['baby-blue']}
        anchorX='center'
        anchorY='bottom'
        font={'/fonts/Didot.ttf'}
        fontSize={8}
      >
        {children.toUpperCase()}
      </Text>
      <Line
        points={[
          [-LINE_SPAN_05, LINE_Y, 0],
          [LINE_SPAN_05, LINE_Y, 0],
        ]}
        color={COLORS['white']}
        lineWidth={1}
        segments
        dashed={false}
      />
    </group>
  );
};
