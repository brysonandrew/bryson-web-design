import { createElement } from 'react';

export const Space4 = ({ element = 'div' }) =>
  createElement(element, { className: 'p-4' });
