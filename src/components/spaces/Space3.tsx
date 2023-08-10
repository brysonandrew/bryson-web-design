import { createElement } from 'react';

export const Space3 = ({ element = 'div' }) =>
  createElement(element, { className: 'p-3' });
