import React from 'react';
import PropTypes from 'prop-types';
import Magnifier from 'react-magnifier';

const Gallery = ({ images }) => (
  <div className="grid grid-cols-2 gap-4">
    {images.map((image) => (
      <Magnifier key={image.alt} src={image.src} alt={image.alt} />
    ))}
  </div>
);

Gallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default Gallery;
