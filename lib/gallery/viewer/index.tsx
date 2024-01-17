import { Shell } from './Shell';
import { Ready } from './Ready';

export const Viewer = <T extends string>() => (
  <Shell<T>>{(props) => <Ready {...props} />}</Shell>
);
export default Viewer;
