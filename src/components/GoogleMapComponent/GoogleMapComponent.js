// src/components/GoogleMapComponent/GoogleMapComponent.js
import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import './GoogleMapComponent.css';

const containerStyle = {
  width: '100%',
  height: '400px'
};

const GoogleMapComponent = ({ position, name }) => {
  const [selected, setSelected] = useState(false);

  return (
    <LoadScript googleMapsApiKey={process.env.GOOGLE_MAPS_API }> {/* Replace with your API key */}
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:position[0], lng: position[1]}}
        zoom={13}
      >
        <Marker
          position={{lat:position[0], lng: position[1]}}
          onClick={() => setSelected(true)}
        />
        {selected && (
          <InfoWindow
            position={{lat:position[0], lng: position[1]}}
            onCloseClick={() => setSelected(false)}
          >
            <div>
              <h3>{name}'s Location</h3>
            </div>
          </InfoWindow>
        )}
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapComponent;
