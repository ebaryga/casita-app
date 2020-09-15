import React from 'react';
import PropTypes from 'prop-types';

import { Bonus, Gallery, Location } from './components';

const CardInformations = ({ bonuses, description, images, location }) => (
  <div className="col-span-8">
    <div>
      <Bonus bonuses={bonuses} />
    </div>
    <div className="py-8 text-justify">
      <p>{description}</p>
    </div>
    <div className="py-8 border-b">
      <Gallery images={images} />
    </div>
    <div className="py-8 border-b">
      <Location location={location} />
    </div>
  </div>
);

CardInformations.propTypes = {
  bonuses: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.oneOf(['pool', 'patio', 'view', 'environment']).isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  description: PropTypes.string.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default CardInformations;
