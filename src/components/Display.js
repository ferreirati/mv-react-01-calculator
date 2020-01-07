import React from 'react';
import PropTypes from 'prop-types';

const Display = ({ value }) => (<div className="display">{value}</div>);

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;