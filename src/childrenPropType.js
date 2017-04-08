import { PropTypes } from 'prop-types';

const { oneOfType, arrayOf, node } = PropTypes;

export default oneOfType([
  arrayOf(node),
  node,
]);
