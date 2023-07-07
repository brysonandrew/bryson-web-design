import { createElement } from 'react';

export const Space2 = ({ element = 'div' }) =>
  createElement(element, { className: 'py-3' });
