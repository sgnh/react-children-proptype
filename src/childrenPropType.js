import { PropTypes } from 'react';

const { oneOfType, arrayOf, node } = PropTypes;

export default oneOfType([
  arrayOf(node),
  node,
]);
