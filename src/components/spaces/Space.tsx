import { createElement } from 'react';

export const Space = ({ element = 'div' }) =>
  createElement(element, { className: 'p-1' });
