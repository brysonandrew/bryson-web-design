import { Shell } from './Shell';
import {Ready} from './Ready';

export const Gallery = () => (
  <Shell>{(props) => <Ready {...props} />}</Shell>
);
export default Gallery;
