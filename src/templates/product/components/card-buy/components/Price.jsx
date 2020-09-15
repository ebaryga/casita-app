import React from 'react';
import PropTypes from 'prop-types';

const Price = ({ value }) => (
  <span className="flex items-start justify-between">
    <span className="text-2xl font-semibold">
      {`${new Intl.NumberFormat('fr-FR').format(value)}`}
    </span>
    <span className="text-xs font-semibold" style={{ paddingTop: '0.45rem' }}>
      €
    </span>
  </span>
);

Price.propTypes = {
  value: PropTypes.number.isRequired,
};

export default Price;
