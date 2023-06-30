import { Desk } from '@components/icons/Desk';
import { GlitchPorsalin } from '@components/text/glitch-porsalin';
import { STROKE_CLASS_NAMES } from '@components/text/glitch-porsalin/config';

export const Logo = () => {
  return (
    <div className='hidden sm:flex -mt-2'>
      <GlitchPorsalin
        offset={0.6}
        tag='div'
        classValues={STROKE_CLASS_NAMES}
      >
        <Desk
          width={44}
          height={44}
          fill='none'
          strokeWidth={8}
        />
      </GlitchPorsalin>
    </div>
  );
};
