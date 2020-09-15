import React from 'react';
import PropTypes from 'prop-types';

const Banner = ({ banner }) => (
  <div style={{ height: 'calc(100vh - 16rem)' }}>
    <img
      className="object-cover w-full h-full max-h-full rounded-lg"
      src={banner.src}
      alt={banner.alt}
    />
  </div>
);

Banner.propTypes = {
  banner: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};

export default Banner;
