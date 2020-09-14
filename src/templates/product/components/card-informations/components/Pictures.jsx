import React from 'react';
import PropTypes from 'prop-types';
import Magnifier from 'react-magnifier';

const Pictures = ({ images }) => (
  <div className="grid grid-cols-1 gap-5">
    {images.map((image) => (
      <Magnifier key={image.id} src={image.url} alt={image.alt} mgShape="square" />
    ))}
  </div>
);

Pictures.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Pictures;
