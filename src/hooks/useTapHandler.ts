import { useTo } from '@brysonandrew/gallery-viewer/hooks/nav/useTo';
import { useOnSound } from '@brysonandrew/sounds/useOnSound';
import { TMediaRecord } from '@brysonandrew/media/config/types';
import { useNavigate } from 'react-router';
import { useState } from 'react';

type TConfig = {
  mediaRecord: TMediaRecord;
  projectsId?: string;
};
export const useTapHandler = ({
  mediaRecord,
  projectsId = 'projects',
}: TConfig) => {
  const [isExiting, setExiting] = useState(false);
  const navigate = useNavigate();

  const to = useTo({
    next: mediaRecord.name,
    project: mediaRecord.dir,
  });

  const handleGallery = () => {
    navigate(`${to}#${projectsId}`);
    const projectsMarker =
      document.getElementById(projectsId);
    if (projectsMarker) {
      projectsMarker.scrollIntoView({
        block: 'start',
      });
      setExiting(true);
    }
  };

  const handleOnSound = useOnSound();
  const handler = () => {
    handleGallery();
    handleOnSound();
  };

  return { isExiting, handler };
};
