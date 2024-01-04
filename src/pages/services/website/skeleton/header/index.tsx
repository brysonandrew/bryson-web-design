import { Left } from './Left';
import { Right } from './Right';
import { Shell } from './Shell';

export const Header = () => {
  return (
    <Shell>
      <Left />
      <Right />
    </Shell>
  );
};
