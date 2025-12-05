import { useApp } from '@brysonandrew/app';
import { FC, PropsWithChildren } from 'react';

export const AboutTitle: FC<PropsWithChildren> = ({
  children,
}) => {
  const { COLOR, LIGHT } = useApp();

  return (
    <div className="relative pl-6">
      {LIGHT && (
        <>
          <LIGHT.MOTION.Marker classValue="z-50" />
        </>
      )}
      <h3
        className="relative title-section text-2xl lg:text-3xl"
        style={{ color: COLOR.accent }}
      >
        {children}{' '}
      </h3>
    </div>
  );
};
