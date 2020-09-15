import React from 'react';
import PropTypes from 'prop-types';
import { Map, Marker, TileLayer } from 'react-leaflet';

const Location = ({ location }) => (
  <div>
    <h3 className="text-xl font-semibold">Localisation</h3>
    <span>{location.address}</span>
    <div className="pt-8">
      <Map center={location.coords} zoom={13} className="w-full" style={{ height: '512px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={location.coords} />
      </Map>
    </div>
  </div>
);

Location.propTypes = {
  location: PropTypes.shape({
    address: PropTypes.string.isRequired,
    coords: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  }).isRequired,
};

export default Location;
