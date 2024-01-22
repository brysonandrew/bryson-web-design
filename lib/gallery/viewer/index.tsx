import { Shell } from './Shell';
import { Ready } from './ready';

export const Viewer = <T extends string>() => (
  <Shell<T>>{(props) => <Ready {...props} />}</Shell>
);
export default Viewer;
