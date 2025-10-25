import PropTypes from 'prop-types';
import React from 'react';

const Title = ({ title }) => (
  <h2 className="section-title">{title}</h2>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
