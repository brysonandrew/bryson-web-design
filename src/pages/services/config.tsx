import { TProps } from './Section';
import { Website } from './website';

export const SECTIONS: TProps[] = [
  {
    title: 'Single page website',
    children: <Website />,
  },
  {
    title: 'App development, consulting and other work',
    children: (
      <p>
        This is possible on an hourly basis that varies case
        by case.
      </p>
    ),
  },
];
