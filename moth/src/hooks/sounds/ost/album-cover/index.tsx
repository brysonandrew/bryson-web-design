import { TRACKS } from "@pages/ost/constants";

export const AlbumCover = () => {
  return (
    <div>
      <ul>
        {TRACKS.map((name) => {
          return <li key={name}>{name}</li>;
        })}
      </ul>
    </div>
  );
};
