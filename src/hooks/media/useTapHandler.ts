import { PROJECTS_ID } from '@constants/copy';
import { useTo } from '@hooks/media/nav/useTo';
import { useOnSound } from '@hooks/sounds/useOnSound';
import { TMediaRecord } from 'ops/types/media';
import { useNavigate } from 'react-router';

type TConfig = {
  mediaRecord: TMediaRecord;
};
export const useTapHandler = ({ mediaRecord }: TConfig) => {
  const navigate = useNavigate();

  const to = useTo({
    next: mediaRecord.name,
    project: mediaRecord.dir,
  });

  const handleGallery = () => {
    navigate(`${to}#${PROJECTS_ID}`);
    const projectsMarker =
      document.getElementById(PROJECTS_ID);
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
