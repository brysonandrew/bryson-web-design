import { useTo } from '@brysonandrew/gallery/viewer/hooks/nav/useTo';
import { useOnSound } from '@brysonandrew/sounds/useOnSound';
import { TMediaRecord } from '@brysonandrew/media/picture/config/types';
import { useNavigate } from 'react-router';

type TConfig = {
  mediaRecord: TMediaRecord;
  projectsId?: string;
};
export const useTapHandler = ({
  mediaRecord,
  projectsId = 'projects',
}: TConfig) => {
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
    }
  };

  const handleOnSound = useOnSound();
  const handler = () => {
    handleGallery();
    handleOnSound();
  };

  return handler;
};
